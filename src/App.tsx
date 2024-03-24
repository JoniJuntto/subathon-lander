import Products from "./components/Products";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Team from "./components/team";
import BackgroundImage from "./components/BackgroundImage";
import CompanySocials from './components/CompanySocials'
import Mission from './components/Mission'

function App() {
  return (
    <>
      <BackgroundImage >
        <>
          <Hero />
          <CompanySocials/>
        </>
      </BackgroundImage>
      <Mission />
      <Team />
      <Products />
      <Footer />
    </>
  );
}

export default App;
