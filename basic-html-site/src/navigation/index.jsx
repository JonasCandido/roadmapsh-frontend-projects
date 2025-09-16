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
        {navOptions.map((option,index) => <Link to={`/${option}`} rel="next" key={index}>{option}</Link>)}
      </nav>
      <h1>Full Stack Developer</h1>
    </header>
  );
};

export { Navigation };
