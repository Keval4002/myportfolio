import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'local-api',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const { name, email, company, projectType, customService, referenceLinks, needs } = data;

                  const resend = new Resend(env.RESEND_API_KEY);
                  const finalProjectType = projectType === 'Other' && customService ? `Other: ${customService}` : projectType;

                  await resend.emails.send({
                    from: 'Freelance Inquiry <onboarding@resend.dev>',
                    to: 'ambanikeval2@gmail.com',
                    subject: `💼 Freelance Enquiry: ${finalProjectType} from ${name}`,
                    replyTo: email,
                    html: `
                      <h3>New Freelance Inquiry (Local Dev)</h3>
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Company:</strong> ${company || 'N/A'}</p>
                      <p><strong>Project Type:</strong> ${finalProjectType}</p>
                      <p><strong>References:</strong> ${referenceLinks || 'N/A'}</p>
                      <p><strong>Needs:</strong> ${needs}</p>
                    `
                  });

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true }));
                } catch (error) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: error.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    server: { port: 3000 },
  }
})
