import { Link, useParams } from 'react-router-dom'
import animeImage from './assets/anime.png'
import './BlogPage.css'

const notes = [
  {
    slug: 'game-tren-2026',
    number: '01',
    category: 'GAME',
    title: 'Tren game yang makin memikat perhatian komunitas digital',
    summary: 'Dari game mobile sampai pengalaman co-op, komunitas gaming kini lebih aktif dan lebih terhubung dengan budaya pop dan creator.',
    body: 'Game bukan lagi sekadar hiburan, tapi juga ruang sosial, tantangan strategi, dan budaya komunitas yang tumbuh di berbagai platform. Saat pemain semakin memilih pengalaman yang cepat dipahami namun tetap dalam, developer terus menyesuaikan desain level, sistem reward, dan interaksi sosial untuk menjaga minat jangka panjang.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Seorang gamer sedang bermain di komputer dengan monitor gaming',
    readTime: '4 menit baca',
    date: '12 Mei 2026',
    content: [
      'Game berkembang dengan cara yang sangat personal. Pemain tidak hanya mencari hiburan, tetapi juga pengalaman yang memberi rasa pencapaian, sosial, dan kebebasan bereksperimen. Inilah alasan tren game saat ini lebih dekat dengan kebutuhan komunitas dibanding sekadar grafik yang bagus.',
      'Dari game mobile berbasis battle pass sampai title co-op dengan event mingguan, banyak pengembang mulai fokus pada ritme permainan yang dapat dipahami dalam hitungan menit. Artinya pengalaman pengguna, tutorial yang jelas, dan sistem progres yang terasa adil menjadi kunci agar pemain tetap datang kembali.',
      'Bagi saya, ini juga jadi contoh bagus tentang desain produk yang membuat orang merasa terlibat. Saat antarmuka, feedback, dan rasa pencapaian berjalan selaras, game bisa menjadi media yang sangat kuat untuk membangun loyalitas.',
    ],
  },
  {
    slug: 'brand-sosial-media',
    number: '02',
    category: 'SOSIAL MEDIA',
    title: 'Cara brand tumbuh lewat konten yang terasa manusiawi',
    summary: 'Platform sosial media semakin memprioritaskan konten yang otentik, cepat dipahami, dan relevan dengan momen harian audiens.',
    body: 'Di era algoritma yang berubah cepat, konten yang paling kuat adalah yang terasa dekat dengan keseharian audiens. Brand yang bisa tampil autentik biasanya lebih mudah menjangkau perhatian tanpa terlihat terlalu memaksa.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tim kerja berdiskusi di depan laptop sambil menyiapkan strategi digital',
    readTime: '5 menit baca',
    date: '28 April 2026',
    content: [
      'Sosial media tidak lagi hanya tempat untuk mempublikasikan produk. Platform ini berubah menjadi ruang percakapan, tren, dan komunitas yang berkembang dari interaksi kecil setiap hari. Karena itu, brand yang ingin relevan harus belajar memahami selera, nada bahasa, dan ritme konsumsi audiens mereka.',
      'Konten yang terasa manusiawi biasanya tidak terlalu rumit. Ia mengajak audiens ikut melihat proses, mencoba sesuatu, atau merasakan emosi dari cerita yang nyata. Inilah yang sering membuat orang lebih tertarik daripada iklan yang terlalu polished.',
      'Dari sudut desain, prinsip yang sama berlaku. Antarmuka yang jelas dan pesan yang mudah dicerna akan lebih efektif daripada tampilan yang terlalu ramai. Sosial media bukan hanya soal jumlah followers, tapi tentang membangun hubungan yang konsisten.',
    ],
  },
  {
    slug: 'teknologi-ai-terbaru',
    number: '03',
    category: 'TEKNOLOGI',
    title: 'Perubahan teknologi terbaru yang mulai mengubah cara kerja',
    summary: 'AI, automation, dan alat kolaborasi baru mulai mendorong cara kerja tim menjadi lebih cepat, terukur, dan lebih kreatif.',
    body: 'Teknologi terbaru bukan hanya tentang fitur baru, tetapi tentang bagaimana alat tersebut memengaruhi alur kerja manusia. Produktivitas yang meningkat sering datang dari otomatisasi yang mengurangi pekerjaan berulang.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Komponen elektronik dan perangkat teknologi modern di meja kerja',
    readTime: '6 menit baca',
    date: '15 Maret 2026',
    content: [
      'Saat ini, banyak alat bekerja dengan pendekatan hybrid: membantu ide cepat dibuat, menyiapkan rancangan awal, lalu memberi ruang bagi manusia untuk mengedit dan menambahkan sentuhan personal. Inilah pergeseran besar dalam workflow digital, terutama untuk tim kreatif dan produk.',
      'Namun, tantangannya bukan sekadar memakai alat baru. Kunci utamanya adalah mengetahui di mana teknis membantu, dan di mana keputusan manusia tetap diperlukan agar hasilnya bermakna. Dalam banyak kasus, kualitas datang dari keseimbangan antara kecepatan dan pemikiran kritis.',
      'Saya melihat ini sebagai momen yang menarik: teknologi menjadi pendamping, bukan pengganti. Ketika tool yang digunakan benar, orang dapat berpikir lebih tinggi, fokus pada strategi, dan mengerjakan hal yang lebih bernilai.',
    ],
  },
  {
    slug: 'startup-digital',
    number: '04',
    category: 'STARTUP',
    title: 'Startup digital berhasil karena mereka memahami kebutuhan nyata',
    summary: 'Produk yang benar-benar berguna biasanya lahir dari masalah yang jelas dan pengalaman yang terasa cepat, mudah, dan konsisten.',
    body: 'Startup digital yang berkembang biasanya bukan sekadar punya desain yang modern. Mereka membangun produk dengan pemahaman yang kuat terhadap masalah sehari-hari pengguna dan arah kemajuan yang jelas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tim startup berdiskusi dan meninjau strategi produk di ruang kerja',
    readTime: '4 menit baca',
    date: '07 Februari 2026',
    content: [
      'Banyak produk baru kehilangan pijakan karena terlalu fokus pada fitur, bukan pada kebutuhan dasar pengguna. Startup yang kuat biasanya mengawali dari pertanyaan sederhana: apa yang membuat orang benar-benar ingin memakai layanan ini secara rutin?',
      'Setelah kebutuhan itu teridentifikasi, langkah berikutnya adalah mengurangi hambatan. Semakin mudah pengguna memahami produk dan menyelesaikan tugas, semakin besar peluang produk tersebut bertahan dalam pasar yang kompetitif.',
      'Dari pengalaman saya, produk yang dirancang dengan pendekatan manusiawi biasanya lebih mudah disampaikan dan lebih kuat dalam membangun loyalitas. Ketika orang merasa terbantu, mereka lebih siap untuk kembali.',
    ],
  },
  {
    slug: 'uiux-cerita',
    number: '05',
    category: 'DESAIN',
    title: 'Desain antarmuka yang jelas membuat orang lebih percaya diri',
    summary: 'Interaksi yang nyaman tidak selalu dibuat dengan banyak efek, tapi dengan urutan yang jelas dan keputusan visual yang konsisten.',
    body: 'Tampilan yang baik bukan soal jumlah elemen, tetapi tentang bagaimana orang memahami semua tata letak dan tindakan yang tersedia di layar. Ketika struktur visual terasa konsisten, keputusan lebih mudah dibuat.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Layar desain UI yang menampilkan layout web modern',
    readTime: '5 menit baca',
    date: '18 Januari 2026',
    content: [
      'Ketika saya mendesain antarmuka, saya mencoba melihat dari sisi pengguna. Apakah mereka tahu harus mengklik apa dulu? Apakah fokus mereka tertarik pada informasi utama? Apakah sistem visual membantu mereka bergerak tanpa kebingungan?',
      'Jawaban atas pertanyaan itu sering datang dari kesederhanaan. Elemen yang terlalu banyak, warna yang berlebihan, atau navigasi yang membingungkan akan membuat orang ragu. Tindakan yang jelas dan hierarki yang kuat jauh lebih efektif dalam jangka panjang.',
      'Bagi saya, desain antarmuka adalah cara memberi rasa aman kepada orang. Ketika mereka merasa familiar dan percaya bahwa mereka tahu apa yang terjadi, pengalaman web terasa lebih mudah dan lebih menyenangkan.',
    ],
  },
  {
    slug: 'kerja-kreatif',
    number: '06',
    category: 'KREATIF',
    title: 'Belajar dari proses kecil dan terus mencoba tanpa takut gagal',
    summary: 'Semakin banyak eksperimen yang dilakukan, semakin jelas arah yang cocok untuk gaya kerja dan solusi yang ingin dibuat.',
    body: 'Proses kreatif sering kali lebih menarik daripada bentuk akhir yang dicapai. Setiap iterasi membantu kita menyesuaikan ide, menemukan cara yang lebih tepat, dan memahami apa yang harus dibuang.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Orang berkolaborasi di meja kerja dengan ide dan sketsa awal produk',
    readTime: '3 menit baca',
    date: '02 Januari 2026',
    content: [
      'Saya suka menganggap proses kreatif sebagai serangkaian percobaan yang mungkin berhasil atau tidak. Tidak semua ide harus sempurna pada saat pertama. Yang penting adalah konsisten menilai, menguji, dan memperbaiki.',
      'Dalam dunia digital, hal yang sama berlaku untuk desain, content, dan pengembangan produk. Setiap revisi menambahkan pemahaman baru tentang kebutuhan audiens dan arah yang paling masuk akal untuk dikembangkan.',
      'Itu sebabnya saya tetap menyukai pendekatan belajar yang santai tapi terarah. Ketika prosesnya sehat, hasilnya pun lebih mudah berkembang dengan karakter sendiri.',
    ],
  },
]

export function BlogPostPage() {
  const { slug } = useParams()
  const note = notes.find((item) => item.slug === slug)

  if (!note) {
    return (
      <article className="blog-page section-pad" aria-labelledby="blog-not-found-title" data-reveal>
        <div className="blog-page__backdrop" aria-hidden="true" />
        <header className="blog-article__header blog-article__header--empty">
          <p className="eyebrow"><span>404 / CATATAN TIDAK DITEMUKAN</span></p>
          <h1 id="blog-not-found-title">Artikel yang kamu cari belum tersedia.</h1>
          <Link className="text-link" to="/blog">Kembali ke blog <span aria-hidden="true">↗</span></Link>
        </header>
      </article>
    )
  }

  return (
    <article className="blog-page blog-article section-pad" aria-labelledby="blog-post-title" data-reveal>
      <div className="blog-page__backdrop" aria-hidden="true" />

      <header className="blog-article__header">
        <div className="blog-article__meta">
          <span>{note.category}</span>
          <span>{note.date}</span>
          <span>{note.readTime}</span>
        </div>
        <p className="eyebrow"><span>{note.number} / CATATAN</span></p>
        <h1 id="blog-post-title">{note.title}</h1>
        <p className="blog-article__summary">{note.summary}</p>
        <div className="blog-article__actions">
          <Link className="text-link" to="/blog">← Kembali ke blog</Link>
        </div>
      </header>

      <figure className="blog-article__figure">
        <img src={note.image} alt={note.imageAlt} loading="eager" />
      </figure>

      <div className="blog-article__body">
        {note.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <footer className="blog-page__footer">
        <p>CATATAN / {note.number}</p>
        <Link className="text-link" to="/blog">Lihat semua catatan <span aria-hidden="true">↗</span></Link>
      </footer>
    </article>
  )
}

export default function BlogPage() {
  function bendPortrait(event) {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5

    event.currentTarget.style.setProperty('--portrait-tilt-x', `${horizontal * 12}deg`)
    event.currentTarget.style.setProperty('--portrait-tilt-y', `${vertical * -12}deg`)
  }

  function resetPortrait(event) {
    event.currentTarget.style.setProperty('--portrait-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--portrait-tilt-y', '0deg')
  }

  return (
    <article className="blog-page section-pad" aria-labelledby="blog-title" data-reveal>
      <div className="blog-page__backdrop" aria-hidden="true" />
      <div className="blog-page__topline">
        <p className="eyebrow"><span>05 / CATATAN PERSONAL</span></p>
        <span className="blog-page__edition">ADITYA PRATAMA / BLOG</span>
      </div>

      <header className="blog-page__intro">
        <div className="blog-page__intro-copy">
          <h1 className="interior-title" id="blog-title">CATATAN<br /><span>PERJALANAN.</span></h1>
          <p className="blog-page__lede">
            Ruang kecil untuk berbagi cara saya belajar, merancang, dan tumbuh sebagai Frontend Developer.
          </p>
          <div className="blog-page__intro-meta">
            <span>IDE, PROSES, DAN HAL-HAL KECIL</span>
            <a href="#catatan">JELAJAHI CATATAN <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="blog-page__portrait-wrap">
          <img
            className="blog-page__portrait"
            src={animeImage}
            alt="my bini gue"
            onPointerMove={bendPortrait}
            onPointerLeave={resetPortrait}
          />
        </figure>
      </header>

      <div className="blog-page__section-heading" id="catatan">
        <div>
          <p className="eyebrow"><span>01 / HAL YANG SAYA CATAT</span></p>
          <h2>IDE-IDE<br /><span>YANG TUMBUH.</span></h2>
        </div>
        <p>Potongan proses, pelajaran, dan sudut pandang yang terus berubah seiring perjalanan.</p>
        <span className="blog-page__count">{notes.length} CATATAN</span>
      </div>

      <div className="blog-page__list" aria-label="Artikel blog">
        {notes.map((note) => (
          <Link className="blog-note__link" key={note.slug} to={`/blog/${note.slug}`} aria-label={`Baca artikel ${note.title}`}>
            <article className="blog-note">
              <img
                className="blog-note__image"
                src={note.image}
                alt={note.imageAlt}
                loading="lazy"
              />
              <div className="blog-note__topline">
                <span className="blog-note__number">{note.number}</span>
                <span className="blog-note__mark" aria-hidden="true">↗</span>
              </div>
              <div className="blog-note__content">
                <p className="micro-label">{note.category}</p>
                <h2>{note.title}</h2>
                <p className="blog-note__body">{note.summary}</p>
              </div>
              <div className="blog-note__footer">
                <span>{note.category} / {note.number}</span>
                <span aria-hidden="true">✳</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <footer className="blog-page__footer">
        <p>SEDANG MEMBANGUN DAN TERUS BELAJAR.</p>
        <Link className="text-link" to="/kontak">Mulai percakapan <span aria-hidden="true">↗</span></Link>
      </footer>
    </article>
  )
}
