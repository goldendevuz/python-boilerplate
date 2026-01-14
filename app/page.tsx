const categories = [
  {
    title: "Harbiy kiyimlar",
    description: "Formalar, dala kiyimlari va amaliy komplektlar."
  },
  {
    title: "Maxsus forma",
    description: "Xizmatga moslangan, standartlarga mos to'plamlar."
  },
  {
    title: "Aksessuarlar",
    description: "Belbog', nishon, kepka va kundalik aksessuarlar."
  },
  {
    title: "Mavsumiy mahsulotlar",
    description: "Qishki va yozgi ehtiyojlar uchun maxsus yechimlar."
  }
];

const topProducts = [
  {
    name: "Qishki dala formasi",
    price: "1 450 000 so'm",
    size: "S–XXL",
    audience: "Harbiy bo'linmalar",
    groupOrder: "Bir bo'linma uchun mos",
    description:
      "Sovuqqa chidamli, cho'ntaklari ko'p va xizmat talablariga mos."
  },
  {
    name: "Xizmat kepkasi",
    price: "95 000 so'm",
    size: "Moslashuvchan",
    audience: "Huquq-tartibot xodimlari",
    groupOrder: "Lavozim bo'yicha",
    description: "Yengil, shamollatish tizimli, logotip qo'yish mumkin."
  },
  {
    name: "Yozgi maxsus forma",
    price: "980 000 so'm",
    size: "S–XXL",
    audience: "Texnik xizmatlar",
    groupOrder: "Bir brigada uchun",
    description: "Nafas oluvchi mato, tez quriydi, qulay kesim."
  }
];

const adminFeatures = [
  "Mahsulot qo'shish, tahrirlash va o'chirish",
  "Narxni tez o'zgartirish",
  "Rasmlar va tavsiflarni boshqarish",
  "Buyurtmalar holatini yangilash",
  "Qidirish va filtr bilan ishlash",
  "Kategoriya yaratish va tahrirlash"
];

const orderSteps = [
  {
    title: "Buyurtma yuborish",
    description:
      "Foydalanuvchi ism, telefon, hudud va miqdorni kiritadi."
  },
  {
    title: "Admin bilan bog'lanish",
    description:
      "Admin buyurtmani ko'radi va tafsilotlarni telefon orqali kelishadi."
  },
  {
    title: "Yakuniy tasdiq",
    description:
      "To'lov onlayn emas, barcha ma'lumotlar kelishilgach yakunlanadi."
  }
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="container hero-content">
          <div>
            <span className="badge">Ruxsat etilgan xodimlar uchun</span>
            <h1>VOENTORG.UZ</h1>
            <p>
              Harbiy, huquq-tartibot va boshqa ruxsat etilgan toifalar uchun
              kiyim-kechak va aksessuarlar katalogi. Buyurtmalar onlayn to'lovsiz
              qabul qilinadi.
            </p>
            <div className="hero-actions">
              <button className="primary">Mahsulotlarni ko'rish</button>
              <button className="ghost">Buyurtma berish</button>
            </div>
            <div className="hero-note">
              <strong>Eslatma:</strong> Sayt demo rejimda. Buyurtmalar admin
              panel orqali tasdiqlanadi.
            </div>
          </div>
          <div className="hero-card">
            <h3>Top mahsulotlar</h3>
            <p>Eng ko'p so'raladigan to'plamlar va aksessuarlar.</p>
            <ul>
              {topProducts.map((product) => (
                <li key={product.name}>
                  <span>{product.name}</span>
                  <strong>{product.price}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Kategoriyalar</h2>
            <p>Har bir toifa xizmat talablari va mavsumiy ehtiyojlarga mos.</p>
          </div>
          <div className="grid">
            {categories.map((category) => (
              <article className="card" key={category.title}>
                <div className="card-icon">📌</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-title">
            <h2>Mahsulotlar va buyurtma shartlari</h2>
            <p>
              Har bir mahsulotda rasm, narx, o'lcham va mo'ljallangan toifa
              ko'rsatiladi. Guruh buyurtmalari uchun maxsus belgi mavjud.
            </p>
          </div>
          <div className="grid three">
            {topProducts.map((product) => (
              <article className="card product" key={product.name}>
                <div className="product-media">Rasm joyi</div>
                <div className="product-header">
                  <h3>{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
                <p>{product.description}</p>
                <div className="product-meta">
                  <span>O'lcham: {product.size}</span>
                  <span>Kimlar uchun: {product.audience}</span>
                </div>
                <div className="product-footer">
                  <span className="tag">{product.groupOrder}</span>
                  <button className="primary small">Buyurtma</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Buyurtma berish</h2>
            <p>
              To'lov onlayn emas. Buyurtma admin panelga tushadi va siz bilan
              telefon orqali bog'laniladi.
            </p>
          </div>
          <div className="order-layout">
            <form className="order-form">
              <label>
                Ism
                <input type="text" placeholder="Ism va familiya" />
              </label>
              <label>
                Telefon raqam
                <input type="tel" placeholder="+998" />
              </label>
              <label>
                Hudud
                <input type="text" placeholder="Shahar yoki viloyat" />
              </label>
              <label>
                Miqdor
                <input type="number" min={1} placeholder="1" />
              </label>
              <label>
                Izoh (ixtiyoriy)
                <textarea placeholder="Masalan, o'lcham va yetkazish vaqti" />
              </label>
              <button type="button" className="primary full">
                Buyurtma yuborish
              </button>
              <p className="form-note">
                Captcha va spamdan himoya yakuniy versiyada qo'shiladi.
              </p>
            </form>
            <div className="order-steps">
              {orderSteps.map((step) => (
                <div key={step.title}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
              <div className="group-note">
                <h4>Guruh buyurtmasi</h4>
                <p>
                  Bir xil lavozim yoki bo'linma uchun mahsulot biriktiriladi.
                  Foydalanuvchilar xohlagan miqdorda buyurtma beradi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-title">
            <h2>Admin panel funksiyalari</h2>
            <p>Admin panel yopiq, login/parol orqali kiriladi.</p>
          </div>
          <div className="grid">
            {adminFeatures.map((feature) => (
              <div className="card" key={feature}>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Texnik talablar va MVP</h2>
            <p>
              Frontend mobilga mos, tez yuklanadigan va sodda dizaynda. Backend
              keyingi bosqichda ulanadi.
            </p>
          </div>
          <div className="tech-grid">
            <div className="card">
              <h3>MVP tarkibi</h3>
              <ul>
                <li>Katalog va mahsulot sahifasi</li>
                <li>Buyurtma formasi</li>
                <li>Admin panel uchun bo'limlar</li>
              </ul>
            </div>
            <div className="card">
              <h3>Keyinroq qo'shiladi</h3>
              <ul>
                <li>Telegram bot orqali buyurtmalar</li>
                <li>Ombor hisobi</li>
                <li>Hisobotlar va analitika</li>
              </ul>
            </div>
            <div className="card">
              <h3>Xavfsizlik</h3>
              <ul>
                <li>Admin panel yopiq</li>
                <li>Captcha bilan himoya</li>
                <li>Rasmiylikni buzmaydigan tavsiflar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h2>VOENTORG.UZ</h2>
            <p>
              Savollar uchun: <strong>+998 90 000 00 00</strong>
            </p>
          </div>
          <div className="footer-links">
            <span>Katalog</span>
            <span>Buyurtma</span>
            <span>Admin panel</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
