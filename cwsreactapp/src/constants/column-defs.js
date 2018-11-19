export const getImpairmentColumns = () => {
    return [
        {
            headerName: "Domain",
            field: "domain",
            filter: "agTextColumnFilter",
            filterParams: {
            applyButton: true,
            clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "Subdomain",
            field: "subDomain",
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "Care Provider",
            field: "careProvider",
            width: 100,
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "Assessment Date",
            field: "assessmentDate",
            width: 100,
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "0",
            field: "NoImpairment",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-green": "x === 0",
                "rag-grey": "rowIndex % 2 === 1 && x !== 0"
            }
        },
        {
            headerName: "1",
            field: "MildImpairment",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-lime": "x === 1",
                "rag-grey": "rowIndex % 2 === 1 && x !== 1"
            }
        },
        {
            headerName: "2",
            field: "ModerateImpairment",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-yellow": "x === 2",
                "rag-grey": "rowIndex % 2 === 1 && x !== 2"
            }
        },
        {
            headerName: "3",
            field: "SevereImpairment",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-orange": "x === 3",
                "rag-grey": "rowIndex % 2 === 1 && x !== 3"
            }
        },
        {
            headerName: "4",
            field: "CompleteImpairment",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-red": "x === 4",
                "rag-grey": "rowIndex % 2 === 1 && x !== 4",
                width: 100
            }
        },
        {
            headerName: "9",
            field: "NotApplicable",
            width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
             //   "rag-white": "x === 9",
                "rag-grey": "rowIndex % 2 === 1",
                width: 100
            }
        },
        {
            headerName: "Comment",
            field: "comment",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        }
    ];
}

export const getCapacityColumns = () => {
    return [
        {
            headerName: "Domain", field: "domain",
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "Sub Domain", field: "subDomain",
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "CareProvider", field: "careProvider", width: 100,
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "AssessmentDate", field: "assessmentDate", width: 100,
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },

        {
            headerName: "Capacity",
            children: [{
                headerName: "0", field: "NoImpairmentC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellClassRules: {
                    "rag-green": "x === 0",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 0"
                }
            },
            {
                headerName: "1", field: "MildImpairmentC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-lime": "x === 1",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 1"
                }
            },
            {
                headerName: "2", field: "ModerateImpairmentC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-yellow": "x === 2",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 2"
                }
            },
            {
                headerName: "3", field: "SevereImpairmentC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-orange": "x === 3",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 3"
                }
            },
            {
                headerName: "4", field: "CompleteImpairmentC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-red": "x === 4",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 4"
                }
            },
            {
                headerName: "9", field: "NotApplicableC", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                  //  "rag-white": "x === 9",
                    "rag-grey": "rowIndex % 2 === 1",
                    width: 100
                }
            },
            {
                headerName: "Comment", field: "capacitycomment", width: 120,
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellClassRules: {
                    "rag-grey": "rowIndex % 2 === 1"
                }
            }]
        },

        {
            headerName: "Performance",
            children: [{
                headerName: "0", field: "NoImpairmentP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-green": "x === 0",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 0"
                }
            },
            {
                headerName: "1", field: "MildImpairmentP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-lime": "x === 1",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 1"
                }
            },
            {
                headerName: "2", field: "ModerateImpairmentP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-yellow": "x === 2",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 2"
                }
            },
            {
                headerName: "3", field: "SevereImpairmentP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-orange": "x === 3",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 3"
                }
            },
            {
                headerName: "4", field: "CompleteImpairmentP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-red": "x === 4",
                    "rag-grey": "rowIndex % 2 === 1 && x !== 4"
                }
            },
            {
                headerName: "9", field: "NotApplicableP", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                   // "rag-white": "x === 9",
                    "rag-grey": "rowIndex % 2 === 1",
                    width: 100
                }
            },
            {
                headerName: "Comment", field: "performancecomment", width: 120,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellClassRules: {
                    "rag-grey": "rowIndex % 2 === 1"
                }
            }]
        }

    ];
}

export const getEnvironmentColumns = () => {
    return [
        {
            headerName: "Domain", field: "domain",
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "Sub Domain", field: "subDomain",
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "CareProvider", field: "careProvider", width: 100,
            filter: "agTextColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },
        {
            headerName: "AssessmentDate", field: "assessmentDate", width: 100,
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        },

        {
            headerName: "Barriers",
            children: [{
                headerName: "-4", field: "Completebarrier", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-red": "x === -4",
                    "rag-grey": "rowIndex % 2 === 1 && x !== -4"
                }
            },
            {
                headerName: "-3", field: "Severebarrier", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-orange": "x === -3",
                    "rag-grey": "rowIndex % 2 === 1 && x !== -3"
                }
            },
            {
                headerName: "-2", field: "Moderatebarrier", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-yellow": "x === -2",
                    "rag-grey": "rowIndex % 2 === 1 && x !== -2"
                }
            },
            {
                headerName: "-1", field: "Mildbarrier", width: 30,
                filter: "agNumberColumnFilter",
                filterParams: {
                  applyButton: true,
                  clearButton: true
                },
                cellStyle: { 'text-align': 'center' },
                cellClassRules: {
                    "rag-cream": "x === -1",
                    "rag-grey": "rowIndex % 2 === 1 && x !== -1"
                }
            },
            ]
        },
        {
            headerName: "0", field: "Nobarrierfacilitator", width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
                "rag-blue": "x === 0",
                "rag-grey": "rowIndex % 2 === 1 && x !== 0"
            }
        },

        {
            headerName: "Facilitators",
            children: [
                {
                    headerName: "1", field: "Mildfacilitator", width: 30,
                    filter: "agNumberColumnFilter",
                    filterParams: {
                      applyButton: true,
                      clearButton: true
                    },
                    cellStyle: { 'text-align': 'center' },
                    cellClassRules: {
                        "rag-green1": "x === 1",
                        "rag-grey": "rowIndex % 2 === 1 && x !== 1"
                    }
                },
                {
                    headerName: "2", field: "Moderatefacilitator", width: 30,
                    filter: "agNumberColumnFilter",
                    filterParams: {
                      applyButton: true,
                      clearButton: true
                    },
                    cellStyle: { 'text-align': 'center' },
                    cellClassRules: {
                        "rag-green2": "x === 2",
                        "rag-grey": "rowIndex % 2 === 1 && x !== 2"
                    }
                },
                {
                    headerName: "3", field: "Substantialfacilitator", width: 30,
                    filter: "agNumberColumnFilter",
                    filterParams: {
                      applyButton: true,
                      clearButton: true
                    },
                    cellStyle: { 'text-align': 'center' },
                    cellClassRules: {
                        "rag-green3": "x === 3",
                        "rag-grey": "rowIndex % 2 === 1 && x !== 3"
                    }
                },
                {
                    headerName: "4", field: "Completefacilitator", width: 30,
                    filter: "agNumberColumnFilter",
                    filterParams: {
                      applyButton: true,
                      clearButton: true
                    },
                    cellStyle: { 'text-align': 'center' },
                    cellClassRules: {
                        "rag-green4": "x === 4",
                        "rag-grey": "rowIndex % 2 === 1 && x !== 4"
                    }
                },
            ]
        },
        {
            headerName: "9", field: "NotApplicable", width: 30,
            filter: "agNumberColumnFilter",
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellStyle: { 'text-align': 'center' },
            cellClassRules: {
              //  "rag-white": "x === 9",
                "rag-grey": "rowIndex % 2 === 1",
                width: 100
            }
        },
        {
            headerName: "Comment", field: "comment", width: 120,
            filterParams: {
              applyButton: true,
              clearButton: true
            },
            cellClassRules: {
                "rag-grey": "rowIndex % 2 === 1"
            }
        }

    ];
}

export default {
    getImpairmentColumns,
    getEnvironmentColumns,
    getCapacityColumns
};

