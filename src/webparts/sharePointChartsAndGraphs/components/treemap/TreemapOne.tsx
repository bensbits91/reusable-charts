import * as React from 'react';
import {
    Treemap,
    // Funnel,
    // LabelList,
    Tooltip,
    // Legend
} from 'recharts';
import { treemap } from '../sampleData';
import { navy } from '../colors';

class TreeChartOne extends React.PureComponent {
    render() {
        return (
            <Treemap
                width={730}
                height={250}
                data={treemap}
                dataKey='size'
                ratio={4 / 3}
                stroke='#fff'
                fill={navy}
            >
                <Tooltip /* content={<CustomTooltip />}  *//>
            </Treemap>
        );
    }
}

export default TreeChartOne;