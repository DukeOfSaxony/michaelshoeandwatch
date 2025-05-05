// This file adapts our Express app to work with Vercel serverless functions
import { VercelRequest, VercelResponse } from '@vercel/node';
import app from './index';

// Mock Express request and response objects
const createExpressRequest = (req: VercelRequest) => {
  return {
    ...req,
    path: req.url,
    query: req.query,
    params: {},
    body: req.body,
    headers: req.headers,
    method: req.method,
  };
};

const createExpressResponse = (res: VercelResponse) => {
  return {
    ...res,
    status: (code: number) => {
      res.status(code);
      return res;
    },
    json: (data: any) => {
      res.json(data);
      return res;
    },
    send: (data: any) => {
      res.send(data);
      return res;
    },
  };
};

// Handle Vercel serverless function
export default async function (req: VercelRequest, res: VercelResponse) {
  // Create Express-compatible request and response
  const expressReq = createExpressRequest(req);
  const expressRes = createExpressResponse(res);
  
  // Process with our Express app
  return new Promise((resolve, reject) => {
    app(expressReq, expressRes, (err: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(expressRes);
    });
  });
}