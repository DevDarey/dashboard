import React from 'react';

import ExpertSidebar from 'components/ExpertSidebar';

function ExpertLayout({ children }) {
    return (
        <div className='w-full h-screen bg-dashboard-main flex'>
            <ExpertSidebar />
            {children}
        </div>
    );
}

export default ExpertLayout;
