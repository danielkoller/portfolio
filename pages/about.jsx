import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I was born in Vienna in 1991 and have spent my life here so far.
              Since childhood I have been interested in storytelling and tech.
              After first work experiences at the radio and various print and
              online media, I was able to find a job at the daily newspaper Der
              Standard. I also worked there during my Bachelor in Journalism and
              Masters in Digital Media Technologies. After several years in tech
              and games reporting, I moved to the start-up company Rendity,
              where I worked as a content creator. Now I would like to develop
              more in the direction of web development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
