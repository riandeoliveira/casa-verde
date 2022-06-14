import { Header } from "./components/Header";
import { MyPlantSection } from "./components/MyPlantSection";
import { OffersSection } from "./components/OffersSection";

export const App = (): JSX.Element => (
  <>
    <Header />
    <main>
      <MyPlantSection />
      <OffersSection />
    </main>
  </>
);
