import * as React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';
import { survey_averages } from '../sampleData';
import { navy, mint, yellow, pink } from '../colors';
import * as times from '../times';

export default class Example extends React.PureComponent {
    public render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={survey_averages}
                layout='vertical'
            // margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
            >
                {/* <CartesianGrid strokeDasharray='3 3' /> */}
                <XAxis type='number' domain={[0, 10]} />
                <YAxis
                    dataKey='question'
                    type='category'
                    tick={false}
                />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Bar
                    dataKey='score'
                    fill={navy}
                    barSize={30}
                    animationBegin={times.one}
                    label={{ fill: '#eee', position: 'insideRight' }}
                >
                    <LabelList
                        position='insideLeft'
                        fill='#eee'
                        stroke='none'
                        dataKey='question'
                    />
                </Bar>
                {/* <Bar dataKey='Speed of Service' fill={navy} /> */}
            </BarChart>
        );
    }
}