function fibonacci(n) {
    if (n === 0) {
      return [0]; // Basis kasus: elemen pertama adalah 0
    } else if (n === 1) {
      return [0, 1]; // Basis kasus: dua elemen pertama adalah 0 dan 1
    }
  
    const series = fibonacci(n - 1); // Rekurens: panggil fibonacci untuk menghasilkan deret sebelumnya
    series.push(series[series.length - 1] + series[series.length - 2]); // Tambahkan elemen berikutnya ke deret
    return series;
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  