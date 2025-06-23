function App() {
  return (
    <main>
      <Header />
      <ContactInfo />
      <Skills />
      <Education />
      <Experience />
      <InternetLinks />
    </main>
  );
}

function Header() {
  return (
    <header>
      <hr />
      <h1>Jonas Dias Cândido</h1>
      <h2>Junior Full Stack Developer</h2>
    </header>
  );
}

function ContactInfo() {
  return (
    <section>
      <address>
        <p>200 Rua Doutor José Custódio de Azevedo</p>
        <p>Sobral, CE 62040-100</p>
        <p>+55 (88) 99318-6224</p>
        <p>jonasdcandido210@gmail.com</p>
      </address>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <p>HTML, CSS, JavaScript, React, Java, Spring, C, MySQL, PostgreSQL</p>
    </section>
  )
}

const highSchoolActivities = [
  "Projects with Arduino",
  "Frontend projects with Bootstrap",
  "Backend projects with PHP",
  "A game with GDevelop about education, I went to two tech events with it",
  "First experience as an intern",
]

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <h3>EEEP Dom Walfrido Teixeira Vieira, Avenida Paulo Almeida Sanford, 406 - Computer Technician</h3>
      <p>From 2022 to 2024</p>
      <UnorderedList data={highSchoolActivities}/>
    </section>
  )
}

const achievements = [
  "Finish laravel course and a simple CRUD project with it",
  "Do a landing page for the enterprise's website",
  "Do a graph for the website with JavaScript according to data from MySQL database",
]

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <h3>Inclua, Rua Tenente Coronel Ezio Lima Verde, 108 - Full Stack Developer Intern</h3>
      <p>From 08/2024 to 12/2024</p>
      <UnorderedList data={achievements}/>
      <p>Skills: Soft skills for good team communication, learn how to use Git and Github with a team for version control, learn how to use Laravel framework for Full Stack websites</p>
    </section>
  )
}

function InternetLinks() {
  return (
    <section>
      <h2>Across the Internet</h2>
      <a href="https://github.com/JonasCandido" target="_blank" rel="external">GitHub</a><br/>
      <a href="https://www.instagram.com/candidod_jonas/" target="_blank" rel="external">Instagram</a>
    </section>
  )
}

function UnorderedList({ data }) {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default App;
