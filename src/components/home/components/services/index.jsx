import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <div className="container-services">
        <div className="container-grid-main">
          <div className="service-item-main">
            <div className="service-item-main">
              <h5>NOSSOS SERVIÇOS</h5>
              <h2>O QUE NÓS FAZEMOS?</h2>
              <p>
                Se você contratar um cinegrafista de nossa equipe, você terá um
                profissional de vídeo para fazer um vídeo personalizado para o
                seu negócio e, assim que o projeto estiver concluído
              </p>
              <a>Ver todos os serviços</a>
            </div>
          </div>

          <div className="service-item">
            {" "}
            <div className="service-item-icon">
              <FontAwesomeIcon size="3x" icon={faPhotoVideo} />{" "}
            </div>
            <h4>Motion graphics</h4>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
          <div className="service-item">
            {" "}
            <div className="service-item-icon">
              <FontAwesomeIcon size="3x" icon={faPhotoVideo} />{" "}
            </div>
            <h4>Motion graphics</h4>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
          <div className="service-item">
            {" "}
            <div className="service-item-icon">
              <FontAwesomeIcon size="3x" icon={faPhotoVideo} />{" "}
            </div>
            <h4>Motion graphics</h4>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
          <div className="service-item">
            {" "}
            <div className="service-item-icon">
              <FontAwesomeIcon size="3x" icon={faPhotoVideo} />{" "}
            </div>
            <h4>Motion graphics</h4>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
        </div>
      </div>
      <div className="container-services-mobile">
        <div className="container-grid-main-mobile">
          <div className="service-item-icon-mobile">
            <FontAwesomeIcon size="2x" icon={faPhotoVideo} />{" "}
            <FontAwesomeIcon size="2x" icon={faPhotoVideo} />{" "}
            <FontAwesomeIcon size="2x" icon={faPhotoVideo} />{" "}
          </div>
          <div>
            <h2>O QUE NÓS FAZEMOS?</h2>
            <p>
              Se você contratar um cinegrafista de nossa equipe, você terá um
              profissional de vídeo para fazer um vídeo personalizado para o seu
              negócio e, assim que o projeto estiver concluído
            </p>
            <a>Ver todos os serviços</a>
          </div>
        </div>
      </div>
    </>
  );
}
