import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}