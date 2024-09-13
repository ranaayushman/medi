import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import LoginOptions from "./sections/LogInOption";
import Navbar from "./sections/Navbar";


export default function App() {
  return (
    <div>
      <Info />
      <Navbar />
      <Hero />
      <LoginOptions />
      <AboutUs />
    </div>
  )
}