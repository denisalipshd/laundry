const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-2">
          <img src="img/logo.png" alt="" className="h-16" />
          <p className="text-sm text-gray-400 leading-relaxed">Layanan laundry modern dengan standar kebersihan tinggi, proses cepat, dan sistem antar jemput yang praktis.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#beranda" className="hover:text-white transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-white transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="#harga" className="hover:text-white transition">
                Harga
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Jl. Sudirman No. 123, Jakarta</li>
            <li>+62 812-3456-7890</li>
            <li>info@laundrymonster.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
              <span className="sr-only">WhatsApp</span>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-primary font-medium">Laundry Monster</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
