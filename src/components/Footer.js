import React from "react";
import "./Footer.css";
import iconLogo from "../assets/images/logo_investhub_footer.webp";
import iconFB from "../assets/images/Sosmed_FB.webp";
import iconWeb from "../assets/images/Sosmed_Web.webp";
import iconLinkedln from "../assets/images/Sosmed_Linkedln.webp";
import iconInsta from "../assets/images/Sosmed_Instagram.webp";
import iconBe from "../assets/images/Sosmed_Be.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-widget">
          <div className="footer-logo">
            <img
              src={iconLogo}
              className="img-logo-footer"
              alt="img-logo-footer"
            />
          </div>
          <div className="text-contact">{"Contact Us"}</div>
          <div className="text-address-idx">
            {
              "Indonesia Stock Exchange Building, Tower 1, 6th FloorJl. Jend. Sudirman Kav 52-53 Jakarta Selatan 12190, Indonesia"
            }
          </div>
          <div className="text-emailfooter-idx">
            {"Email: contactcenter@idx.co.id"}
          </div>
          <div className="group-btn-sosmed-footer">
            <div className="btn-sosmed-footer">
              <img src={iconFB} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <img src={iconWeb} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <img src={iconLinkedln} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <img src={iconInsta} alt="btn-sosmed-footer" />
            </div>
            <div className="btn-sosmed-footer">
              <img src={iconBe} alt="btn-sosmed-footer" />
            </div>
          </div>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading">{"Explore"}</div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="/">course</Link>
            </li>
            <li>
              <Link to="/">blog</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading">{"Category"}</div>
          <ul>
            <li>
              <Link to="/">design</Link>
            </li>
            <li>
              <Link to="/">development</Link>
            </li>
            <li>
              <Link to="/">marketing</Link>
            </li>
            <li>
              <Link to="/">business</Link>
            </li>
            <li>
              <Link to="/">lifestyle</Link>
            </li>
            <li>
              <Link to="/">photography</Link>
            </li>
            <li>
              <Link to="/">music</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget">
          <div className="footer-widget-heading-subs">{"Subscribe"}</div>
          <div className="footer-text">
            {
              "Lorem Ipsum has been them an industry printer took a galley make book."
            }
          </div>
          <div className="subscribe-form">
            <form action="#">
              <input type="email" placeholder="Email Here" />
            </form>
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
