import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, company, projectType, customService, referenceLinks, needs } = req.body;

  if (!name || !email || !needs || !projectType) {
    return res.status(400).json({ error: 'Missing required fields: name, email, projectType, and needs are required.' });
  }

  try {
    const finalProjectType = projectType === 'Other' && customService ? `Other: ${customService}` : projectType;

    const data = await resend.emails.send({
      from: 'Freelance Inquiry <onboarding@resend.dev>', // Resend verified domain or default sandbox address
      to: 'ambanikeval2@gmail.com',
      subject: `💼 Freelance Enquiry: ${finalProjectType} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">New Freelance Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px 0; background-color: #fef08a; padding: 4px 8px; display: inline-block; font-weight: bold; border: 1px solid #111;">${finalProjectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">References:</td>
              <td style="padding: 8px 0;">${referenceLinks ? `<a href="${referenceLinks}" target="_blank">${referenceLinks}</a>` : 'N/A'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fafafa; border-left: 4px solid #d97757;">
            <h4 style="margin-top: 0; color: #111;">Project Needs / Description:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${needs}</p>
          </div>
          
          <footer style="margin-top: 30px; font-size: 11px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted from Portfolio Freelance Inquiry form.
          </footer>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
