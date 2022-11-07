import type { NextPage } from "next";
import { useEffect } from "react";
import ChartTab from "../components/homepage/ChartTab";

const Home: NextPage = () => {
  useEffect(() => {
    document.title = "Financial App | Main";
  }, []);

  return (
    <div>
      <ChartTab />
    </div>
  );
};

export default Home;
