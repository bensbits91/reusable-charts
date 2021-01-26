import * as React from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';
import { temp_range_by_day } from '../sampleData';
import { navy } from '../colors';
import * as times from '../times';

export interface BarRangeChartOneProps { }
// export interface BarRangeChartOneState {}

class BarRangeChartOne extends React.Component<BarRangeChartOneProps, {}> {
    constructor(props: BarRangeChartOneProps) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={temp_range_by_day}
            >
                <Tooltip />
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='day' />
                <YAxis />
                <Bar
                    dataKey='Temperature'
                    fill={navy}
                    animationBegin={times.one}
                />
                <Legend />
            </BarChart>
        );
    }
}

export default BarRangeChartOne;