import { useEffect } from "react";
import "./banner.css";

export default function Banner() {
  const typeWrite = () => {
    const titulo = document.querySelector("h1");
    const textArray = titulo.innerHTML.split("");
    titulo.innerHTML = "";

    textArray.forEach((letra, i) =>
      setTimeout(() => (titulo.innerHTML += letra), 75 * i)
    );
  };

  useEffect(() => {
    typeWrite();
  }, []);

  return (
    <div className="container-banner">
      <h1>
        Tudo na vida passa... tudo o tempo resolve... ficam só as recordações...{" "}
      </h1>
      <div className="container-iframe">
        <iframe
          frameBorder="false"
          className="iframe-banner"
          src="https://www.youtube.com/embed/OUTqP0YBzas?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
