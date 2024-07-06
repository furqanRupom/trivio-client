import Footer from '@/components/home/shared/Footer';
import Header from '@/components/home/shared/Header';
import * as React from 'react';

interface IHomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>;
};

export default HomeLayout;
