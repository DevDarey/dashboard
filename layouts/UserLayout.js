import React from 'react';

import UserSidebar from 'components/UserSidebar';

function UserLayout({ children, notice }) {
    return (
        <div className='w-full h-screen bg-dashboard-main flex'>
            <UserSidebar notice={notice} />
            {children}
        </div>
    );
}

export default UserLayout;
