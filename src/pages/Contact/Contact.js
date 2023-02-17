import { useEffect, useState } from "react";
import Menu from "../Home/Menu";
import Footer from "../Home/Footer";
import style from "./Contact.module.scss";
import Header from "../Home/Header";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      fetch("https://homestretch-api.onrender.com/contents/other/contact")
        .then((response) => response.json())
        .then((result) => {
          setContact({
            body: result[0].pages[0].body,
          });
        })
        .catch((error) => console.log("error", error));
    };
    fetchContact();
  }, []);

  const inlineStyle = {
    backgroundImage:
      "linear-gradient(0deg, #00000080, #00000080), url(https://i.ibb.co/w0nv1nn/Hero-section-image-min.png)",
    backgroundColor: "#0C3C69",
    backgroundPosition: "0 -15vw",
    marginBottom: "100px",
  };

  return (
    <div className={style.main}>
      <Header inlineStyle={inlineStyle}>
        <h1 className={style.header_title}>Contact us</h1>
      </Header>
      {!contact && <h2>Loading...</h2>}
      {contact && (
        <div
          dangerouslySetInnerHTML={{ __html: contact.body }}
          className={style.main}
        ></div>
      )}
      <Footer />
    </div>
  );
}
