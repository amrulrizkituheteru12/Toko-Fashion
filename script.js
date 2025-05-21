function addToCart(productName, price) {
    // Nomor WhatsApp tujuan (ganti dengan nomor WhatsApp yang benar)
    const phoneNumber = '6282241313180'; // Nomor WhatsApp Anda (gunakan format internasional tanpa tanda +)

    // Membuat pesan untuk dikirim
    const message = `Saya ingin memesan ${productName} dengan harga ${price}.`;

    // Membuat URL untuk mengarahkan ke WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Debugging: Menampilkan URL dan pesan di konsol
    console.log('Mengirim pesan ke WhatsApp:', message);
    console.log('URL WhatsApp:', whatsappURL);

    // Membuka WhatsApp dengan pesan yang sudah disiapkan
    // Menggunakan window.location.href untuk membuka link WhatsApp langsung
    window.location.href = whatsappURL;
}
