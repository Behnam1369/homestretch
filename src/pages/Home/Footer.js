import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={style.main}>
      <div>
        <div>
          <div className={style.img}></div>
          <p>
            HomeStretch aims to close the disparity gap in homeownership,
            especially among people of color and younger generations
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/career">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQs</Link>
        </div>
        <div>
          <h3>Terms & Policies</h3>
          <Link to="/terms-of-use">Terms of use</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
        </div>
        <div>
          <h3>Subscribe to our news letter</h3>
          <p>
            Get latest information, tips, market trends directly in your inbox.
          </p>
          <form>
            <input type="email" placeholder="Enter your email address here" />
            <button className={style.button}>Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <p>All rights reserved.</p>
        <p>Copyright</p>
        <p>©</p>
        <p>HomeStretch 2023</p>
      </div>
    </div>
  );
}
