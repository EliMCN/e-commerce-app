import "./hero.css";

// eslint-disable-next-line react/prop-types
const Hero = ({greeting, imagen}) => {
  console.log(imagen); 

  return (
    <section className="hero">
      <img src={imagen} alt="Fondo" className="background-image" />
      <div className="hero-content">
        <h1 className="ultra-regular">{greeting}</h1>
      </div>
    </section>
  );
};

export default Hero;