import "./carousel.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useEffect, useState } from "react";

export default function Carousel() {
  const listLink = [
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJC6czZURAnEszXJjB46QPAkLcwP94Ag9kRA&usqp=CAU",
    },
    {
      link: "https://naver.github.io/egjs-flicking/assets/images/bg01-19fec45281aa4c64772bde64d2ce6f15.jpg",
    },
    {
      link: "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/banner.png",
    },
    
  ];
  const [numero, setNumero] = useState(0);
  const [count, setCount] = useState(0);

  const randomNumber = () => {
    const numero = Math.floor(Math.random() * listLink.length);
    console.log(numero, "numeronumero");
    setNumero(numero);
    setTimeout(() => {
      console.log("aqui");
      setCount(count + 1);
    }, 8000);
  };

  useEffect(() => {
    randomNumber();
  }, [count, setCount]);

  return (
    <div className="container-carousel">
      <div className="description">
        <h2>FALE AGORA COM NOSSO TIME</h2> <button>Whatsapp</button>
      </div>
      <div className="banner-carousel">
        <img className="banner-img" src={listLink[numero].link} alt="" />
      </div>{" "}
    </div>
  );
}
