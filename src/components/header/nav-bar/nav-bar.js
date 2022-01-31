import { Link } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <nav className={`menu with-bg menu-open`}>
      <header>
        <Link to="/">Headforwards</Link>
      </header>
      <section>
        <ul>
          <li className="navHomeLink">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/who-we-are">Who We Are.</Link>
          </li>
          <li>
            <Link to="/what-we-do">What We Do.</Link>
          </li>
          <li>
            <Link to="/how-we-work">How We Work.</Link>
          </li>
          <li>
            <Link to="/careers">Careers.</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
