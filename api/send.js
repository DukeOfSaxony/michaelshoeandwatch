import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try {
      await sgMail.send({
        to: 'jdavydov@gmail.com',
        from: 'jdavydov@gmail.com',
        subject: `New message from ${name}`,
        text: message,
        replyTo: email,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Email failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}