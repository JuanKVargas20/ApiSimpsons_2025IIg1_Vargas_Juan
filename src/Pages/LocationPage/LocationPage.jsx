import React, { useEffect, useState } from "react";
import CardLocation from "../../Components/CardLocation/CardLocation";
import "./LocationPage.css";

const mockLocations = [
  {
    id: 1,
    name: "Taberna de Moe",
    description: "El bar favorito de Homero y sus amigos.",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/05/empresa-crea-taberna-moe-hinchable.jpg?tf=3840x",
  },
  {
    id: 2,
    name: "Planta Nuclear de Springfield",
    description:
      "El lugar de trabajo de Homero Simpson como inspector de seguridad.",
    image:
      "https://www.energy.gov/sites/default/files/styles/full_article_width/public/2018/03/f49/Elektrownia_J%C4%85drowa_w_Springfield_0.png?itok=4vxy9ZAl",
  },
  {
    id: 3,
    name: "Kwik-E-Mart",
    description: "La tienda de Apu, donde todos compran su Squishee.",
    image:
      "https://media.gq.com.mx/photos/5be9c9a75c1fcbaa834c29bf/1:1/w_2000,h_2000,c_limit/kwik_e_mart_los_simpson_en_carolina_del_norte_2987.jpg",
  },
  {
    id: 4,
    name: "Escuela Primaria de Springfield",
    description: "La escuela donde estudian Bart y Lisa Simpson.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqz1Tbu5y2ddOMGGhUcE7EPRRkS9F3g79Sg&s",
  },
  {
    id: 5,
    name: "Casa de los Simpson",
    description: "El hogar de la familia Simpson en Evergreen Terrace 742.",
    image: "https://arquitectandoideas.wordpress.com/wp-content/uploads/2014/04/casa-de-los-simpsons.jpg",
  },
  {
    id: 6,
    name: "Iglesia de Springfield",
    description: "El lugar donde el Reverendo Lovejoy predica.",
    image: "https://i.pinimg.com/736x/e4/5f/b4/e45fb41fbedab44d2baa2ab6e0c39c3a.jpg",
  },
   {
    id: 7,
    name: "Casa del señor burns",
    description: "Mansión del millonario dueño de la planta nuclear. Representa la riqueza extrema y el poder en Springfield.",
    image: "https://static-simpsonswiki-com.translate.goog/images/2/22/Burns%27_manor.png?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
  },
   {
    id: 8,
    name: "Krusty Burger",
    description: "Cadena de comida rápida patrocinada por Krusty el Payaso.",
    image: "https://los40.com/resizer/v2/M362HOHXBBNJVEGPNLPWONB4GY.png?auth=2e5a72abc6c7106c7d404884ac35a552b0fb7045b6e720d485d5536bfe70449d&quality=70&width=650&height=487&smart=true",
  },
   {
    id: 9,
    name: "Hospital de Springfield",
    description: "Donde se tratan a los ciudadanos de la ciudad. Ha tenido muchos eventos cómicos y accidentes de Homero.",
    image: "https://i.pinimg.com/736x/a6/a2/7e/a6a27ed743d736027e57697371c1217f.jpg",
  },
   {
    id: 10,
    name: "Centro Comercial de Springfield",
    description: "Lugar de compras, con tiendas variadas, comida rápida y muchas aventuras de los niños Simpson.",
    image: "https://insidethemagic.net/wp-content/uploads/2021/09/FAGS38NUYAk65Lf-1.jpeg",
  },
];

const LocationPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setLocations(mockLocations);
    }, 100);
  }, []);

  return (
    
    <main className="location-page">
      {locations.length === 0 ? (
        <p className="loading">Cargando lugares...</p>
      ) : (
        <div className="location-container">
          {locations.map((loc) => (
            <CardLocation
              key={loc.id}
              name={loc.name}
              description={loc.description}
              image={loc.image}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default LocationPage;
