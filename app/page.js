
import Header from "./common/header/Header";
import Servises from "./sections/section-3/Servises";
import Hero from "./sections/section-1/Hero";
import Team from "./sections/section-2/Team";
import Expertise from "./sections/section-4/Expertise";
import Collaboration from "./sections/section-5/Collaboration";
import Cases from "./sections/section-6/Cases";
import Work from "./sections/section-7/Work";
import Money from "./sections/section-8/Money";
import Result from "./sections/section-9/Result";
import Partner from "./sections/section-10/Partner";
import Faq from "./sections/section-11/Faq";
import End from "./sections/section-12/End";
import Footer from "./common/footer/Footer";

export default function Home() {
  return (
    <main className="wrapper">

        <Hero/>
        <Team/>
        <Servises/>
        <Expertise/>
        <Collaboration/>
        <Cases/>
        <Work/>
        <Money/>
        <Result/>
        <Partner/>
        <Faq/>
        <End/>
        <Footer/>
  
    </main>
  );
}
