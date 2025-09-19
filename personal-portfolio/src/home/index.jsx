import "./style.css";

const Home = () => {
      return (
      <>
        <h1>Full Stack Developer</h1>
        <section id="home-section-container">
            <article id="projects">
                <h2>Projects</h2>
                <a href="https://github.com/JonasCandido/roadmapsh-projects" target="_blank" rel="external">Roadmapsh Projects</a>
                <a href="https://github.com/JonasCandido/Aplay" target="_blank" rel="external">Aplay</a>
                <a href="https://github.com/JonasCandido/Ux-Gym" target="_blank" rel="external">Ux Gym</a>
                <a href="https://github.com/JonasCandido/to-do-list" target="_blank" rel="external">To Do List</a>
            </article>

            <article>
                <h2>Work Experience</h2>
                <h3>Laravel Full Stack Intern</h3>
                <p>Contributed for two projects involving Laravel framework. The name of the enterprise was Inclua.</p>
                <address>Rua Tenente Coronel Ezio Lima Verde, 108</address>
            </article>

            <article>
                <h2>Education</h2>
                <p>Graduated on 2024 as a Computer Technician at Escola Estadual de Educação Profissional Pedrosa Walfrido Teixeira Vieira.<br />
                   I am on my first semester on Computer Science degree at Universidade Estadual Vale do Acaraú - UVA.<br />
                   Made some courses about: Games in GDevelop 5, Programming Languages, English course etc.</p>
            </article>
        </section>

        <h2 id="review-title">Reviews from my Teachers</h2>
        <aside id="opinions">
            <p>Jonas Dias Cândido was a brilliant student.<span> - Jane Doe</span></p>
            <p>Jonas Dias Cândido was a brilliant student.<span> - Jane Doe</span></p>
            <p>Jonas Dias Cândido was a brilliant student.<span> - Jane Doe</span></p>
        </aside>
       </>
      );
};

export { Home };
