import * as React from 'react';
import {
    Area,
    Bar,
    Brush,
    CartesianGrid,
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';
import { brush_big } from '../sampleData';
import * as colors from '../colors';

export interface BrushComposedChartOneProps { }
// export interface BrushComposedChartOneState {}

class BrushComposedChartOne extends React.Component<BrushComposedChartOneProps, {}> {
    constructor(props: BrushComposedChartOneProps) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (
            <ComposedChart width={1200} height={500} data={brush_big}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#f5f5f5' />
                <Area
                    dataKey='Sales'
                    type='monotone'
                    fill={colors.mint}
                    stroke={colors.mint_light}
                />
                <Area
                    dataKey='Sales Last Year'
                    type='monotone'
                    fill={colors.mint}
                    stroke={colors.mint}
                />
                <Bar
                    dataKey='Guests'
                    barSize={10}
                    fill={colors.navy}
                />
                <Bar
                    dataKey='Guests Last Year'
                    barSize={10}
                    fill={colors.navy_light}
                />
                <Line
                    dataKey='Incidents'
                    type='monotone'
                    stroke={colors.red}
                />
                <Line
                    dataKey='Incidents Last Year'
                    type='monotone'
                    stroke={colors.orange}
                />
                <Brush
                    dataKey='Store'
                    height={30}
                    stroke={colors.navy}
                />
            </ComposedChart>
        );
    }
}

export default BrushComposedChartOne;