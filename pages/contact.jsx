import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              There are multiple ways to contact me. You can either call me,
              write me a mail or direct message on Twitter or LinkedIn. I will
              reach back to you in a minute.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: daniel-koller@gmx.at</li>
              <li className="contact-item">Phone: +436602961666</li>
              <li className="contact-item">Twitter: DanielKoller_</li>
              <li className="contact-item">LinkedIn: danielkoller1</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
