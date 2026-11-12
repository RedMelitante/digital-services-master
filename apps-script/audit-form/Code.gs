/**
 * Digital Services Master: "Book a Free Clinic Growth Audit" form handler.
 *
 * A Google Apps Script web app. The website's Contact page POSTs each audit
 * request here as JSON; this script checks it and emails it to RECIPIENT.
 * Setup and deployment steps: apps-script/audit-form/README.md
 */

/** Where audit requests are emailed. */
var RECIPIENT = 'digitalservicesmaster@gmail.com';

/**
 * Extra recipients who get a blind copy (BCC): comma-separated, or '' for none.
 * Each address counts toward the account's daily email quota.
 */
var BCC = 'redmelitante@digitalservicesmaster.com, redmelitante@gmail.com';

/** Longest value kept per field, so a bad request can't send a huge email. */
var MAX_FIELD_LENGTH = 5000;

var FIELDS = [
  ['name', 'Full name'],
  ['clinic', 'Clinic name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['website', 'Current website'],
  ['type', 'Type of business'],
  ['country', 'Country'],
  ['interests', 'Interested in'],
  ['goal', 'Biggest goal right now'],
  ['page', 'Sent from'],
  ['submittedAt', 'Submitted at'],
];

/** Receives the form submission. */
function doPost(e) {
  try {
    var data = parseBody_(e);

    // Spam trap: the hidden "company_website" field is left empty by people.
    if (data.company_website) {
      return json_({ ok: true });
    }

    var clean = {};
    FIELDS.forEach(function (f) {
      clean[f[0]] = text_(data[f[0]]);
    });

    var missing = ['name', 'clinic', 'email'].filter(function (k) {
      return !clean[k];
    });
    if (missing.length) {
      return json_({ ok: false, error: 'Missing required fields: ' + missing.join(', ') });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      return json_({ ok: false, error: 'Invalid email address' });
    }

    var message = {
      to: RECIPIENT,
      replyTo: clean.email,
      name: 'Digital Services Master website',
      subject: 'New audit request: ' + clean.clinic + ' (' + clean.name + ')',
      body: plainBody_(clean),
      htmlBody: htmlBody_(clean),
    };
    if (BCC) message.bcc = BCC;
    MailApp.sendEmail(message);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Server error' });
  }
}

/** Lets you open the web app URL in a browser to check it is deployed. */
function doGet() {
  return json_({ ok: true, service: 'audit-form' });
}

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      // Fall through to form-encoded parameters.
    }
  }
  return (e && e.parameter) || {};
}

function text_(value) {
  if (value === undefined || value === null) return '';
  if (Array.isArray(value)) value = value.join(', ');
  return String(value).trim().slice(0, MAX_FIELD_LENGTH);
}

function escape_(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function plainBody_(d) {
  return (
    'New "Book a Free Clinic Growth Audit" request from the website.\n\n' +
    FIELDS.map(function (f) {
      return f[1] + ': ' + (d[f[0]] || '-');
    }).join('\n') +
    '\n\nReply to this email to answer ' + d.name + ' directly.'
  );
}

function htmlBody_(d) {
  var rows = FIELDS.map(function (f) {
    var value = d[f[0]] ? escape_(d[f[0]]).replace(/\n/g, '<br>') : '<span style="color:#646B88">-</span>';
    return (
      '<tr><td style="padding:8px 16px 8px 0;color:#646B88;vertical-align:top;white-space:nowrap">' +
      escape_(f[1]) +
      '</td><td style="padding:8px 0;color:#131A33">' +
      value +
      '</td></tr>'
    );
  }).join('');
  return (
    '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5">' +
    '<h2 style="margin:0 0 4px;color:#131A33">New audit request</h2>' +
    '<p style="margin:0 0 16px;color:#4B5371">From the "Book a Free Clinic Growth Audit" form on the website.</p>' +
    '<table style="border-collapse:collapse">' + rows + '</table>' +
    '<p style="margin:16px 0 0;color:#4B5371">Reply to this email to answer ' + escape_(d.name) + ' directly.</p>' +
    '</div>'
  );
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
