import { FloatingContacts } from './components/ContactLinks.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Benefits } from './sections/Benefits.jsx';
import { Contact } from './sections/Contact.jsx';
import { Hero } from './sections/Hero.jsx';
import { Portfolio } from './sections/Portfolio.jsx';
import { Process } from './sections/Process.jsx';
import { Services } from './sections/Services.jsx';

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <FloatingContacts />
    </>
  );
}
