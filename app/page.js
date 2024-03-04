
import Header from "./common/header/Header";
import Servises from "./sections/section-3/Servises";
import Hero from "./sections/section-1/Hero";
import Team from "./sections/section-2/Team";
import Expertise from "./sections/section-4/Expertise";
import Collaboration from "./sections/section-5/Collaboration";
import Cases from "./sections/section-6/Cases";

export default function Home() {
  return (
    <main className="wrapper">

        <Hero/>
        <Team/>
        <Servises/>
        <Expertise/>
        <Collaboration/>
        <Cases/>
  
    </main>
  );
}
