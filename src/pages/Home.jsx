import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

export default class Home extends Component {
    render() {
        return (
            <div className="w-full flex items-center justify-center space-x-5">
                <p>Click on </p>

                <Link to='/general'><p className={`px-5 py-2 text-sm font-semibold text-slate-600 cursor-pointer rounded-md transition-all duration-150 bg-indigo-300`}><PublicRoundedIcon sx={{ color: '#3F51B5', fontSize: 22, verticalAlign: '-5px', marginRight: '8px' }} /> General</p></Link>

            </div>
        )
    }
}
