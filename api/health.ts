// Simple health check endpoint for Vercel
import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * API Health Check
 * This helps verify that the Vercel serverless functions are working
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const apiInfo = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    path: req.url,
    sendgridConfigured: !!process.env.SENDGRID_API_KEY,
  };

  res.status(200).json(apiInfo);
}