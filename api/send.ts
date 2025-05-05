// Vercel Serverless Function for handling contact form submissions
import { MailService } from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize SendGrid with API key
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

/**
 * Vercel API handler for the contact form
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, email, phone, service, message } = req.body as ContactFormData;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Check if email service is configured
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
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: typeof error === 'object' && error !== null && 'message' in error
        ? String(error.message)
        : 'Failed to send email'
    });
  }
}