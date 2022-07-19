import type { Plant } from "@prisma/client";
import {
  BestPlantsSection,
  HeadArea,
  Header,
  Main,
  MyPlantSection,
  OurPlantsSection,
} from "components";
import prisma from "libs/prisma";
import type { GetStaticProps, NextPage } from "next";

interface HomeProps {
  plants: Plant[];
}

const Home: NextPage<HomeProps> = ({ plants }): JSX.Element => {
  return (
    <>
      <HeadArea />
      <Header />
      <Main>
        <BestPlantsSection />
        <MyPlantSection />
        <OurPlantsSection plantsData={plants} />
      </Main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const plants: Plant[] = await prisma.plant.findMany();

  return {
    props: {
      plants,
    },
  };
};
