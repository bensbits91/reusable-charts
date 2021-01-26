import * as React from 'react';
import {
    ComposedChart,
    Area,
    Bar,
    CartesianGrid,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';
import { sales_small } from '../sampleData';
import { navy, mint, orange, pink } from '../colors';
import * as times from '../times';

class ComposedChartOne extends React.PureComponent {
    state = {
        colors: {
            Sales: null,
            Guests: null,
            Incidents: null,
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
            <ComposedChart width={730} height={250} data={sales_small}>
                <XAxis dataKey='Store' />
                <YAxis />
                <Tooltip />
                <Legend
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
                <CartesianGrid stroke='#f5f5f5' />
                <Area
                    dataKey='Sales'
                    type='monotone'
                    fill={colors.Sales ? colors.Sales : navy}
                    stroke={colors.Sales ? colors.Sales : navy}
                    animationBegin={times.one}
                    />
                <Bar
                    dataKey='Guests'
                    barSize={20}
                    fill={colors.Guests ? colors.Guests : mint}
                    animationBegin={times.two}
                    />
                <Line
                    dataKey='Incidents'
                    type='monotone'
                    stroke={colors.Incidents ? colors.Incidents : orange}
                    animationBegin={times.three}
                />
            </ComposedChart>
        );
    }
}

export default ComposedChartOne;