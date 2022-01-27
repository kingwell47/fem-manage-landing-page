import AppNavBar from "./components/AppNavBar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="App">
      <AppNavBar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
