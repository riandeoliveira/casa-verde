import { Header } from "./components/Header";
import { TitleArea } from "./components/TitleArea";
import { OffersSection } from "./components/OffersSection";
import { MyPlantSection } from "./components/MyPlantSection";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <section>
          <TitleArea title="melhores plantas" subtitle="Sua casa com as" />
        </section>
        <MyPlantSection />
        <OffersSection />
      </main>
    </>
  );
};
