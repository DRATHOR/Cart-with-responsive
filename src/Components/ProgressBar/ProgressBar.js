import { LinearProgress } from '@mui/material'
import React from 'react'
import './ProgressBar.scss'

const ProgressBar = () => {
    return (
        <div className='pt-24 pb-24'>
            <div className='progress_bar_container'>
                <LinearProgress variant="determinate" value={50} />
            </div>
        </div>

    )
}

export default ProgressBar