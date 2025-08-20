import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <Link
          href="/"
          className="logo-link"
          title="eDesign House — Secure Software and Cloud Solutions"
        >
          <Image
            src="/imgs/logo.svg"
            alt="eDesign House Logo"
            className="logo"
            width={43}
            height={30}
          />
        </Link>
        <nav>
          <Link
            href="https://jobs.gusto.com/boards/edesign-house-c250e020-e0dd-401a-b1eb-e7bac6ada5b9"
            className="careers-btn"
            title="Careers at eDesign House"
            target="_blank"
            rel="noopener"
          >
            Careers
          </Link>
        </nav>
      </header>
      <main role="main"
        className="wrap">
        <h1 className="brand">eDesign House</h1>
        <p className="tagline">Engineering trust. Empowering progress.</p>
        <p className="sub">We are a software-driven company building secure, scalable technologies that power government, enterprise, and everyday people. From e-commerce to events and mission solutions, we connect people through modern software.</p>

        <div className="products">
          <h2 className="products-title">
            <span className="icon">🌴</span> What We’ve Built
          </h2>
          <div className="products-links">
            <Link href="https://shoejunkyz.com"
              target="_blank"
              title="Shoe Junkyz – Sneaker marketplace and community app"
              rel="noopener">Shoe Junkyz</Link>
            <Link href="https://popupshop.app"
              target="_blank"
              title="POP-UP SHOP – Discover and share local events instantly"
              rel="noopener">POP-UP SHOP</Link>
          </div>
        </div>
      </main>
      <footer className="foot">© <span id="year">{year}</span> eDesign House · Washington, DC </footer>
    </>
  );
}
