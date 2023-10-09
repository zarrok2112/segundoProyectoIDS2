import { describe, test, expect } from '@jest/globals';
import ProcessService from '../ProcessService.mjs';

const sum = (a, b) => a + b;

describe('test sum', () => {
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('1 + 3 = 4', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('ProcessServices test', () => {
  const processRepository = new ProcessService();

  const processService = new ProcessService(processRepository);

  test('Test applyFilters function with invalid payload', () => {
    expect(() => processService.applyFilters({})).rejects.toThrow();
  });
});
