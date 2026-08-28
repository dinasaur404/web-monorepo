import { describe, expect, it } from "vitest";

import { site } from "./site";

describe("site metadata", () => {
  it("provides a title and description", () => {
    expect(site.name).toBe("Web Monorepo");
    expect(site.description).toContain("Astro");
  });
});
