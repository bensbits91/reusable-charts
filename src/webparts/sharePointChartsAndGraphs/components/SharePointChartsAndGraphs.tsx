import * as React from 'react';
import { Stack/* , IStackStyles, IStackTokens, IStackItemStyles */ } from 'office-ui-fabric-react/lib/Stack';
// import styles from './SharePointChartsAndGraphs.module.scss';
import { ISharePointChartsAndGraphsProps } from './ISharePointChartsAndGraphsProps';

import TinyLineChartOne from './line/TinyLineChartOne';
// import LineChartOne from './line/LineChartOne';
// import LineChartLegendEffectOpacityOne from './line/LineChartLegendEffectOpacityOne';
// import LineChartWithReferenceLinesOne from './line/LineChartWithReferenceLinesOne';
// import DashedLineChartOne from './line/DashedLineChartOne';
// import CustomizedDotLineChartOne from './line/CustomizedDotLineChartOne';
// import LineChartHasMultiSeriesOne from './line/LineChartHasMultiSeriesOne';
// import LineChartAxisIntervalOne from './line/LineChartAxisIntervalOne';
// import VerticalLineChartOne from './line/VerticalLineChartOne';

// import TinyAreaChartOne from './area/TinyAreaChartOne';
// import AreaChartOne from './area/AreaChartOne';
// import StackedAreaChartOne from './area/StackedAreaChartOne';
import AreaChartFillByValueOne from './area/AreaChartFillByValueOne';
import AreaRangeChartOne from './area/AreaRangeChartOne';
import PercentAreaChartOne from './area/PercentAreaChartOne';

import TinyBarChartOne from './bar/TinyBarChartOne';
// import BarChartOne from './bar/BarChartOne';
import StackedBarChartOne from './bar/StackedBarChartOne';
import MixBarChartOne from './bar/MixBarChartOne';
import BarRangeChartOne from './bar/BarRangeChartOne';
// import PositiveAndNegativeBarChartOne from './bar/PositiveAndNegativeBarChartOne';
import PositiveAndNegativeStackedBarChartOne from './bar/PositiveAndNegativeStackedBarChartOne';
// import BarChartWithMultiXAxisOne from './bar/BarChartWithMultiXAxisOne';
import BarChartCustomTooltipOne from './bar/BarChartCustomTooltipOne';
import VerticalBarChartOne from './bar/VerticalBarChartOne';

import ComposedChartOne from './composed/ComposedChartOne';
// import SameDataComposedChartOne from './composed/SameDataComposedChartOne';
// import ComposedChartWithAxisLabelsOne from './composed/ComposedChartWithAxisLabelsOne';
// import VerticalComposedChartOne from './composed/VerticalComposedChartOne';

// import BasicScatterChartOne from './scatter/BasicScatterChartOne';
import TinyScatterChartOne from './scatter/TinyScatterChartOne';
import ScatterChartOne from './scatter/ScatterChartOne';
import ThreeDimScatterChartOne from './scatter/ThreeDimScatterChartOne';
// import JointLineScatterChartOne from './scatter/JointLineScatterChartOne';
import ScatterChartWithLabelsOne from './scatter/ScatterChartWithLabelsOne';
// import ScatterChartWithCellsOne from './scatter/ScatterChartWithCellsOne';
// import BubbleChartOne from './scatter/BubbleChartOne';

import BasicPieChartOne from './pie/BasicPieChartOne';
import TwoLevelPieChartOne from './pie/TwoLevelPieChartOne';
import CustomActiveShapePieChartOne from './pie/CustomActiveShapePieChartOne';
import PieChartWithCustomizedLabelOne from './pie/PieChartWithCustomizedLabelOne';
import HalfPieChartOne from './pie/HalfPieChartOne';
import Gauge from './pie/Gauge';

import RadialBarChartOne from './pie/RadialBarChartOne';
import RadialBlurChartOne from './pie/RadialBlurChartOne';

import RadarChartOne from './radar/RadarChartOne';
import FunnelChartOne from './funnel/FunnelChartOne';

// import TreemapOne from './treemap/TreemapOne';
import CustomContentTreemapOne from './treemap/CustomContentTreemapOne';

import AALineChart from './line/AALineChart';
import AAAreaChart from './area/AAAreaChart';


// import BrushBarChartOne from './bar/BrushBarChartOne';
// import BrushLineChartOne from './line/BrushLineChartOne';
import BrushComposedChartOne from './composed/BrushComposedChartOne';




import './temp.css';

import * as sampleData from './sampleData';
import * as colors from './colors';





export default class SharePointChartsAndGraphs extends React.Component<ISharePointChartsAndGraphsProps, {}> {
    public render(): React.ReactElement<ISharePointChartsAndGraphsProps> {
        console.clear();



        const www_line = <div className='group line'>
            <div className='tiny'>
                <AALineChart
                    data={sampleData.lines_tiny}
                    dataKey_y1='Sales'
                    stroke_color_1={colors.navy}
                    tooltip
                />
            </div>
            <div>
                <AALineChart
                    data={sampleData.lines_tiny}
                    dataKey_x='Day'
                    dataKey_y1='Sales'
                    dataKey_y2='Guests'
                    width={730}
                    height={250}
                    stroke_color_1={colors.navy}
                    stroke_color_2={colors.mint}
                    tooltip
                    legend
                    cart_grid
                />
            </div>
        </div>;
        const www_area = <div className='group area'>
            <div className='tiny'>
                <AAAreaChart
                    data={sampleData.lines_tiny}
                    dataKey_y1='Sales'
                    stroke_color_1={colors.navy}
                    tooltip
                />
            </div>
            <div>
                <AAAreaChart
                    data={sampleData.lines_tiny}
                    dataKey_x='Store'
                    dataKey_y1='Sales'
                    dataKey_y2='Guests'
                    width={730}
                    height={250}
                    stroke_color_1={colors.navy}
                    stroke_color_2={colors.mint}
                    tooltip
                    legend
                    cart_grid
                />
            </div>
            <div>
                <AAAreaChart
                    data={sampleData.lines_tiny}
                    dataKey_x='Store'
                    dataKey_y1='Sales'
                    dataKey_y2='Guests'
                    width={730}
                    height={250}
                    stroke_color_1={colors.navy}
                    stroke_color_2={colors.mint}
                    tooltip
                    legend
                    cart_grid
                    stack
                />
            </div>
            <Stack horizontal>
                <div>
                    <PercentAreaChartOne />
                </div>
                <div>
                    <AreaChartFillByValueOne />
                </div>
            </Stack>
            <div>
                <AreaRangeChartOne />
            </div>
        </div>;
        const www_bar = <div className='group bar'>
            <div className='tiny'>
                <TinyBarChartOne />
            </div>
            <Stack horizontal>
                <div>
                    <PositiveAndNegativeStackedBarChartOne />
                </div>
                <div>
                    <MixBarChartOne />
                </div>
            </Stack>
            <Stack horizontal>
                <div>
                    <BarRangeChartOne />
                </div>
                <div>
                    <VerticalBarChartOne />
                </div>
            </Stack>
            <Stack horizontal>
                <div>
                    <StackedBarChartOne />
                </div>
                <div>
                    <BarChartCustomTooltipOne />
                </div>
            </Stack>
        </div>;
        const www_scatter = <div className='group scatter'>
            <div className='tiny'>
                <TinyScatterChartOne />
            </div>
            <div>
                <ScatterChartOne />
            </div>
            <Stack horizontal>
                <div>
                    <ThreeDimScatterChartOne />
                </div>
                <div>
                    <ScatterChartWithLabelsOne />
                </div>
            </Stack>
        </div>;
        const www_composed = <div className='group composed'>
            <div>
                <ComposedChartOne />
            </div>
        </div>;
        const www_brush = <div className='group brush'>
            <div>
                <BrushComposedChartOne />
            </div>

        </div>;
        const www_pie = <div className='group pie'>
            <Stack horizontal>
                <div>
                    <BasicPieChartOne />
                </div>
                <div>
                    <HalfPieChartOne />
                </div>
            </Stack>
            <Stack horizontal>
                <div>
                    <CustomActiveShapePieChartOne />
                </div>
                <div>
                    <Gauge />
                </div>
            </Stack>
            <Stack horizontal>
                <div>
                    <PieChartWithCustomizedLabelOne />
                </div>
                <div>
                    <TwoLevelPieChartOne />
                </div>
            </Stack>
            {/* <div>
                <HalfPieChartOne />
            </div> */}
        </div>;
        const www_radial = <div className='group radial'>
            <Stack horizontal>
                <div>
                    <RadialBarChartOne />
                </div>
                <div>
                    <RadialBlurChartOne />
                </div>
            </Stack>
        </div>;
        const www_radar = <div className='group radar'>
            <div>
                <RadarChartOne />
            </div>
        </div>;
        const www_funnel = <div className='group funnel'>
            <div>
                <FunnelChartOne />
            </div>
        </div>;
        const www_treemap = <div className='group treemap'>
            {/* <div>
                <TreemapOne />
            </div> */}
            <div>
                <CustomContentTreemapOne />
            </div>
        </div>;
        return (
            <>
                {/* 
                    {www_line}
                    {www_area}
                */}
                {www_bar}
                {/* 
                    {www_scatter}
                    {www_composed}
                    {www_brush}
                    {www_pie}
                    {www_radial}
                    {www_radar}
                    {www_funnel}
                    {www_treemap}
                */}










                {/* {cartesian_group}
                {radial_group}
                {misc_group} */}
            </>
        );
    }
}





/* const line = <>
    <h2>Line Charts</h2>
    <div className='vis-wrap'>
        <h3>Tiny Line Chart</h3>
        <TinyLineChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Basic Line Chart</h3>
        <LineChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line Chart with Legend Hover Effect</h3>
        <LineChartLegendEffectOpacityOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line Chart with Reference Lines</h3>
        <LineChartWithReferenceLinesOne />
    </div>
    <div className='vis-wrap'>
        <h3>Dashed Line Chart</h3>
        <DashedLineChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line Chart with Custom Dots</h3>
        <CustomizedDotLineChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line Chart with Multiple Series</h3>
        <LineChartHasMultiSeriesOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line Charts with Different Axis Intervals</h3>
        <LineChartAxisIntervalOne />
    </div>
    <div className='vis-wrap'>
        <h3>Vertical Line Chart</h3>
        <VerticalLineChartOne />
    </div>
</>;
const area = <>
    <h2>Area Charts</h2>
    <div className='vis-wrap'>
        <h3>Tiny Area Chart</h3>
        <TinyAreaChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Basic Area Chart</h3>
        <AreaChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Stacked Area Chart</h3>
        <StackedAreaChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Percentage Area Chart</h3>
        <PercentAreaChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Area Chart with Different Fill Colors</h3>
        <AreaChartFillByValueOne />
    </div>
    <div className='vis-wrap'>
        <h3>Area Range Chart</h3>
        <AreaRangeChartOne />
    </div>
</>;
const bar = <>
    <h2>Bar Charts</h2>
    <div className='vis-wrap'>
        <h3>Tiny Bar Chart</h3>
        <TinyBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Basic Bar Chart</h3>
        <BarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Stacked Bar Chart</h3>
        <StackedBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Mixed Bar Chart</h3>
        <MixBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Bar Range Chart</h3>
        <BarRangeChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Positive &amp; Negative Bar Chart</h3>
        <PositiveAndNegativeBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Positive &amp; Negative Stacked Bar Chart</h3>
        <PositiveAndNegativeStackedBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Bar Chart with Multiple Axes</h3>
        <BarChartWithMultiXAxisOne />
    </div>
    <div className='vis-wrap'>
        <h3>Bar Chart with Custom Tooltip</h3>
        <BarChartCustomTooltipOne />
    </div>
    <div className='vis-wrap'>
        <h3>Brush Bar Chart</h3>
        <BrushBarChartOne />
    </div>
</>;
const composed = <>
    <h2>Composed Charts</h2>
    <div className='vis-wrap'>
        <h3>Line/Bar/Area Composed Chart</h3>
        <ComposedChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Same-Data Line/Bar Composed Chart</h3>
        <SameDataComposedChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Line/Bar/Area Composed Chart with Axis Labels</h3>
        <ComposedChartWithAxisLabelsOne />
    </div>
    <div className='vis-wrap'>
        <h3>Vertical Line/Bar/Area Composed Chart</h3>
        <VerticalComposedChartOne />
    </div>
</>;
const scatter = <>
    <h2>Scatter Charts</h2>
    <div className='vis-wrap'>
        <h3>Basic Scatter Chart</h3>
        <BasicScatterChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Scatter Chart with Two Data Sets</h3>
        <ScatterChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>3D Scatter Chart</h3>
        <ThreeDimScatterChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Joint Line Scatter Chart</h3>
        <JointLineScatterChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Scatter Chart with Labels</h3>
        <ScatterChartWithLabelsOne />
    </div>
    <div className='vis-wrap'>
        <h3>Bubble Chart</h3>
        <BubbleChartOne />
    </div>
</>;
const cartesian_group = <>
    <h1>Cartesian</h1>
    {line}
    {scatter}
    {area}
    {bar}
    {composed}
</>;

const pie = <>
    <h2>Pie Charts</h2>
    <div className='vis-wrap'>
        <h3>Basic Pie Chart</h3>
        <BasicPieChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Two Level Pie Chart</h3>
        <TwoLevelPieChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Pie Chart with Hover Effect</h3>
        <CustomActiveShapePieChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Pie Chart with Custom Colors and Labels</h3>
        <PieChartWithCustomizedLabelOne />
    </div>
    <div className='vis-wrap'>
        <h3>Half Pie Chart</h3>
        <HalfPieChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Pie Chart with Padding</h3>
        <Gauge />
    </div>
    <div className='vis-wrap'>
        <h3>Radial Bar Chart</h3>
        <RadialBarChartOne />
    </div>
    <div className='vis-wrap'>
        <h3>Radial Blur Chart</h3>
        <RadialBlurChartOne />
    </div>
</>;
const radar = <>
    <h2>Radar Charts</h2>
    <div className='vis-wrap'>
        <h3>Basic Radar Chart</h3>
        <RadarChartOne />
    </div>
</>;
const radial_blur = <>
    <h2>Radial Blur Charts</h2>
</>;
const radial_group = <>
    <h1>Radial</h1>
    {pie}
    {radar}
    {radial_blur}
</>;

const funnel = <>
    <div className='vis-wrap'>
        <h3>Funnel Chart</h3>
        <FunnelChartOne />
    </div>
</>;
const treemap = <>
    <div className='vis-wrap'>
        <h3>Tree Map</h3>
        <TreemapOne />
    </div>
    <div className='vis-wrap'>
        <h3>Tree Map with Custom Content</h3>
        <CustomContentTreemapOne />
    </div>
</>;
const misc_group = <>
    <h1>More</h1>
    {funnel}
    {treemap}
</>; */

