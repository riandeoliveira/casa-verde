import { Header } from "./components/Header";
import { MyPlant } from "./components/MyPlant";
import { Offers } from "./components/Offers";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <MyPlant />
        <Offers />
      </main>
    </>
  );
};
