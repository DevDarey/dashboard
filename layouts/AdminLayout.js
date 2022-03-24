import React from 'react';

import AdminSidebar from 'components/AdminSidebar';

function ExpertLayout({ children, notice }) {
    return (
        <div className='w-full h-screen bg-dashboard-main flex'>
            <AdminSidebar notice={notice} />
            {children}
        </div>
    );
}

export default ExpertLayout;
