import { getHero } from '@/utils/fetches/getHero'
import ConsoleLog from "@/utils/consoleLog";
export default async function Home() {
  const heroContent = await getHero();

  const title = heroContent?.title[0]?.children[0]?.text;

  return (
    <main>
      <ConsoleLog log={heroContent} />
      <div className={'container'}>
        <h1>{title}</h1>
      </div>
    </main>
  )
}
