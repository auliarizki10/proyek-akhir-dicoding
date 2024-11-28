/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

// File: Inventory.js

import Item from './Item.js';

class Inventory {
  constructor() {
    this.items = {};
  }

  // Menambah item baru ke dalam inventaris
  addItem(id, name, quantity, price) {
    if (this.items[id]) {
      console.log(`Item dengan id ${id} sudah ada.`);
      return;
    }
    const item = new Item(id, name, quantity, price);
    this.items[id] = item;
    console.log(`Item ${name} berhasil ditambahkan.`);
  }

  // Menghapus item dari inventaris berdasarkan id
  removeItem(id) {
    if (!this.items[id]) {
      console.log(`Item dengan id ${id} tidak ditemukan.`);
      return;
    }
    delete this.items[id];
    console.log(`Item dengan id ${id} berhasil dihapus.`);
  }

  // Melihat semua item dalam inventaris
  viewItems() {
    if (Object.keys(this.items).length === 0) {
      console.log("Inventaris kosong.");
      return;
    }
    console.log("Daftar Item dalam Inventaris:");
    for (const id in this.items) {
      const { name, quantity, price } = this.items[id];
      console.log(`ID: ${id}, Nama: ${name}, Jumlah: ${quantity}, Harga: ${price}`);
    }
  }

  // Memperbarui informasi item berdasarkan id
  updateItem(id, name, quantity, price) {
    const item = this.items[id];
    if (!item) {
      console.log(`Item dengan id ${id} tidak ditemukan.`);
      return;
    }
    item.updateItem(name, quantity, price);
    console.log(`Item dengan id ${id} berhasil diperbarui.`);
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
