function factorial(n) {
    if (n <= 1) {
      return 1; // Basis kasus: faktorial dari 0 atau 1 adalah 1
    }
    return n * factorial(n - 1); // Rekurens: n * faktorial dari (n - 1)
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  