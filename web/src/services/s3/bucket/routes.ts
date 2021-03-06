/*
* CORTX-CSM: CORTX Management web and CLI interface.
* Copyright (c) 2020 Seagate Technology LLC and/or its Affiliates
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published
* by the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
* For any questions about this software or licensing,
* please email opensource@seagate.com or cortx-questions@seagate.com.
*/
import { Request, Response, request, response } from "express";
import { getBuckets, createBucket, deleteBucket, updateBuketPolicy, getBucketsPolicy,deleteBucketPolicy } from "./bucket";
import { checkRequiredParams } from './../../../middleware/validator';
import HttpStatus from 'http-status-codes';

/**
 * It has all the REST APIs to get, save, update the System Configuration related details. 
 */

export default [
  {
    path: "/api/v1/s3/bucket",
    method: "get",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        try {
          const result = await getBuckets(req, res);
          res.status(res.statusCode).send(result);
        } catch (err) {
          throw err;
        }
      }
    ]
  },
  {
    path: "/api/v1/s3/bucket",
    method: "post",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        try {
          const result = await createBucket(req, res);
          res.status(res.statusCode).send(result);
        } catch (err) {
          throw err;
        }
      }
    ]
  },
  {
    path: "/api/v1/s3/bucket/:bucket_name",
    method: "delete",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        const result = await deleteBucket(req, res);
        res.status(res.statusCode).send(result);
      }
    ]
  },
  {
    path: "/api/v1/s3/bucket_policy/:bucket_name",
    method: "put",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        try {
          const result = await updateBuketPolicy(req, res);
          res.status(res.statusCode).send(result);
        } catch (err) {
          throw err;
        }
      }
    ]
  },
   {
    path: "/api/v1/s3/bucket_policy/:bucket_name",
    method: "delete",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        const result = await deleteBucketPolicy(req, res);
        res.status(res.statusCode).send(result);
      }
    ]
  },
  {
    path: "/api/v1/s3/bucket_policy/:bucket_name",
    method: "get",
    handler: [
      checkRequiredParams,
      async (req: Request, res: Response) => {
        try {
          const result = await getBucketsPolicy(req, res);
          res.status(res.statusCode).send(result);
        } catch (err) {
          throw err;
        }
      }
    ]
  },
];