import * as colors from './colors';

export const lines_tiny = [
    {
        Day: 'Sun', Guests: 3490, Sales: 4300, Amount: 2100, Incidents: 1759
    },
    {
        Day: 'Mon', Guests: 4000, Sales: 2400, Amount: 2400, Incidents: 1776
    },
    {
        Day: 'Tue', Guests: 3000, Sales: 1398, Amount: 2210, Incidents: 1634
    },
    {
        Day: 'Wed', Guests: 2000, Sales: 9800, Amount: 2290, Incidents: 1461
    },
    {
        Day: 'Thu', Guests: 2780, Sales: 3908, Amount: 2000, Incidents: 1720
    },
    {
        Day: 'Fri', Guests: 1890, Sales: 4800, Amount: 2181, Incidents: 1378
    },
    {
        Day: 'Sat', Guests: 2390, Sales: 3800, Amount: 2500, Incidents: 1949
    },
];

export const sales_small = [
    { Store: 1, Sales: 6549.96, Guests: 3548, Incidents: 776 },
    { Store: 2, Sales: 6091.83, Guests: 4862, Incidents: 634 },
    { Store: 3, Sales: 7314.8, Guests: 4475, Incidents: 461 },
    { Store: 4, Sales: 6627.82, Guests: 4717, Incidents: 720 },
    { Store: 5, Sales: 6430.87, Guests: 3017, Incidents: 378 },
    { Store: 6, Sales: 6080.6, Guests: 4917, Incidents: 949 },
    { Store: 7, Sales: 6601.91, Guests: 4812, Incidents: 759 }
];

export const area_pos_neg = [
    {
        'name': 'Sun', 'Sales % Change': 4000, 'Guest Count % Change': 2400, 'amt': 2400,
    },
    {
        'name': 'Mon', 'Sales % Change': 3000, 'Guest Count % Change': 1398, 'amt': 2210,
    },
    {
        'name': 'Tue', 'Sales % Change': -1000, 'Guest Count % Change': 9800, 'amt': 2290,
    },
    {
        'name': 'Wed', 'Sales % Change': 500, 'Guest Count % Change': 3908, 'amt': 2000,
    },
    {
        'name': 'Thu', 'Sales % Change': -2000, 'Guest Count % Change': 4800, 'amt': 2181,
    },
    {
        'name': 'Fri', 'Sales % Change': -250, 'Guest Count % Change': 3800, 'amt': 2500,
    },
    {
        'name': 'Sat', 'Sales % Change': 3490, 'Guest Count % Change': 4300, 'amt': 2100,
    },
];

export const area_percent = [
    {
        Day: 'Mon', Cats: 4000, Dogs: 2400, Birds: 2400,
    },
    {
        Day: 'Tue', Cats: 3000, Dogs: 1398, Birds: 2210,
    },
    {
        Day: 'Wed', Cats: 2000, Dogs: 9800, Birds: 2290,
    },
    {
        Day: 'Thu', Cats: 2780, Dogs: 3908, Birds: 2000,
    },
    {
        Day: 'Fri', Cats: 1890, Dogs: 4800, Birds: 2181,
    },
    {
        Day: 'Sat', Cats: 2390, Dogs: 3800, Birds: 2500,
    },
    {
        Day: 'Sun', Cats: 3490, Dogs: 4300, Birds: 2100,
    },
];

export const scatter_basic = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];

export const scatter_2lines_line1 = [
    {
        'x': 100,
        'y': 200,
        'z': 200
    },
    {
        'x': 120,
        'y': 100,
        'z': 260
    },
    {
        'x': 170,
        'y': 300,
        'z': 400
    },
    {
        'x': 140,
        'y': 250,
        'z': 280
    },
    {
        'x': 150,
        'y': 400,
        'z': 500
    },
    {
        'x': 110,
        'y': 280,
        'z': 200
    }
];
export const scatter_2lines_line2 = [
    {
        'x': 200,
        'y': 260,
        'z': 240
    },
    {
        'x': 240,
        'y': 290,
        'z': 220
    },
    {
        'x': 190,
        'y': 290,
        'z': 250
    },
    {
        'x': 198,
        'y': 250,
        'z': 210
    },
    {
        'x': 180,
        'y': 280,
        'z': 260
    },
    {
        'x': 210,
        'y': 220,
        'z': 230
    }
];

export const temp_by_day = [
    {
        date: '2000-01', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        date: '2000-02', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        date: '2000-03', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        date: '2000-04', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        date: '2000-05', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        date: '2000-06', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        date: '2000-07', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        date: '2000-08', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        date: '2000-09', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        date: '2000-10', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        date: '2000-11', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        date: '2000-12', uv: 1890, pv: 4800, amt: 2181,
    },
];

export const temp_range_by_day = [
    {
        'day': '05-01',
        'Temperature': [
            -1,
            10
        ]
    },
    {
        'day': '05-02',
        'Temperature': [
            2,
            15
        ]
    },
    {
        'day': '05-03',
        'Temperature': [
            3,
            12
        ]
    },
    {
        'day': '05-04',
        'Temperature': [
            4,
            12
        ]
    },
    {
        'day': '05-05',
        'Temperature': [
            12,
            16
        ]
    },
    {
        'day': '05-06',
        'Temperature': [
            5,
            16
        ]
    },
    {
        'day': '05-07',
        'Temperature': [
            3,
            12
        ]
    },
    {
        'day': '05-08',
        'Temperature': [
            0,
            8
        ]
    },
    {
        'day': '05-09',
        'Temperature': [
            -3,
            5
        ]
    }
];

export const pie_simple_1 = [
    { name: 'Marketing', value: 400 },
    { name: 'Operations', value: 300 },
    { name: 'Finance', value: 300 },
    { name: 'HR', value: 200 },
];

export const pie_2levels_1 = [
    {
        'name': 'Group A',
        'value': 400
    },
    {
        'name': 'Group B',
        'value': 300
    },
    {
        'name': 'Group C',
        'value': 300
    },
    {
        'name': 'Group D',
        'value': 200
    },
    {
        'name': 'Group E',
        'value': 278
    },
    {
        'name': 'Group F',
        'value': 189
    }
];
export const pie_2levels_2 = [
    {
        'name': 'Group A',
        'value': 2400
    },
    {
        'name': 'Group B',
        'value': 4567
    },
    {
        'name': 'Group C',
        'value': 1398
    },
    {
        'name': 'Group D',
        'value': 9800
    },
    {
        'name': 'Group E',
        'value': 3908
    },
    {
        'name': 'Group F',
        'value': 4800
    }
];

export const pie_half = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

export const radial = [
    {
        name: '18-24', Ratio: 31.47, pv: 2400, fill: colors.navy,
    },
    {
        name: '25-29', Ratio: 26.69, pv: 4567, fill: colors.mint,
    },
    {
        name: '30-34', Ratio: 15.69, pv: 1398, fill: colors.green,
    },
    {
        name: '35-39', Ratio: 8.22, pv: 9800, fill: colors.yellow,
    },
    {
        name: '40-49', Ratio: 8.63, pv: 3908, fill: colors.orange,
    },
    {
        name: '50+', Ratio: 2.63, pv: 4800, fill: colors.red,
    },
    {
        name: 'other', Ratio: 6.67, pv: 4800, fill: colors.pink,
    },
];

export const radar = [
    { 'subject': 'Entrees', 'A': 120, 'B': 110, 'C': 104, 'fullMark': 150 },
    { 'subject': 'Soups', 'A': 65, 'B': 85, 'C': 76, 'fullMark': 150 },
    { 'subject': 'Salads', 'A': 98, 'B': 130, 'C': 111, 'fullMark': 150 },
    { 'subject': 'Appetizers', 'A': 86, 'B': 130, 'C': 55, 'fullMark': 150 },
    { 'subject': 'Sides', 'A': 99, 'B': 100, 'C': 88, 'fullMark': 150 },
    { 'subject': 'Combos', 'A': 85, 'B': 90, 'C': 77, 'fullMark': 150 },
    { 'subject': 'Beverages', 'A': 44, 'B': 54, 'C': 122, 'fullMark': 150 },
    { 'subject': 'Desserts', 'A': 88, 'B': 73, 'C': 106, 'fullMark': 150 },
    { 'subject': 'LTO', 'A': 68, 'B': 99, 'C': 42, 'fullMark': 150 },
];

export const funnel = [
    {
        'value': 963,
        'name': 'Prospecting & Qualifying',
        'fill': colors.navy
    },
    {
        'value': 789,
        'name': 'Needs Analysis',
        'fill': colors.mint
    },
    {
        'value': 533,
        'name': 'Pitch & Demo',
        'fill': colors.green
    },
    {
        'value': 401,
        'name': 'Proposal & Objections',
        'fill': colors.orange
    },
    {
        'value': 263,
        'name': 'Closing',
        'fill': colors.pink
    }
];

export const treemap = [
    {
        "name": "axis",
        "children": [
            {
                "name": "Axis",
                "size": 24593
            },
            {
                "name": "Axes",
                "size": 1302
            },
            {
                "name": "AxisGridLine",
                "size": 652
            },
            {
                "name": "AxisLabel",
                "size": 636
            },
            {
                "name": "CartesianAxes",
                "size": 6703
            }
        ]
    },
    {
        "name": "controls",
        "children": [
            {
                "name": "TooltipControl",
                "size": 8435
            },
            {
                "name": "SelectionControl",
                "size": 7862
            },
            {
                "name": "PanZoomControl",
                "size": 5222
            },
            {
                "name": "HoverControl",
                "size": 4896
            },
            {
                "name": "ControlList",
                "size": 4665
            },
            {
                "name": "ClickControl",
                "size": 3824
            },
            {
                "name": "ExpandControl",
                "size": 2832
            },
            {
                "name": "DragControl",
                "size": 2649
            },
            {
                "name": "AnchorControl",
                "size": 2138
            },
            {
                "name": "Control",
                "size": 1353
            },
            {
                "name": "IControl",
                "size": 763
            }
        ]
    },
    {
        "name": "data",
        "children": [
            {
                "name": "Data",
                "size": 20544
            },
            {
                "name": "NodeSprite",
                "size": 19382
            },
            {
                "name": "DataList",
                "size": 19788
            },
            {
                "name": "DataSprite",
                "size": 10349
            },
            {
                "name": "EdgeSprite",
                "size": 3301
            },
            {
                "name": "render",
                "children": [
                    {
                        "name": "EdgeRenderer",
                        "size": 5569
                    },
                    {
                        "name": "ShapeRenderer",
                        "size": 2247
                    },
                    {
                        "name": "ArrowType",
                        "size": 698
                    },
                    {
                        "name": "IRenderer",
                        "size": 353
                    }
                ]
            },
            {
                "name": "ScaleBinding",
                "size": 11275
            },
            {
                "name": "TreeBuilder",
                "size": 9930
            },
            {
                "name": "Tree",
                "size": 7147
            }
        ]
    },
    {
        "name": "events",
        "children": [
            {
                "name": "DataEvent",
                "size": 7313
            },
            {
                "name": "SelectionEvent",
                "size": 6880
            },
            {
                "name": "TooltipEvent",
                "size": 3701
            },
            {
                "name": "VisualizationEvent",
                "size": 2117
            }
        ]
    },
    {
        "name": "legend",
        "children": [
            {
                "name": "Legend",
                "size": 20859
            },
            {
                "name": "LegendRange",
                "size": 10530
            },
            {
                "name": "LegendItem",
                "size": 4614
            }
        ]
    },
    {
        "name": "operator",
        "children": [
            {
                "name": "distortion",
                "children": [
                    {
                        "name": "Distortion",
                        "size": 6314
                    },
                    {
                        "name": "BifocalDistortion",
                        "size": 4461
                    },
                    {
                        "name": "FisheyeDistortion",
                        "size": 3444
                    }
                ]
            },
            {
                "name": "encoder",
                "children": [
                    {
                        "name": "PropertyEncoder",
                        "size": 4138
                    },
                    {
                        "name": "Encoder",
                        "size": 4060
                    },
                    {
                        "name": "ColorEncoder",
                        "size": 3179
                    },
                    {
                        "name": "SizeEncoder",
                        "size": 1830
                    },
                    {
                        "name": "ShapeEncoder",
                        "size": 1690
                    }
                ]
            },
            {
                "name": "filter",
                "children": [
                    {
                        "name": "FisheyeTreeFilter",
                        "size": 5219
                    },
                    {
                        "name": "VisibilityFilter",
                        "size": 3509
                    },
                    {
                        "name": "GraphDistanceFilter",
                        "size": 3165
                    }
                ]
            },
            {
                "name": "IOperator",
                "size": 1286
            },
            {
                "name": "label",
                "children": [
                    {
                        "name": "Labeler",
                        "size": 9956
                    },
                    {
                        "name": "RadialLabeler",
                        "size": 3899
                    },
                    {
                        "name": "StackedAreaLabeler",
                        "size": 3202
                    }
                ]
            },
            {
                "name": "layout",
                "children": [
                    {
                        "name": "RadialTreeLayout",
                        "size": 12348
                    },
                    {
                        "name": "NodeLinkTreeLayout",
                        "size": 12870
                    },
                    {
                        "name": "CirclePackingLayout",
                        "size": 12003
                    },
                    {
                        "name": "CircleLayout",
                        "size": 9317
                    },
                    {
                        "name": "TreeMapLayout",
                        "size": 9191
                    },
                    {
                        "name": "StackedAreaLayout",
                        "size": 9121
                    },
                    {
                        "name": "Layout",
                        "size": 7881
                    },
                    {
                        "name": "AxisLayout",
                        "size": 6725
                    },
                    {
                        "name": "IcicleTreeLayout",
                        "size": 4864
                    },
                    {
                        "name": "DendrogramLayout",
                        "size": 4853
                    },
                    {
                        "name": "ForceDirectedLayout",
                        "size": 8411
                    },
                    {
                        "name": "BundledEdgeRouter",
                        "size": 3727
                    },
                    {
                        "name": "IndentedTreeLayout",
                        "size": 3174
                    },
                    {
                        "name": "PieLayout",
                        "size": 2728
                    },
                    {
                        "name": "RandomLayout",
                        "size": 870
                    }
                ]
            },
            {
                "name": "OperatorList",
                "size": 5248
            },
            {
                "name": "OperatorSequence",
                "size": 4190
            },
            {
                "name": "OperatorSwitch",
                "size": 2581
            },
            {
                "name": "Operator",
                "size": 2490
            },
            {
                "name": "SortOperator",
                "size": 2023
            }
        ]
    }
];

export const treemap_custom = [
    {
        name: 'Hubs & Portals',
        children: [
            { name: 'Axes', size: 1302 },
            { name: 'Axis', size: 24593 },
            { name: 'AxisGridLine', size: 652 },
            { name: 'AxisLabel', size: 636 },
            { name: 'CartesianAxes', size: 6703 },
        ],
    },
    {
        name: 'Communication Sites',
        children: [
            { name: 'AnchorControl', size: 2138 },
            { name: 'ClickControl', size: 3824 },
            { name: 'Control', size: 1353 },
            { name: 'ControlList', size: 4665 },
            { name: 'DragControl', size: 2649 },
            { name: 'ExpandControl', size: 2832 },
            { name: 'HoverControl', size: 4896 },
            { name: 'IControl', size: 763 },
            { name: 'PanZoomControl', size: 5222 },
            { name: 'SelectionControl', size: 7862 },
            { name: 'TooltipControl', size: 8435 },
        ],
    },
    {
        name: 'Personal Sites',
        children: [
            { name: 'Data', size: 20544 },
            { name: 'DataList', size: 19788 },
            { name: 'DataSprite', size: 10349 },
            { name: 'EdgeSprite', size: 3301 },
            { name: 'NodeSprite', size: 19382 },
            {
                name: 'render',
                children: [
                    { name: 'ArrowType', size: 698 },
                    { name: 'EdgeRenderer', size: 5569 },
                    { name: 'IRenderer', size: 353 },
                    { name: 'ShapeRenderer', size: 2247 },
                ],
            },
            { name: 'ScaleBinding', size: 11275 },
            { name: 'Tree', size: 7147 },
            { name: 'TreeBuilder', size: 9930 },
        ],
    },
    {
        name: 'Archives',
        children: [
            { name: 'DataEvent', size: 7313 },
            { name: 'SelectionEvent', size: 6880 },
            { name: 'TooltipEvent', size: 3701 },
            { name: 'VisualizationEvent', size: 2117 },
        ],
    },
    {
        name: 'Planning & Projects',
        children: [
            { name: 'Legend', size: 20859 },
            { name: 'LegendItem', size: 4614 },
            { name: 'LegendRange', size: 10530 },
        ],
    },
    {
        name: 'Team Sites',
        children: [
            {
                name: 'distortion',
                children: [
                    { name: 'BifocalDistortion', size: 4461 },
                    { name: 'Distortion', size: 6314 },
                    { name: 'FisheyeDistortion', size: 3444 },
                ],
            },
            {
                name: 'encoder',
                children: [
                    { name: 'ColorEncoder', size: 3179 },
                    { name: 'Encoder', size: 4060 },
                    { name: 'PropertyEncoder', size: 4138 },
                    { name: 'ShapeEncoder', size: 1690 },
                    { name: 'SizeEncoder', size: 1830 },
                ],
            },
            {
                name: 'filter',
                children: [
                    { name: 'FisheyeTreeFilter', size: 5219 },
                    { name: 'GraphDistanceFilter', size: 3165 },
                    { name: 'VisibilityFilter', size: 3509 },
                ],
            },
            { name: 'IOperator', size: 1286 },
            {
                name: 'label',
                children: [
                    { name: 'Labeler', size: 9956 },
                    { name: 'RadialLabeler', size: 3899 },
                    { name: 'StackedAreaLabeler', size: 3202 },
                ],
            },
            {
                name: 'layout',
                children: [
                    { name: 'AxisLayout', size: 6725 },
                    { name: 'BundledEdgeRouter', size: 3727 },
                    { name: 'CircleLayout', size: 9317 },
                    { name: 'CirclePackingLayout', size: 12003 },
                    { name: 'DendrogramLayout', size: 4853 },
                    { name: 'ForceDirectedLayout', size: 8411 },
                    { name: 'IcicleTreeLayout', size: 4864 },
                    { name: 'IndentedTreeLayout', size: 3174 },
                    { name: 'Layout', size: 7881 },
                    { name: 'NodeLinkTreeLayout', size: 12870 },
                    { name: 'PieLayout', size: 2728 },
                    { name: 'RadialTreeLayout', size: 12348 },
                    { name: 'RandomLayout', size: 870 },
                    { name: 'StackedAreaLayout', size: 9121 },
                    { name: 'TreeMapLayout', size: 9191 },
                ],
            },
            { name: 'Operator', size: 2490 },
            { name: 'OperatorList', size: 5248 },
            { name: 'OperatorSequence', size: 4190 },
            { name: 'OperatorSwitch', size: 2581 },
            { name: 'SortOperator', size: 2023 },
        ],
    },
];

export const bar_brush = [
    { Store: '1', Sales: 300, Guests: 456 },
    { Store: '2', Sales: -145, Guests: 230 },
    { Store: '3', Sales: -100, Guests: 345 },
    { Store: '4', Sales: -8, Guests: 450 },
    { Store: '5', Sales: 100, Guests: 321 },
    { Store: '6', Sales: 9, Guests: 235 },
    { Store: '7', Sales: 53, Guests: 267 },
    { Store: '8', Sales: 252, Guests: -378 },
    { Store: '9', Sales: 79, Guests: -210 },
    { Store: '10', Sales: 294, Guests: -23 },
    { Store: '12', Sales: 43, Guests: 45 },
    { Store: '13', Sales: -74, Guests: 90 },
    { Store: '14', Sales: -71, Guests: 130 },
    { Store: '15', Sales: -117, Guests: 11 },
    { Store: '16', Sales: -186, Guests: 107 },
    { Store: '17', Sales: -16, Guests: 926 },
    { Store: '18', Sales: -125, Guests: 653 },
    { Store: '19', Sales: 222, Guests: 366 },
    { Store: '20', Sales: 372, Guests: 486 },
    { Store: '21', Sales: 182, Guests: 512 },
    { Store: '22', Sales: 164, Guests: 302 },
    { Store: '23', Sales: 316, Guests: 425 },
    { Store: '24', Sales: 131, Guests: 467 },
    { Store: '25', Sales: 291, Guests: -190 },
    { Store: '26', Sales: -47, Guests: 194 },
    { Store: '27', Sales: -415, Guests: 371 },
    { Store: '28', Sales: -182, Guests: 376 },
    { Store: '29', Sales: -93, Guests: 295 },
    { Store: '30', Sales: -99, Guests: 322 },
    { Store: '31', Sales: -52, Guests: 246 },
    { Store: '32', Sales: 154, Guests: 33 },
    { Store: '33', Sales: 205, Guests: 354 },
    { Store: '34', Sales: 70, Guests: 258 },
    { Store: '35', Sales: -25, Guests: 359 },
    { Store: '36', Sales: -59, Guests: 192 },
    { Store: '37', Sales: -63, Guests: 464 },
    { Store: '38', Sales: -91, Guests: -2 },
    { Store: '39', Sales: -66, Guests: 154 },
    { Store: '40', Sales: -50, Guests: 186 },
];

export const brush_big = [
    { 'Store': 1, 'Sales': 7419.39, 'Sales Last Year': 5721.96, 'Sales vs Last Year': 99.22, 'Guests': 2916, 'Guests Last Year': 4368, 'Guests vs Last Year': 96.25, 'Incidents': 720, 'Incidents Last Year': 191, 'Incidents vs Last Year': -36.4 },
    { 'Store': 2, 'Sales': 19089.89, 'Sales Last Year': 6239.15, 'Sales vs Last Year': -20.63, 'Guests': 2465, 'Guests Last Year': 2548, 'Guests vs Last Year': 65.08, 'Incidents': 519, 'Incidents Last Year': 804, 'Incidents vs Last Year': 79.6 },
    { 'Store': 3, 'Sales': 12075.67, 'Sales Last Year': 6615.08, 'Sales vs Last Year': 88.49, 'Guests': 3713, 'Guests Last Year': 3404, 'Guests vs Last Year': -21.0, 'Incidents': 406, 'Incidents Last Year': 815, 'Incidents vs Last Year': -41.03 },
    { 'Store': 4, 'Sales': 7954.83, 'Sales Last Year': 16989.86, 'Sales vs Last Year': -61.1, 'Guests': 3993, 'Guests Last Year': 1469, 'Guests vs Last Year': 80.66, 'Incidents': 255, 'Incidents Last Year': 576, 'Incidents vs Last Year': 90.6 },
    { 'Store': 5, 'Sales': 18080.85, 'Sales Last Year': 15252.88, 'Sales vs Last Year': -81.24, 'Guests': 4942, 'Guests Last Year': 4913, 'Guests vs Last Year': -49.29, 'Incidents': 224, 'Incidents Last Year': 266, 'Incidents vs Last Year': -20.34 },
    { 'Store': 6, 'Sales': 18258.68, 'Sales Last Year': 7328.9, 'Sales vs Last Year': 41.07, 'Guests': 3137, 'Guests Last Year': 1425, 'Guests vs Last Year': 94.54, 'Incidents': 573, 'Incidents Last Year': 971, 'Incidents vs Last Year': 52.83 },
    { 'Store': 7, 'Sales': 17616.05, 'Sales Last Year': 8043.78, 'Sales vs Last Year': 1.99, 'Guests': 3354, 'Guests Last Year': 3536, 'Guests vs Last Year': -47.38, 'Incidents': 989, 'Incidents Last Year': 804, 'Incidents vs Last Year': -13.96 },
    { 'Store': 8, 'Sales': 13928.16, 'Sales Last Year': 17385.02, 'Sales vs Last Year': -4.13, 'Guests': 3287, 'Guests Last Year': 3505, 'Guests vs Last Year': -97.8, 'Incidents': 557, 'Incidents Last Year': 365, 'Incidents vs Last Year': -21.2 },
    { 'Store': 9, 'Sales': 10297.69, 'Sales Last Year': 5564.13, 'Sales vs Last Year': -8.35, 'Guests': 1059, 'Guests Last Year': 2502, 'Guests vs Last Year': -59.62, 'Incidents': 850, 'Incidents Last Year': 899, 'Incidents vs Last Year': -48.45 },
    { 'Store': 10, 'Sales': 5974.99, 'Sales Last Year': 9672.06, 'Sales vs Last Year': -35.42, 'Guests': 1735, 'Guests Last Year': 2939, 'Guests vs Last Year': 80.61, 'Incidents': 126, 'Incidents Last Year': 493, 'Incidents vs Last Year': 1.31 },
    { 'Store': 11, 'Sales': 15868.2, 'Sales Last Year': 18672.18, 'Sales vs Last Year': 74.34, 'Guests': 3747, 'Guests Last Year': 3372, 'Guests vs Last Year': 24.37, 'Incidents': 500, 'Incidents Last Year': 521, 'Incidents vs Last Year': 44.38 },
    { 'Store': 12, 'Sales': 5048.6, 'Sales Last Year': 12271.22, 'Sales vs Last Year': -76.72, 'Guests': 2201, 'Guests Last Year': 1661, 'Guests vs Last Year': 44.31, 'Incidents': 342, 'Incidents Last Year': 556, 'Incidents vs Last Year': -98.79 },
    { 'Store': 13, 'Sales': 16190.57, 'Sales Last Year': 15017.88, 'Sales vs Last Year': 9.99, 'Guests': 3896, 'Guests Last Year': 1350, 'Guests vs Last Year': 66.08, 'Incidents': 638, 'Incidents Last Year': 787, 'Incidents vs Last Year': -25.4 },
    { 'Store': 14, 'Sales': 12509.58, 'Sales Last Year': 19304.19, 'Sales vs Last Year': -47.44, 'Guests': 4664, 'Guests Last Year': 4203, 'Guests vs Last Year': -78.73, 'Incidents': 757, 'Incidents Last Year': 821, 'Incidents vs Last Year': -67.66 },
    { 'Store': 15, 'Sales': 10432.18, 'Sales Last Year': 13155.74, 'Sales vs Last Year': -87.1, 'Guests': 1793, 'Guests Last Year': 2964, 'Guests vs Last Year': 52.95, 'Incidents': 899, 'Incidents Last Year': 365, 'Incidents vs Last Year': 61.39 },
    { 'Store': 16, 'Sales': 17237.3, 'Sales Last Year': 12856.65, 'Sales vs Last Year': -27.73, 'Guests': 3726, 'Guests Last Year': 3405, 'Guests vs Last Year': 10.05, 'Incidents': 817, 'Incidents Last Year': 463, 'Incidents vs Last Year': 73.2 },
    { 'Store': 17, 'Sales': 14829.29, 'Sales Last Year': 15194.37, 'Sales vs Last Year': 92.65, 'Guests': 3670, 'Guests Last Year': 4116, 'Guests vs Last Year': 41.46, 'Incidents': 534, 'Incidents Last Year': 623, 'Incidents vs Last Year': -78.35 },
    { 'Store': 18, 'Sales': 18299.4, 'Sales Last Year': 12653.2, 'Sales vs Last Year': -74.97, 'Guests': 1483, 'Guests Last Year': 3317, 'Guests vs Last Year': 75.55, 'Incidents': 596, 'Incidents Last Year': 699, 'Incidents vs Last Year': -71.44 },
    { 'Store': 19, 'Sales': 8182.15, 'Sales Last Year': 19532.5, 'Sales vs Last Year': -90.03, 'Guests': 3729, 'Guests Last Year': 4541, 'Guests vs Last Year': -24.86, 'Incidents': 818, 'Incidents Last Year': 977, 'Incidents vs Last Year': -81.0 },
    { 'Store': 20, 'Sales': 8540.71, 'Sales Last Year': 9858.53, 'Sales vs Last Year': -34.91, 'Guests': 4072, 'Guests Last Year': 4636, 'Guests vs Last Year': -63.68, 'Incidents': 450, 'Incidents Last Year': 836, 'Incidents vs Last Year': -53.92 },
    { 'Store': 21, 'Sales': 19290.73, 'Sales Last Year': 11693.18, 'Sales vs Last Year': 66.58, 'Guests': 2122, 'Guests Last Year': 2309, 'Guests vs Last Year': 90.9, 'Incidents': 515, 'Incidents Last Year': 242, 'Incidents vs Last Year': 5.72 },
    { 'Store': 22, 'Sales': 8464.72, 'Sales Last Year': 14536.98, 'Sales vs Last Year': -53.22, 'Guests': 4342, 'Guests Last Year': 2414, 'Guests vs Last Year': -7.64, 'Incidents': 890, 'Incidents Last Year': 680, 'Incidents vs Last Year': -95.95 },
    { 'Store': 23, 'Sales': 9829.46, 'Sales Last Year': 14302.11, 'Sales vs Last Year': 81.64, 'Guests': 3659, 'Guests Last Year': 1162, 'Guests vs Last Year': -86.14, 'Incidents': 249, 'Incidents Last Year': 181, 'Incidents vs Last Year': -9.53 },
    { 'Store': 24, 'Sales': 14908.49, 'Sales Last Year': 11686.12, 'Sales vs Last Year': 95.82, 'Guests': 3549, 'Guests Last Year': 2163, 'Guests vs Last Year': -5.04, 'Incidents': 521, 'Incidents Last Year': 657, 'Incidents vs Last Year': 67.91 },
    { 'Store': 25, 'Sales': 11175.72, 'Sales Last Year': 8477.62, 'Sales vs Last Year': 98.84, 'Guests': 4130, 'Guests Last Year': 2049, 'Guests vs Last Year': -38.88, 'Incidents': 412, 'Incidents Last Year': 873, 'Incidents vs Last Year': -85.79 },
    { 'Store': 26, 'Sales': 18296.54, 'Sales Last Year': 14976.6, 'Sales vs Last Year': -53.13, 'Guests': 1232, 'Guests Last Year': 1442, 'Guests vs Last Year': -25.82, 'Incidents': 513, 'Incidents Last Year': 561, 'Incidents vs Last Year': 11.26 },
    { 'Store': 27, 'Sales': 11691.17, 'Sales Last Year': 7364.38, 'Sales vs Last Year': -71.53, 'Guests': 4156, 'Guests Last Year': 4750, 'Guests vs Last Year': 32.8, 'Incidents': 916, 'Incidents Last Year': 583, 'Incidents vs Last Year': -57.0 },
    { 'Store': 28, 'Sales': 6184.73, 'Sales Last Year': 6813.8, 'Sales vs Last Year': 54.58, 'Guests': 4705, 'Guests Last Year': 3971, 'Guests vs Last Year': 89.9, 'Incidents': 794, 'Incidents Last Year': 482, 'Incidents vs Last Year': -20.05 },
    { 'Store': 29, 'Sales': 15410.93, 'Sales Last Year': 18462.2, 'Sales vs Last Year': -6.46, 'Guests': 4400, 'Guests Last Year': 1685, 'Guests vs Last Year': 88.75, 'Incidents': 215, 'Incidents Last Year': 733, 'Incidents vs Last Year': -98.25 },
    { 'Store': 30, 'Sales': 14745.63, 'Sales Last Year': 15132.66, 'Sales vs Last Year': 16.37, 'Guests': 2284, 'Guests Last Year': 4540, 'Guests vs Last Year': 0.21, 'Incidents': 325, 'Incidents Last Year': 436, 'Incidents vs Last Year': -88.81 },
    { 'Store': 31, 'Sales': 17778.96, 'Sales Last Year': 5841.3, 'Sales vs Last Year': 70.92, 'Guests': 3003, 'Guests Last Year': 4245, 'Guests vs Last Year': -78.65, 'Incidents': 115, 'Incidents Last Year': 470, 'Incidents vs Last Year': -91.64 },
    { 'Store': 32, 'Sales': 6745.81, 'Sales Last Year': 15246.44, 'Sales vs Last Year': 9.55, 'Guests': 1228, 'Guests Last Year': 3934, 'Guests vs Last Year': -86.48, 'Incidents': 442, 'Incidents Last Year': 855, 'Incidents vs Last Year': 52.49 },
    { 'Store': 33, 'Sales': 12878.89, 'Sales Last Year': 13737.43, 'Sales vs Last Year': 29.58, 'Guests': 2080, 'Guests Last Year': 4589, 'Guests vs Last Year': -81.58, 'Incidents': 495, 'Incidents Last Year': 125, 'Incidents vs Last Year': 45.23 },
    { 'Store': 34, 'Sales': 7415.97, 'Sales Last Year': 17067.05, 'Sales vs Last Year': 58.65, 'Guests': 2557, 'Guests Last Year': 2029, 'Guests vs Last Year': -22.4, 'Incidents': 108, 'Incidents Last Year': 884, 'Incidents vs Last Year': 25.84 },
    { 'Store': 35, 'Sales': 13743.42, 'Sales Last Year': 6951.91, 'Sales vs Last Year': -21.06, 'Guests': 2438, 'Guests Last Year': 2404, 'Guests vs Last Year': 19.41, 'Incidents': 700, 'Incidents Last Year': 390, 'Incidents vs Last Year': 95.96 },
    { 'Store': 36, 'Sales': 13777.88, 'Sales Last Year': 17608.4, 'Sales vs Last Year': 62.15, 'Guests': 4679, 'Guests Last Year': 2211, 'Guests vs Last Year': 77.45, 'Incidents': 720, 'Incidents Last Year': 696, 'Incidents vs Last Year': 78.86 },
    { 'Store': 37, 'Sales': 16270.22, 'Sales Last Year': 5280.41, 'Sales vs Last Year': -82.91, 'Guests': 1527, 'Guests Last Year': 1067, 'Guests vs Last Year': -24.97, 'Incidents': 717, 'Incidents Last Year': 986, 'Incidents vs Last Year': -44.8 },
    { 'Store': 38, 'Sales': 5745.83, 'Sales Last Year': 19071.94, 'Sales vs Last Year': 12.74, 'Guests': 3552, 'Guests Last Year': 4671, 'Guests vs Last Year': -15.25, 'Incidents': 135, 'Incidents Last Year': 714, 'Incidents vs Last Year': -52.67 },
    { 'Store': 39, 'Sales': 15055.67, 'Sales Last Year': 9599.62, 'Sales vs Last Year': 4.98, 'Guests': 1871, 'Guests Last Year': 3143, 'Guests vs Last Year': 89.22, 'Incidents': 843, 'Incidents Last Year': 230, 'Incidents vs Last Year': -54.12 },
    { 'Store': 40, 'Sales': 14970.21, 'Sales Last Year': 14717.66, 'Sales vs Last Year': 56.25, 'Guests': 2867, 'Guests Last Year': 4467, 'Guests vs Last Year': 8.03, 'Incidents': 274, 'Incidents Last Year': 535, 'Incidents vs Last Year': 19.86 },
    { 'Store': 41, 'Sales': 16225.5, 'Sales Last Year': 7331.43, 'Sales vs Last Year': 58.13, 'Guests': 3549, 'Guests Last Year': 2658, 'Guests vs Last Year': 55.12, 'Incidents': 765, 'Incidents Last Year': 446, 'Incidents vs Last Year': -39.03 },
    { 'Store': 42, 'Sales': 5826.67, 'Sales Last Year': 9806.81, 'Sales vs Last Year': 66.19, 'Guests': 3842, 'Guests Last Year': 2013, 'Guests vs Last Year': -24.81, 'Incidents': 246, 'Incidents Last Year': 787, 'Incidents vs Last Year': -46.73 },
    { 'Store': 43, 'Sales': 8315.87, 'Sales Last Year': 12644.8, 'Sales vs Last Year': 6.86, 'Guests': 4846, 'Guests Last Year': 3669, 'Guests vs Last Year': 91.83, 'Incidents': 254, 'Incidents Last Year': 315, 'Incidents vs Last Year': 89.29 },
    { 'Store': 44, 'Sales': 15903.33, 'Sales Last Year': 13905.72, 'Sales vs Last Year': -24.55, 'Guests': 2156, 'Guests Last Year': 4224, 'Guests vs Last Year': 18.84, 'Incidents': 995, 'Incidents Last Year': 475, 'Incidents vs Last Year': 28.57 },
    { 'Store': 45, 'Sales': 10159.0, 'Sales Last Year': 13152.72, 'Sales vs Last Year': -67.85, 'Guests': 4635, 'Guests Last Year': 3155, 'Guests vs Last Year': 34.01, 'Incidents': 332, 'Incidents Last Year': 158, 'Incidents vs Last Year': -37.22 },
    { 'Store': 46, 'Sales': 17070.78, 'Sales Last Year': 16198.38, 'Sales vs Last Year': 47.99, 'Guests': 3876, 'Guests Last Year': 1630, 'Guests vs Last Year': -14.96, 'Incidents': 961, 'Incidents Last Year': 961, 'Incidents vs Last Year': -62.36 },
    { 'Store': 47, 'Sales': 15307.65, 'Sales Last Year': 10569.8, 'Sales vs Last Year': -87.62, 'Guests': 4005, 'Guests Last Year': 1126, 'Guests vs Last Year': -7.15, 'Incidents': 948, 'Incidents Last Year': 326, 'Incidents vs Last Year': -91.09 },
    { 'Store': 48, 'Sales': 7368.22, 'Sales Last Year': 14112.82, 'Sales vs Last Year': -75.41, 'Guests': 2235, 'Guests Last Year': 2375, 'Guests vs Last Year': 35.28, 'Incidents': 961, 'Incidents Last Year': 250, 'Incidents vs Last Year': 8.69 },
    { 'Store': 49, 'Sales': 14348.28, 'Sales Last Year': 17603.39, 'Sales vs Last Year': -28.18, 'Guests': 2056, 'Guests Last Year': 2520, 'Guests vs Last Year': 89.09, 'Incidents': 762, 'Incidents Last Year': 921, 'Incidents vs Last Year': -35.38 },
    { 'Store': 50, 'Sales': 16009.19, 'Sales Last Year': 19420.62, 'Sales vs Last Year': -31.32, 'Guests': 4402, 'Guests Last Year': 2958, 'Guests vs Last Year': -39.36, 'Incidents': 354, 'Incidents Last Year': 458, 'Incidents vs Last Year': 1.29 },
    { 'Store': 51, 'Sales': 5542.13, 'Sales Last Year': 10617.71, 'Sales vs Last Year': 43.71, 'Guests': 1864, 'Guests Last Year': 1176, 'Guests vs Last Year': -70.91, 'Incidents': 693, 'Incidents Last Year': 373, 'Incidents vs Last Year': -27.86 },
    { 'Store': 52, 'Sales': 10075.27, 'Sales Last Year': 9728.94, 'Sales vs Last Year': -73.71, 'Guests': 2817, 'Guests Last Year': 3208, 'Guests vs Last Year': -4.59, 'Incidents': 891, 'Incidents Last Year': 723, 'Incidents vs Last Year': -54.09 },
    { 'Store': 53, 'Sales': 13061.18, 'Sales Last Year': 8655.53, 'Sales vs Last Year': -48.99, 'Guests': 3553, 'Guests Last Year': 1873, 'Guests vs Last Year': -67.96, 'Incidents': 536, 'Incidents Last Year': 193, 'Incidents vs Last Year': -59.6 },
    { 'Store': 54, 'Sales': 15902.6, 'Sales Last Year': 19338.51, 'Sales vs Last Year': -19.45, 'Guests': 3900, 'Guests Last Year': 3130, 'Guests vs Last Year': -51.27, 'Incidents': 532, 'Incidents Last Year': 970, 'Incidents vs Last Year': -18.61 },
    { 'Store': 55, 'Sales': 12413.81, 'Sales Last Year': 8092.36, 'Sales vs Last Year': 87.17, 'Guests': 2907, 'Guests Last Year': 2697, 'Guests vs Last Year': 12.35, 'Incidents': 361, 'Incidents Last Year': 317, 'Incidents vs Last Year': -26.31 },
    { 'Store': 56, 'Sales': 8823.9, 'Sales Last Year': 6211.69, 'Sales vs Last Year': -7.02, 'Guests': 3425, 'Guests Last Year': 1889, 'Guests vs Last Year': 67.46, 'Incidents': 866, 'Incidents Last Year': 865, 'Incidents vs Last Year': 3.91 },
    { 'Store': 57, 'Sales': 19868.19, 'Sales Last Year': 7061.58, 'Sales vs Last Year': 14.18, 'Guests': 1783, 'Guests Last Year': 2433, 'Guests vs Last Year': -3.06, 'Incidents': 555, 'Incidents Last Year': 706, 'Incidents vs Last Year': 69.16 },
    { 'Store': 58, 'Sales': 16062.76, 'Sales Last Year': 7569.53, 'Sales vs Last Year': 30.99, 'Guests': 1180, 'Guests Last Year': 3157, 'Guests vs Last Year': -92.39, 'Incidents': 718, 'Incidents Last Year': 515, 'Incidents vs Last Year': -14.6 },
    { 'Store': 59, 'Sales': 11745.72, 'Sales Last Year': 18611.56, 'Sales vs Last Year': -42.38, 'Guests': 1248, 'Guests Last Year': 2051, 'Guests vs Last Year': 31.96, 'Incidents': 811, 'Incidents Last Year': 739, 'Incidents vs Last Year': 74.34 },
    { 'Store': 60, 'Sales': 7253.09, 'Sales Last Year': 15222.76, 'Sales vs Last Year': 49.49, 'Guests': 2683, 'Guests Last Year': 2687, 'Guests vs Last Year': 18.09, 'Incidents': 729, 'Incidents Last Year': 373, 'Incidents vs Last Year': 88.29 },
    { 'Store': 61, 'Sales': 15141.58, 'Sales Last Year': 13785.48, 'Sales vs Last Year': 35.14, 'Guests': 4603, 'Guests Last Year': 3900, 'Guests vs Last Year': 56.03, 'Incidents': 273, 'Incidents Last Year': 646, 'Incidents vs Last Year': 76.88 },
    { 'Store': 62, 'Sales': 17074.15, 'Sales Last Year': 19748.99, 'Sales vs Last Year': 76.13, 'Guests': 1312, 'Guests Last Year': 1895, 'Guests vs Last Year': 96.48, 'Incidents': 449, 'Incidents Last Year': 454, 'Incidents vs Last Year': 50.58 },
    { 'Store': 63, 'Sales': 11583.63, 'Sales Last Year': 5096.53, 'Sales vs Last Year': -63.72, 'Guests': 3976, 'Guests Last Year': 2206, 'Guests vs Last Year': -75.77, 'Incidents': 264, 'Incidents Last Year': 321, 'Incidents vs Last Year': -85.78 },
    { 'Store': 64, 'Sales': 13817.41, 'Sales Last Year': 12530.6, 'Sales vs Last Year': -5.67, 'Guests': 4991, 'Guests Last Year': 4873, 'Guests vs Last Year': -57.93, 'Incidents': 377, 'Incidents Last Year': 686, 'Incidents vs Last Year': -75.37 },
    { 'Store': 65, 'Sales': 19239.65, 'Sales Last Year': 13742.53, 'Sales vs Last Year': -51.17, 'Guests': 1789, 'Guests Last Year': 1405, 'Guests vs Last Year': -97.78, 'Incidents': 354, 'Incidents Last Year': 688, 'Incidents vs Last Year': 13.07 },
    { 'Store': 66, 'Sales': 18167.04, 'Sales Last Year': 12811.58, 'Sales vs Last Year': -62.62, 'Guests': 3072, 'Guests Last Year': 4984, 'Guests vs Last Year': 88.19, 'Incidents': 430, 'Incidents Last Year': 910, 'Incidents vs Last Year': -24.74 },
    { 'Store': 67, 'Sales': 10906.78, 'Sales Last Year': 12019.16, 'Sales vs Last Year': 14.61, 'Guests': 4166, 'Guests Last Year': 4367, 'Guests vs Last Year': 18.82, 'Incidents': 496, 'Incidents Last Year': 763, 'Incidents vs Last Year': 63.09 },
    { 'Store': 68, 'Sales': 9614.51, 'Sales Last Year': 15178.9, 'Sales vs Last Year': -36.34, 'Guests': 3667, 'Guests Last Year': 1553, 'Guests vs Last Year': 23.12, 'Incidents': 193, 'Incidents Last Year': 250, 'Incidents vs Last Year': -52.17 },
    { 'Store': 69, 'Sales': 15587.58, 'Sales Last Year': 8766.82, 'Sales vs Last Year': -19.62, 'Guests': 3530, 'Guests Last Year': 2893, 'Guests vs Last Year': -54.89, 'Incidents': 829, 'Incidents Last Year': 253, 'Incidents vs Last Year': -24.01 },
    { 'Store': 70, 'Sales': 10584.88, 'Sales Last Year': 7597.13, 'Sales vs Last Year': 18.06, 'Guests': 1163, 'Guests Last Year': 1952, 'Guests vs Last Year': -29.47, 'Incidents': 107, 'Incidents Last Year': 938, 'Incidents vs Last Year': 1.39 },
    { 'Store': 71, 'Sales': 12344.79, 'Sales Last Year': 15684.85, 'Sales vs Last Year': 85.7, 'Guests': 2420, 'Guests Last Year': 2764, 'Guests vs Last Year': 7.28, 'Incidents': 149, 'Incidents Last Year': 771, 'Incidents vs Last Year': -41.32 },
    { 'Store': 72, 'Sales': 19713.44, 'Sales Last Year': 12398.31, 'Sales vs Last Year': -82.31, 'Guests': 2379, 'Guests Last Year': 3710, 'Guests vs Last Year': 6.17, 'Incidents': 685, 'Incidents Last Year': 299, 'Incidents vs Last Year': -30.9 },
    { 'Store': 73, 'Sales': 19414.79, 'Sales Last Year': 6475.13, 'Sales vs Last Year': -50.37, 'Guests': 3151, 'Guests Last Year': 4799, 'Guests vs Last Year': -16.88, 'Incidents': 365, 'Incidents Last Year': 661, 'Incidents vs Last Year': 6.3 },
    { 'Store': 74, 'Sales': 18031.18, 'Sales Last Year': 8724.04, 'Sales vs Last Year': -11.12, 'Guests': 4739, 'Guests Last Year': 2935, 'Guests vs Last Year': 86.3, 'Incidents': 370, 'Incidents Last Year': 819, 'Incidents vs Last Year': -14.2 },
    { 'Store': 75, 'Sales': 16442.03, 'Sales Last Year': 17754.19, 'Sales vs Last Year': 89.15, 'Guests': 3078, 'Guests Last Year': 3036, 'Guests vs Last Year': -15.32, 'Incidents': 278, 'Incidents Last Year': 782, 'Incidents vs Last Year': -72.21 },
    { 'Store': 76, 'Sales': 11162.61, 'Sales Last Year': 5227.84, 'Sales vs Last Year': 25.27, 'Guests': 4431, 'Guests Last Year': 1659, 'Guests vs Last Year': 45.14, 'Incidents': 191, 'Incidents Last Year': 221, 'Incidents vs Last Year': -15.95 },
    { 'Store': 77, 'Sales': 12263.06, 'Sales Last Year': 9733.46, 'Sales vs Last Year': 57.26, 'Guests': 4106, 'Guests Last Year': 2677, 'Guests vs Last Year': -67.2, 'Incidents': 231, 'Incidents Last Year': 260, 'Incidents vs Last Year': -3.18 },
    { 'Store': 78, 'Sales': 18490.25, 'Sales Last Year': 8447.54, 'Sales vs Last Year': 23.84, 'Guests': 4917, 'Guests Last Year': 2406, 'Guests vs Last Year': -84.4, 'Incidents': 374, 'Incidents Last Year': 388, 'Incidents vs Last Year': -25.45 },
    { 'Store': 79, 'Sales': 14145.32, 'Sales Last Year': 9304.92, 'Sales vs Last Year': 20.87, 'Guests': 1171, 'Guests Last Year': 2690, 'Guests vs Last Year': -26.02, 'Incidents': 606, 'Incidents Last Year': 256, 'Incidents vs Last Year': -17.46 },
    { 'Store': 80, 'Sales': 18729.14, 'Sales Last Year': 16865.19, 'Sales vs Last Year': 51.6, 'Guests': 1663, 'Guests Last Year': 1844, 'Guests vs Last Year': 39.76, 'Incidents': 263, 'Incidents Last Year': 759, 'Incidents vs Last Year': -29.77 },
    { 'Store': 81, 'Sales': 6487.93, 'Sales Last Year': 19741.29, 'Sales vs Last Year': -24.62, 'Guests': 3744, 'Guests Last Year': 2883, 'Guests vs Last Year': -69.95, 'Incidents': 617, 'Incidents Last Year': 504, 'Incidents vs Last Year': -93.59 },
    { 'Store': 82, 'Sales': 14555.08, 'Sales Last Year': 12640.22, 'Sales vs Last Year': 30.63, 'Guests': 2441, 'Guests Last Year': 1834, 'Guests vs Last Year': -10.43, 'Incidents': 612, 'Incidents Last Year': 565, 'Incidents vs Last Year': 11.98 },
    { 'Store': 83, 'Sales': 18106.2, 'Sales Last Year': 8033.51, 'Sales vs Last Year': 41.99, 'Guests': 3032, 'Guests Last Year': 4829, 'Guests vs Last Year': -89.07, 'Incidents': 949, 'Incidents Last Year': 137, 'Incidents vs Last Year': 88.29 },
    { 'Store': 84, 'Sales': 10670.7, 'Sales Last Year': 5132.65, 'Sales vs Last Year': -31.99, 'Guests': 1092, 'Guests Last Year': 4649, 'Guests vs Last Year': -61.23, 'Incidents': 950, 'Incidents Last Year': 332, 'Incidents vs Last Year': 86.11 },
    { 'Store': 85, 'Sales': 17485.79, 'Sales Last Year': 18819.29, 'Sales vs Last Year': 61.07, 'Guests': 4171, 'Guests Last Year': 3588, 'Guests vs Last Year': 53.82, 'Incidents': 207, 'Incidents Last Year': 537, 'Incidents vs Last Year': -50.08 },
    { 'Store': 86, 'Sales': 16161.33, 'Sales Last Year': 6654.18, 'Sales vs Last Year': -13.48, 'Guests': 2999, 'Guests Last Year': 4415, 'Guests vs Last Year': 28.64, 'Incidents': 160, 'Incidents Last Year': 963, 'Incidents vs Last Year': -84.25 },
    { 'Store': 87, 'Sales': 7709.89, 'Sales Last Year': 12889.07, 'Sales vs Last Year': 91.04, 'Guests': 2695, 'Guests Last Year': 2311, 'Guests vs Last Year': 81.93, 'Incidents': 219, 'Incidents Last Year': 964, 'Incidents vs Last Year': 17.07 },
    { 'Store': 88, 'Sales': 5034.48, 'Sales Last Year': 16102.82, 'Sales vs Last Year': 52.97, 'Guests': 2697, 'Guests Last Year': 4206, 'Guests vs Last Year': 9.38, 'Incidents': 146, 'Incidents Last Year': 195, 'Incidents vs Last Year': -53.53 },
    { 'Store': 89, 'Sales': 10730.91, 'Sales Last Year': 15794.43, 'Sales vs Last Year': -67.01, 'Guests': 3794, 'Guests Last Year': 1796, 'Guests vs Last Year': -83.11, 'Incidents': 787, 'Incidents Last Year': 988, 'Incidents vs Last Year': 1.05 },
    { 'Store': 90, 'Sales': 8571.73, 'Sales Last Year': 17730.33, 'Sales vs Last Year': -85.71, 'Guests': 3493, 'Guests Last Year': 4514, 'Guests vs Last Year': 22.44, 'Incidents': 805, 'Incidents Last Year': 246, 'Incidents vs Last Year': -68.05 },
    { 'Store': 91, 'Sales': 6558.29, 'Sales Last Year': 18108.36, 'Sales vs Last Year': -86.12, 'Guests': 2036, 'Guests Last Year': 1980, 'Guests vs Last Year': -36.32, 'Incidents': 991, 'Incidents Last Year': 150, 'Incidents vs Last Year': -75.68 },
    { 'Store': 92, 'Sales': 13539.19, 'Sales Last Year': 5602.46, 'Sales vs Last Year': -53.41, 'Guests': 1737, 'Guests Last Year': 4835, 'Guests vs Last Year': 79.26, 'Incidents': 561, 'Incidents Last Year': 208, 'Incidents vs Last Year': 61.9 },
    { 'Store': 93, 'Sales': 17614.42, 'Sales Last Year': 10031.51, 'Sales vs Last Year': -71.96, 'Guests': 1242, 'Guests Last Year': 1082, 'Guests vs Last Year': 25.64, 'Incidents': 755, 'Incidents Last Year': 933, 'Incidents vs Last Year': -47.3 },
    { 'Store': 94, 'Sales': 16167.11, 'Sales Last Year': 14930.44, 'Sales vs Last Year': 48.21, 'Guests': 1816, 'Guests Last Year': 4057, 'Guests vs Last Year': 27.17, 'Incidents': 721, 'Incidents Last Year': 521, 'Incidents vs Last Year': 1.81 },
    { 'Store': 95, 'Sales': 18227.03, 'Sales Last Year': 14077.93, 'Sales vs Last Year': 5.68, 'Guests': 2146, 'Guests Last Year': 2602, 'Guests vs Last Year': -62.89, 'Incidents': 859, 'Incidents Last Year': 515, 'Incidents vs Last Year': 36.28 },
    { 'Store': 96, 'Sales': 15749.89, 'Sales Last Year': 11222.99, 'Sales vs Last Year': -67.3, 'Guests': 2980, 'Guests Last Year': 4160, 'Guests vs Last Year': -30.82, 'Incidents': 806, 'Incidents Last Year': 321, 'Incidents vs Last Year': -73.3 },
    { 'Store': 97, 'Sales': 14412.63, 'Sales Last Year': 11954.22, 'Sales vs Last Year': -1.54, 'Guests': 4138, 'Guests Last Year': 1556, 'Guests vs Last Year': 37.25, 'Incidents': 912, 'Incidents Last Year': 573, 'Incidents vs Last Year': 88.35 },
    { 'Store': 98, 'Sales': 10079.92, 'Sales Last Year': 7361.86, 'Sales vs Last Year': 97.63, 'Guests': 3505, 'Guests Last Year': 4481, 'Guests vs Last Year': 68.23, 'Incidents': 647, 'Incidents Last Year': 177, 'Incidents vs Last Year': -29.71 },
    { 'Store': 99, 'Sales': 7839.52, 'Sales Last Year': 8122.1, 'Sales vs Last Year': -84.61, 'Guests': 3470, 'Guests Last Year': 3807, 'Guests vs Last Year': 86.99, 'Incidents': 653, 'Incidents Last Year': 446, 'Incidents vs Last Year': -12.5 },
    { 'Store': 100, 'Sales': 16413.94, 'Sales Last Year': 12338.62, 'Sales vs Last Year': -71.63, 'Guests': 2352, 'Guests Last Year': 3518, 'Guests vs Last Year': 50.37, 'Incidents': 101, 'Incidents Last Year': 187, 'Incidents vs Last Year': -29.9 }
];

export const survey_averages = [
    {
        question: 'Friendliness of Staff',
        score: 8.67
    },
    {
        question: 'Speed of Service',
        score: 6.13
    },
    {
        question: 'Quality of Food',
        score: 7.75
    },
    // {
    //     question: 'Choice of Food',
    //     score: 5.75
    // },
    {
        question: 'Value for Money',
        score: 5.74
    },
    {
        question: 'Cleanliness of Restaurant',
        score: 7.68
    },
    // {
    //     question: 'Music, Decoration & Ambience',
    //     score: 7.24
    // },
    // {
    //     question: 'Ease of Parking',
    //     score: 6.48
    // },
    // {
    //     question: 'Would you recommend us to a friend?',
    //     score: 8.9
    // }
];






// export const line_2lines = [
//     {
//         'name': 'Page A',
//         'uv': 4000,
//         'pv': 2400,
//         'amt': 2400
//     },
//     {
//         'name': 'Page B',
//         'uv': 3000,
//         'pv': 1398,
//         'amt': 2210
//     },
//     {
//         'name': 'Page C',
//         'uv': 2000,
//         'pv': 9800,
//         'amt': 2290
//     },
//     {
//         'name': 'Page D',
//         'uv': 2780,
//         'pv': 3908,
//         'amt': 2000
//     },
//     {
//         'name': 'Page E',
//         'uv': 1890,
//         'pv': 4800,
//         'amt': 2181
//     },
//     {
//         'name': 'Page F',
//         'uv': 2390,
//         'pv': 3800,
//         'amt': 2500
//     },
//     {
//         'name': 'Page G',
//         'uv': 3490,
//         'pv': 4300,
//         'amt': 2100
//     }
// ];
// export const area_range = [
//     {
//         'day': '05-01',
//         'Temperature': [
//             -1,
//             10
//         ]
//     },
//     {
//         'day': '05-02',
//         'Temperature': [
//             2,
//             15
//         ]
//     },
//     {
//         'day': '05-03',
//         'Temperature': [
//             3,
//             12
//         ]
//     },
//     {
//         'day': '05-04',
//         'Temperature': [
//             4,
//             12
//         ]
//     },
//     {
//         'day': '05-05',
//         'Temperature': [
//             12,
//             16
//         ]
//     },
//     {
//         'day': '05-06',
//         'Temperature': [
//             5,
//             16
//         ]
//     },
//     {
//         'day': '05-07',
//         'Temperature': [
//             3,
//             12
//         ]
//     },
//     {
//         'day': '05-08',
//         'Temperature': [
//             0,
//             8
//         ]
//     },
//     {
//         'day': '05-09',
//         'Temperature': [
//             -3,
//             5
//         ]
//     }
// ];
// export const radar = [
//     {
//         'subject': 'Math',
//         'A': 120,
//         'B': 110,
//         'fullMark': 150
//     },
//     {
//         'subject': 'Chinese',
//         'A': 98,
//         'B': 130,
//         'fullMark': 150
//     },
//     {
//         'subject': 'English',
//         'A': 86,
//         'B': 130,
//         'fullMark': 150
//     },
//     {
//         'subject': 'Geography',
//         'A': 99,
//         'B': 100,
//         'fullMark': 150
//     },
//     {
//         'subject': 'Physics',
//         'A': 85,
//         'B': 90,
//         'fullMark': 150
//     },
//     {
//         'subject': 'History',
//         'A': 65,
//         'B': 85,
//         'fullMark': 150
//     }
// ];


