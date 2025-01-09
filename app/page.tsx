// app/admin/page.tsx
"use client"

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const homepage = () => {
    
    return (
        <div className="admin-page">
          <Dashboard />
            <Sidebar />
            
        </div>
    );
};

export default homepage;
