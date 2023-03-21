import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import MainNavigation from '../components/MainNavigation'

function RootLayout(props) {

    const navigation = useNavigation();

    return (
        <div>
        <MainNavigation />
        <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
            <Outlet />
            <FooterNav />
            </main>
        </div>
    );
    
}

export default RootLayout;