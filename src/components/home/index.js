import "../../css/home.css";

import Banner from "./components/banner";
import ListVideos from "./components/listVideos";
import Services from "./components/services";

function Home() {
  return (
    <div className="container">
      <Banner />
      <ListVideos />
      <Services />
    </div>
  );
}

export default Home;
