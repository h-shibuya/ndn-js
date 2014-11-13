/*
 * Copyright (C) 2014 Regents of the University of California.
 * @author: Zhehao Wang
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

var DEFAULT_RSA_PUBLIC_KEY_DER = new Buffer([
    0x30, 0x82, 0x01, 0x22, 0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01,
    0x01, 0x05, 0x00, 0x03, 0x82, 0x01, 0x0f, 0x00, 0x30, 0x82, 0x01, 0x0a, 0x02, 0x82, 0x01, 0x01,
    0x00, 0xb8, 0x09, 0xa7, 0x59, 0x82, 0x84, 0xec, 0x4f, 0x06, 0xfa, 0x1c, 0xb2, 0xe1, 0x38, 0x93,
    0x53, 0xbb, 0x7d, 0xd4, 0xac, 0x88, 0x1a, 0xf8, 0x25, 0x11, 0xe4, 0xfa, 0x1d, 0x61, 0x24, 0x5b,
    0x82, 0xca, 0xcd, 0x72, 0xce, 0xdb, 0x66, 0xb5, 0x8d, 0x54, 0xbd, 0xfb, 0x23, 0xfd, 0xe8, 0x8e,
    0xaf, 0xa7, 0xb3, 0x79, 0xbe, 0x94, 0xb5, 0xb7, 0xba, 0x17, 0xb6, 0x05, 0xae, 0xce, 0x43, 0xbe,
    0x3b, 0xce, 0x6e, 0xea, 0x07, 0xdb, 0xbf, 0x0a, 0x7e, 0xeb, 0xbc, 0xc9, 0x7b, 0x62, 0x3c, 0xf5,
    0xe1, 0xce, 0xe1, 0xd9, 0x8d, 0x9c, 0xfe, 0x1f, 0xc7, 0xf8, 0xfb, 0x59, 0xc0, 0x94, 0x0b, 0x2c,
    0xd9, 0x7d, 0xbc, 0x96, 0xeb, 0xb8, 0x79, 0x22, 0x8a, 0x2e, 0xa0, 0x12, 0x1d, 0x42, 0x07, 0xb6,
    0x5d, 0xdb, 0xe1, 0xf6, 0xb1, 0x5d, 0x7b, 0x1f, 0x54, 0x52, 0x1c, 0xa3, 0x11, 0x9b, 0xf9, 0xeb,
    0xbe, 0xb3, 0x95, 0xca, 0xa5, 0x87, 0x3f, 0x31, 0x18, 0x1a, 0xc9, 0x99, 0x01, 0xec, 0xaa, 0x90,
    0xfd, 0x8a, 0x36, 0x35, 0x5e, 0x12, 0x81, 0xbe, 0x84, 0x88, 0xa1, 0x0d, 0x19, 0x2a, 0x4a, 0x66,
    0xc1, 0x59, 0x3c, 0x41, 0x83, 0x3d, 0x3d, 0xb8, 0xd4, 0xab, 0x34, 0x90, 0x06, 0x3e, 0x1a, 0x61,
    0x74, 0xbe, 0x04, 0xf5, 0x7a, 0x69, 0x1b, 0x9d, 0x56, 0xfc, 0x83, 0xb7, 0x60, 0xc1, 0x5e, 0x9d,
    0x85, 0x34, 0xfd, 0x02, 0x1a, 0xba, 0x2c, 0x09, 0x72, 0xa7, 0x4a, 0x5e, 0x18, 0xbf, 0xc0, 0x58,
    0xa7, 0x49, 0x34, 0x46, 0x61, 0x59, 0x0e, 0xe2, 0x6e, 0x9e, 0xd2, 0xdb, 0xfd, 0x72, 0x2f, 0x3c,
    0x47, 0xcc, 0x5f, 0x99, 0x62, 0xee, 0x0d, 0xf3, 0x1f, 0x30, 0x25, 0x20, 0x92, 0x15, 0x4b, 0x04,
    0xfe, 0x15, 0x19, 0x1d, 0xdc, 0x7e, 0x5c, 0x10, 0x21, 0x52, 0x21, 0x91, 0x54, 0x60, 0x8b, 0x92,
    0x41, 0x02, 0x03, 0x01, 0x00, 0x01
]);

var DEFAULT_RSA_PRIVATE_KEY_DER = new Buffer([
    0x30, 0x82, 0x04, 0xa5, 0x02, 0x01, 0x00, 0x02, 0x82, 0x01, 0x01, 0x00, 0xb8, 0x09, 0xa7, 0x59,
    0x82, 0x84, 0xec, 0x4f, 0x06, 0xfa, 0x1c, 0xb2, 0xe1, 0x38, 0x93, 0x53, 0xbb, 0x7d, 0xd4, 0xac,
    0x88, 0x1a, 0xf8, 0x25, 0x11, 0xe4, 0xfa, 0x1d, 0x61, 0x24, 0x5b, 0x82, 0xca, 0xcd, 0x72, 0xce,
    0xdb, 0x66, 0xb5, 0x8d, 0x54, 0xbd, 0xfb, 0x23, 0xfd, 0xe8, 0x8e, 0xaf, 0xa7, 0xb3, 0x79, 0xbe,
    0x94, 0xb5, 0xb7, 0xba, 0x17, 0xb6, 0x05, 0xae, 0xce, 0x43, 0xbe, 0x3b, 0xce, 0x6e, 0xea, 0x07,
    0xdb, 0xbf, 0x0a, 0x7e, 0xeb, 0xbc, 0xc9, 0x7b, 0x62, 0x3c, 0xf5, 0xe1, 0xce, 0xe1, 0xd9, 0x8d,
    0x9c, 0xfe, 0x1f, 0xc7, 0xf8, 0xfb, 0x59, 0xc0, 0x94, 0x0b, 0x2c, 0xd9, 0x7d, 0xbc, 0x96, 0xeb,
    0xb8, 0x79, 0x22, 0x8a, 0x2e, 0xa0, 0x12, 0x1d, 0x42, 0x07, 0xb6, 0x5d, 0xdb, 0xe1, 0xf6, 0xb1,
    0x5d, 0x7b, 0x1f, 0x54, 0x52, 0x1c, 0xa3, 0x11, 0x9b, 0xf9, 0xeb, 0xbe, 0xb3, 0x95, 0xca, 0xa5,
    0x87, 0x3f, 0x31, 0x18, 0x1a, 0xc9, 0x99, 0x01, 0xec, 0xaa, 0x90, 0xfd, 0x8a, 0x36, 0x35, 0x5e,
    0x12, 0x81, 0xbe, 0x84, 0x88, 0xa1, 0x0d, 0x19, 0x2a, 0x4a, 0x66, 0xc1, 0x59, 0x3c, 0x41, 0x83,
    0x3d, 0x3d, 0xb8, 0xd4, 0xab, 0x34, 0x90, 0x06, 0x3e, 0x1a, 0x61, 0x74, 0xbe, 0x04, 0xf5, 0x7a,
    0x69, 0x1b, 0x9d, 0x56, 0xfc, 0x83, 0xb7, 0x60, 0xc1, 0x5e, 0x9d, 0x85, 0x34, 0xfd, 0x02, 0x1a,
    0xba, 0x2c, 0x09, 0x72, 0xa7, 0x4a, 0x5e, 0x18, 0xbf, 0xc0, 0x58, 0xa7, 0x49, 0x34, 0x46, 0x61,
    0x59, 0x0e, 0xe2, 0x6e, 0x9e, 0xd2, 0xdb, 0xfd, 0x72, 0x2f, 0x3c, 0x47, 0xcc, 0x5f, 0x99, 0x62,
    0xee, 0x0d, 0xf3, 0x1f, 0x30, 0x25, 0x20, 0x92, 0x15, 0x4b, 0x04, 0xfe, 0x15, 0x19, 0x1d, 0xdc,
    0x7e, 0x5c, 0x10, 0x21, 0x52, 0x21, 0x91, 0x54, 0x60, 0x8b, 0x92, 0x41, 0x02, 0x03, 0x01, 0x00,
    0x01, 0x02, 0x82, 0x01, 0x01, 0x00, 0x8a, 0x05, 0xfb, 0x73, 0x7f, 0x16, 0xaf, 0x9f, 0xa9, 0x4c,
    0xe5, 0x3f, 0x26, 0xf8, 0x66, 0x4d, 0xd2, 0xfc, 0xd1, 0x06, 0xc0, 0x60, 0xf1, 0x9f, 0xe3, 0xa6,
    0xc6, 0x0a, 0x48, 0xb3, 0x9a, 0xca, 0x21, 0xcd, 0x29, 0x80, 0x88, 0x3d, 0xa4, 0x85, 0xa5, 0x7b,
    0x82, 0x21, 0x81, 0x28, 0xeb, 0xf2, 0x43, 0x24, 0xb0, 0x76, 0xc5, 0x52, 0xef, 0xc2, 0xea, 0x4b,
    0x82, 0x41, 0x92, 0xc2, 0x6d, 0xa6, 0xae, 0xf0, 0xb2, 0x26, 0x48, 0xa1, 0x23, 0x7f, 0x02, 0xcf,
    0xa8, 0x90, 0x17, 0xa2, 0x3e, 0x8a, 0x26, 0xbd, 0x6d, 0x8a, 0xee, 0xa6, 0x0c, 0x31, 0xce, 0xc2,
    0xbb, 0x92, 0x59, 0xb5, 0x73, 0xe2, 0x7d, 0x91, 0x75, 0xe2, 0xbd, 0x8c, 0x63, 0xe2, 0x1c, 0x8b,
    0xc2, 0x6a, 0x1c, 0xfe, 0x69, 0xc0, 0x44, 0xcb, 0x58, 0x57, 0xb7, 0x13, 0x42, 0xf0, 0xdb, 0x50,
    0x4c, 0xe0, 0x45, 0x09, 0x8f, 0xca, 0x45, 0x8a, 0x06, 0xfe, 0x98, 0xd1, 0x22, 0xf5, 0x5a, 0x9a,
    0xdf, 0x89, 0x17, 0xca, 0x20, 0xcc, 0x12, 0xa9, 0x09, 0x3d, 0xd5, 0xf7, 0xe3, 0xeb, 0x08, 0x4a,
    0xc4, 0x12, 0xc0, 0xb9, 0x47, 0x6c, 0x79, 0x50, 0x66, 0xa3, 0xf8, 0xaf, 0x2c, 0xfa, 0xb4, 0x6b,
    0xec, 0x03, 0xad, 0xcb, 0xda, 0x24, 0x0c, 0x52, 0x07, 0x87, 0x88, 0xc0, 0x21, 0xf3, 0x02, 0xe8,
    0x24, 0x44, 0x0f, 0xcd, 0xa0, 0xad, 0x2f, 0x1b, 0x79, 0xab, 0x6b, 0x49, 0x4a, 0xe6, 0x3b, 0xd0,
    0xad, 0xc3, 0x48, 0xb9, 0xf7, 0xf1, 0x34, 0x09, 0xeb, 0x7a, 0xc0, 0xd5, 0x0d, 0x39, 0xd8, 0x45,
    0xce, 0x36, 0x7a, 0xd8, 0xde, 0x3c, 0xb0, 0x21, 0x96, 0x97, 0x8a, 0xff, 0x8b, 0x23, 0x60, 0x4f,
    0xf0, 0x3d, 0xd7, 0x8f, 0xf3, 0x2c, 0xcb, 0x1d, 0x48, 0x3f, 0x86, 0xc4, 0xa9, 0x00, 0xf2, 0x23,
    0x2d, 0x72, 0x4d, 0x66, 0xa5, 0x01, 0x02, 0x81, 0x81, 0x00, 0xdc, 0x4f, 0x99, 0x44, 0x0d, 0x7f,
    0x59, 0x46, 0x1e, 0x8f, 0xe7, 0x2d, 0x8d, 0xdd, 0x54, 0xc0, 0xf7, 0xfa, 0x46, 0x0d, 0x9d, 0x35,
    0x03, 0xf1, 0x7c, 0x12, 0xf3, 0x5a, 0x9d, 0x83, 0xcf, 0xdd, 0x37, 0x21, 0x7c, 0xb7, 0xee, 0xc3,
    0x39, 0xd2, 0x75, 0x8f, 0xb2, 0x2d, 0x6f, 0xec, 0xc6, 0x03, 0x55, 0xd7, 0x00, 0x67, 0xd3, 0x9b,
    0xa2, 0x68, 0x50, 0x6f, 0x9e, 0x28, 0xa4, 0x76, 0x39, 0x2b, 0xb2, 0x65, 0xcc, 0x72, 0x82, 0x93,
    0xa0, 0xcf, 0x10, 0x05, 0x6a, 0x75, 0xca, 0x85, 0x35, 0x99, 0xb0, 0xa6, 0xc6, 0xef, 0x4c, 0x4d,
    0x99, 0x7d, 0x2c, 0x38, 0x01, 0x21, 0xb5, 0x31, 0xac, 0x80, 0x54, 0xc4, 0x18, 0x4b, 0xfd, 0xef,
    0xb3, 0x30, 0x22, 0x51, 0x5a, 0xea, 0x7d, 0x9b, 0xb2, 0x9d, 0xcb, 0xba, 0x3f, 0xc0, 0x1a, 0x6b,
    0xcd, 0xb0, 0xe6, 0x2f, 0x04, 0x33, 0xd7, 0x3a, 0x49, 0x71, 0x02, 0x81, 0x81, 0x00, 0xd5, 0xd9,
    0xc9, 0x70, 0x1a, 0x13, 0xb3, 0x39, 0x24, 0x02, 0xee, 0xb0, 0xbb, 0x84, 0x17, 0x12, 0xc6, 0xbd,
    0x65, 0x73, 0xe9, 0x34, 0x5d, 0x43, 0xff, 0xdc, 0xf8, 0x55, 0xaf, 0x2a, 0xb9, 0xe1, 0xfa, 0x71,
    0x65, 0x4e, 0x50, 0x0f, 0xa4, 0x3b, 0xe5, 0x68, 0xf2, 0x49, 0x71, 0xaf, 0x15, 0x88, 0xd7, 0xaf,
    0xc4, 0x9d, 0x94, 0x84, 0x6b, 0x5b, 0x10, 0xd5, 0xc0, 0xaa, 0x0c, 0x13, 0x62, 0x99, 0xc0, 0x8b,
    0xfc, 0x90, 0x0f, 0x87, 0x40, 0x4d, 0x58, 0x88, 0xbd, 0xe2, 0xba, 0x3e, 0x7e, 0x2d, 0xd7, 0x69,
    0xa9, 0x3c, 0x09, 0x64, 0x31, 0xb6, 0xcc, 0x4d, 0x1f, 0x23, 0xb6, 0x9e, 0x65, 0xd6, 0x81, 0xdc,
    0x85, 0xcc, 0x1e, 0xf1, 0x0b, 0x84, 0x38, 0xab, 0x93, 0x5f, 0x9f, 0x92, 0x4e, 0x93, 0x46, 0x95,
    0x6b, 0x3e, 0xb6, 0xc3, 0x1b, 0xd7, 0x69, 0xa1, 0x0a, 0x97, 0x37, 0x78, 0xed, 0xd1, 0x02, 0x81,
    0x80, 0x33, 0x18, 0xc3, 0x13, 0x65, 0x8e, 0x03, 0xc6, 0x9f, 0x90, 0x00, 0xae, 0x30, 0x19, 0x05,
    0x6f, 0x3c, 0x14, 0x6f, 0xea, 0xf8, 0x6b, 0x33, 0x5e, 0xee, 0xc7, 0xf6, 0x69, 0x2d, 0xdf, 0x44,
    0x76, 0xaa, 0x32, 0xba, 0x1a, 0x6e, 0xe6, 0x18, 0xa3, 0x17, 0x61, 0x1c, 0x92, 0x2d, 0x43, 0x5d,
    0x29, 0xa8, 0xdf, 0x14, 0xd8, 0xff, 0xdb, 0x38, 0xef, 0xb8, 0xb8, 0x2a, 0x96, 0x82, 0x8e, 0x68,
    0xf4, 0x19, 0x8c, 0x42, 0xbe, 0xcc, 0x4a, 0x31, 0x21, 0xd5, 0x35, 0x6c, 0x5b, 0xa5, 0x7c, 0xff,
    0xd1, 0x85, 0x87, 0x28, 0xdc, 0x97, 0x75, 0xe8, 0x03, 0x80, 0x1d, 0xfd, 0x25, 0x34, 0x41, 0x31,
    0x21, 0x12, 0x87, 0xe8, 0x9a, 0xb7, 0x6a, 0xc0, 0xc4, 0x89, 0x31, 0x15, 0x45, 0x0d, 0x9c, 0xee,
    0xf0, 0x6a, 0x2f, 0xe8, 0x59, 0x45, 0xc7, 0x7b, 0x0d, 0x6c, 0x55, 0xbb, 0x43, 0xca, 0xc7, 0x5a,
    0x01, 0x02, 0x81, 0x81, 0x00, 0xab, 0xf4, 0xd5, 0xcf, 0x78, 0x88, 0x82, 0xc2, 0xdd, 0xbc, 0x25,
    0xe6, 0xa2, 0xc1, 0xd2, 0x33, 0xdc, 0xef, 0x0a, 0x97, 0x2b, 0xdc, 0x59, 0x6a, 0x86, 0x61, 0x4e,
    0xa6, 0xc7, 0x95, 0x99, 0xa6, 0xa6, 0x55, 0x6c, 0x5a, 0x8e, 0x72, 0x25, 0x63, 0xac, 0x52, 0xb9,
    0x10, 0x69, 0x83, 0x99, 0xd3, 0x51, 0x6c, 0x1a, 0xb3, 0x83, 0x6a, 0xff, 0x50, 0x58, 0xb7, 0x28,
    0x97, 0x13, 0xe2, 0xba, 0x94, 0x5b, 0x89, 0xb4, 0xea, 0xba, 0x31, 0xcd, 0x78, 0xe4, 0x4a, 0x00,
    0x36, 0x42, 0x00, 0x62, 0x41, 0xc6, 0x47, 0x46, 0x37, 0xea, 0x6d, 0x50, 0xb4, 0x66, 0x8f, 0x55,
    0x0c, 0xc8, 0x99, 0x91, 0xd5, 0xec, 0xd2, 0x40, 0x1c, 0x24, 0x7d, 0x3a, 0xff, 0x74, 0xfa, 0x32,
    0x24, 0xe0, 0x11, 0x2b, 0x71, 0xad, 0x7e, 0x14, 0xa0, 0x77, 0x21, 0x68, 0x4f, 0xcc, 0xb6, 0x1b,
    0xe8, 0x00, 0x49, 0x13, 0x21, 0x02, 0x81, 0x81, 0x00, 0xb6, 0x18, 0x73, 0x59, 0x2c, 0x4f, 0x92,
    0xac, 0xa2, 0x2e, 0x5f, 0xb6, 0xbe, 0x78, 0x5d, 0x47, 0x71, 0x04, 0x92, 0xf0, 0xd7, 0xe8, 0xc5,
    0x7a, 0x84, 0x6b, 0xb8, 0xb4, 0x30, 0x1f, 0xd8, 0x0d, 0x58, 0xd0, 0x64, 0x80, 0xa7, 0x21, 0x1a,
    0x48, 0x00, 0x37, 0xd6, 0x19, 0x71, 0xbb, 0x91, 0x20, 0x9d, 0xe2, 0xc3, 0xec, 0xdb, 0x36, 0x1c,
    0xca, 0x48, 0x7d, 0x03, 0x32, 0x74, 0x1e, 0x65, 0x73, 0x02, 0x90, 0x73, 0xd8, 0x3f, 0xb5, 0x52,
    0x35, 0x79, 0x1c, 0xee, 0x93, 0xa3, 0x32, 0x8b, 0xed, 0x89, 0x98, 0xf1, 0x0c, 0xd8, 0x12, 0xf2,
    0x89, 0x7f, 0x32, 0x23, 0xec, 0x67, 0x66, 0x52, 0x83, 0x89, 0x99, 0x5e, 0x42, 0x2b, 0x42, 0x4b,
    0x84, 0x50, 0x1b, 0x3e, 0x47, 0x6d, 0x74, 0xfb, 0xd1, 0xa6, 0x10, 0x20, 0x6c, 0x6e, 0xbe, 0x44,
    0x3f, 0xb9, 0xfe, 0xbc, 0x8d, 0xda, 0xcb, 0xea, 0x8f
]);

var Face = require('../..').Face;
var Name = require('../..').Name;
var Blob = require('../..').Blob;
var Interest = require('../..').Interest;
var Data = require('../..').Data;
var SignedInfo = require('../..').SignedInfo;

var MemoryIdentityStorage = require('../..').MemoryIdentityStorage;
var MemoryPrivateKeyStorage = require('../..').MemoryPrivateKeyStorage;
var KeyChain = require('../..').KeyChain;
var IdentityManager = require('../..').IdentityManager;
var SelfVerifyPolicyManager = require('../..').SelfVerifyPolicyManager;
var KeyType = require('../..').KeyType;
var ChronoSync2013 = require('../..').ChronoSync2013;
var UnixTransport = require('../..').UnixTransport;

var ChronoChat = function(screenName, chatRoom, hubPrefix, face, keyChain, certificateName)
{
  this.screen_name = screenName;
  this.chatroom = chatRoom;
  this.maxmsgcachelength = 100;
  this.isRecoverySyncState = true;
  this.sync_lifetime = 5000.0;
  this.face = face;
  this.keyChain = keyChain;
  this.certificateName = certificateName;
  
  this.chat_prefix = (new Name(hubPrefix)).append(this.chatroom).append(this.getRandomString());
  
  this.roster = [];
  this.msgcache = [];
  
  //console.log("The local chat prefix " + this.chat_prefix.toUri() + " ***");
  
  var session = (new Date()).getTime();
  session = parseInt(session/1000);
  
  this.usrname = this.screen_name + session;
  this.ChatMessage = require('./test-chrono-chat-protobuf.js').ChatMessage;

  if (this.screen_name == "" || this.chatroom == "") {
    console.log("input usrname and chatroom");
  }
  else {
    console.log(this.screen_name + ", welcome to chatroom " + this.chatroom + "!");
    this.sync = new ChronoSync2013(this.sendInterest.bind(this), this.initial.bind(this), this.chat_prefix, (new Name("/ndn/broadcast/ChronoChat-0.3")).append(this.chatroom), session, face, keyChain, certificateName, this.sync_lifetime, this.onRegisterFailed.bind(this));
    face.registerPrefix(this.chat_prefix, this.onInterest.bind(this), this.onRegisterFailed.bind(this));
  }
};

/**
 * Send the data packet which contains the user's message
 * @param {Name} Interest name prefix
 * @param {Interest} The interest
 * @param {Transport} The transport
 * @param {uint64_t} registerPrefixId 
 */
ChronoChat.prototype.onInterest = function(prefix, interest, transport, registerPrefixId)
{
  var content = {};
  
  // chat_prefix should really be saved as a name, not a URI string.
  var chatPrefixSize = new Name(this.chat_prefix).size();
  var seq = parseInt(interest.getName().get(chatPrefixSize + 1).toEscapedString());
  for (var i = this.msgcache.length - 1 ; i >= 0; i--) {
    if (this.msgcache[i].seqno == seq) {
      if(this.msgcache[i].msgtype != 'CHAT')
        content = new this.ChatMessage({from:this.screen_name, to:this.chatroom, type:this.msgcache[i].msgtype, timestamp:parseInt(this.msgcache[i].time/1000)});
      else
        content = new this.ChatMessage({from:this.screen_name, to:this.chatroom, type:this.msgcache[i].msgtype, data:this.msgcache[i].msg, timestamp:parseInt(this.msgcache[i].time/1000)});
      break;
    }
  }
  
  if (content.from != null) {
    var str = new Uint8Array(content.toArrayBuffer());
    var co = new Data(interest.getName());
    co.setContent(str);
    this.keyChain.sign(co, this.certificateName);
    try {
      transport.send(co.wireEncode().buf());
    } 
    catch (e) {
      console.log(e.toString());
    }
  }
};

ChronoChat.prototype.onRegisterFailed = function()
{

};

ChronoChat.prototype.initial = function()
{
  var timeout = new Interest(new Name("/timeout"));
  timeout.setInterestLifetimeMilliseconds(60000);
  
  this.face.expressInterest(timeout, this.dummyOnData, this.heartbeat.bind(this));
  
  if (this.roster.indexOf(this.usrname) == -1) {
    this.roster.push(this.usrname);
    //console.log("*** Local member " + this.usrname + " joins. ***");
    this.messageCacheAppend('JOIN', 'xxx');
  }
};

/**
 * This onData is passed as onData for timeout interest in initial, which means it
 * should not be called under any circumstances.
 */
ChronoChat.prototype.dummyOnData = function(interest, co)
{
  console.log("*** dummyOndata called, name: " + interest.getName().toUri() + " ***");
};

/**
 * Send a Chat interest to fetch chat messages after the user gets the Sync data packet
 * @param {SyncStates[]} The array of sync states
 * @param {bool} if it's in recovery state
 */
ChronoChat.prototype.sendInterest = function(syncStates, isRecovery)
{
  this.isRecoverySyncState = isRecovery;
  
  var sendlist = [];
  var sessionlist = [];
  var seqlist = [];
  
  for (var j = 0; j < syncStates.length; j++) {
	var name_component = syncStates[j].getDataPrefix().split('/');
	var name_t = name_component[name_component.length - 1];
	var session = syncStates[j].getSessionNo();
	
	// Note: application data prefix gets stored in digest tree, 
	// it does not make sense to compare it against screen_name.
	// Potentially same problem in ndn-cpp's test.
	if (this.chat_prefix.toUri() != syncStates[j].getDataPrefix()) {
	  var index_n = sendlist.indexOf(syncStates[j].getDataPrefix());
	  
	  if(index_n != -1) {
		// With current code, this branch will not get executed.
		console.log("*********** Prove me wrong ***********");
		sessionlist[index_n] = session;
		seqlist[index_n] = syncStates[j].getSequenceNo();
	  }
	  else {
		var index_n = this.sync.digest_tree.find(syncStates[j].getDataPrefix(), session);
		var startSeq = 0;
		var stopSeq = syncStates[j].getSequenceNo(); 
		
		if (index_n != -1) {
		  startSeq = this.sync.digest_tree.digestnode[index_n].getSequenceNo() + 1;
		}
		
		for (var k = startSeq; k < stopSeq + 1; k ++) {
			sendlist.push(syncStates[j].getDataPrefix());
			sessionlist.push(session);
			seqlist.push(k);
		}
	  }
	}
  }
  
  for (var i = 0; i < sendlist.length; i++) {
    var n = new Name(sendlist[i]+'/'+sessionlist[i]+'/'+seqlist[i]);
    var interest = new Interest(n);
    interest.setInterestLifetimeMilliseconds(this.sync_lifetime);
    
    this.face.expressInterest(interest, this.onData.bind(this), this.chatTimeout.bind(this));
  }
};

/**
 * Process the incoming data
 * @param {Interest} interest
 * @param {Data} co
 */
ChronoChat.prototype.onData = function(interest, co)
{
  var arr = new Uint8Array(co.getContent().size());
  arr.set(co.getContent().buf());
  var content = this.ChatMessage.decode(arr.buffer);
  
  var temp = (new Date()).getTime();
  if (temp - content.timestamp * 1000 < 120000) {
    var t = (new Date(content.timestamp * 1000)).toLocaleTimeString();
    var name = content.from;
    
    // chat_prefix should be saved as a name, not a URI string.
    var prefix = co.getName().getPrefix(-2).toUri();
    
    var session = parseInt((co.getName().get(-2)).toEscapedString());
    var seqno = parseInt((co.getName().get(-1)).toEscapedString());
    var l = 0;
    
    //update roster
    while (l < this.roster.length) {
      var name_t = this.roster[l].substring(0,this.roster[l].length-10);
      var session_t = this.roster[l].substring(this.roster[l].length-10,this.roster[l].length);
      if (name != name_t && content.type != 2)
        l++;
      else{
        if(name == name_t && session > session_t){
          this.roster[l] = name + session;
        }
        break;
      }
    }
    
    if(l == this.roster.length) {
      this.roster.push(name + session);
      console.log("JOIN: " + name + session);
    }
    var timeout = new Interest(new Name("/timeout"));
    timeout.setInterestLifetimeMilliseconds(120000);
    this.face.expressInterest(timeout, this.dummyOnData, this.alive.bind(this, timeout, seqno, name, session, prefix));
    
    //if (content.type == 0 && this.isRecoverySyncState == false && content.from != this.screen_name){
      // Note: the original logic does not display old data; 
      // But what if an ordinary application data interest gets answered after entering recovery state?
    if (content.type == 0 && content.from != this.screen_name){
      console.log(content.from + ": " + content.data);
    }
    else if (content.type == 2) {
      //leave message
      var n = this.roster.indexOf(name + session);
      if(n != -1 && name != this.screen_name) {
        this.roster.splice(n,1);
        for(var i = 0; i<this.roster.length; i++) {
          var name_t = this.roster[i].substring(0,this.roster[i].length - 10);
        }
        
        var d = new Date(content.timestamp * 1000);
        var t = d.toLocaleTimeString();
      }
    }
  }
};

/**
 * No chat data coming back.
 * @param {Interest}
 */
ChronoChat.prototype.chatTimeout = function(interest)
{

};

/**
 *
 * @param {Interest}
 */
ChronoChat.prototype.heartbeat = function(interest)
{
  // Based on ndn-cpp library approach
  if (this.msgcache.length == 0) {
    // Is it possible that this gets executed?
    this.messageCacheAppend("JOIN", "xxx");
  }
  this.sync.publishNextSequenceNo();
  this.messageCacheAppend("HELLO", "xxx");
  
  // Making a timeout interest for heartbeat...
  var timeout = new Interest(new Name("/timeout"));
  timeout.setInterestLifetimeMilliseconds(60000);
  
  //console.log("*** Chat heartbeat expressed interest with name: " + timeout.getName().toUri() + " ***");
  this.face.expressInterest(timeout, this.dummyOnData, this.heartbeat.bind(this));
};

/**
 * This is called after a timeout to check if the user with prefix has a newer sequence
 * number than the given temp_seq. If not, assume the user is idle and remove from the
 * roster and print a leave message.
 * This method has an interest argument because we use it as the onTimeout for
 * Face.expressInterest.
 * @param {Interest}
 * @param {int}
 * @param {string}
 * @param {int}
 * @param {string}
 */
ChronoChat.prototype.alive = function(interest, temp_seq, name, session, prefix)
{
  //console.log("check alive");
  var index_n = this.sync.digest_tree.find(prefix, session);
  var n = this.roster.indexOf(name + session);
  
  if (index_n != -1 && n != -1) {
    var seq = this.sync.digest_tree.digestnode[index_n].seqno.seq;
    if (temp_seq == seq) {
      this.roster.splice(n,1);
      console.log(name+" leave");
      var d = new Date();
      var t = d.toLocaleTimeString();
      // records the time of leaving
    }
  }
};

/**
 * @param {string}
 */
ChronoChat.prototype.sendMessage = function(chatmsg)
{
  if (this.msgcache.length == 0)
    this.messageCacheAppend("JOIN", "xxx");
  if (chatmsg != "") {
    this.sync.publishNextSequenceNo();
    this.messageCacheAppend("CHAT", chatmsg);
    // Display chat message
  }
}

/**
 * Append a new CachedMessage to msgcache, using given messageType and message, 
 * the sequence number from this.sync.getSequenceNo() and the current time.
 * Also remove elements from the front of the cache as needed to keep the size to
 * this.maxmsgcachelength.
 */
ChronoChat.prototype.messageCacheAppend = function(messageType, message)
{
  var d = new Date();
  var t = d.getTime();
  
  this.msgcache.push(new ChronoChat.CachedMessage(this.sync.usrseq, messageType, message, t));
  while (this.msgcache.length > this.maxmsgcachelength) {
    this.msgcache.shift();
  }
};

ChronoChat.prototype.onRegisterFailed = function()
{

};

ChronoChat.prototype.getRandomString = function()
{
  var seed = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
  var result = '';
  for (var i = 0; i < 10; i++) {
    var pos = Math.floor(Math.random() * seed.length);
    result += seed[pos];
  }
  return result;
};

// Embedded class CachedMessage; defining class with its constructor
ChronoChat.CachedMessage = function (seqno, msgtype, msg, time)
{
  this.seqno = seqno;
  this.msgtype = msgtype;
  this.msg = msg;
  this.time = time;
};

ChronoChat.CachedMessage.prototype.getSequenceNo = function()
{
  return this.seqno;
};

ChronoChat.CachedMessage.prototype.getMessageType = function()
{
  return this.msgtype;
};

ChronoChat.CachedMessage.prototype.getMessage = function()
{
  return this.msg;
};

/**
 * @return MillisecondsSince1970
 */
ChronoChat.CachedMessage.prototype.getTime = function()
{
  return this.time;
};

function getRandomNameString()
{
  var seed = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  var result = '';
  for (var i = 0; i < 3; i++) {
    var pos = Math.floor(Math.random() * seed.length);
    result += seed[pos];
  }
  return result;
};

// initiateChat() also sends random chat messages so that we don't need input from node JS
function initiateChat()
{
  var hostName = "localhost";
  var hubPrefix = "ndn/edu/ucla/remap";
  var screenName = getRandomNameString();
  
  // chatroom is the name inputted by the user
  var chatroom = "ndnchat";
  
  var face = new Face(new UnixTransport());
  
  var identityStorage = new MemoryIdentityStorage();
  var privateKeyStorage = new MemoryPrivateKeyStorage();
  var keyChain = new KeyChain(new IdentityManager(identityStorage, privateKeyStorage),
                              new SelfVerifyPolicyManager(identityStorage));

  var keyName = new Name("/testname/DSK-123");
  var certificateName = keyName.getSubName(0, keyName.size() - 1).append
    ("KEY").append(keyName.get(-1)).append("ID-CERT").append("0");
  identityStorage.addKey(keyName, KeyType.RSA, new Blob(DEFAULT_RSA_PUBLIC_KEY_DER, false));
  privateKeyStorage.setKeyPairForKeyName(keyName, KeyType.RSA, DEFAULT_RSA_PUBLIC_KEY_DER, DEFAULT_RSA_PRIVATE_KEY_DER);
  
  face.setCommandSigningInfo(keyChain, certificateName);

  var chronoChat = new ChronoChat(screenName, chatroom, hubPrefix, face, keyChain, certificateName);
  
  // Send random test chat message at a fixed interval
  var num = 0;
  setInterval(
    function(){
      var chatMsg = screenName + num;
      chronoChat.sendMessage(chatMsg);
      console.log(screenName + ": " + chatMsg);
      num ++;
    }, 2000);
}

initiateChat();

