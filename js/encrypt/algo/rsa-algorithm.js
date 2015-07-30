/**
 * Copyright (C) 2015 Regents of the University of California.
 * @author: Jeff Thompson <jefft0@remap.ucla.edu>
 * @author: From ndn-group-encrypt src/algo/rsa https://github.com/named-data/ndn-group-encrypt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * A copy of the GNU Lesser General Public License is in the file COPYING.
 */

// (This is ported from ndn::gep::algo::Rsa, and named RsaAlgorithm because
// "Rsa" is very short and not all the Common Client Libraries have namespaces.)

var constants = require('constants');
var Crypto = require('../../crypto.js');
var Blob = require('../../util/blob.js').Blob;
var DecryptKey = require('../decrypt-key.js').DecryptKey;
var EncryptKey = require('../encrypt-key.js').EncryptKey;
var PaddingScheme = require('./encrypt-params.js').PaddingScheme;
var DerNode = require('../../encoding/der/der-node.js').DerNode;
var OID = require('../../encoding/oid.js').OID;

/**
 * The RsaAlgorithm class provides static methods to manipulate keys, encrypt
 * and decrypt using RSA.
 * @note This class is an experimental feature. The API may change.
 */
var RsaAlgorithm = function RsaAlgorithm()
{
};

exports.RsaAlgorithm = RsaAlgorithm;

/**
 * Generate a new random decrypt key for RSA based on the given params.
 * @param {RsaKeyParams} params The key params with the key size (in bits).
 * @return {DecryptKey} The new decrypt key (PKCS8-encoded private key).
 */
RsaAlgorithm.generateKey = function(params)
{
  // TODO: Implement.
  throw new Error("RsaAlgorithm.generateKey is not implemented");
};

/**
 * Derive a new encrypt key from the given decrypt key value.
 * @param {Blob} keyBits The key value of the decrypt key (PKCS8-encoded private
 * key).
 * @return {EncryptKey} The new encrypt key (DER-encoded public key).
 */
RsaAlgorithm.deriveEncryptKey = function(keyBits)
{
  var rsaPrivateKeyDer = RsaAlgorithm.getRsaPrivateKeyDer(keyBits);

  // Decode the PKCS #1 RSAPrivateKey.
  parsedNode = DerNode.parse(rsaPrivateKeyDer.buf(), 0);
  var rsaPrivateKeyChildren = parsedNode.getChildren();
  var modulus = rsaPrivateKeyChildren[1];
  var publicExponent = rsaPrivateKeyChildren[2];

  // Encode the PKCS #1 RSAPublicKey.
  var rsaPublicKey = new DerNode.DerSequence();
  rsaPublicKey.addChild(modulus);
  rsaPublicKey.addChild(publicExponent);
  var rsaPublicKeyDer = rsaPublicKey.encode();

  // Encode the SubjectPublicKeyInfo.
  var algorithmIdentifier = new DerNode.DerSequence();
  algorithmIdentifier.addChild(new DerNode.DerOid(new OID
    (RsaAlgorithm.RSA_ENCRYPTION_OID)));
  algorithmIdentifier.addChild(new DerNode.DerNull());
  var publicKey = new DerNode.DerSequence();
  publicKey.addChild(algorithmIdentifier);
  publicKey.addChild(new DerNode.DerBitString(rsaPublicKeyDer.buf(), 0));

  return new EncryptKey(publicKey.encode());
};

/**
 * Decrypt the encryptedData using the keyBits according the encrypt params.
 * @param keyBits {Blob} The key value (PKCS8-encoded private key).
 * @param encryptedData {Blob} The data to decrypt.
 * @param params {EncryptParams} This decrypts according to
 * params.getPaddingScheme().
 * @param {function} onComplete (optional) This calls onComplete(plainData) with
 * the decrypted Blob. If omitted, the return value is the decrypted Blob. (Some
 * crypto libraries only use a callback, so onComplete is required to use these.)
 * @return {Blob} If onComplete is omitted, return the decrypted data. Otherwise,
 * return null and use onComplete as described above.
 */
RsaAlgorithm.decrypt = function(keyBits, encryptedData, params, onComplete)
{
  // keyBits is PKCS #8 but we need the inner RSAPrivateKey.
  var rsaPrivateKeyDer = RsaAlgorithm.getRsaPrivateKeyDer(keyBits);

  // Encode the key DER as a PEM private key as needed by Crypto.
  var keyBase64 = rsaPrivateKeyDer.buf().toString('base64');
  var keyPem = "-----BEGIN RSA PRIVATE KEY-----\n";
  for (var i = 0; i < keyBase64.length; i += 64)
    keyPem += (keyBase64.substr(i, 64) + "\n");
  keyPem += "-----END RSA PRIVATE KEY-----";

  var padding;
  if (params.getPaddingScheme() == PaddingScheme.PKCS1v15)
    padding = constants.RSA_PKCS1_PADDING;
  else if (params.getPaddingScheme() == PaddingScheme.OAEP_SHA)
    padding = constants.RSA_PKCS1_OAEP_PADDING;
  else
    throw new Error("unsupported padding scheme");

  // In Node.js, privateDecrypt requires version v0.12.
  var result = new Blob
    (Crypto.privateDecrypt({ key: keyPem, padding: padding }, encryptedData.buf()),
     false);

  if (onComplete) {
    onComplete(result);
    return null;
  }
  else
    return result;
};

/**
 * Encrypt the plainData using the keyBits according the encrypt params.
 * @param keyBits {Blob} The key value (DER-encoded public key).
 * @param plainData {Blob} The data to encrypt.
 * @param params {EncryptParams} This encrypts according to
 * params.getPaddingScheme().
 * @param {function} onComplete (optional) This calls onComplete(encryptedData)
 * with the encrypted Blob. If omitted, the return value is the encrypted Blob.
 * (Some crypto libraries only use a callback, so onComplete is required to use
 * these.)
 * @return {Blob} If onComplete is omitted, return the encrypted data. Otherwise,
 * return null and use onComplete as described above.
 */
RsaAlgorithm.encrypt = function(keyBits, plainData, params, onComplete)
{
  // Encode the key DER as a PEM public key as needed by Crypto.
  var keyBase64 = keyBits.buf().toString('base64');
  var keyPem = "-----BEGIN PUBLIC KEY-----\n";
  for (var i = 0; i < keyBase64.length; i += 64)
    keyPem += (keyBase64.substr(i, 64) + "\n");
  keyPem += "-----END PUBLIC KEY-----";

  var padding;
  if (params.getPaddingScheme() == PaddingScheme.PKCS1v15)
    padding = constants.RSA_PKCS1_PADDING;
  else if (params.getPaddingScheme() == PaddingScheme.OAEP_SHA)
    padding = constants.RSA_PKCS1_OAEP_PADDING;
  else
    throw new Error("unsupported padding scheme");

  // In Node.js, publicEncrypt requires version v0.12.
  var result = new Blob
    (Crypto.publicEncrypt({ key: keyPem, padding: padding }, plainData.buf()),
     false);

  if (onComplete) {
    onComplete(result);
    return null;
  }
  else
    return result;
};

/**
 * Decode the PKCS #8 private key, check that the algorithm is RSA, and return
 * the inner RSAPrivateKey DER.
 * @param {Blob} The DER-encoded PKCS #8 private key.
 * @param {Blob} The DER-encoded RSAPrivateKey.
 */
RsaAlgorithm.getRsaPrivateKeyDer = function(pkcs8PrivateKeyDer)
{
  var parsedNode = DerNode.parse(pkcs8PrivateKeyDer.buf(), 0);
  var pkcs8Children = parsedNode.getChildren();
  var algorithmIdChildren = DerNode.getSequence(pkcs8Children, 1).getChildren();
  var oidString = algorithmIdChildren[0].toVal();

  if (oidString != RsaAlgorithm.RSA_ENCRYPTION_OID)
    throw new Error("The PKCS #8 private key is not RSA_ENCRYPTION");

  return pkcs8Children[2].getPayload();
};

RsaAlgorithm.RSA_ENCRYPTION_OID = "1.2.840.113549.1.1.1";