import './App.css'

function App() {
  return (
    <div className="website">

      {/* Navigation bar */}
      <header className="navbar">
        <a href="#" className="logo">✦ VÉLORA</a>

        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#collections">Shop</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-icons">
          <span>⌕</span>
          <span>♡</span>
          <span>☰</span>
        </div>
      </header>

      {/* Hero section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">FASHION • STYLE • CONFIDENCE</p>

            <h1>VÉLORA</h1>

            <h2>Wear Your Presence.</h2>

            <p className="hero-description">
              Explore our latest collection of contemporary
              fashion designed for the bold, the classy and you.
            </p>

            <div className="hero-buttons">
              <a href="#collections" className="shop-button">
                Shop Collection <span>→</span>
              </a>

              <a href="#about" className="learn-button">
                Learn More
              </a>
            </div>

            <p className="trust-text">
              ✦ Carefully selected styles. Made to stand out.
            </p>
          </div>

          <div className="hero-image"></div>
        </section>

        {/* Collections section */}
        <section className="collections" id="collections">
          <div className="section-heading">
            <span></span>
            <h2>Our Collections</h2>
            <span></span>
          </div>

          <div className="collection-grid">
            <article className="collection-card">
              <div className="collection-image image-one"></div>
              <h3>New Arrivals</h3>
              <p>Discover the latest styles</p>
            </article>

            <article className="collection-card">
              <div className="collection-image image-two"></div>
              <h3>Ready to Wear</h3>
              <p>Style for every occasion</p>
            </article>

            <article className="collection-card">
              <div className="collection-image image-three"></div>
              <h3>Statement Pieces</h3>
              <p>Make every outfit count</p>
            </article>
          </div>
        </section>
      </main>

    </div>
  )
}

export default App