// This file adapts our Express app to work with Vercel serverless functions
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Request, Response, NextFunction } from 'express';
import app from './index';

// Create an Express-compatible request object with necessary properties and methods
const createExpressRequest = (req: VercelRequest): Request => {
  // Cast to any first to allow property assignment
  const expressReq = {
    ...req,
    path: req.url,
    query: req.query,
    params: {},
    body: req.body,
    headers: req.headers,
    method: req.method,
    cookies: req.cookies,
    // Add required Express.Request methods
    get: function(name: string) {
      return this.headers[name.toLowerCase()];
    },
    header: function(name: string) {
      return this.get(name);
    },
    accepts: function() {
      return true; // Simplified implementation
    },
    is: function() {
      return false; // Simplified implementation
    },
    // Other required methods with simplified implementations
    acceptsCharsets: () => true,
    acceptsEncodings: () => true,
    acceptsLanguages: () => true,
    range: () => undefined,
    param: () => undefined,
    fresh: false,
    stale: true,
    secure: false,
    xhr: false,
    protocol: 'http',
    ip: '127.0.0.1',
    ips: [],
    subdomains: [],
    hostname: 'localhost',
    host: 'localhost',
    originalUrl: req.url || '/',
    baseUrl: '',
    url: req.url || '/',
    app: {} as any,
    res: {} as any,
    next: (() => {}) as NextFunction,
  } as unknown as Request;
  
  return expressReq;
};

// Create an Express-compatible response object
const createExpressResponse = (res: VercelResponse): Response => {
  // Cast to any first to allow property assignment
  const expressRes = {
    ...res,
    status: (code: number) => {
      res.status(code);
      return expressRes;
    },
    json: (data: any) => {
      res.json(data);
      return expressRes;
    },
    send: (data: any) => {
      res.send(data);
      return expressRes;
    },
    end: (data?: any) => {
      res.end(data);
      return expressRes;
    },
    // Other required Express.Response methods
    sendStatus: (code: number) => {
      res.status(code).send();
      return expressRes;
    },
    req: {} as Request,
    app: {} as any,
    headersSent: false,
    locals: {},
    append: () => expressRes,
    attachment: () => expressRes,
    cookie: () => expressRes,
    clearCookie: () => expressRes,
    download: () => expressRes,
    format: () => expressRes,
    get: () => '',
    links: () => expressRes,
    location: () => expressRes,
    redirect: () => expressRes,
    render: () => expressRes,
    set: () => expressRes,
    type: () => expressRes,
    vary: () => expressRes,
  } as unknown as Response;
  
  return expressRes;
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