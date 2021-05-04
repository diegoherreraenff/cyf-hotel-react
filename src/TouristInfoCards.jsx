import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tarjetasPadre">
      <div className="card">
        <h2>Glasgow</h2>
        <img
          alt="glasgow"
          src="https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg"
          className="card-img-top"
        />

        <div className="card-body">
          <p>
            Glasgow es una ciudad portuaria en el río Clyde, en el oeste de las
            Tierras Bajas de Escocia. Es famosa por su arquitectura modernista y
            victoriana, un rico legado de la prosperidad de la ciudad entre los
            siglos XVIII y XX debido al comercio y la construcción de
            embarcaciones. En la actualidad, es un centro cultural nacional y
            alberga instituciones como la Ópera Escocesa, el Ballet de Escocia y
            el Teatro Nacional de Escocia, al igual que aclamados museos y una
            próspera escena musica
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card container">
        <h2>Maschester</h2>
        <img
          alt="maschester"
          src="https://www.liverpoolmagico.net/wp-content/uploads/2020/03/manchester-1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Manchester es una importante ciudad del noroeste de Inglaterra con
            una rica herencia industrial. El sistema de canales del siglo XVIII
            del área de conservación Castlefield recuerda el tiempo en el que la
            ciudad era un núcleo textil, y los visitantes pueden recorrer esta
            historia en el interactivo Museo de la Ciencia y la Industria. Los
            astilleros restaurados de Salford Quays actualmente albergan el
            Museo de Guerra Imperial del Norte diseñado por Daniel Libeskind y
            el centro cultural Lowry.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card container">
        <h2>Londres</h2>
        <img
          alt="london"
          src="https://www.visitbritainshop.com/espana/~/media/images/subcategory/london-passes.ashx"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Londres, la capital de Inglaterra y del Reino Unido, es una ciudad
            del siglo XXI con una historia que se remonta a la época romana. En
            su centro se alzan el imponente Palacio del Parlamento, la torre del
            icónico reloj "Big Ben" y la Abadía de Westminster, lugar de las
            coronaciones monárquicas británicas.{" "}
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
