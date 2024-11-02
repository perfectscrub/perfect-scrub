import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain= process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "2FA Code",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Perfect Scrub Cleaning - 2FA Code</title>
      </head>
      <body style="font-family: 'Poppins', Arial, sans-serif;">
        <table width="100%" cellspacing="0" cellpadding="0">
         <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #ffffff; padding: 40px; text-align: center; color: white; font-size: 24px;">
                        Two Factor Authentication Code
                        </td>
                    </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <table width="600" cellpadding="0" cellspacing="0" border="0">
        <!-- Body -->
              <tr>
                  <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                  Hi, <br>
                  Your 2FA code for login is:
                  <br><br>
                  
                  </td>
              </tr>

              <!-- Call to action Button -->
              <tr>
                  <td style="padding: 0px 40px 0px 40px; text-align: center;">
                      <!-- CTA Button -->
                      <table cellspacing="0" cellpadding="0" style="margin: auto;">
                          <tr>
                              <td align="center" style="background-color: #12af1d; color: #ffffff; padding: 15px 25px;">
                                ${token}
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                      Thank you for trusting Perfect Scrub with your cleaning.
                  </td>
              </tr>
      <!-- Footer -->
                <tr>
                    <td class="footer" style="background-color: #ffffff; padding: 40px; text-align: center; color: black; font-size: 14px;">
                      <br><br>
                      Copyright &copy; 2024 | Perfect Scrub Cleaning
                    </td>
                </tr>
              </table>
            </td>
          </tr>
      </table>
      </body>
      </html>
      `,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Confirm your email",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Perfect Scrub Cleaning - Email Verification</title>
      </head>
      <body style="font-family: 'Poppins', Arial, sans-serif;">
        <table width="100%" cellspacing="0" cellpadding="0">
         <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #ffffff; padding: 40px; text-align: center; color: white; font-size: 24px;">
                        Email Verification
                        </td>
                    </tr>
          <tr>
            <td align="center" style="padding: 20px;">
              <table width="600" cellpadding="0" cellspacing="0" border="0">
        <!-- Body -->
              <tr>
                  <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                  Hi, <br>
                  You can verify your email by clicking the link below.
                  <br><br>
                  You are receiving this email because you created an account with Perfect Scrub Cleaning. If this request was not made by you please disregard the email.
                  </td>
              </tr>

              <!-- Call to action Button -->
              <tr>
                  <td style="padding: 0px 40px 0px 40px; text-align: center;">
                      <!-- CTA Button -->
                      <table cellspacing="0" cellpadding="0" style="margin: auto;">
                          <tr>
                              <td align="center" style="background-color: #12af1d; padding: 10px 20px; border-radius: 5px;">
                                <a href=${confirmLink} target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Verify Email</a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                      Thank you for trusting Perfect Scrub with your cleaning.
                  </td>
              </tr>
      <!-- Footer -->
                <tr>
                    <td class="footer" style="background-color: #ffffff; padding: 40px; text-align: center; color: black; font-size: 14px;">
                      <br><br>
                      Copyright &copy; 2024 | Perfect Scrub Cleaning
                    </td>
                </tr>
              </table>
            </td>
          </tr>
      </table>
      </body>
      </html>
      `,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const text = "Reset Password";
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset your password",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Perfect Scrub Cleaning - Password Reset</title>
      </head>
      <body style="font-family: 'Poppins', Arial, sans-serif">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                        <!-- Header -->
                        <tr>
                            <td class="header" style="background-color: #ffffff; padding: 40px; text-align: center; color: white; font-size: 24px;">
                            Password Reset
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                            Hi, <br>
                            If you want to reset your password you can click the link below
                            <br><br>
                            You are receiving this email because you requested a password reset. If this request was not made by you please disregard.
                            </td>
                        </tr>

                        <!-- Call to action Button -->
                        <tr>
                            <td style="padding: 0px 40px 0px 40px; text-align: center;">
                                <!-- CTA Button -->
                                <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                    <tr>
                                        <td align="center" style="background-color: #12af1d; padding: 10px 20px; border-radius: 5px;">
                                            <a href=${resetLink} target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Reset Password</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                Thank you for trusting Perfect Scrub with your cleaning.
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td class="footer" style="background-color: #ffffff; padding: 40px; text-align: center; color: black; font-size: 14px;">
                              <br><br>
                              Copyright &copy; 2024 | Perfect Scrub Cleaning
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </body>
      </html>
      `,
    });
  } catch (error) {
    return null;
  }
};
