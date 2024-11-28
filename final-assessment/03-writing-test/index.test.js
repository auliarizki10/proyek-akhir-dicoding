import { sum } from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('Pengujian fungsi sum', (t) => {
  // Uji kasus 1: Penjumlahan dua bilangan positif
  assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) seharusnya menghasilkan 5');

  // Uji kasus 2: Penjumlahan dua bilangan negatif
  assert.strictEqual(sum(-2, -3), -5, 'sum(-2, -3) seharusnya menghasilkan -5');

  // Uji kasus 3: Penjumlahan dengan nol
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) seharusnya menghasilkan 0');

  // Uji kasus 4: Penjumlahan bilangan positif dan negatif
  assert.strictEqual(sum(5, -3), 2, 'sum(5, -3) seharusnya menghasilkan 2');

  // Uji kasus 5: Penjumlahan dengan nilai besar
  assert.strictEqual(sum(1000, 5000), 6000, 'sum(1000, 5000) seharusnya menghasilkan 6000');

  // Uji kasus 6: Penjumlahan bilangan pecahan
  assert.strictEqual(sum(1.5, 2.5), 4.0, 'sum(1.5, 2.5) seharusnya menghasilkan 4.0');

  // Uji kasus 7: Penjumlahan bilangan besar (ekstrem)
  assert.strictEqual(sum(1e12, 1e12), 2e12, 'sum(1e12, 1e12) seharusnya menghasilkan 2e12');

  // Uji kasus 8: Penjumlahan dengan bilangan non-angka (NaN)
  assert.ok(isNaN(sum("a", 1)), 'sum("a", 1) seharusnya menghasilkan NaN');
  assert.ok(isNaN(sum(2, undefined)), 'sum(2, undefined) seharusnya menghasilkan NaN');

  // Uji kasus 9: Penjumlahan dengan bilangan Infinity
  assert.strictEqual(sum(Infinity, 1), Infinity, 'sum(Infinity, 1) seharusnya menghasilkan Infinity');
  assert.strictEqual(sum(-Infinity, 1), -Infinity, 'sum(-Infinity, 1) seharusnya menghasilkan -Infinity');
});
