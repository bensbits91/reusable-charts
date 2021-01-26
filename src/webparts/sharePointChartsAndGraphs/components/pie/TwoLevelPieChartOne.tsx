import * as React from 'react';
import {
    PieChart,
    Pie,
    Tooltip,
    Legend
} from 'recharts';
import { pie_2levels_1, pie_2levels_2 } from '../sampleData';
import { navy, mint, yellow, orange } from '../colors';
import * as times from '../times';

export interface TwoLevelPieChartOneProps { }

// export interface TwoLevelPieChartOneState {}
// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//     cx, cy, midAngle, innerRadius, outerRadius, percent, index,
// }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };

class TwoLevelPieChartOne extends React.PureComponent {

    public render() {
        return (
            <PieChart width={300} height={300}>
                <Pie
                    data={pie_2levels_1}
                    dataKey='value'
                    nameKey='name'
                    cx='50%'
                    cy='50%'
                    outerRadius={50}
                    fill={mint}
                    // label={renderCustomizedLabel}
                />
                <Pie
                    data={pie_2levels_2}
                    dataKey='value'
                    nameKey='name'
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={80}
                    fill={navy}
                    label
                    animationBegin={times.one}
                />
                <Tooltip />
                {/* <Legend /> */}
            </PieChart>
        );
    }
}

export default TwoLevelPieChartOne;