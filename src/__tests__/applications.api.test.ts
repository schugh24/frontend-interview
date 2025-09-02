import { describe, it, expect, vi, beforeEach } from "vitest";

// Example API function to test
async function fetchApplications(page = 1, limit = 5) {
  const res = await fetch(
    `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`
  );
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

describe("Applications API", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches applications for page 1 with limit 5", async () => {
    const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchApplications(1, 5);
    expect(data).toHaveLength(5);
    expect(data[0].id).toBe(1);
  });

  it("handles pagination correctly", async () => {
    const mockData = [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchApplications(2, 5);
    expect(data[0].id).toBe(6);
  });

  it("throws error on network failure", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    await expect(fetchApplications()).rejects.toThrow("Network error");
  });

  it("returns empty array if no applications", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    });

    const data = await fetchApplications(99, 5);
    expect(data).toEqual([]);
  });
});
