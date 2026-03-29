// internal/layout.tsx

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    // Navigation Links Here
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;