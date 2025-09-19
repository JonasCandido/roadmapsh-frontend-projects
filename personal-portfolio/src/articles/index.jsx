import "./style.css";

const Articles = () => {
  return (
    <section>
        <h1>Articles</h1>
        <ul>
          <li>
            <h2><a href="#">Artificial Intelligence</a></h2>
            <p>Will Skynet rule the world?</p>
          </li>
          <li>
            <h2><a href="#">The importance of frameworks</a></h2>
            <p>Can you build something solid without them?</p>
          </li>
          <li>
            <h2><a href="#">Will new algorithms come?</a></h2>
            <p>An thought about algorithms today.</p>
          </li>
        </ul>
    </section>
  );
};

export { Articles };
