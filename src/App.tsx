import { Projects } from './components/Projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Hability } from './components/Hability';
import { Contact } from './components/Contact';
import { Footer } from './components/footer';



export default function App() {

  return (
    <>
      <Header />

      <Hero />

      <Projects />

      <Hability />

      <Contact />

      <Footer/>
    </>
  );
}