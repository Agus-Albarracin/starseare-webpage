import { BestBusiness } from "@/components/BestBusiness";
import { ControlBilling } from "@/components/ControlBilling";
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
      <BestBusiness />
      <ControlBilling />
      <Footer />
    </>
  )
}
