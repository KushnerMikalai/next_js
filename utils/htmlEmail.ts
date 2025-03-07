interface Html {
    url: string
    site: string
    email: string
}

interface Text {
    url: string
    site: string
}

export const html = ({url, site, email}: Html) => {
    // Insert invisible space into domains and email address to prevent both the
    // email address and the domain from being turned into a hyperlink by email
    // clients like Outlook and Apple mail, as this is confusing because it seems
    // like they are supposed to click on their email address to sign in.
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
    const escapedSite = `${site.replace(/\./g, '&#8203;.')}`

    // Some simple styling options
    const backgroundColor = '#f9f9f9'
    const textColor = '#444444'
    const mainBackgroundColor = '#ffffff'
    const buttonBackgroundColor = '#346df1'
    const buttonBorderColor = '#346df1'
    const buttonTextColor = '#ffffff'

    const borderButton = `1px solid ${buttonBorderColor}`

    // Uses tables for layout and inline CSS due to email client limitations
    return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td
        align="center"
        style="padding: 10px 0px 0px 0px;
        font-size: 18px;
        font-family: Helvetica, Arial, sans-serif; color: ${textColor};"
      >
         Sign in as <strong>${escapedEmail}</strong>!
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}">
                <a
                    href="${url}"
                    target="_blank"
                    style="
                        font-size: 18px;
                        font-family: Helvetica, Arial, sans-serif;
                        color: ${buttonTextColor};
                        text-decoration: none;
                        border-radius: 5px;
                        padding: 10px 20px;
                        border: ${borderButton};
                        display: inline-block;
                        font-weight: bold;
                    "
                >
                    Sign in, Bro!
                </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}

// Email text body – fallback for email clients that don't render HTML
export const text = ({url, site}: Text) => `Sign in to ${site}\n${url}\n\n`
