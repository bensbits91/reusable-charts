import * as React from 'react';
import {
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    Legend
} from 'recharts';
import { radar } from '../sampleData';
import { navy, mint, yellow, pink } from '../colors';
import * as times from '../times';


class RadarChartOne extends React.PureComponent {
    state = {
        colors: {
            A: null,
            B: null,
            C: null,
        },
        opacity: {
            A: 0.4,
            B: 0.4,
            C: 0.4
        },
    };

    public handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { colors, opacity } = this.state;

        this.setState({
            // colors: { ...colors, [dataKey]: '#ccc' },
            opacity: { ...opacity, [dataKey]: 0.8 },
        });
    }

    public handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { colors, opacity } = this.state;

        this.setState({
            // colors: { ...colors, [dataKey]: null },
            opacity: { ...opacity, [dataKey]: 0.4 },
        });
    }

    public render() {

        const { colors, opacity } = this.state;

        return (
            <RadarChart
                outerRadius={180}
                width={500}
                height={500}
                data={radar}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey='subject' />
                <PolarRadiusAxis angle={70} domain={[0, 150]} />
                <Radar
                    name='Fullerton'
                    dataKey='A'
                    strokeWidth={2}
                    stroke={navy}
                    fill={/* colors.A ? colors.A :  */navy}
                    fillOpacity={opacity.A ? opacity.A : 0.4}
                    animationBegin={times.one}
                    animationDuration={2000}
                />
                <Radar
                    name='Riverside'
                    dataKey='B'
                    strokeWidth={2}
                    stroke={yellow}
                    fill={/* colors.B ? colors.B :  */yellow}
                    fillOpacity={opacity.B ? opacity.B : 0.4}
                    animationBegin={times.three}
                    animationDuration={2000}
                />
                <Radar
                    name='Beaumont'
                    dataKey='C'
                    strokeWidth={2}
                    stroke={pink}
                    fill={/* colors.C ? colors.C :  */pink}
                    fillOpacity={opacity.C ? opacity.C : 0.4}
                    animationBegin={times.five}
                    animationDuration={2000}
                />
                <Tooltip />
                <Legend
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
            </RadarChart>
        );
    }
}

export default RadarChartOne;