import "./productscard.css";
import cardimg1 from "/src/assets/productcard/card1.jpeg";
import cardimg2 from "/src/assets/productcard/card2.jpeg";
import cardimg3 from "/src/assets/productcard/card3.jpeg";

const Productscard = () => {
  const cardData = [
    {
      tag: "Decentralised",
      title: "OPNChain",
      description:
        "A high-performance, environmentally sustainable blockchain that supports censorship-resistant and tamper-proof applications, offering a foundation for decentralized computing and digital asset transactions.",
      image: cardimg1,
    },
    {
      tag: "Cognitive",
      title: "iCognitive",
      description:
        "A platform enabling users to build applications without coding, leveraging modular components and AI-enhanced development tools.",
      image: cardimg2,
    },
    {
      tag: "Spatial",
      title: "OPNVerse",
      description:
        "A hyper-realistic, AI-empowered, dynamic and immersive platform revolutionizing Web3 experience, empowering entities, fostering community connectivity within a connected digital ecosystem.",
      image: cardimg3,
    },
  ];

  return (
    <div className="Productscard-container max-w-screen-2xl mx-auto px-4 mt-28">
      <div className="headline px-4 mb-0">
        <div className="tagline mb-4">
          <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
            Pillars
          </p>
        </div>
        <h1 className="w-full text-4xl font-medium text-[#08122A]">
          Discover IOPn
        </h1>
        <p className="opacity-50 text-lg mt-4 mb-0">
          Explore an ecosystem where technology serves <br /> humanity &
          empowers people.
        </p>
      </div>

      <div className="card-main">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card-container card${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(180deg, #082186, #08218600), url(${card.image})`,
            }}
          >
            <div className="card-content">
              <div className="tagline mb-0">
                <p className="inline-block px-3 py-2 bg-[#fff] !text-black-0 rounded-2xl text-sm mb-2.5 font-extralight">
                  {card.tag}
                </p>
              </div>
              <h2 className="w-full text-3xl font-medium text-white-0 mt-6">
                {card.title}
              </h2>
              <p className="card-description opacity-90">{card.description}</p>
            </div>
            <div className="card-icon-container">
              <div className="card-icon">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productscard;
