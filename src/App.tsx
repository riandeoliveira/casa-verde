import { Header } from "./components/Header";
import { BestPlantsSection } from "./components/BestPlantsSection";
import { MyPlantSection } from "./components/MyPlantSection";
import { OffersSection } from "./components/OffersSection";

export const App = (): JSX.Element => (
  <>
    <Header />
    <main>
      <BestPlantsSection />
      <MyPlantSection />
      <OffersSection />
    </main>
  </>
);
