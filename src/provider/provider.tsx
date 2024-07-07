"use client";
import { store } from '@/redux/store';
import * as React from 'react';
import { Provider } from 'react-redux';
interface IProviderProps {
    children: React.ReactNode
}

const Providers: React.FunctionComponent<IProviderProps> = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>;
};

export default Providers;
