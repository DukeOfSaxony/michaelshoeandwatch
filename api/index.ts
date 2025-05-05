// Vercel Serverless Function
import express, { Request, Response } from 'express';
import { MailService } from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';

// Set up Express
const app = express();
app.use(express.json());

// Initialize SendGrid
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

// Set up health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is working on Vercel' });
});

// Contact form endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: 'Email service not configured' 
      });
    }

    // Format email content
    const text = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}
Message: ${message}
    `.trim();

    const html = `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `.trim();

    // Send email
    const mailData: MailDataRequired = {
      to: 'jdavydov@gmail.com',
      from: 'website@michaelsshoecraft.com', // Must be verified in SendGrid
      subject: `Website Inquiry from ${name}`,
      text,
      html,
    };
    
    await mailService.send(mailData);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

export default app;