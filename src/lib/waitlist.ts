export type WaitlistEntry = Readonly<{
  email: string;
  role: string;
  savedAt: string;
}>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function validateEmail(value: string): string | null {
  const email = normalizeEmail(value);

  if (email.length === 0) {
    return "Enter your email to join.";
  }

  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }

  return null;
}

export function createWaitlistEntry(
  email: string,
  role: string,
  savedAt: string,
): WaitlistEntry {
  return {
    email: normalizeEmail(email),
    role,
    savedAt,
  };
}
