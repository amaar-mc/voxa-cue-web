import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Manrope: () => ({ variable: "--font-manrope" }),
}));

import { metadata } from "./layout";

describe("site metadata", () => {
  it("opts the light-only site out of Dark Reader DOM mutation", () => {
    expect(metadata.other).toMatchObject({
      "darkreader-lock": "true",
    });
  });
});
