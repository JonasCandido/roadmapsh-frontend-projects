import { Routes, Route } from "react-router";
import { Navigation } from "../navigation";
import { Home } from "../home";
import { Projects } from "../projects";
import { Contact } from "../contact";


const App = () => {
  return (
    <>
        <Navigation />

        <main>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects/ >} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>&copy; all rights reserved 2025</footer>
    </>
  );
};


export default App;
