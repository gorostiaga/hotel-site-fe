import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'

function RootLayout(props) {

    const navigation = useNavigation();

    return (
        <div>
        <MainNavigation />
        <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
            <Outlet />
            </main>
        </div>
    );
    
}

export default RootLayout;