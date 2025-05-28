import { beforeEach, vi } from 'vitest';

console.log('vitest-setup.js is running. Global test setup can be placed here.');

beforeEach(() => {
  // Clear localStorage before each test to ensure test isolation
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
  // Clear all mocks
  vi.clearAllMocks();
  // If you are spying on specific localStorage methods, you might reset them here too.
  // For example:
  // vi.spyOn(localStorage, 'getItem').mockClear();
  // vi.spyOn(localStorage, 'setItem').mockClear();
  // vi.spyOn(localStorage, 'removeItem').mockClear();
  // vi.spyOn(localStorage, 'clear').mockClear();
});

// You can also set up global mocks here if needed
// For example, mocking a global API:
// global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
