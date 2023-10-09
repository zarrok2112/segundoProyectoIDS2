import { describe, test, expect, jest } from '@jest/globals';
import processRepository from '../ProcessService.mjs';
import minioServise from '../MinioService.mjs';

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
  const processRepository = new processRepository();

  test('');
});
