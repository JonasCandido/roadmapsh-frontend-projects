import { Link } from "react-router";

const navOptions = [
  "home",
  "projects",
  "contact",
];

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/Home">Jonas Dias Cândido</Link>
        {navOptions.map((option,index) => <Link to={`/${option}`} key={index}>{option}</Link>)}
      </nav>
    </header>
  );
};

export { Navigation };
