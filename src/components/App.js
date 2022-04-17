import Header from './Header';
import Contact from './Contact';
import TechStack from './TechStack';
import Projects from './Projects';
import Bio from './Bio';
import Footer from './Footer';

import { projectArray } from './ProjectData';

function App() {
  return (
    <div className="app">
      <Header />
      <Bio />
      <TechStack />
      <Projects projects={projectArray} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
