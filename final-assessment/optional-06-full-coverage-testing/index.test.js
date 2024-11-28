import sum from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('Pengujian fungsi sum dengan berbagai skenario', (t) => {
  // Skenario 1: Kedua input adalah bilangan positif
  assert.strictEqual(sum(5, 3), 8, 'sum(5, 3) seharusnya menghasilkan 8');

  // Skenario 2: Salah satu input adalah bukan angka (misalnya string)
  assert.strictEqual(sum("5", 3), 0, 'sum("5", 3) seharusnya menghasilkan 0');
  assert.strictEqual(sum(5, "3"), 0, 'sum(5, "3") seharusnya menghasilkan 0');

  // Skenario 3: Salah satu input adalah undefined
  assert.strictEqual(sum(undefined, 3), 0, 'sum(undefined, 3) seharusnya menghasilkan 0');
  assert.strictEqual(sum(5, undefined), 0, 'sum(5, undefined) seharusnya menghasilkan 0');

  // Skenario 4: Salah satu input adalah angka negatif
  assert.strictEqual(sum(-5, 3), 0, 'sum(-5, 3) seharusnya menghasilkan 0');
  assert.strictEqual(sum(5, -3), 0, 'sum(5, -3) seharusnya menghasilkan 0');

  // Skenario 5: Kedua input adalah angka negatif
  assert.strictEqual(sum(-5, -3), 0, 'sum(-5, -3) seharusnya menghasilkan 0');

  // Skenario 6: Kedua input adalah 0
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) seharusnya menghasilkan 0');

  // Skenario 7: Salah satu input adalah 0 dan yang lain bilangan positif
  assert.strictEqual(sum(0, 5), 5, 'sum(0, 5) seharusnya menghasilkan 5');
  assert.strictEqual(sum(5, 0), 5, 'sum(5, 0) seharusnya menghasilkan 5');
});
