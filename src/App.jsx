import { Articles1 } from "./components/ArticlesFolder/Articles1";
import { Hero } from "./components/Hero/Hero";
import { Video } from "./components/Video/Video";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Articles1/> 
      <Video />
      <Footer />
    </main>
  );
};
