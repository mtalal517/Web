export type ContactInquiry = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  timeline: string;
  message: string;
};

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}[character] ?? character));

const detailRow = (label: string, value: string) => `<tr><td style="padding:12px 0;border-bottom:1px solid #dedbd2;color:#77756d;font:600 11px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;vertical-align:top;width:145px">${label}</td><td style="padding:12px 0;border-bottom:1px solid #dedbd2;color:#23241f;font:15px Arial,sans-serif;line-height:1.55">${escapeHtml(value || 'Not provided')}</td></tr>`;

export function contactEmailHtml(inquiry: ContactInquiry) {
  return `<!doctype html><html><body style="margin:0;background:#ece9e1;padding:32px 16px"><table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:680px;margin:0 auto;background:#f8f6ef;border:1px solid #d7d2c7"><tr><td style="padding:38px 42px;background:#1b1c19;color:#f3efe4"><div style="font:600 11px Arial,sans-serif;letter-spacing:.16em;color:#d6a16f;text-transform:uppercase">ahmedphotography / New inquiry</div><h1 style="margin:18px 0 8px;font:italic 42px Georgia,serif;letter-spacing:-.03em">A new story is waiting.</h1><p style="margin:0;color:#b9b8b0;font:15px Arial,sans-serif;line-height:1.6">A visitor submitted the portfolio contact form.</p></td></tr><tr><td style="padding:34px 42px"><h2 style="margin:0 0 12px;color:#23241f;font:italic 27px Georgia,serif">Sender</h2><table role="presentation" cellpadding="0" cellspacing="0" style="width:100%">${detailRow('Name', inquiry.name)}${detailRow('Email', inquiry.email)}${detailRow('Phone', inquiry.phone)}</table><h2 style="margin:34px 0 12px;color:#23241f;font:italic 27px Georgia,serif">Project</h2><table role="presentation" cellpadding="0" cellspacing="0" style="width:100%">${detailRow('Service', inquiry.service)}${detailRow('Location', inquiry.location)}${detailRow('Target date', inquiry.timeline)}</table><h2 style="margin:34px 0 12px;color:#23241f;font:italic 27px Georgia,serif">Message</h2><div style="padding:22px;background:#ece9e1;border-left:3px solid #d6a16f;color:#30312c;font:15px Arial,sans-serif;line-height:1.75;white-space:pre-wrap">${escapeHtml(inquiry.message)}</div><p style="margin:30px 0 0;color:#77756d;font:12px Arial,sans-serif;line-height:1.6">Reply directly to this email to contact ${escapeHtml(inquiry.name)} at ${escapeHtml(inquiry.email)}.</p></td></tr></table></body></html>`;
}

export function contactEmailText(inquiry: ContactInquiry) {
  return [`New ahmedphotography inquiry`, '', 'SENDER', `Name: ${inquiry.name}`, `Email: ${inquiry.email}`, `Phone: ${inquiry.phone || 'Not provided'}`, '', 'PROJECT', `Service: ${inquiry.service}`, `Location: ${inquiry.location || 'Not provided'}`, `Target date: ${inquiry.timeline || 'Not provided'}`, '', 'MESSAGE', inquiry.message].join('\n');
}
