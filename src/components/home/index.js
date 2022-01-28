import "../../css/home.css";

import Banner from "./components/banner";
import Carousel from "./components/Carousel";
import ListVideos from "./components/listVideos";
import Services from "./components/services";

function Home() {
  return (
    <div className="container">
      <Banner />
      <Services />
      <ListVideos />
      <Carousel />
    </div>
  );
}

export default Home;
