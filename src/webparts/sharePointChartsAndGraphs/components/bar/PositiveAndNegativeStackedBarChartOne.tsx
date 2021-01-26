import * as React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { area_pos_neg } from '../sampleData';
import { navy, mint } from '../colors';
import * as times from '../times';

export default class PositiveAndNegativeStackedBarChartOne extends React.PureComponent {
    state = {
        colors: {
            'Sales % Change': null,
            'Guest Count % Change': null,
        }
    };

    public handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { colors } = this.state;

        this.setState({
            colors: { ...colors, [dataKey]: '#ccc' },
        });
    }

    public handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { colors } = this.state;

        this.setState({
            colors: { ...colors, [dataKey]: null },
        });
    }

    public render() {

        const { colors } = this.state;

        return (
            <BarChart
                width={500}
                height={300}
                data={area_pos_neg}
                stackOffset='sign'
            // margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
                <ReferenceLine y={0} stroke='#000' />
                <Bar
                    dataKey='Sales % Change'
                    fill={colors['Sales % Change'] ? colors['Sales % Change'] : navy}
                    stackId='stack'
                    animationBegin={times.one}
                />
                <Bar
                    dataKey='Guest Count % Change'
                    fill={colors['Guest Count % Change'] ? colors['Guest Count % Change'] : mint}
                    stackId='stack'
                    animationBegin={times.two}
                />
            </BarChart>
        );
    }
}
