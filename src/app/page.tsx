import { SecondBlock } from "@/components/SecondBlock";
import { AdicionalBlock } from "@/components/AdicionalBlock";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
  
export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <SecondBlock />
      <AdicionalBlock />
      <Footer />
    </>
  )
}
