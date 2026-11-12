# Audit form handler (Google Apps Script)

Receives the "Book a Free Clinic Growth Audit" form from the Contact page and emails
each request to **digitalservicesmaster@gmail.com**. The recipient is set in
`RECIPIENT` at the top of `Code.gs`. To send blind copies to other people, list their
addresses, comma-separated, in `BCC`. Recipients don't see BCC addresses.

Each email has:
- **Subject:** `New audit request: <clinic> (<name>)`
- **Body:** every form field (name, clinic, email, phone, website, type of business,
  country, services, goal, plus the page and time it was sent)
- **Reply-To:** the visitor's email, so replying answers them directly

Requests with a missing name, clinic or email, or an invalid email, are rejected.
Submissions that fill in the hidden `company_website` field are treated as spam and
silently dropped.

## Deploy (one time, about 5 minutes)

1. Sign in to the Google account that should own the script (emails are sent from it) and open
   <https://script.google.com> → **New project**. Name it "DSM audit form".
2. Replace the contents of `Code.gs` with this folder's `Code.gs`.
3. Optional, to limit the script to sending email only: **Project Settings** → tick
   **Show "appsscript.json" manifest file**, then replace that file with this folder's
   `appsscript.json`.
4. **Deploy** → **New deployment** → gear icon → **Web app**:
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Click **Deploy** and approve the permission prompt. Google asks to let the script
   "send email as you".
6. Copy the **Web app URL**, which ends in `/exec`.
7. Put the URL in `DEFAULT_ENDPOINT` in `src/scripts/audit-form.ts`, or set it as
   `PUBLIC_AUDIT_FORM_ENDPOINT` in the build environment. Then rebuild and redeploy
   the site, because the URL is built into the page.

The current deployment is already set in `src/scripts/audit-form.ts`.

To check the deployment, open the web app URL in a browser. It should show
`{"ok":true,"service":"audit-form"}`. Then send a test request from the Contact page.

## Updating the script

After editing `Code.gs`, use **Deploy** → **Manage deployments** → edit (pencil) →
**Version: New version** → **Deploy**. This keeps the same URL, so the website needs no
change. Creating a *new* deployment instead gives a new URL.

## Limits

Apps Script can send about 1,500 emails a day from a Google Workspace account, or 100
from a free Gmail account. Errors are logged under **Executions** in the Apps Script
editor.
