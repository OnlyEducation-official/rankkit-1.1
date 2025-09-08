/* eslint-disable import/no-extraneous-dependencies */
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import logo from '@/assets/images/logo2.png';

// Create a Resend instance with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// The POST function to handle the incoming POST request
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  try {
    // Extract form data from the request body
    const { name, email, phone, orgname, services, hearAboutUs, message } = await req.json();

    // Construct the email content dynamically
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Thanks for contacting Rankkit Media</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;">
  <!-- Preheader (hidden) -->
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;">
    We’ve received your request. Our team will reply within 24 hours with a tailored plan, timelines, and pricing.
  </div>

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 12px;">
    <tr>
      <td align="center">

        <!-- Container -->
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:640px;max-width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:16px 24px;background:rgba(202, 202, 202, 1);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <!-- LOGO: replace src with your hosted logo URL -->
                      <a href="https://rankkit.in/">
                        <img src="https://api.rankkit.in/uploads/logo2_6a3d7b5234.png"
                         width="140" height="40" alt="Rankkit Media"
                         style="display:block;border:0;outline:none;text-decoration:none;height:40px;width:auto;max-width:160px;">
                      </a>
                    
                  </td>
                  <td align="right" style="font-family:Arial,Helvetica,sans-serif;color:rgba(0, 0, 0, 1);font-size:12px;line-height:1.4;">
                    Digital Marketing • Performance • Creative
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:28px 28px 12px 28px;">
              <h1 style="margin:0 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:#0f172a;">
                Thanks, ${name}! 👋
              </h1>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#334155;">
                We’ve received your request for
                <b style="color:rgb(2, 18, 102);">${orgname}</b>. Our strategy team will get back to you within
                <b>24 hours</b> with a tailored plan, timelines, and transparent pricing.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:#eef2f7;line-height:1px;font-size:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details Panel -->
          <!-- Details Panel -->
<tr>
  <td style="padding:16px 28px 8px 28px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #ececec;border-radius:10px;">
      <tr>
        <td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;font-size:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:6px 0;"><b>Organization:</b> <span style="color:#334155;">${orgname}</span></td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><b>Phone:</b> <span style="color:#334155;">${phone}</span></td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><b>Email:</b> <span style="color:#334155;">${email}</span></td>
            </tr>
            <tr>
              <td style="padding:6px 0; vertical-align:top;">
                <b>Services Interested:</b><br/>
                <!-- Services pills -->
                ${services
                  .map(
                    (s: string) => `
                  <span style="
                    display:inline-block;
                    margin:4px 6px 0 0;
                    padding:4px 10px;
                    background:#e6ecff;
                    border-radius:16px;
                    font-size:12px;
                    color:rgb(2,18,102);
                    font-family:Arial,Helvetica,sans-serif;
                  ">
                    ${s.trim()}
                  </span>
                `,
                  )
                  .join('')}
              </td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><b>Message:</b> <span style="color:#334155;">${message}</span></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Small helper text -->
    <p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#64748b;">
      You’ll receive a confirmation and next steps shortly. If anything looks off, just reply to this email.
    </p>
  </td>
</tr>


          <!-- Highlights -->
          <tr>
            <td style="padding:8px 20px 0 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Card 1 -->
                  <td width="33.33%" style="padding:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0f2f5;border-radius:10px;">
                      <tr>
                        <td style="padding:14px 12px;font-family:Arial,Helvetica,sans-serif;">
                          <div style="font-size:20px;line-height:1;">🚀</div>
                          <div style="margin-top:8px;font-size:13px;line-height:1.5;color:#0f172a;"><b>Performance First</b></div>
                          <div style="margin-top:4px;font-size:12px;line-height:1.6;color:#475569;">
                            Conversion-focused creatives & media buying for measurable growth.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Card 2 -->
                  <td width="33.33%" style="padding:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0f2f5;border-radius:10px;">
                      <tr>
                        <td style="padding:14px 12px;font-family:Arial,Helvetica,sans-serif;">
                          <div style="font-size:20px;line-height:1;">🎥</div>
                          <div style="margin-top:8px;font-size:13px;line-height:1.5;color:#0f172a;"><b>Studio Advantage</b></div>
                          <div style="margin-top:4px;font-size:12px;line-height:1.6;color:#475569;">
                            In-house 1500 sq. ft. studio for fast, high-quality content production.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Card 3 (updated copy for DMA tone) -->
                  <td width="33.33%" style="padding:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #f0f2f5;border-radius:10px;">
                      <tr>
                        <td style="padding:14px 12px;font-family:Arial,Helvetica,sans-serif;">
                          <div style="font-size:20px;line-height:1;">📊</div>
                          <div style="margin-top:8px;font-size:13px;line-height:1.5;color:#0f172a;"><b>Data-Driven Growth</b></div>
                          <div style="margin-top:4px;font-size:12px;line-height:1.6;color:#475569;">
                            Transparent KPIs, weekly dashboards, and ROI-backed optimizations.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary CTA -->
          <tr>
            <td align="center" style="padding:18px 28px 8px 28px;">
              <a href="https://rankkit.in/"
                 style="display:inline-block;background:rgb(2, 18, 102);color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:bold;font-family:Arial,Helvetica,sans-serif;">
                Visit Our Website
              </a>
            </td>
          </tr>

          <!-- Secondary CTA -->
          <tr>
            <td align="center" style="padding:0 28px 8px 28px;">
              <p style="display:inline-block;color:rgb(2, 18, 102);text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:13px;margin:0;">
                or Book a 15-minute discovery call → +91 90904 34376
              </p>
            </td>
          </tr>

          <!-- Footer divider -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:#eef2f7;line-height:1px;font-size:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 24px 24px 24px;text-align:center;">
              <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#64748b;">
                © ${new Date().getFullYear()} Rankkit Media •
                <a href="https://rankkit.in/" style="color:rgb(2, 18, 102);text-decoration:none;">rankkit.in</a> •
                <a href="tel:+919090434376" style="color:rgb(2, 18, 102);text-decoration:none;">+91 90904 34376</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#94a3b8;">
              <a href="https://www.google.com/maps/place/RankKit+Media+LLP/@19.0859123,73.0042476,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c117f605b2f1:0xfefff80a3a005cb2!8m2!3d19.0859073!4d73.0091185!16s%2Fg%2F11xdjw83mb?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D">
                Ambience Court, 1702-1703, Phase 2, Sector 19E, Vashi, Navi Mumbai, Maharashtra 400703, India
                </a>
              </p>

              <!-- Social row -->
              <div style="margin-top:10px;">
                <a href="https://www.instagram.com/rankkitofficial/" style="display:inline-block;margin:0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgb(2, 18, 102);text-decoration:none;">Instagram</a> -
                <a href="https://www.youtube.com/@RankkitMedia" style="display:inline-block;margin:0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgb(2, 18, 102);text-decoration:none;">YouTube</a>
              </div>
            </td>
          </tr>
        </table>
        <!-- /Container -->

      </td>
    </tr>
  </table>
</body>
</html>
`;

    const token = Math.random().toString(36).slice(2, 6).toUpperCase();

    // Send email to user
    await resend.emails.send({
      from: 'connect@rankkit.in', // your sender email
      bcc: 'leads.rankkit@gmail.com',
      to: email, // recipient email
      subject: `${name} - Thank you for contacting Rankkit Media · ${token}`,
      html,
    });

    // Return a successful response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    // Return an error response if something went wrong
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
