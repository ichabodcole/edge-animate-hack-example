var im='images/',
    aud='media/',
    vid='media/',
    js='js/';

var ani = {
    fonts: {
    },
    opts: {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    },
    resources: [
    ],
    scripts: [
    ],
    symbols: {
        "stage": {
            version: "5.0.1",
            minimumCompatibleVersion: "5.0.0",
            build: "5.0.1.386",
            scaleToFit: "none",
            centerStage: "none",
            resizeInstances: false,
            content: {
                dom: [
                    {
                        id: 'Symbol_2',
                        symbolName: 'Symbol_2',
                        type: 'rect',
                        rect: ['239px', '-77px', '65', '410', 'auto', 'auto'],
                        transform: [[],[],[],[],['52.3076%','91.5917%']]
                    }
                ],
                style: {
                    '${Stage}': {
                        isStage: true,
                        rect: [undefined, undefined, '100%', '400px'],
                        overflow: 'hidden',
                        fill: ["rgba(0,0,0,1.00)"]
                    }
                }
            },
            timeline: {
                duration: 3250,
                autoPlay: true,
                data: [
                    [
                        "eid57",
                        "left",
                        1705,
                        0,
                        "easeOutBounce",
                        "${Symbol_2}",
                        '239px',
                        '239px'
                    ],
                    [
                        "eid33",
                        "originX",
                        1000,
                        0,
                        "easeOutBounce",
                        "${Symbol_2}",
                        '52.3076%',
                        '52.3076%'
                    ],
                    [
                        "eid55",
                        "rotateZ",
                        1500,
                        1750,
                        "easeOutElastic",
                        "${Symbol_2}",
                        '0deg',
                        '180deg'
                    ],
                    [
                        "eid58",
                        "top",
                        1810,
                        940,
                        "easeOutElastic",
                        "${Symbol_2}",
                        '-77px',
                        '-250px'
                    ],
                    [
                        "eid34",
                        "originY",
                        1000,
                        0,
                        "easeOutBounce",
                        "${Symbol_2}",
                        '91.5917%',
                        '91.5917%'
                    ]
                ]
            }
        },
        "Symbol_1": {
            version: "5.0.1",
            minimumCompatibleVersion: "5.0.0",
            build: "5.0.1.386",
            scaleToFit: "none",
            centerStage: "none",
            resizeInstances: false,
            content: {
                dom: [
                    {
                        rect: ['0px', '0px', '25px', '25px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'EllipseCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        display: 'block',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        transform: [[], [], [], ['0.13675', '0.13675'], ['61.597%', '58.5416%']],
                        rect: ['159px', '-30px', '67px', '67px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'Ellipse4',
                        stroke: [4, 'rgba(134,134,134,1.00)', 'solid'],
                        display: 'none',
                        fill: ['rgba(192,192,192,0.00)']
                    }
                ],
                style: {
                    '${symbolSelector}': {
                        isStage: 'true',
                        rect: [undefined, undefined, '25px', '25px']
                    }
                }
            },
            timeline: {
                duration: 2000,
                autoPlay: true,
                data: [
                    [
                        "eid62",
                        "scaleY",
                        1000,
                        1000,
                        "easeOutElastic",
                        "${Ellipse4}",
                        '0.13675',
                        '1'
                    ],
                    [
                        "eid18",
                        "location",
                        364,
                        272,
                        "linear",
                        "${EllipseCopy}",
                        [[12.55, 12.55, 0, 0, 0, 0,0],[57.46, -22.17, 126.96, -6.29, 69.78, -3.46,58.43],[104.22, 12.5, 0, 0, 0, 0,122.59]]
                    ],
                    [
                        "eid22",
                        "location",
                        636,
                        193,
                        "linear",
                        "${EllipseCopy}",
                        [[104.19, 12.47, 0, 0, 0, 0,0],[139.18, -5.79, 74.74, -2.09, 50.48, -1.41,40.13],[174.61, 12.47, 0, 0, 0, 0,81.69]]
                    ],
                    [
                        "eid23",
                        "location",
                        829,
                        171,
                        "linear",
                        "${EllipseCopy}",
                        [[174.58, 12.44, 0, 0, 0, 0,0],[191.57, 4.09, 23.18, 0, 21.77, 0,19.19],[204.58, 12.44, 0, 0, 0, 0,35.18]]
                    ],
                    [
                        "eid64",
                        "display",
                        0,
                        0,
                        "easeOutElastic",
                        "${Ellipse4}",
                        'none',
                        'none'
                    ],
                    [
                        "eid63",
                        "display",
                        1010,
                        0,
                        "easeOutElastic",
                        "${Ellipse4}",
                        'none',
                        'block'
                    ],
                    [
                        "eid61",
                        "scaleX",
                        1000,
                        1000,
                        "easeOutElastic",
                        "${Ellipse4}",
                        '0.13675',
                        '1'
                    ],
                    [
                        "eid20",
                        "display",
                        0,
                        0,
                        "linear",
                        "${EllipseCopy}",
                        'block',
                        'none'
                    ],
                    [
                        "eid19",
                        "display",
                        364,
                        0,
                        "linear",
                        "${EllipseCopy}",
                        'none',
                        'block'
                    ]
                ]
            }
        },
        "Symbol_2": {
            version: "5.0.1",
            minimumCompatibleVersion: "5.0.0",
            build: "5.0.1.386",
            scaleToFit: "none",
            centerStage: "none",
            resizeInstances: false,
            content: {
                dom: [
                    {
                        rect: ['0px', '0px', '65px', '65px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        id: 'Symbol_1',
                        symbolName: 'Symbol_1',
                        rect: ['20px', '385px', '25', '25', 'auto', 'auto'],
                        type: 'rect'
                    },
                    {
                        type: 'rect',
                        id: 'Symbol_1Copy',
                        symbolName: 'Symbol_1',
                        transform: [[], [], [], ['-1']],
                        rect: ['20px', '385px', '25', '25', 'auto', 'auto']
                    },
                    {
                        transform: [[], [], [], ['0.43829', '0.37447']],
                        rect: ['-162px', '93px', '389px', '389px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'Ellipse2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        clip: 'rect(0px 389px 194px 0px)',
                        fill: ['rgba(192,192,192,1)']
                    }
                ],
                style: {
                    '${symbolSelector}': {
                        isStage: 'true',
                        rect: [undefined, undefined, '65px', '410px']
                    }
                }
            },
            timeline: {
                duration: 1500,
                autoPlay: true,
                data: [
                    [
                        "eid2",
                        "top",
                        0,
                        1000,
                        "easeOutBounce",
                        "${Ellipse}",
                        '0px',
                        '345px'
                    ],
                    [
                        "eid52",
                        "scaleX",
                        1500,
                        0,
                        "easeOutBounce",
                        "${Ellipse2}",
                        '0.43829',
                        '0.43829'
                    ],
                    [
                        "eid43",
                        "left",
                        1500,
                        0,
                        "easeOutBounce",
                        "${Ellipse2}",
                        '-162px',
                        '-162px'
                    ],
                    [
                        "eid53",
                        "scaleY",
                        1500,
                        0,
                        "easeOutBounce",
                        "${Ellipse2}",
                        '0.37447',
                        '0.37447'
                    ],
                    [
                        "eid26",
                        "scaleX",
                        921,
                        0,
                        "linear",
                        "${Symbol_1Copy}",
                        '-1',
                        '-1'
                    ],
                    [
                        "eid37",
                        "top",
                        1000,
                        500,
                        "easeOutBounce",
                        "${Ellipse2}",
                        '-195px',
                        '93px'
                    ]
                ]
            }
        }
    }
};

module.exports = ani;
