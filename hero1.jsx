// import navbar, hero, movies, footer component
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Movies from "./ComponentsMovies/Movies";

/**
 * membuat component home
 * component utama ysng menampung components lain
 */
function Home() {
  return (
    <div>
      <Navbar />
      <main>
      <Hero />
      <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
