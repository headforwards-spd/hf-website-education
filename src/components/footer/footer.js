import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default Footer;

function Footer() {
  const companyName = "Headforwards";
  const email = "hello@headforwards.com";
  const address =
    "Pool Innovation Centre, Trevenson Rd, Redruth, Cornwall, TR15 3PL, UK";
  const phone = "+44 (0)1209 311 151";
  const callToAction =
    "Want to know more about how we use mobbing to deliver quality software?";
  const thisYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="getInTouch">
        <h2>
          {callToAction}&nbsp;<Link to="/contact">Get in touch</Link>
        </h2>
      </section>
      <address>
        <section>
          <Link to={`mailto:${email}`}>{email}</Link>
          <Link to={`tel:${phone}`}>{phone}</Link>
        </section>
        <section>
          <section className="copyright">
            &copy; {thisYear} {companyName}
          </section>
          <section className="address">{address}</section>
        </section>
      </address>
    </footer>
  );
}
