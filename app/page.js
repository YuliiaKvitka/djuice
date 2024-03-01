
import Header from "./common/header/Header";
import Servises from "./components/section-3/Servises";
import Hero from "./sections/section-1/Hero";
import Team from "./sections/section-2/Team";

export default function Home() {
  return (
    <main className="wrapper">
     
      <Hero/>
      <Team/>
      <Servises/>
    </main>
  );
}
