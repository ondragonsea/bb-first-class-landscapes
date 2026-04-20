const services = [
  {
    title: "Spring Cleanups",
    description:
      "Seasonal yard cleanups to get your property looking neat, refreshed, and ready for the season.",
  },
  {
    title: "Lawn Mowing",
    description:
      "Reliable mowing and routine lawn care that keeps your yard clean, sharp, and well maintained.",
  },
  {
    title: "Driveway Clearing",
    description:
      "Property help for driveways and outdoor access areas when you need fast, practical service.",
  },
  {
    title: "General Landscaping",
    description:
      "Straightforward outdoor property work with care, pride, and attention to detail.",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="siteHeader">
        <div>
          <div className="brand">B&B First Class Landscapes</div>
          <div className="subtle">Rutland, Vermont</div>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="badge">Local landscaping and property services</div>
          <h1>First-class care for your yard and property.</h1>
          <p className="lead">
            We take pride in our work and treat every property like it is our own.
            From spring cleanups to mowing and general outdoor property work, we help
            keep your space looking its best.
          </p>
          <div className="buttons">
            <a className="button primary" href="#contact">Request a Quote</a>
            <a className="button secondary" href="#services">View Services</a>
          </div>
        </div>

        <div className="cardGrid">
          <div className="infoCard">
            <div className="label">Service Area</div>
            <div className="value">Rutland, VT</div>
          </div>
          <div className="infoCard">
            <div className="label">What We Offer</div>
            <div className="value">Cleanups, mowing, property work</div>
          </div>
          <div className="infoCard wide">
            <div className="label">Our Approach</div>
            <div className="value">Best friends that take pride in their work.</div>
          </div>
        </div>
      </section>

      <section id="services" className="section sectionAlt">
        <div className="sectionIntro">
          <h2>Services</h2>
          <p>Simple, dependable outdoor services tailored to your property.</p>
        </div>

        <div className="servicesGrid">
          {services.map((service) => (
            <div className="serviceCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="twoCol">
          <div>
            <h2>About B&B First Class Landscapes</h2>
            <p>
              B&B First Class Landscapes is a local business built around pride,
              reliability, and care for every property. The goal is simple: do solid
              work, communicate clearly, and leave each place looking better than when
              we arrived.
            </p>
          </div>
          <div className="darkCard">
            <h3>Why homeowners call us</h3>
            <ul>
              <li>Careful, hands-on property work</li>
              <li>Friendly local service</li>
              <li>Clean, polished results</li>
              <li>Quotes for seasonal and ongoing work</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="contactCard">
          <div className="sectionIntro">
            <h2>Get a quote</h2>
            <p>
              Reach out to ask about cleanups, mowing, driveway work, or general
              landscaping help. We would be glad to talk through your property needs.
            </p>
          </div>

          <div className="contactGrid">
            <div className="infoCard">
              <div className="label">Phone</div>
              <div className="value">Add phone number</div>
            </div>
            <div className="infoCard">
              <div className="label">Email</div>
              <div className="value">Add email address</div>
            </div>
            <div className="infoCard">
              <div className="label">Facebook</div>
              <div className="value">Find us on Facebook</div>
            </div>
          </div>

          <a
            className="button primary"
            href="https://www.facebook.com/p/BB-First-Class-Landscapes-61568054382492/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Facebook Page
          </a>
        </div>
      </section>
    </main>
  );
}
