import "../../css/home.css";

import Banner from "./components/banner";
import ListVideos from "./components/listVideos";

function Home() {
  return (
    <div className="container">
      <Banner />
      <ListVideos />
      <Banner />
    </div>
  );
}

export default Home;
