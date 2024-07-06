import * as React from 'react';
import Banner from './Banner';
import FeaturedQuizzes from './FeaturedQuizzes';
import QuizzesCallToAction from './CallToAction';
import Testimonials from './Testimonials';
import HowItWorksSection from './HowItWorks';
import BlogSection from './Blog';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return <>
  <Banner />
  <FeaturedQuizzes />
  <HowItWorksSection />
  <BlogSection />
  <Testimonials />
  <QuizzesCallToAction />
  </>;
};

export default Home;
