import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import SportsBaseballRoundedIcon from '@mui/icons-material/SportsBaseballRounded';


// Wrapper functional component to use hooks and pass props to class-based component
function withRouter(Component) {
    return (props) => {
        const location = useLocation();
        return <Component {...props} location={location} />;
    };
}

class Navbar extends Component {

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <div className='fixed top-0 left-0 h-full w-64 px-4 py-8 bg-indigo-100 flex flex-col gap-y-7 shadow-xl'>

                <div className='font-semibold text-xl px-8'>NewsWave</div>
                <div className='space-y-7'>
                    <div className='space-y-2'>
                        <Link to='/'><p className={`px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'} `}><HomeRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/>  Home</p></Link>
                        {/* <p className={`px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md hover:bg-indigo-200 transition-all duration-150 `}><InfoRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> About Us</p> */}
                        {/* <p className={`px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md hover:bg-indigo-200 transition-all duration-150 `}><PhoneRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Contact Us</p> */}
                    </div>

                    <div className='space-y-2'>
                        <p className='text-xs w-fit px-8 mb-2 rounded-lg font-semibold text-slate-400 tracking-widest'>Countries</p>
                        <Link to='/us'><p className={`px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/us' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}>USA</p></Link>
                        <Link to='/india'><p className={`px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/india' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}>India</p></Link>
                    </div>

                    <div className=''>
                        <p className='mb-2 text-xs w-fit px-8 rounded-lg font-semibold text-slate-400 tracking-widest'>Categories</p>
                        <Link to='/general'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/general' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><PublicRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> General</p></Link>
                        <Link to='/technology'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/technology' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><ComputerRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Technology</p></Link>
                        <Link to='/science'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/science' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><ScienceRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Science</p></Link>
                        <Link to='/health'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/health' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><LocalHospitalRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Health</p></Link>
                        <Link to='/business'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/business' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><AnalyticsRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Business</p></Link>
                        <Link to='/entertainment'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/entertainment' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><TheatersRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Entertainment</p></Link>
                        <Link to='/sports'><p className={`mb-2 px-8 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 ${currentPath === '/sports' ? 'bg-indigo-300 text-black' : 'hover:bg-indigo-200'}`}><SportsBaseballRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }}/> Sports</p></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Navbar);