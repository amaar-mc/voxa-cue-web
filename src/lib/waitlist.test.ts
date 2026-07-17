import { describe, expect, it } from "vitest";
import {
  createWaitlistEntry,
  normalizeEmail,
  validateEmail,
} from "./waitlist";

describe("waitlist validation", () => {
  it("normalizes valid email addresses", () => {
    expect(normalizeEmail("  Amaar@Example.COM ")).toBe("amaar@example.com");
    expect(validateEmail("  Amaar@Example.COM ")).toBeNull();
  });

  it("rejects blank and malformed addresses", () => {
    expect(validateEmail("  ")).toBe("Enter your email to join.");
    expect(validateEmail("amaar.example.com")).toBe(
      "Enter a valid email address.",
    );
  });

  it("creates a serializable local preview entry", () => {
    expect(
      createWaitlistEntry(
        " Amaar@Example.com ",
        "Student presenter",
        "2026-07-16T21:00:00.000Z",
      ),
    ).toEqual({
      email: "amaar@example.com",
      role: "Student presenter",
      savedAt: "2026-07-16T21:00:00.000Z",
    });
  });
});
