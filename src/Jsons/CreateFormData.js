export const createFormData = [
    {
        title: 'Layout options',
        data: [
            {
                lable: 'Assembly Type',
                type:'dropdownWidthLable',
                faq: false,
                list: [
                    {
                        lable: 'Complete Door',
                        value: 'Complete Door',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: false,
                    }
                ],
            },
            {
                lable: 'Measure Size',
                faq: true,
                type:'multidropdown',
                multiList:[
                    {lable: 'width',
                    type:'dropdownWidthLable',
                    faq: false,
                    options:[{
                       
                        list: [
                            {
                                lable: 'Complete Door',
                                value: 'Complete Door',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: false,
                            }
                        ],
                    },
                    {
                       
                        list: [
                            {
                                lable: 'Complete Door',
                                value: 'Complete Door',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: false,
                            }
                        ],
                    },],},
                    {lable: 'height',
                    type:'dropdownWidthLable',
                    faq: false,
                    options:[{
                       
                        list: [
                            {
                                lable: 'Complete Door',
                                value: 'Complete Door',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: false,
                            }
                        ],
                    },
                    {
                       
                        list: [
                            {
                                lable: 'Complete Door',
                                value: 'Complete Door',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: true,
                            },
                            {
                                value: 'select',
                                label: 'select',
                                faq: false,
                            }
                        ],
                    },],},
                ],
                list: [
                    {
                        lable: 'Complete Door',
                        value: 'Complete Door',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: false,
                    }
                ],
            },
            {
                lable: 'Windcode',
                faq: true,
                type:'dropdownWidthLable',
                list: [
                    {
                        lable: 'WindCode W1',
                        value: 'WindCode W1',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: false,
                    }
                ],
            },
            {
                lable: 'Design',
                faq: true,
                type:'dropdownWidthLable',
                list: [
                    {
                        lable: 'CC',
                        value: 'CC',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: false,
                    }
                ],
            },
            {
                lable: 'Color',
                faq: true,
                type:'dropdownWidthLable',
                list: [
                    {
                        lable: 'Dark Finish',
                        value: 'Dark Finish',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: true,
                    },
                    {
                        value: 'select',
                        label: 'select',
                        faq: false,
                    }
                ],
            },
        ]
    },
    {
        title: 'Window Options',
        data: [
            {
            lable: 'Glass Type',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Solid (No Windows)',
                    value: 'Solid (No Windows)',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Section(s) Glazed',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Sections 4',
                    value: 'Sections 4',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Framing',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Arch 1 Design',
                    value: 'Arch 1 Design',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
    ]
    },
    {
        title: 'Track Options',
        data: [
            {
            lable: 'Spring',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Galvanized Torsion',
                    value: 'Galvanized Torsion',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Track Size',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: '2” Flag & Jamb Brackets Loose',
                    value: '2” Flag & Jamb Brackets Loose',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Track Mount',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Bracket',
                    value: 'Bracket',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Track Lift',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Standard',
                    value: 'Standard',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Track Radius',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: '12” Radius',
                    value: '12” Radius',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
    ]
    },
    {
        title: 'Other Options',
        data: [{
            lable: 'Lock',
            faq: true,
            type:'dropdownWidthLable',
            list: [
                {
                    lable: 'Inside Slide Lock (#2)',
                    value: 'Inside Slide Lock (#2)',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'MISC Lock Options',
            faq: true,
            type:'radio',
            name:'No Lock Hole',
        },
        {
            lable: 'Packaging',
            faq: true,
            type:'dropdownWidthLable',
            helperText:'Clopay CWD Models Excludes  Packaging Options',
            list: [
                {
                    lable: '[x] Distributor',
                    value: '[x] Distributor',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: true,
                },
                {
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
        {
            lable: 'Additional Options',
            faq: true,
            type:'checkboxList',
            list: [
                [
                    {
                   
                    type:'checkbox',
                    faq:false,
                    name:'Extra Strut(s)',
                },  
               
                {
                    
                    type:'dropdown',
                    list: [
                        {
                            lable: '5 Extra Strut',
                            value: '5 Extra Strut',
                            faq: true,
                        },
                        {
                            value: 'select',
                            label: 'select',
                            faq: true,
                        },
                        {
                            value: 'select',
                            label: 'select',
                            faq: false,
                        }
                    ],
                },
            ],
                
                {
                    name:'Spade Strap Hinge(s)',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'14 GA Quiet Hinge',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'Less Bottom Astragal',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'Gold Bar Gurantee ( Select Dealers )',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'Medallion Hardware Upgrade',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'Light Seal Kit',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'Slide Lock Mounted at 54”',
                    value: 'select',
                    label: 'select',
                    faq: false,
                },
                {
                    name:'2 Spear Lift Handles',
                    value: 'select',
                    label: 'select',
                    faq: false,
                }
            ],
        },
    ]
    }
]