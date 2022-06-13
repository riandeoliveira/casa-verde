import { Header } from "./components/Header";
import plants from "./content/plants.json";
import { PlantCard } from "./components/PlantCard";
import { plantImages } from "./assets";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <section>
          {plants.map((plant, i) => (
            <PlantCard
              name={plant.name}
              price={plant.price}
              image={plantImages[i]}
              key={i}
            />
          ))}
        </section>
      </main>
    </>
  );
};
