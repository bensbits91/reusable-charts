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
import * as times from '../times';

const mcc = 'color:aqua;';

export interface AAAreaChartProps {
    data: any;
    height?: number;
    width?: number;
    type?: string;
    dataKey_x?: string;
    dataKey_y1?: string;
    dataKey_y2?: string;
    stroke_color_1?: string;
    stroke_color_2?: string;
    strokeWidth?: string;
    tooltip?: boolean;
    legend?: boolean;
    cart_grid?: boolean;
    stack?: boolean;
}

export interface AAAreaChartState {
    opacity: any;
}

class AAAreaChart extends React.Component<AAAreaChartProps, AAAreaChartState> {
    constructor(props: AAAreaChartProps) {
        super(props);
        this.state = {
            opacity: {
                [this.props.dataKey_y1]: 1,
                [this.props.dataKey_y2]: 1,
            },
        };
    }

    public handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    }

    public handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    }

    public render() {
        const { opacity } = this.state;

        const p = this.props;
        console.log('%c : AAAreaChart -> render -> p', mcc, p);

        const width = p.width ? p.width : 300;
        const height = p.height ? p.height : 100;

        const data = p.data/*  ? p.data : data_temp_1 */;

        const type = p.type ? p.type : 'monotone';

        const dataKey_x = p.dataKey_x ? p.dataKey_x : null;
        const dataKey_y1 = p.dataKey_y1 ? p.dataKey_y1 : null;
        const dataKey_y2 = p.dataKey_y2 ? p.dataKey_y2 : null;

        const stroke_color_1 = p.stroke_color_1 ? p.stroke_color_1 : '#8884d8';
        const stroke_color_2 = p.stroke_color_2 ? p.stroke_color_2 : '#82ca9d';
        const strokeWidth = p.strokeWidth ? p.strokeWidth : 2;

        const stack = p.stack ? p.stack : false;

        const el_area = !stack ?
            <Area
                type={type}
                dataKey={dataKey_y1}
                stroke={stroke_color_1}
                strokeWidth={strokeWidth}
                strokeOpacity={opacity[dataKey_y1]}
                fill='url(#colorUv)'
                fillOpacity={opacity[dataKey_y1]}
                activeDot={{ r: 8 }}
                animationBegin={times.one}
            />
            : <></>;

        const el_area_2 = !stack && dataKey_y2 ?
            <Area
                type={type}
                dataKey={dataKey_y2}
                stroke={stroke_color_2}
                strokeWidth={strokeWidth}
                strokeOpacity={opacity[dataKey_y2]}
                fill='url(#colorPv)'
                fillOpacity={opacity[dataKey_y2]}
                animationBegin={times.two}
            />
            : <></>;

        const el_area_stacked_1 = stack ?
            <Area
                type={type}
                dataKey={dataKey_y1}
                stackId='1'
                stroke={stroke_color_1}
                strokeOpacity={opacity[dataKey_y1]}
                fill={stroke_color_1}
                fillOpacity={opacity[dataKey_y1]}
                animationBegin={times.one}
            />
            : <></>;

        const el_area_stacked_2 = stack ?
            <Area
                type={type}
                dataKey={dataKey_y2}
                stackId='1'
                stroke={stroke_color_2}
                strokeOpacity={opacity[dataKey_y2]}
                fill={stroke_color_2}
                fillOpacity={opacity[dataKey_y2]}
                animationBegin={times.two}
            />
            : <></>;

        const el_area_stacked_3 = stack ?
            <Area
                type={type}
                dataKey='Incidents'
                stackId='1'
                stroke='#ffc658'
                strokeOpacity={opacity.Incidents}
                fill='#ffc658'
                fillOpacity={opacity.Incidents}
                animationBegin={times.three}
            />
            : <></>;


        return (
            <AreaChart
                width={width}
                height={height}
                data={data}
            // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor={stroke_color_1} stopOpacity={0.8} />
                        <stop offset='95%' stopColor={stroke_color_1} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor={stroke_color_2} stopOpacity={0.8} />
                        <stop offset='95%' stopColor={stroke_color_2} stopOpacity={0} />
                    </linearGradient>
                </defs>

                {el_area}
                {el_area_2}
                {el_area_stacked_1}
                {el_area_stacked_2}
                {el_area_stacked_3}

                {p.cart_grid &&
                    <CartesianGrid strokeDasharray='3 3' />
                }
                {p.cart_grid &&
                    <XAxis dataKey={dataKey_x} />
                }
                {p.cart_grid &&
                    <YAxis />
                }
                {this.props.tooltip &&
                    <Tooltip />
                }
                {this.props.legend &&
                    <Legend
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                }
            </AreaChart>
        );
    }
}

export default AAAreaChart;