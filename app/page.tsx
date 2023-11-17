import Hero from '@/components/hero/Hero';
import ConsoleLog from '@/utils/consoleLog';
import { getHero } from '@/utils/fetches/getHero';
const Home = async () => {
  const hero = await getHero();
  return (
    <main>
      <ConsoleLog log={hero} />
      <Hero />
    </main>
  );
};
export default Home;
