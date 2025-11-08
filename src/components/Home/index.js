
import "./index.css";

const Home = () => {
  const CategoryData = [
    {
      id: "seeds",
      title: "Seeds",
      img: "/images/seeds.png",
      description: "Explore India’s major seeds and learn which crops are best grown from each seed type, along with ideal soil conditions, planting seasons, and practices for optimal yield"
    },
    {
      id: "planting",
      title: "Planting",
      img: "/planting/planting.png",
      description:
        "Learn the best practices for planting crops, including seed selection, spacing, soil preparation, and watering techniques to ensure healthy growth and maximum yield."
    },
    {
  "id": "fruits-planting",
  "title": "Fruits Planting",
  "img": "/fruits/fruits.png",
  "description": "Discover the essential techniques for planting fruit crops effectively. Learn about selecting healthy saplings, preparing nutrient-rich soil, proper spacing, sunlight requirements, and watering schedules to promote strong root growth and abundant fruit production."
},

    {
      id: "seasons",
      title: "Seasons",
      img: "Season/seasons.png",
      description:
        "Learn about the different agricultural seasons like Rabi, Kharif, and Zaid. Discover which crops are best suited for each season and their ideal planting periods for optimal yield."
    },
    {
      id: "fertilizers",
      title: "Fertilizers",
      img: "/fertilizers/fertilizers.png",
      description: "Explore different fertilizers used in India and learn which crops benefit from each type, along with application methods, timings, and optimal dosages for healthy growth and high yield"
    },
    {
      id: "tools",
      title: "Tools",
      img: "/tools/tools.png",
      description: "Explore essential farming tools in India and learn how each is used, their suitability for different crops, and best practices for efficient and productive farming"
    },
    {
      id: "pesticides",
      title: "Pesticides",
      img: "/neemOil/pesticides.png",
      description:
        "Learn about India’s commonly used pesticides, their target pests, and how to apply them safely and effectively to protect crops and ensure optimal harvests"
    },
    {
      id: "equipments",
      title: "Equipments",
      img: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
      description: "Discover essential farming equipment in India, their uses for different agricultural tasks, and best practices for maximizing efficiency and crop productivity"
    },
    {
      id: "soil",
      title: "Soil",
      img:"/Soils/ref.png",
      description:
        "Explore various soil types, understand their fertility, and discover which crops grow best in each type for sustainable farming."
    },
    {
      id: "states",
      title: "States",
      img: "/States/india.png",
      description:
        "Explore India’s major crop-producing states and learn which crops are best grown in each region, along with regional planting practices and soil suitability for optimal yield."
    },
    {
      id: "irrigation",
      title: "Irrigation & Water Management",
      img: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
      description:
        "Learn about efficient irrigation techniques, water conservation methods, and modern water management practices to maximize crop yield while using water sustainably."
    }
 ];
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Grow Smarter, Farm Better</h1>
          <p>
            FarmGuide is your complete digital companion for modern farming.
            Learn how to select the right seeds, soils, choose effective
            fertilizers, use tools efficiently, apply pesticides safely, and
            operate modern farm equipment.
          </p>
          <p>
            Our platform helps students and farmers adopt scientific approaches,
            improve crop yield, and reduce losses while promoting sustainable
            agriculture. Start exploring expert guidance and make informed
            farming decisions today!
          </p>
        </div>
      </section>
      <section className="features-section">
        <h1 className="one">Our Guidance</h1>
        <p>
          Our Guidance provides expert advice on selecting the right seeds,
          choosing effective fertilizers, using modern tools, applying
          pesticides safely, and operating farm equipment efficiently.
        </p>
        <div className="feature-cards-container">
          {CategoryData.map((feature) => (
            <div className="feature-card" id={feature.id} key={feature.id}>
              <img
                src={feature.img}
                alt={feature.title}
                className="feature-image"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
    
      </section>
    </div>
  );
};

export default Home;
