import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import Dashboard from '../Components/Dashboard'
import Discover from '../Components/Discover'

const DashboardPage = () => {
    return (
        <div>
            <DashboardNavbar />
            <Dashboard />
            <Discover />
        </div>
    )
}

export default DashboardPage