import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter} from './webUsageStats';

const size = {
    width:600,
    height:500, 
};
const data = {
    data: desktopOS,
    valueFormatter,
};
export default function PieCharts() {

    return (
        <div className='flex justify-center items-center w-full p-0'>
            
            <PieChart
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    innerRadius: 50,
                    arcLabelRadius: '50%',
                    outerRadius: 200,
                    paddingAngle: 2,
                    cornerRadius: 10,                    
                    ...data,
                },
            ]}
            colors={[
               " rgb(243, 222, 28)",
               "rgb(255, 81, 0)",
               "rgb(32, 121, 255)",
               "rgb(137, 74, 255)",
               "rgb(74, 209, 103)",
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold',                    
                    fontSize: 20,
                },
            }}
                        {...size}
        />        
        </div>
    );
}
