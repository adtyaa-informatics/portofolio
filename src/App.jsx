import { useEffect, useRef, useState } from 'react'
import {
  HashRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import p1Image from './assets/p1.jpg'
import p2Image from './assets/p2.jpg'
import p3Image from './assets/p3.jpg'
import p4Image from './assets/p4.jpg'
import profileImage from './assets/profile.png'
import schoolProfileImage from './assets/profile-smk.jpg'
import schoolHeroImage from './assets/pict1.jpeg'
import schoolPhotoOne from './assets/pict2.jpg'
import schoolPhotoTwo from './assets/pict3.jpg'
import schoolPhotoThree from './assets/pict4.jpg'
import logoImage from './assets/logo-a.svg'
import BlogPage, { BlogPostPage } from './BlogPage'
import './App.css'

const profile = {
  name: 'Aditya Pratama',
  role: 'Frontend Developer',
  location: 'Indonesia',
  email: 'adityapratama.tech.id@gmail.com',
  instagram: '@_hereadtyaa',
}

const filters = ['Semua', 'Identitas', 'Kampanye', 'Digital']

const projects = [
  {
    id: 'pasar',
    number: '01',
    title: 'ARUS KEUANGAN',
    category: 'Identitas',
    discipline: 'IDENTITAS VISUAL',
    image: p1Image,
    imageAlt: 'Dashboard keuangan dengan ringkasan saldo dan grafik transaksi',
    imagePosition: 'center 54%',
    color: 'lime',
    description:
      'Dashboard keuangan yang merangkum saldo, pemasukan, dan pengeluaran dalam grafik agar kondisi finansial mudah dipantau.',
    details: ['Sistem identitas', 'Arah tipografi', 'Eksplorasi kemasan'],
  },
  {
    id: 'kota',
    number: '02',
    title: 'PAPAN KERJA TIM',
    category: 'Kampanye',
    discipline: 'KAMPANYE KULTUR',
    image: p2Image,
    imageAlt: 'Papan tugas tim digital dengan kolom status pekerjaan',
    imagePosition: 'center 55%',
    color: 'coral',
    description:
      'Board kolaborasi yang mengatur tugas tim per tahap, dari pekerjaan baru hingga selesai, agar progres dan tanggung jawab mudah dipantau.',
    details: ['Poster seri', 'Sistem kampanye', 'Adaptasi media sosial'],
  },
  {
    id: 'frekuensi',
    number: '03',
    title: 'ETALASE DIGITAL',
    category: 'Digital',
    discipline: 'ARAH ART DIGITAL',
    image: p3Image,
    imageAlt: 'Toko online dengan katalog produk dan tampilan belanja digital',
    imagePosition: 'center 48%',
    color: 'blue',
    description:
      'Toko online yang menampilkan katalog, promo, pilihan produk, dan alur checkout dalam satu pengalaman belanja digital.',
    details: ['Art direction', 'Eksplorasi antarmuka', 'Sistem grafis digital'],
  },
  {
    id: 'ruang',
    number: '04',
    title: 'PUSAT BANTUAN',
    category: 'Identitas',
    discipline: 'STUDI RUANG',
    image: p4Image,
    imageAlt: 'Dashboard dukungan pelanggan dengan daftar tiket bantuan',
    imagePosition: 'center 50%',
    color: 'lavender',
    description:
      'Dashboard layanan pelanggan untuk memprioritaskan tiket, melihat status penanganan, dan mengetahui agen yang bertanggung jawab.',
    details: ['Penamaan konseptual', 'Identitas ruang', 'Aplikasi wayfinding'],
  },
]

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [openProject, setOpenProject] = useState(null)
  const [heroZoomed, setHeroZoomed] = useState(false)
  const [heroColorActive, setHeroColorActive] = useState(false)
  const [heroPointer, setHeroPointer] = useState({ x: '50%', y: '50%' })

  const visibleProjects =
    activeFilter === 'Semua'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  function toggleProject(projectId) {
    setOpenProject((currentProject) =>
      currentProject === projectId ? null : projectId,
    )
  }

  function updateHeroSpot(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    setHeroPointer({
      x: `${event.clientX - bounds.left}px`,
      y: `${event.clientY - bounds.top}px`,
    })
  }

  return (
    <>
        <section className="hero section-pad" id="beranda" aria-labelledby="hero-title">
          <div className="hero__topline">
            <span>INDEPENDEN / TERBUKA UNTUK IDE BARU</span>
            <span className="hero__issue"> <i aria-hidden="true" /></span>
          </div>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow"><span>PORTOFOLIO</span> — {profile.role}</p>
              <h1 id="hero-title">
                BENTUK
                <span className="hero__second-line">PUNYA</span>
                <span className="hero__third-line">SIKAP<span className="hero__period">.</span></span>
              </h1>
              <div className="hero__bottomline">
                <p>Ide yang jelas. Visual yang berani.<br />Ruang untuk hal-hal yang belum ada.</p>
                <a className="round-link" href="#karya" aria-label="Lihat karya pilihan">
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <figure className={`hero-art${heroZoomed ? ' is-zoomed' : ''}`}>
              <button
                className={`hero-art__image-button${heroColorActive ? ' has-color-spot' : ''}`}
                type="button"
                aria-label={heroZoomed ? 'Kembalikan ukuran foto' : 'Perbesar foto'}
                aria-pressed={heroZoomed}
                style={{ '--spot-x': heroPointer.x, '--spot-y': heroPointer.y }}
                onPointerEnter={() => setHeroColorActive(true)}
                onPointerMove={updateHeroSpot}
                onPointerLeave={() => setHeroColorActive(false)}
                onFocus={() => setHeroColorActive(true)}
                onBlur={() => setHeroColorActive(false)}
                onClick={() => setHeroZoomed((zoomed) => !zoomed)}
              >
                <img
                  className="hero-art__image--mono"
                  src={profileImage}
                  alt="Potret Aditya Pratama mengenakan kemeja hitam dengan latar merah"
                  fetchPriority="high"
                />
                <img
                  className="hero-art__image--color"
                  src={profileImage}
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <figcaption>CATATAN VISUAL / NO. 1</figcaption>
            </figure>
          </div>

          <div className="hero__identity">
            <div><span className="micro-label">NAMA</span><strong>{profile.name}</strong></div>
            <div><span className="micro-label">BIDANG</span><strong>{profile.role}</strong></div>
            <div><span className="micro-label">BERBASIS DI</span><strong>{profile.location}</strong></div>
            <span className="hero__coordinates" aria-hidden="true">-06.20 / 106.81</span>
          </div>
        </section>

        <div className="ticker" aria-label="Eksplorasi visual dan arah yang berani">
          <div className="ticker__track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span className="ticker__item" key={index}>
                IDE / BENTUK / SIKAP <b>+</b> VISUAL YANG BERNYALI <b>+</b>
              </span>
            ))}
          </div>
        </div>

        <section className="work section-pad" id="karya" aria-labelledby="work-title" data-reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>01 / ARSIP PILIHAN</span></p>
              <h2 id="work-title">KARYA<br /><span>YANG BICARA.</span></h2>
            </div>
            <p className="section-heading__aside">Beberapa arah visual<br />dari meja eksplorasi.</p>
          </div>

          <div className="work-toolbar">
            <div className="filter-list" role="group" aria-label="Filter kategori karya">
              {filters.map((filter) => (
                <button
                  className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => {
                    setActiveFilter(filter)
                    setOpenProject(null)
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="work-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, '0')} / STUDI KONSEPTUAL
            </span>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => {
              const isOpen = openProject === project.id
              return (
                <article
                  className={`project-card project-card--${project.color} project-card--${index % 2 === 0 ? 'wide' : 'narrow'}`}
                  key={project.id}
                  data-reveal
                  style={{ '--reveal-delay': `${(index % 4) * 75}ms` }}
                >
                  <div className="project-card__image-wrap">
                    <img
                      className="project-card__image"
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      style={{ objectPosition: project.imagePosition }}
                    />
                    <span className="project-card__number">/{project.number}</span>
                    <span className="project-card__concept">STUDI KONSEPTUAL</span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span>{project.discipline}</span>
                      <span>{project.category}</span>
                    </div>
                    <div className="project-card__title-row">
                      <h3><Link className="project-title-link" to={`/karya/${project.id}`}>{project.title}</Link></h3>
                      <button
                        className="project-toggle"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`detail-${project.id}`}
                        aria-label={`${isOpen ? 'Tutup' : 'Buka'} detail ${project.title}`}
                        onClick={() => toggleProject(project.id)}
                      >
                        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="project-card__detail" id={`detail-${project.id}`}>
                        <p>{project.description}</p>
                        <ul aria-label="Ruang eksplorasi">
                          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                        </ul>
                        <Link className="project-card__readmore" to={`/karya/${project.id}`}>
                          Buka studi lengkap <span aria-hidden="true">↗</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
          <p className="concept-note"><span aria-hidden="true">*</span> Semua karya di atas adalah studi konseptual, bukan proyek klien.</p>
        </section>

        <section className="about" id="tentang" aria-labelledby="about-title" data-reveal>
          <div className="about__index">02 / CARA PANDANG</div>
          <div className="about__content">
            <p className="eyebrow"><span>BUKAN CUMA SOAL BAGUS</span></p>
            <h2 id="about-title">DESAIN HARUS<br />PUNYA <span>ALASAN.</span></h2>
            <div className="about__bottom">
              <p className="about__statement">Saya percaya bentuk yang kuat berawal dari pertanyaan yang tepat. Dari sana, ide bergerak menjadi sistem visual yang jujur, tajam, dan punya tempat di dunia nyata.</p>
              <div className="about__services">
                <span className="micro-label">RUANG EKSPLORASI</span>
                <ul>
                  <li>Identitas visual <b>01</b></li>
                  <li>Arah art &amp; kampanye <b>02</b></li>
                  <li>Desain digital <b>03</b></li>
                  <li>Eksperimen grafis <b>04</b></li>
                </ul>
              </div>
            </div>
            <Link className="text-link" to="/tentang">Baca cara kerja <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="about__seal" aria-hidden="true">IDE<br />JADI<br />NYATA</div>
        </section>

        <ContactContent />
        <SchoolPage embedded />
    </>
  )
}

function SiteHeader({ darkMode, onToggleTheme }) {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Kembali ke beranda">
        <img className="wordmark__stamp" src={logoImage} alt="" aria-hidden="true" />
        <span>{profile.name}</span>
      </Link>
      <p className="header-note"></p>
      <div className="site-header__actions">
        <nav className="main-nav" aria-label="Navigasi utama">
          <NavLink to="/karya">Karya <span></span></NavLink>
          <NavLink to="/tentang">Tentang <span></span></NavLink>
          <NavLink to={{ pathname: '/', hash: '#kontak' }}>Kontak <span></span></NavLink>
          <NavLink to="/sekolah">Sekolah <span></span></NavLink>
          <NavLink to="/blog">Blog <span></span></NavLink>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          aria-pressed={darkMode}
          title={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          onClick={onToggleTheme}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {darkMode ? (
              <path d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" to="/">{profile.name}<span> / 2026</span></Link>
      <a className="back-top" href="#konten">KEMBALI KE ATAS <span aria-hidden="true">↑</span></a>
    </footer>
  )
}

function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const visibleProjects = activeFilter === 'Semua'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="archive-page section-pad" aria-labelledby="archive-title">
      <div className="archive-page__intro" data-reveal>
        <p className="eyebrow"><span>01 / ARSIP LENGKAP</span></p>
        <h1 className="interior-title" id="archive-title">SEMUA<br /><span>ARAH.</span></h1>
        <p className="archive-page__lede">Empat studi konsep. Beberapa kemungkinan yang sengaja dibiarkan terbuka.</p>
      </div>
      <div className="archive-toolbar">
        <div className="filter-list" role="group" aria-label="Filter kategori karya">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="work-count" aria-live="polite">{String(visibleProjects.length).padStart(2, '0')} / STUDI</span>
      </div>
      <div className="archive-grid">
        {visibleProjects.map((project, index) => (
          <Link
            className="archive-card"
            key={project.id}
            to={`/karya/${project.id}`}
            data-reveal
            style={{ '--reveal-delay': `${(index % 4) * 75}ms` }}
          >
            <span className="archive-card__image">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <span className="project-card__number">/{project.number}</span>
              <span className="project-card__concept">STUDI KONSEPTUAL</span>
            </span>
            <span className="archive-card__meta">{project.discipline} / {project.category}</span>
            <span className="archive-card__title">{project.title}<span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
      <p className="concept-note"><span aria-hidden="true">*</span> Semua karya di atas adalah studi konseptual, bukan proyek klien.</p>
    </section>
  )
}

function AboutPage() {
  return (
    <article className="about-page section-pad" data-reveal>
      <p className="eyebrow"><span>02 / CARA PANDANG</span></p>
      <h1 className="interior-title">DESAIN<br />PUNYA <span>ALASAN.</span></h1>
      <div className="about-page__lead">
        <p>Saya percaya bentuk yang kuat berawal dari pertanyaan yang tepat.</p>
        <span className="about-page__stamp" aria-hidden="true">IDE<br />JADI<br />NYATA</span>
      </div>
      <div className="about-page__columns">
        <section>
          <span className="micro-label">01 / PENDIRIAN</span>
          <p>Desain bukan lapisan akhir. Ia adalah cara menyusun informasi, memberi arah, dan membuat sebuah gagasan terasa hadir. Saya tertarik pada karya yang punya alasan sekaligus berani terlihat.</p>
        </section>
        <section>
          <span className="micro-label">02 / PROSES</span>
          <p>Setiap eksplorasi dimulai dari konteks, bukan dekorasi. Riset, percakapan, dan uji bentuk membantu menemukan sistem visual yang tepat guna dan tidak kehilangan karakter.</p>
        </section>
      </div>
      <div className="about-page__services">
        <span className="micro-label">RUANG EKSPLORASI</span>
        <ul>
          <li>Identitas visual <b>01</b></li>
          <li>Arah art &amp; kampanye <b>02</b></li>
          <li>Desain digital <b>03</b></li>
          <li>Eksperimen grafis <b>04</b></li>
        </ul>
      </div>
      <Link className="text-link" to="/karya">Lihat studi konsep <span aria-hidden="true">↗</span></Link>
    </article>
  )
}

function SchoolPage({ embedded = false }) {
  const Title = embedded ? 'h2' : 'h1'
  const [activePhoto, setActivePhoto] = useState(0)
  const schoolPhotos = [
    {
      src: schoolPhotoOne,
      alt: 'Dokumentasi kegiatan siswa di sekolah',
      caption: 'KEGIATAN SISWA / 01',
    },
    {
      src: schoolPhotoTwo,
      alt: 'Potret siswa di lingkungan sekolah',
      caption: 'ARSIP SISWA / 02',
    },
    {
      src: schoolPhotoThree,
      alt: 'Dokumentasi suasana sekolah',
      caption: 'SUASANA SEKOLAH / 03',
    },
  ]

  function showPhoto(offset) {
    setActivePhoto((currentPhoto) =>
      (currentPhoto + offset + schoolPhotos.length) % schoolPhotos.length,
    )
  }

  return (
    <article className="school-page section-pad" aria-labelledby="school-title" data-reveal>
      <section className="school-page__hero" aria-labelledby="school-title">
        <img className="school-page__hero-image" src={schoolHeroImage} alt="" aria-hidden="true" />
        <div className="school-page__hero-shade" />
        <div className="school-page__topline">
          <p className="eyebrow"><span>04 / RIWAYAT PENDIDIKAN</span></p>
          <span className="school-page__index">ARSIP / 1</span>
        </div>
        <div className="school-page__copy">
          <Title className="interior-title school-page__title" id="school-title">
            JEJAK<br /><span>PENDIDIKAN.</span>
          </Title>
          <p className="school-page__name">SMK Informatika Amanah Bangsa</p>
          <p className="school-page__statement">
            Perjalanan pendidikan Aditya Pratama di bidang Teknik Jaringan Komputer dan Telekomunikasi.
          </p>
          <Link className="text-link" to="/tentang">
            Kenali cara pandang <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <div className="school-page__student">
        <figure className="school-profile">
          <img
            src={schoolProfileImage}
            alt="Potret Aditya Pratama mengenakan seragam sekolah"
            loading="lazy"
          />
          <figcaption>PROFIL / ADITYA PRATAMA</figcaption>
        </figure>
        <section className="school-page__identity" aria-label="Identitas siswa">
          <div>
            <span className="micro-label">NAMA SISWA</span>
            <p>Aditya Pratama</p>
          </div>
          <div>
            <span className="micro-label">KELAS</span>
            <p>XII TJKT 1</p>
          </div>
          <div>
            <span className="micro-label">JURUSAN</span>
            <p>Teknik Jaringan Komputer dan Telekomunikasi</p>
          </div>
        </section>
      </div>
      <section
        className="school-gallery"
        aria-label="Galeri foto sekolah"
        aria-roledescription="carousel"
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            showPhoto(1)
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            showPhoto(-1)
          }
        }}
      >
        <div className="school-gallery__heading">
          <div>
            <p className="eyebrow"><span>ARSIP VISUAL</span></p>
            <h3>GALERI<br /><span>SEKOLAH.</span></h3>
          </div>
          <span className="school-gallery__counter" aria-live="polite">
            {String(activePhoto + 1).padStart(2, '0')} / {String(schoolPhotos.length).padStart(2, '0')}
          </span>
        </div>
        <div className="school-gallery__viewport" aria-live="polite">
          {schoolPhotos.map((photo, index) => (
            <figure
              className={`school-gallery__slide${index === activePhoto ? ' is-active' : ''}`}
              key={photo.src}
              aria-hidden={index !== activePhoto}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="school-gallery__controls">
          <div className="school-gallery__dots" aria-label="Pilih foto galeri">
            {schoolPhotos.map((photo, index) => (
              <button
                className={`school-gallery__dot${index === activePhoto ? ' is-active' : ''}`}
                key={photo.src}
                type="button"
                aria-label={`Tampilkan foto ${index + 1}`}
                aria-pressed={index === activePhoto}
                onClick={() => setActivePhoto(index)}
              />
            ))}
          </div>
          <div className="school-gallery__arrows">
            <button type="button" aria-label="Foto sebelumnya" onClick={() => showPhoto(-1)}>←</button>
            <button type="button" aria-label="Foto berikutnya" onClick={() => showPhoto(1)}>→</button>
          </div>
        </div>
      </section>
    </article>
  )
}

function ContactMenu({ compact = false }) {
  const instagramUsername = profile.instagram.replace(/^@/, '')
  const emailSubject = encodeURIComponent('Obrolan kolaborasi')

  return (
    <nav
      className={`contact-menu${compact ? ' contact-menu--compact' : ''}`}
      aria-label="Pilih cara menghubungi"
    >
      <a className="contact-menu__item" href={`mailto:${profile.email}?subject=${emailSubject}`}>
        <span className="contact-menu__channel">01 / EMAIL</span>
        <strong>KIRIM EMAIL</strong>
        <span className="contact-menu__value">{profile.email}</span>
        <span className="contact-menu__arrow" aria-hidden="true">↗</span>
      </a>
      <a
        className="contact-menu__item contact-menu__item--instagram"
        href={`https://ig.me/m/${instagramUsername}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-menu__channel">02 / INSTAGRAM</span>
        <strong>KIRIM DM</strong>
        <span className="contact-menu__value">{profile.instagram}</span>
        <span className="contact-menu__arrow" aria-hidden="true">↗</span>
      </a>
    </nav>
  )
}

function ContactContent() {
  const [draftMessage, setDraftMessage] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'out', text: 'Halo! Apa kabar? Ada yang bisa aku bantu hari ini?' },
    { sender: 'out', text: 'Kalau ada ide atau kebutuhan proyek, ceritakan saja. Aku siap ngobrol!' },
    { sender: 'in', text: 'Hai Aditya! Aku ingin tanya soal proyek yang sedang aku rencanakan.' },
  ])

  const sendMessage = (event) => {
    event.preventDefault()
    const message = draftMessage.trim()

    if (!message) {
      return
    }

    setMessages((currentMessages) => [...currentMessages, { sender: 'in', text: message }])
    setDraftMessage('')
    window.open(
      `https://wa.me/6289665173014?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="contact-page section-pad" id="kontak" data-reveal aria-labelledby="contact-page-title">
      <p className="eyebrow"><span>03 / OBROLAN BERIKUTNYA</span></p>
      <h1 className="interior-title" id="contact-page-title">ADA IDE?<br /><span>MARI BENTUK.</span></h1>
      <div className="contact-page__body">
        <div className="contact-page__content">
          <p className="contact-page__lede">Ruang untuk kolaborasi terbuka. Ceritakan konteks, tantangan, atau ide yang belum punya bentuk.</p>
          <ContactMenu />
        </div>

        <aside className="chat-preview" aria-label="Pratinjau obrolan WhatsApp">
          <div className="chat-preview__header">
            <div className="chat-preview__user">
              <img src={profileImage} alt="" />
              <div>
                <strong>Aditya Pratama</strong>
                <span>online</span>
              </div>
            </div>
            <span className="chat-preview__status" aria-hidden="true">●</span>
          </div>

          <div className="chat-preview__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`chat-message chat-message--${message.sender}`}
                key={`${message.sender}-${index}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className="chat-preview__composer" aria-label="Tulis pesan WhatsApp" onSubmit={sendMessage}>
            <span aria-hidden="true">😊</span>
            <input
              type="text"
              value={draftMessage}
              onChange={(event) => setDraftMessage(event.target.value)}
              aria-label="Tulis pesan untuk Aditya"
              placeholder="Tulis pesan..."
            />
            <button type="submit" aria-label="Kirim pesan ke WhatsApp">➤</button>
          </form>
        </aside>
      </div>
      <div className="contact-page__note">
        <span aria-hidden="true">*</span>
        <p>Pesan akan membuka percakapan WhatsApp dengan Aditya di nomor 089665173014.</p>
      </div>
    </section>
  )
}

function ContactPage() {
  return <ContactContent />
}

function ProjectPage() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return <NotFoundPage />
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <article className="project-page section-pad" data-reveal>
      <Link className="project-page__back" to="/karya">← KEMBALI KE ARSIP</Link>
      <div className="project-page__heading">
        <p className="eyebrow"><span>{project.number} / {project.discipline}</span></p>
        <h1 className="interior-title">{project.title}</h1>
        <span className="project-card__concept">STUDI KONSEPTUAL</span>
      </div>
      <figure className="project-page__figure">
        <img src={project.image} alt={project.imageAlt} fetchPriority="high" />
        <figcaption>{project.discipline} / EKSPLORASI {project.category.toUpperCase()}</figcaption>
      </figure>
      <div className="project-page__body">
        <div>
          <span className="micro-label">ARAH</span>
          <p>{project.description}</p>
        </div>
        <div>
          <span className="micro-label">RUANG EKSPLORASI</span>
          <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </div>
      </div>
      <div className="project-page__next">
        <span className="micro-label">LANJUT KE STUDI BERIKUTNYA</span>
        <Link to={`/karya/${nextProject.id}`}>{nextProject.title} <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  )
}

function NotFoundPage() {
  return (
    <section className="not-found section-pad" data-reveal>
      <p className="eyebrow"><span>404 / SALAH ARAH</span></p>
      <h1 className="interior-title">HALAMAN<br /><span>TAK ADA.</span></h1>
      <Link className="text-link" to="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

function AppLayout() {
  const location = useLocation()
  const themeAnimationTimeout = useRef(0)
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  )
  const [introVisible, setIntroVisible] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [introLeaving, setIntroLeaving] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    window.clearTimeout(themeAnimationTimeout.current)
    root.classList.remove('is-theme-switching')

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      void root.offsetWidth
      root.classList.add('is-theme-switching')
      themeAnimationTimeout.current = window.setTimeout(() => {
        root.classList.remove('is-theme-switching')
      }, 520)
    }

    setDarkMode((current) => !current)
  }

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [darkMode])

  useEffect(() => () => {
    window.clearTimeout(themeAnimationTimeout.current)
    document.documentElement.classList.remove('is-theme-switching')
  }, [])

  useEffect(() => {
    if (!introVisible) {
      return undefined
    }

    const leaveTimer = window.setTimeout(() => setIntroLeaving(true), 2650)
    const removeTimer = window.setTimeout(() => setIntroVisible(false), 3070)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [introVisible])

  useEffect(() => {
    window.scrollTo(0, 0)
    const elements = document.querySelectorAll('[data-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
      element.classList.add('reveal-ready')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    const project = projects.find((item) => location.pathname === `/karya/${item.id}`)
    const pageTitles = {
      '/': 'Aditya Pratama — Frontend Developer — Portofolio ',
      '/karya': 'Arsip Karya — Portofolio ',
      '/tentang': 'Tentang — Portofolio ',
      '/sekolah': 'Pendidikan — Portofolio ',
      '/kontak': 'Kontak — Portofolio ',
      '/blog': 'Catatan Perjalanan — Aditya Pratama',
    }

    if (location.pathname.startsWith('/blog/')) {
      document.title = 'Catatan Blog — Aditya Pratama'
      return
    }

    document.title = project ? `${project.title} — Portofolio ` : pageTitles[location.pathname] || 'Halaman tidak ditemukan — Portofolio '
  }, [location.pathname])

  return (
    <>
      {introVisible && (
        <div
          className={`site-intro${introLeaving ? ' is-leaving' : ''}`}
          aria-hidden="true"
        >
          <div className="site-intro__topline">
            <img className="site-intro__mark" src={logoImage} alt="" />
            <span>ADITYA PRATAMA</span>
            <span>2026</span>
          </div>
          <div className="site-intro__center">
            <div className="site-intro__copy">
              <p className="site-intro__eyebrow">FRONTEND DEVELOPER / INDONESIA</p>
              <div className="site-intro__title">
                <span className="site-intro__line site-intro__line--solid">BENTUK</span>
                <span className="site-intro__line">PUNYA SIKAP<span className="site-intro__period">.</span></span>
              </div>
              <p className="site-intro__descriptor">MERANGKAI IDE MENJADI PENGALAMAN DIGITAL.</p>
            </div>
            <figure className="site-intro__portrait">
              <img src={profileImage} alt="" />
              <figcaption>ADITYA / PROFILE 1</figcaption>
            </figure>
          </div>
          <div className="site-intro__footer">
            <span>DESAIN &amp; PENGEMBANGAN WEB</span>
            <span>MEMUAT <i aria-hidden="true" /></span>
            <div className="site-intro__progress" />
          </div>
        </div>
      )}
      <div className="site-shell">
        <a className="skip-link" href="#konten">Lewati ke konten</a>
        <SiteHeader darkMode={darkMode} onToggleTheme={toggleTheme} />
        <main id="konten" className="route-content" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/karya" element={<WorksPage />} />
            <Route path="/karya/:projectId" element={<ProjectPage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/sekolah" element={<SchoolPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  )
}

export default App
