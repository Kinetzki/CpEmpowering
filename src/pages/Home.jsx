import React from 'react'
import { useParams } from 'react-router-dom'
import SidePanel from '../components/SidePanel';
import Dashboard from "../panels/Dashboard";
import BarangayOfficials from '../panels/BarangayOfficials';
import ResidentProfiling from '../panels/ResidentProfiling';
function Home() {
    const {panel} = useParams();
  return (
    <div className='w-full min-h-screen flex'>
        <SidePanel/>
        {panel === "dashboard" && (
            <Dashboard/>
        )}
        {panel === "barangay-officials" && (
            <BarangayOfficials/>
        )}
        {panel === "resident-profiling" && (
            <ResidentProfiling/>
        )}
    </div>
  )
}

export default Home