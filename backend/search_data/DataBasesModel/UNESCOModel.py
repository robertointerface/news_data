# -*- coding: utf-8 -*-

UNESCO = {
    'DEM_ECO-Rev1': {
        'FR': {
            1: {
                'indicators': {
                    'BIRTH_R_WOMEN': 'Births per woman'
                },
                'units': {}
            }
        },
        'IMR': {
            1: {
                'indicators': {
                    'LB_1000': 'Per 1,000 live births'
                },
                'units': {}
            }
        },

        'PHR_USD310': {
            1: {
                'indicators': {
                    'PT_POP': 'as % of total population'
                },
                'units': {}
            }
        },
        'LIFE_EXP': {
            1: {
                'indicators': {
                    'YR': 'Life expectancy'
                },
                'units': {}
            }
        },
        'POP_RUR': {
            1: {
                'indicators': {
                    'PT_POP': 'as % of total population'
                },
                'units': {}
            }
        },
        'POP': {
            1: {
                'indicators': {
                    'Y15T24': '15-24 years',
                    'Y_GE65': '65 years and over',
                    '_T': 'Total (all ages)',
                },
                'units': {
                    'PER': 'number of persons (Result X 1000)'
                }
            }
        },
        'POP_GROWTH': {
            1: {
                'indicators': {
                    'PT_ANNUAL': 'annual growth %'
                },
                'units': {}
            }
        },

    },
    'DEM_ECO-Rev2': {
        'GDP_GROWTH': {
            1: {
                'indicators': {
                    'PT_ANNUAL': 'annual growth %'
                },
                'units': {}
            }
        },
        'GDP_CAP': {
            1: {
                'indicators': {
                    'INTER_CONST2011': 'constant 2011 international $',
                    'LCU_CUR': 'Local currency, current',
                    'USD_CUR': 'current US$'
                },
                'units': {}
            }
        },
        'GDP_CAP_PPP': {
            1: {
                'indicators': {
                    'INTER_CUR': 'current international $'
                },
                'units': {}
            }
        },
        'GDP': {
            1: {
                'indicators': {
                    'INTER_CONST2011': 'constant 2011 international $',
                    'USD_CUR': 'current US$',
                    'LCU_CUR': 'current Local Currency',
                    'LCU_CONST': 'constant Local Currency'
                },
                'units': {}
            }
        },
        'ILO_ETPR': {
            1: {
                'indicators': {
                    '_T': 'Total population',
                    'M': 'Male',
                    'F': 'Female',

                },
                'units': {
                    'PT': 'Percentage of the population employed'
                }
            }
        },
        'ILO_LFPR': {
            1: {
                'indicators': {
                    '_T': 'Total population',
                    'M': 'Male',
                    'F': 'Female',
                },
                'units': {
                    'PT': 'Percentage of the population employed'
                }
            }
        },
    },
    'EDU_NON_FINANCE-Rev1': {
        'NER': {
            1: {
                'indicators': {
                    'L1': 'Primary education',
                    'L2_3': 'Secondary education',

                },
                'units': {
                    'PT': 'Percentage of the population (on school age) enrolled in '
                }
            }
        },
        'LR': {
            1: {
                'indicators': {
                    'Y_GE15': '15 years and over',
                    'Y15T24': 'between 15-24 years',
                    'Y25T64': 'between 25-64 years',
                    'Y_GE65': '65 years and over',
                },
                'units': {
                    'PT': 'Percentage of the population '
                }
            }
        },
        'FEP': {
            1: {
                'indicators': {
                    'L1': 'Primary education',
                    'L2_3': 'Secondary education',
                    'L5T8': 'University education',
                    'L4': 'Vocational education',
                },
                'units': {
                    'PT': 'Percentage of students at '
                }
            }
        },
        'REPP': {
            1: {
                'indicators': {
                    'L1': 'Primary education',
                    'L2_3': 'Secondary education',
                },
                'units': {
                    'PT': 'Percentage of students at '
                }
            }
        },
        'TH_DUR_COMP_EDU': {
            1: {
                'indicators': {
                    'YR': 'years',
                },
                'units': {}
            }
        },
    },
    'EDU_FINANCE-Rev1': {
        'EDU_EXP': {
            1: {
                'indicators': {
                    'L1': 'Primary education',
                    'L2_3': 'Secondary education',
                    'L5T8': 'University education',
                    '_T': 'Total education',
                },
                'units': {
                    'GDP': 'GDP',
                    'GOV_EXP_T': 'as % of total government expenditure (all sectors)',
                    'USD': 'in million of US dollar',
                    'PPP': 'in million of US dollar in Purchasing power parity',
                }
            },
        },
        'XUNIT': {
            1: {
                'indicators': {
                    'L1': 'Primary education',
                    'L2_3': 'Secondary education',
                    'L5T8': 'University education'
                },
                'units': {
                    'USD': 'in US dollar',
                    'USD_CONST': 'in Constant US $',
                    'GDP_CAP': 'as % of GDP per capita',
                    'PPP': 'Purchasing power parity',
                }
            },
        },
    },
    'RD-Rev1': {
        'GERD': {
            1: {
                'indicators': {
                    'GOV': 'Government',
                    'BES': 'Business enterprise',
                    'HE': 'Higher education',
                    'PNP': 'Private non-profit',
                    '_T': 'Total'
                },
                'units': {
                    'GDP': 'as % of GDP',
                    'PT_GERD': 'as % of total Gross domestic expenditure on R&D'
                }
            }
        },
        'RD_PS_HC': {
            1: {
                'indicators': {
                    'GOV': 'Government R&D',
                    'BES': 'Business enterprise R&D',
                    'HE': 'Higher education R&D',
                    '_T': 'Total personnel R&D',
                },
                'units': {
                    'PER': 'Number of personnel R&D',
                }
            }
        },

    },
    'FF-Rev1': {
        'FF': {
            1: {
                'indicators': {
                    '_T': 'Total films',
                    'FICT': 'Fiction films',
                    'ANIM': 'Animation films',
                    'DOC': 'Documentary films',
                },
                'units': {
                    'NB': 'Number of'
                }
            },
            2: {
                'indicators': {
                    'FULL_NAT_FIN': '100% nationally-financed ',
                    'COPROD_T': 'International co-production',
                },
                'units': {
                    'NB': 'Number',
                }
            },
            3: {
                'indicators': {
                    '_T': 'Total films',
                    'NAT': 'National films',
                    'FOR': 'Foreign films'
                },
                'units': {
                    'NB': 'Number',
                }
            },
        },
        'C_SITE': {
            1: {
                'indicators': {
                    '_T': 'Total cinemas',
                    'SCR1': '1 screen cinemas',
                    'SCR2T7': '1 to 7 screens cinemas',
                    'SCRGE8': '8 screens or more (multiplex) cinemas',
                },
                'units': {
                    'NB': 'Number of'
                }
            },
        },
        'ADM': {
            1: {
                'indicators': {
                    '_T': 'all productions',
                    'NAT': 'National productions',
                    'FOR': 'Foreign productions',
                },
                'units': {
                    'NB': 'Number'
                }
            },
        },
        'GBO': {
            1: {
                'indicators': {
                    '_T': 'Total',
                    'NAT': 'National productions',
                    'FOR': 'Foreign productions',
                },
                'units': {
                    'NAC': 'Local currency'
                }
            },
            2: {
                'indicators': {
                    'CAP': 'Per capita'
                },
                'units': {}
            }
        },
        'ATTEND_FREQ': {
            1: {
                'indicators': {
                    'CAP': 'Per capita'
                },
                'units': {}
            },
        },
        'AVG_TICKET_PRICE': {
            1: {
                'indicators': {
                    'NAC': 'Local currency'
                },
                'units': {}
            },
        },
    }
}