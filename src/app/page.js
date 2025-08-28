import LandingPage from "./components/LandingPage";
import About from './components/about';
import FaqSection from "src/components/FaqSection";

export default function Page() {
  return (
    <div>
    <LandingPage />
      <About />
      <FaqSection />
      </div>
  );
}