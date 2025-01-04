import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import imageList from './Structures';

export function AppearFunction() {
    let proImage = [];
    function icon() {
        imageList.forEach((list, i) => {
            proImage[i] = <div key={list.index} className='w-full lg:w-1/3'>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0 0', padding: '10px' }}
                    {...(true ? { timeout: 1000 * list.index } : {})}
                >
                    <img className="w-full h-full rounded-3xl" src={list.url} alt={list.alt} />
                </Grow>
            </div>
        })
        return (
            <div className='w-full flex-wrap block lg:flex'>
                {proImage}
            </div>
        )
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', width: "100%" }}>
                {icon()}
            </Box>
        </Box>
    );
}
