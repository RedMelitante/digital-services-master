/**
 * "Book a Free Clinic Growth Audit" form (Contact page).
 *
 * Validates the form, sends it as JSON to PUBLIC_AUDIT_FORM_ENDPOINT when that
 * is configured, then switches the card to the design's thank-you state.
 */
const ENDPOINT: string = import.meta.env.PUBLIC_AUDIT_FORM_ENDPOINT ?? '';

function pressed(form: HTMLFormElement, field: string): string[] {
  return Array.from(form.querySelectorAll(`[data-field="${field}"] [aria-pressed="true"]`)).map(
    (el) => el.textContent?.trim() ?? '',
  );
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
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      }
      form.reset();
      document.dispatchEvent(new CustomEvent('dc:set', { detail: { sent: true } }));
      document.querySelector<HTMLElement>('[data-audit-thanks]')?.focus();
    } catch {
      if (error) {
        error.textContent =
          'Sorry, your request could not be sent. Please try again, or email digitalservicesmaster@gmail.com.';
        error.hidden = false;
      }
    } finally {
      if (button) button.disabled = false;
    }
  });
}
