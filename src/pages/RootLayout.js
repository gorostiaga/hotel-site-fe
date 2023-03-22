import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import MainNavigation from '../components/MainNavigation';
import "../css/root-layout.css";

function RootLayout(props) {

    const navigation = useNavigation();

    return (
        <div>
        <MainNavigation />
        <main className="main__outlet">
        {navigation.state === 'loading' && <p>Loading...</p>}
            <Outlet />
            <FooterNav />
            </main>
        </div>
    );
    
}

export default RootLayout;