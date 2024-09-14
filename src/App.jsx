import Login from "./components/Login";
import AboutUs from "./sections/AboutUs";
import Footer from "./sections/Footer";
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
      <Login />
      <AboutUs />
      <Footer />
    </div>
  )
}