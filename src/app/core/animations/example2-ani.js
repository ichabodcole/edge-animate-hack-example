
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
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['-121px', '216px', '112px', '72px', 'auto', 'auto'],
                        fill: ["rgba(254,160,48,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"]
                    }
                ],
                style: {
                    '${Stage}': {
                        isStage: true,
                        rect: ['null', 'null', '100%', '400px', 'auto', 'auto'],
                        overflow: 'hidden',
                        fill: ["rgba(97,255,246,1.00)"]
                    }
                }
            },
            timeline: {
                duration: 5711,
                autoPlay: true,
                data: [
                    [
                        "eid19",
                        "top",
                        5372,
                        339,
                        "easeInQuad",
                        "${Rectangle}",
                        '216px',
                        '406px'
                    ],
                    [
                        "eid6",
                        "left",
                        0,
                        104,
                        "easeInQuad",
                        "${Rectangle}",
                        '-121px',
                        '-76px'
                    ],
                    [
                        "eid15",
                        "left",
                        104,
                        646,
                        "easeOutQuad",
                        "${Rectangle}",
                        '-76px',
                        '51px'
                    ],
                    [
                        "eid8",
                        "left",
                        1250,
                        750,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '51px',
                        '153px'
                    ],
                    [
                        "eid12",
                        "left",
                        2500,
                        750,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '153px',
                        '253px'
                    ],
                    [
                        "eid14",
                        "left",
                        3750,
                        750,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '253px',
                        '353px'
                    ],
                    [
                        "eid17",
                        "left",
                        5000,
                        500,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '353px',
                        '413px'
                    ],
                    [
                        "eid34",
                        "background-color",
                        2347,
                        0,
                        "linear",
                        "${Rectangle}",
                        'rgba(254,160,48,1.00)',
                        'rgba(254,160,48,1.00)'
                    ],
                    [
                        "eid22",
                        "width",
                        0,
                        750,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '112px',
                        '72px'
                    ],
                    [
                        "eid25",
                        "width",
                        1250,
                        372,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '72px',
                        '101px'
                    ],
                    [
                        "eid26",
                        "width",
                        1622,
                        378,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '101px',
                        '72px'
                    ],
                    [
                        "eid28",
                        "width",
                        2500,
                        372,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '72px',
                        '101px'
                    ],
                    [
                        "eid29",
                        "width",
                        2872,
                        378,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '101px',
                        '72px'
                    ],
                    [
                        "eid30",
                        "width",
                        3750,
                        372,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '72px',
                        '101px'
                    ],
                    [
                        "eid31",
                        "width",
                        4122,
                        378,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '101px',
                        '72px'
                    ],
                    [
                        "eid32",
                        "width",
                        5000,
                        372,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '72px',
                        '84px'
                    ],
                    [
                        "eid33",
                        "width",
                        5372,
                        128,
                        "easeInOutQuad",
                        "${Rectangle}",
                        '84px',
                        '72px'
                    ]
                ]
            }
        }
    }
};

module.exports = ani;
