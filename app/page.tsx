import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
const Home = async () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
};
export default Home;
