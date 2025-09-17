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
      <nav>
        <Link to="/">Jonas Dias Cândido</Link>
        {navOptions.map((option,index) => <Link to={`/${option}`} rel="next" key={index}>{option}</Link>)}
      </nav>
    </header>
  );
};

export { Navigation };
