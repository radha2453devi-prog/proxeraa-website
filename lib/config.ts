/**
 * Site-wide settings for forms and booking. Edit here (or use .env.local).
 *
 * NEXT_PUBLIC_FORM_ENDPOINT  a form URL, e.g. https://formspree.io/f/xxxxxxx
 *                            Contact and checklist submissions are sent here.
 * NEXT_PUBLIC_CAL_LINK       your Cal.com path, e.g. yourname/discovery-call
 *                            When set, the "Talk to Proxeraa" popup shows the
 *                            Cal.com scheduler instead of the 3-field form.
 */
export const CONTACT_EMAIL = "hello@proxeraa.com"; // TODO: replace with your real inbox
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "";
