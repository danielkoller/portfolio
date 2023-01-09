import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hi, my name is Daniel Koller
            </h1>
            <p className="description">
              I am a former journalist, current content creater and upcoming web
              developer. This is my portfolio site. You can check out all my
              work here. Feel free to contact me. Looking forward to hear from
              you!
            </p>

            <Link href="/contact" className="cta">
              Contact Daniel
            </Link>
          </div>
          <div className="image-wrapper">
            <img id="profile-picture" src="/daniel.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
