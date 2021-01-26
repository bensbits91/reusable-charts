import * as React from 'react';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';
import { temp_range_by_day } from '../sampleData';
import * as times from '../times';

export interface AreaChartOneProps {

}
// export interface AreaChartOneState {}

class AreaChartOne extends React.Component<AreaChartOneProps, {}> {
    constructor(props: AreaChartOneProps) {
        super(props);
        // this.state = { : };
    }
    render() {
        return (
            <AreaChart
                width={730}
                height={250}
                data={temp_range_by_day}
            // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <XAxis dataKey='day' />
                <YAxis />
                <Area
                    type='monotone'
                    dataKey='Temperature'
                    stroke='#1e3b5a'
                    fill='#1e3b5a'
                    animationBegin={times.one}
                />
                <Tooltip />
                <Legend />
            </AreaChart>
        );
    }
}

export default AreaChartOne;
