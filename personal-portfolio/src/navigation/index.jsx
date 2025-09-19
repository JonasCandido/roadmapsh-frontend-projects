import "./style.css";
import { Link } from "react-router";

const navOptions = [
  "home",
  "projects",
  "articles",
  "contact",
];

const Navigation = () => {
  return (
    <header>
      <nav class="nav-bar">
        <Link to="/" style={{ textDecoration: "none", marginTop: "0px" }}>Jonas Dias Cândido</Link>

        <ul class="menu">
          {navOptions.map((option, index) => (
          <li key={index}>
            <Link to={`/${option}`} rel="next">
              {option[0].toUpperCase() + option.slice(1)}
            </Link>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
