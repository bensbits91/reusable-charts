import * as React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { area_percent } from '../sampleData';
import { navy, mint, yellow } from '../colors';
import * as times from '../times';

const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 1) => `${(decimal * 100).toFixed(0)}%`;
// const toPercent = (decimal, fixed = 1) => `${(decimal * 100).toFixed(fixed)}%`;

const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => (result + entry.value), 0);

    return (
        <div className='customized-tooltip-content'>
            <p className='total'>{`${label} (Total: ${total})`}</p>
            <ul className='list'>
                {
                    payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{ color: entry.color }}>
                            {`${entry.name}: ${entry.value} (${getPercent(entry.value, total)})`}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default class PercentAreaChartOne extends React.PureComponent {
    state = {
        colors: {
            Cats: null,
            Dogs: null,
            Birds: null,
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
            <AreaChart
                width={500}
                height={400}
                data={area_percent}
                stackOffset='expand'
            // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='Day' />
                <YAxis tickFormatter={toPercent} />
                <Tooltip content={renderTooltipContent} />
                <Legend
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
                <Area
                    type='monotone'
                    dataKey='Cats'
                    stackId='1'
                    fill={colors.Cats ? colors.Cats : navy}
                    stroke={colors.Cats ? colors.Cats : navy}
                    animationBegin={times.one}
                />
                <Area
                    type='monotone'
                    dataKey='Dogs'
                    stackId='1'
                    fill={colors.Dogs ? colors.Dogs : mint}
                    stroke={colors.Dogs ? colors.Dogs : mint}
                    animationBegin={times.one}
                />
                <Area
                    type='monotone'
                    dataKey='Birds'
                    stackId='1'
                    fill={colors.Birds ? colors.Birds : yellow}
                    stroke={colors.Birds ? colors.Birds : yellow}
                    animationBegin={times.one}
                />
            </AreaChart>
        );
    }
}
