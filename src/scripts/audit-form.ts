/**
 * "Book a Free Clinic Growth Audit" form (Contact page).
 *
 * Validates the form, sends it to the Google Apps Script web app in
 * PUBLIC_AUDIT_FORM_ENDPOINT (apps-script/audit-form/), which emails it, then
 * switches the card to the design's thank-you state.
 */
const ENDPOINT: string = import.meta.env.PUBLIC_AUDIT_FORM_ENDPOINT ?? '';
const FALLBACK_MESSAGE =
  'Sorry, your request could not be sent. Please try again, or email digitalservicesmaster@gmail.com.';

function pressed(form: HTMLFormElement, field: string): string[] {
  return Array.from(form.querySelectorAll(`[data-field="${field}"] [aria-pressed="true"]`)).map(
    (el) => el.textContent?.trim() ?? '',
  );
}

async function send(data: Record<string, unknown>): Promise<void> {
  if (!ENDPOINT) throw new Error('PUBLIC_AUDIT_FORM_ENDPOINT is not set');
  // Sent as text/plain (no custom headers) so the browser makes a simple
  // request: Apps Script web apps cannot answer CORS preflight requests.
  const res = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(data), redirect: 'follow' });
  if (!res.ok) throw new Error(`Request failed with ${res.status}`);
  const result = (await res.json()) as { ok?: boolean; error?: string };
  if (!result.ok) throw new Error(result.error ?? 'Request rejected');
}

export function initAuditForm(): void {
  const form = document.querySelector<HTMLFormElement>('form[data-audit-form]');
  if (!form) return;
  const error = form.querySelector<HTMLElement>('[data-audit-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, unknown>;
    data.country = pressed(form, 'country')[0] ?? '';
    data.interests = pressed(form, 'interests');
    data.page = window.location.href;
    data.submittedAt = new Date().toISOString();

    if (error) error.hidden = true;
    if (button) button.disabled = true;
    try {
      await send(data);
      form.reset();
      document.dispatchEvent(new CustomEvent('dc:set', { detail: { sent: true } }));
      document.querySelector<HTMLElement>('[data-audit-thanks]')?.focus();
    } catch (err) {
      console.error('Audit form:', err);
      if (error) {
        error.textContent = FALLBACK_MESSAGE;
        error.hidden = false;
      }
    } finally {
      if (button) button.disabled = false;
    }
  });
}
