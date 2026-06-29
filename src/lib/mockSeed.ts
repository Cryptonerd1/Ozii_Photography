/**
 * Seed data for the in-browser mock database (see `supabaseMock.ts`).
 *
 * Keys are table names; values are arrays of seed rows. This default is empty;
 * when an app needs a backend, the generator replaces this file with rows shaped
 * to the app's schema so the preview shows realistic data before a real Supabase
 * database is connected. It is ignored entirely once real Supabase credentials
 * are present.
 */
export const mockSeed: Record<string, Record<string, unknown>[]> = {};
