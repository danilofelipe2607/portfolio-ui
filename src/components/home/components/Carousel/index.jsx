import "./carousel.css";
import { useEffect, useState } from "react";
import profile from "../../../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Carousels() {
  const listLink = [
    {
      link: "data:image/jpeg;base64,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",
    },
    {
      link: "https://naver.github.io/egjs-flicking/assets/images/bg01-19fec45281aa4c64772bde64d2ce6f15.jpg",
    },
    {
      link: "https://lapisdenoiva.com/wp-content/uploads/2019/05/casamento-no-jk-eventos-jacarei-14.jpg",
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-carousel">
      <div className="container-main">
        {" "}
        <div className="description">
          <h2>FALE AGORA COM NOSSO TIME</h2> <button>Whatsapp</button>
        </div>
        <div className="banner-carousel">
          <img className="banner-img" src={listLink[numero].link} alt="" />
        </div>{" "}
      </div>

      <div className="profile">
        <div className="profile-description">
          <h2>Paulin Novais</h2>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <a>Saiba Mais...</a>
        </div>
        <div className="img-profile">
          <img src={profile} alt="" />
        </div>
      </div>

      <div className="coment-container">
        <Carousel>
          <div>
            <div className="avatar">
              <img src={profile} alt="" />
            </div>
            <h5> DANILO FELIPE DIAS</h5>
            <div className="elementor-star-rating">
              <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
              <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
              <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
              <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
              <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            </div>
            <p>
              Simplesmente incrível o trabalho da Rolle. Equipe super
              profissional. Produzimos 02 fashions films para a Furor Jeans
              Asia.
            </p>
          </div>
          
        </Carousel>
        {/* <div className="coment">
          <div className="avatar">
            <img src={profile} alt="" />
          </div>
          <h5> DANILO FELIPE DIAS</h5>
          <div className="elementor-star-rating">
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
          </div>
          <p>
            Simplesmente incrível o trabalho da Rolle. Equipe super
            profissional. Produzimos 02 fashions films para a Furor Jeans Asia.
          </p>
        </div>
        <div className="coment">
          <div className="avatar">
            <img src={profile} alt="" />
          </div>
          <h5> DANILO FELIPE DIAS</h5>
          <div className="elementor-star-rating">
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
          </div>
          <p>
            Simplesmente incrível o trabalho da Rolle. Equipe super
            profissional. Produzimos 02 fashions films para a Furor Jeans Asia.
          </p>
        </div>
        <div className="coment">
          <div className="avatar">
            <img src={profile} alt="" />
          </div>
          <h5> DANILO FELIPE DIAS</h5>
          <div className="elementor-star-rating">
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
          </div>
          <p>
            Simplesmente incrível o trabalho da Rolle. Equipe super
            profissional. Produzimos 02 fashions films para a Furor Jeans Asia.
          </p>
        </div>
        <div className="coment">
          <div className="avatar">
            <img src={profile} alt="" />
          </div>
          <h5> DANILO FELIPE DIAS</h5>
          <div className="elementor-star-rating">
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
            <FontAwesomeIcon icon={faStar} className="icon-start" />{" "}
          </div>
          <p>
            Simplesmente incrível o trabalho da Rolle. Equipe super
            profissional. Produzimos 02 fashions films para a Furor Jeans Asia.
          </p>
        </div> */}
      </div>
    </div>
  );
}
