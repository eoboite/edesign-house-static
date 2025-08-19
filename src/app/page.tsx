export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header className="header">
        <a
          href="/"
          className="logo-link"
          title="eDesign House — Secure Software and Cloud Solutions"
        >
          <img
            src="/imgs/logo.svg"
            alt="eDesign House Logo"
            className="logo"
          />
        </a>
        <nav>
          <a
            href="https://jobs.gusto.com/boards/edesign-house-c250e020-e0dd-401a-b1eb-e7bac6ada5b9"
            className="careers-btn"
            title="Careers at eDesign House"
          >
            Careers
          </a>
        </nav>
      </header>

      <section className="hero">
        <h1>eDesign House</h1>
        <p className="sub">
          We are a software-driven company building secure, scalable
          technologies that power government, enterprise, and everyday people.
          From e-commerce to events and mission solutions, we connect people
          through modern software.
        </p>

        <div className="products">
          <h2>
            🌴 What We’ve Built
          </h2>
          <ul>
            <li>
              <a
                href="https://shoejunkyz.com"
                title="Shoe Junkyz App — Sneakers and Streetwear Marketplace"
                className="chalk-underline"
              >
                Shoe Junkyz
              </a>
            </li>
            <li>
              <a
                href="https://popupshop.app"
                title="POP-UP SHOP App — Discover and Share Pop-Up Events"
                className="chalk-underline"
              >
                POP-UP SHOP
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; {year} eDesign House. All rights reserved.</p>
      </footer>
    </main>
  );
}
