import Home from "@/components/home/Home";
import Header from "@/components/home/shared/Header";
import Image from "next/image";

import * as React from 'react';

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <>
    <Home />
  </>;
};

export default HomePage;

