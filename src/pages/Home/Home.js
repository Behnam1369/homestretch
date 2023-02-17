import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import style from "./Home.module.scss";
const inlineStyle = {
  backgroundImage: "url(https://i.ibb.co/YBg3Bmh/Home-page-1.png)",
  backgroundColor: "#0C3C69",
  backgroundSize: "50% auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
};

const features = [
  {
    icon: "https://i.ibb.co/6rGkwgr/Group.png",
    title: "Home Buying Education",
    text: "Homestretch provides first time home buyers with education contents to fill the knowledge gap on the home buying process.",
  },
  {
    icon: "https://i.ibb.co/j3TX8Qf/Group-1.png",
    title: "Home Buying Resources",
    text: "HomeStretch provides a culmination of national and Florida-based resources aimed to eliminate barriers to homeownership for first-time homebuyers.",
  },
  {
    icon: "https://i.ibb.co/ZM1BYBY/Group-2.png",
    title: "Personalized Experience",
    text: "HomeStretch provides personalized recommendations based on your profile.",
  },
];

const defaultTestimonials = [
  {
    photo: "https://thispersondoesnotexist.com/image?v=1",
    name: "Elena Dave",
    text: "HomeStretch is a very resourceful tool for first-time homebuyers. I was able learn about the homebuying process easily.",
    showing: true,
  },
  {
    photo: "https://thispersondoesnotexist.com/image?v=2",
    name: "Jackson Alvarez",
    text: "HomeStretch is a very resourceful tool for first-time homebuyers. I was able learn about the homebuying process easily.",
    showing: false,
  },
  {
    photo: "https://thispersondoesnotexist.com/image?v=3",
    name: "Cengiz Hakan",
    text: "HomeStretch is a very resourceful tool for first-time homebuyers. I was able learn about the homebuying process easily.",
    showing: false,
  },
];

const news = [
  {
    photo: "https://i.ibb.co/C0QS3F7/Blog-post1.png",
    title: "How to Buy a Home in the U.S. as a Non-U.S. Citizen",
    url: "https://www.bankrate.com/real-estate/buying-a-home-as-a-non-resident/",
  },
  {
    photo: "https://i.ibb.co/ZWpf6pN/Blog-post-2.png",
    title: "What Factors Affect the Housing Market?",
    url: "https://www.investopedia.com/articles/mortages-real-estate/11/factors-affecting-real-estate-market.asp",
  },
  {
    photo: "https://i.ibb.co/3SvnL2g/Quick-guide-to-home-ownership.jpg",
    title: "A quick Guide to Owning a Home as a First Time Buyer",
    url: "https://www.investopedia.com/updates/first-time-home-buyer/",
  },
];

export default function Home() {
  const [testimonial, setTestimonial] = useState(defaultTestimonials);

  const setShowingIndex = (index) => {
    setTestimonial(testimonial.map((item) => ({ ...item, showing: false })));
    const newTestimonial = testimonial.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          showing: true,
        };
      } else {
        return { ...item, showing: false };
      }
    });
    setTestimonial(newTestimonial);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      let showingIndex = testimonial.findIndex((item) => item.showing);
      let nextIndex =
        showingIndex + 1 === testimonial.length ? 0 : showingIndex + 1;
      setShowingIndex(nextIndex);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [testimonial]);

  return (
    <div className={style.main}>
      <Header inlineStyle={inlineStyle}>
        <h1 className={style.header_title}>Closing The Gap to Homeownership</h1>
        <p className={style.header_paragraph}>
          Discover your dream home with guidance and ease - your journey starts
          here!
        </p>
      </Header>
      <section className={style.features}>
        <h2>Why Choose Us?</h2>
        {features.map((feature) => (
          <div key={feature.title} className={style.feature}>
            <div>
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>
      <section className={style.slogan}>
        <h2>Empowering first-time buyers to find their perfect home</h2>
      </section>
      <section className={style.content}>
        <img
          src="https://i.ibb.co/X4RPcZv/First-time-homebuyer-min.jpg"
          alt="First Time Home Buyer?"
        />
        <div>
          <h2>First Time Home Buyer?</h2>
          <p>
            We’re bridging the knowlegde gap in the home buying process by
            providing with important information to educate yourelf on the home
            buying process.
          </p>
          <button className={style.button}>Learn More</button>
        </div>
      </section>
      <section className={style.education}>
        <div>
          <h2>HomeStretch Education</h2>
          <p>
            We are bridging the knowledge gap for new home buyers with our
            learning center. Home buyers Get access to a great deal of
            information on our learning center to educate themselves on the
            homebuying process.
          </p>
          <Link to="/contents/education" className={style.button}>
            Education Center
          </Link>
        </div>
        <img
          src="https://i.ibb.co/LPyXjW2/Education-center-image-min.jpg"
          alt="Home Stretch Learning"
        />
      </section>
      <section className={style.testimonial}>
        <div>
          <h2>What they’re saying</h2>
          <p>See what Homestretch users are saying</p>
        </div>
        {testimonial
          .filter((testimony) => testimony.showing)
          .map((testimony) => (
            <div key={testimony.name} className={style.testimony}>
              <img src={testimony.photo} alt={testimony.name} />
              <div>
                <div>
                  <p>“</p>
                  <p>{testimony.text}</p>
                  <p>„</p>
                </div>
                <h3>{testimony.name}</h3>
              </div>
            </div>
          ))}
        <div className={style.slide}>
          {testimonial.map((testimony, i) => (
            <div
              key={testimony.name}
              className={style.testimony}
              style={{
                backgroundColor: testimony.showing ? "#1d5b96" : "#f2f6ff",
              }}
              onClick={() => setShowingIndex(i)}
            ></div>
          ))}
        </div>
      </section>
      <section className={style.news}>
        <div>
          <h2>Latest News</h2>
          <p>
            Stay on top of the latest news and trends in first-time
            homeownership
          </p>
          <div className={style.cards}>
            {news.map((el) => (
              <a href={el.url} className={style.card} key={el.photo}>
                <img src={el.photo} alt={el.title} />
                <h3>{el.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
