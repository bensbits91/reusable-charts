import * as React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { lines_tiny } from '../sampleData';
import { navy, mint, yellow } from '../colors';
import * as times from '../times';

export default class MixBarChartOne extends React.PureComponent {
    state = {
        colors: {
            Sales: null,
            Amount: null,
            Guests: null,
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
                data={lines_tiny}
            // margin={{ top: 20, right: 30, left: 20, bottom: 5, }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='Day' />
                <YAxis />
                <Tooltip />
                <Legend
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
                <Bar
                    dataKey='Sales'
                    stackId='a'
                    fill={colors.Sales ? colors.Sales : navy}
                    animationBegin={times.one}
                />
                <Bar
                    dataKey='Amount'
                    stackId='a'
                    fill={colors.Amount ? colors.Amount : mint}
                    animationBegin={times.two}
                />
                <Bar
                    dataKey='Guests'
                    fill={colors.Guests ? colors.Guests : yellow}
                    animationBegin={times.three}
                />
            </BarChart>
        );
    }
}
