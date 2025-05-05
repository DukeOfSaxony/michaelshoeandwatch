// Simple health check API endpoint

export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
    sendgridConfigured: !!process.env.SENDGRID_API_KEY
  });
}