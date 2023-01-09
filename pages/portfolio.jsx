import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              Here you can find my former work for DER STANDARD and Rendity
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/article.png" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">Article </h4>
                <div className="portfolio-category">DER STANDARD</div>
              </div>
              <div className="portfolio-item">
                <img src="/podcast.png" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">Corporate Podcast</h4>
                <div className="portfolio-category">Rendity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
