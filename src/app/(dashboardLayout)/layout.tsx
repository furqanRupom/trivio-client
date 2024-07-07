import Header from '@/components/dashboard/Header/Header';
import Sidebar from '@/components/dashboard/Sidebar/Sidebar';
import * as React from 'react';

interface IDashboardLayoutProps {
    children:React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({children}) => {
  return <div className="relative bg-trivio-50 bg-opacity-20 overflow-hidden ">
         <Sidebar />
         <Header />
     {children}
  </div>;
};

export default DashboardLayout;
