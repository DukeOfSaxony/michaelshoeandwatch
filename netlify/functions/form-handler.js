const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Parse the form submission
  let payload;
  try {
    if (event.body) {
      payload = JSON.parse(event.body);
    } else {
      return { statusCode: 400, body: 'Missing form data' };
    }
  } catch (error) {
    console.error('Error parsing form data:', error);
    return { statusCode: 400, body: 'Invalid form data' };
  }

  // Check for required fields
  if (!payload.name || !payload.email || !payload.message) {
    return { 
      statusCode: 400, 
      body: JSON.stringify({ message: 'Name, email, and message are required' }) 
    };
  }

  // Set SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    // Email to the site owner
    const emailToOwner = {
      to: 'jdavydov@gmail.com', // Replace with your email
      from: 'website@michaelsshoecraft.com', // Must be a verified sender in SendGrid
      subject: `Website Inquiry from ${payload.name}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || 'Not provided'}
Service: ${payload.service || 'Not specified'}
Message: ${payload.message}
      `.trim(),
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${payload.name}</p>
<p><strong>Email:</strong> ${payload.email}</p>
<p><strong>Phone:</strong> ${payload.phone || 'Not provided'}</p>
<p><strong>Service Requested:</strong> ${payload.service || 'Not specified'}</p>
<p><strong>Message:</strong></p>
<p>${payload.message.replace(/\n/g, '<br>')}</p>
      `.trim()
    };

    // Confirmation email to the user
    const confirmationEmail = {
      to: payload.email,
      from: 'website@michaelsshoecraft.com', // Must be a verified sender in SendGrid
      subject: 'Thank you for contacting Michael\'s Shoe Repair',
      text: `
Dear ${payload.name},

Thank you for reaching out to Michael's Shoe Repair. We have received your message and will get back to you as soon as possible.

Here's a summary of your inquiry:
- Name: ${payload.name}
- Email: ${payload.email}
- Phone: ${payload.phone || 'Not provided'}
- Service Requested: ${payload.service || 'Not specified'}
- Message: ${payload.message}

Our business hours are:
Monday - Friday: 9am - 7pm
Saturday: 10am - 5pm
Sunday: Closed

If you have any urgent questions, please call us at (718) 243-0288.

Regards,
Michael's Shoe Repair
319 Smith Street
Carroll Gardens, Brooklyn
NY 11231
      `.trim(),
      html: `
<h3>Thank you for contacting Michael's Shoe Repair</h3>
<p>Dear ${payload.name},</p>
<p>Thank you for reaching out to Michael's Shoe Repair. We have received your message and will get back to you as soon as possible.</p>
<p><strong>Here's a summary of your inquiry:</strong></p>
<ul>
  <li><strong>Name:</strong> ${payload.name}</li>
  <li><strong>Email:</strong> ${payload.email}</li>
  <li><strong>Phone:</strong> ${payload.phone || 'Not provided'}</li>
  <li><strong>Service Requested:</strong> ${payload.service || 'Not specified'}</li>
  <li><strong>Message:</strong> ${payload.message.replace(/\n/g, '<br>')}</li>
</ul>
<p><strong>Our business hours are:</strong></p>
<p>
  Monday - Friday: 9am - 7pm<br>
  Saturday: 10am - 5pm<br>
  Sunday: Closed
</p>
<p>If you have any urgent questions, please call us at <a href="tel:+17182430288">(718) 243-0288</a>.</p>
<p>
  Regards,<br>
  <strong>Michael's Shoe Repair</strong><br>
  319 Smith Street<br>
  Carroll Gardens, Brooklyn<br>
  NY 11231
</p>
      `.trim()
    };

    // Send both emails
    await sgMail.send(emailToOwner);
    await sgMail.send(confirmationEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' })
    };
  }
};