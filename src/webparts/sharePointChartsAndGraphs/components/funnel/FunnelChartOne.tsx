import * as React from 'react';
import {
    FunnelChart,
    Funnel,
    LabelList,
    Tooltip,
    // Legend
} from 'recharts';
import { funnel } from '../sampleData';
import { navy } from '../colors';

const mcc = 'color: lime;';

interface CustomTooltipProps {
    active?: any;
    label?: any;
    payload?: any;
}

// const CustomTooltip = ({ active, payload, label }) => {
class CustomTooltip extends React.Component<CustomTooltipProps> {
    render() {

        const { active, label, payload } = this.props;

        if (active) {
            // console.log('%c : CustomTooltip -> render -> this.props', mcc, this.props);
            const pl = payload[0].payload.payload;
            // console.log('%c : CustomTooltip -> render -> pl', mcc, pl);

            return (
                <div className='custom-tooltip' style={{ backgroundColor: pl.fill, color: '#eee', padding: '20px', border: '1px solid #eee' }}>
                    <div className='toolname' style={{ fontSize: 15 }}>{pl.name}</div>
                    <div className='toolvalue' style={{ fontSize: 21 }}>{pl.value}</div>
                </div>
            );
        }

        return null;
    }
}


class FunnelChartOne extends React.PureComponent {
    public render() {
        return (
            <FunnelChart
                width={500}
                height={250}
            >
                <Tooltip content={<CustomTooltip />} />
                <Funnel
                    dataKey='value'
                    data={funnel}
                    isAnimationActive
                >
                    <LabelList
                        position='left'
                        stroke='none'
                        dataKey='name'
                    />
                </Funnel>
            </FunnelChart>

        );
    }
}

export default FunnelChartOne;