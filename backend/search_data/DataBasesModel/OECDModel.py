# -*- coding: utf-8 -*-
#ALL KEYS MUST BE STR, BYTES OR NUMERIC TYPES
OECD = {
    'EC': {
        'PDB_GR':{
            1: {
                'indicators': {
                    'T_GDP_V': 'GDP',
                    'T_GDPPOP_V': 'GDP per capita',
                    'T_GDPHRS_V': 'GDP per hour worked',
                    'T_GDPEMP_V': 'GDP per person employed'
                },
                'units': {
                    'GRW': 'Annual growth (constant prices)',
                    '2010Y': 'Index 2010=100'
                }
            }
        },
        'PDB_LV': {
            1: {
                'indicators': {
                    'T_GDPPOP': 'GDP per head of population',
                    'T_GDPHRS': 'GDP per person employed',
                    'T_GDPEMP': 'GDP per person employed'
                },
                'units': {
                    'CPC': 'USD, current prices, current PPPs',
                    'C': 'National currency, current prices',
                    'PCTUS': 'As % of the USA (USA=100)'
                }
            }
        },
        'HH_DASH': {
            1: {
                'indicators': {
                    'RHHGDI': 'Real household gross disposable income per capita, growth rate compared to previous year',
                    'HHFINCON': '''Real household final consumption expenditure per capita, growth rate compared to 
                    previous year''',
                    'ENDT': 'Household indebtedness to annual income ratio (percentage)',
                    'HHSAV': 'Household gross savings rate'
                },
                'units': {}
            }
        },
        'MEI_PRICES': {
            1: {
                'indicators': {
                    'CPGDFD': 'food prices',
                    'CPGREN': 'energy prices',
                    'CPGRLE': 'all items non-food, non-energy prices',
                    'CPSELR': 'services less housing prices',
                    'CPSEHO01': 'housing prices',
                    'CPALTT01': 'all items prices',
                },
                'units': {
                    'GY': 'Percentage change from the previous year',
                    'IXOB': 'Index 2010=100'
                }
            }
        },

        'PDBI_I4': {
            1: {
                'indicators': {
                    'A_U': 'Total (all sectors)',
                    'A': 'Agriculture, forestry and fishing',
                    'BDE': 'Mining and utilities',
                    'F': 'Construction',
                    'C': 'Manufacturing',
                    'G_I': 'Wholesale retail trade accommodation food services, transportation and storage',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'MN': 'Professional, scientific and technical activities, Administrative',
                },
                'units': {
                    'GRW': 'Annual growth (percentage)',
                    '2010Y': 'Index 2010=100'
                }
            },
            2: {
                'indicators': {
                    'A_U': 'Total (all sectors)',
                    'A': 'Agriculture, forestry and fishing',
                    'BDE':'Mining and utilities',
                    'F': 'Construction',
                    'C': 'Manufacturing',
                    'G_I': 'Wholesale retail trade accommodation food services, transportation and storage',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'MN': 'Professional, scientific and technical activities, Administrative',
                },
                'units': {
                    'GRW': 'Employment Annual growth',
                    '2010Y': 'Employment Index (2010=100)'
                }
            },
            3: {
                'indicators': {
                    'A_U': 'Total (all sectors)',
                    'A': 'Agriculture, forestry and fishing',
                    'BDE': 'Mining and utilities',
                    'F': 'Construction',
                    'C': 'Manufacturing',
                    'G_I': 'Wholesale retail trade accommodation food services, transportation and storage',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'MN': 'Professional, scientific and technical activities, Administrative',
                },
                'units': {
                    'GRW': 'Annual growth',
                    '2010Y': 'Index (2010=100)'
                }
            },
            4: {
                'indicators': {
                    'A_U': 'Total (all sectors)',
                    'A': 'Agriculture, forestry and fishing',
                    'BDE': 'Mining and utilities',
                    'F': 'Construction',
                    'C': 'Manufacturing',
                    'G_I': 'Wholesale retail trade accommodation food services, transportation and storage',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'MN': 'Professional, scientific and technical activities, Administrative',
                },
                'units': {
                    'GRW': 'Salaries annual growth',
                    '2010Y': 'Salaries Index (2010=100)'
                }
            },

        },

    },
    'ICE': {
        'KEI': {
            1: {
                'indicators': {
                    'PRINTO01': 'Industrial production',
                    'ODCNPI03': 'Permits issued for dwellings',
                    'PRMNTO01': 'Total manufacturing',
                    'PRCNTO01': 'Construction'
                },
                'units': {
                    'GY': 'Annual growth',
                    'ST': 'index 2010=100'
                }
            },
            2: {
                'indicators': {
                    'XTEXVA01': 'Exports in goods',
                    'XTIMVA01': 'Imports in goods'
                },
                'units': {
                    'GP': 'Prices Annual growth',
                    'ST': 'Prices Index (2010=100)'
                }
            },
            3: {
                'indicators': {
                    'CPALTT01': 'Consumer prices: all items',
                    'PIEAMP01': 'Producer prices – Manufacturing'
                },
                'units': {
                    'GP': 'Prices Annual growth',
                    'ST': 'Prices Index (2010=100)'
                }
            },
            4: {
                'indicators': {
                    'NAEXKP01': 'Gross domestic product (constant prices)',
                    'NAEXKP02': 'GDP Private final consumption expenditure; constant prices',
                    'NAEXKP03': 'GDP Government consumption expenditure; constant prices',
                    'NAEXKP06': 'GDP Exports; constant prices',
                    'NAEXKP07': 'GDP Imports of goods and services; constant prices'
                },
                'units': {
                    'GY': 'Annual growth'
                }
            },
            5: {
                'indicators': {
                    'IRLTLT01': 'Long-term interest rate'
                },
                'units': {
                    'ST': '% interest'
                }
            },
            6: {
                'indicators': {
                    'SLRTCR03': 'Passenger car registrations',
                    'SLRTTO01': 'Retail trade (Volume)',
                },
                'units': {
                    'GP': 'Growth from previous year',
                    'ST': 'Index (2010=100)'
                }
            }
        }
    },
    'GV': {
        'REV': {
            1: {
                'indicators': {
                    'TOTALTAX': 'Total tax revenue',
                    '1000': 'Taxes on income, profits and capital gains',
                    '2000': 'Social security contributions (SSC)',
                    '3000': 'Taxes on payroll and workforce',
                    '4000': 'Taxes on property',
                    '5000': 'Taxes on goods and services',
                    '6000': 'other Taxes'
                },
                'units': {
                    'TAXGDP': 'as % of GDP',
                    'TAXPER': 'as % of total taxation'
                }
            }
        }
    },
    'EMP': {
        'LFS_SEXAGE_I_R': {
            1: {
                'indicators': {
                    'EPR': 'Employment rate',
                    'LFPR': 'Labour force participation rate (employed or looking for work)',
                    'UR': 'Unemployment rate'
                },
                'units': {}
            }
        },
        'TENURE_DIS': {
            1: {
                'indicators': {
                    '1MONTH': 'less than 1 month',
                    '1MTO6M': '1 to 6 months',
                    '6MTO12M': '6 to 12 months',
                    '1YTO3Y': '1 to 3 years',
                    '10YORMORE': '10 years and over'
                },
                'units': {}
            }
        },
        'RMW': {
            1: {
                'indicators': {
                    'A': 'Annual',
                    'H': 'Hourly',
                    'PPP': 'USD purchasing power constant prices (2015)'
                },
                'units': {}
            }
        },
        'MIN2AVE': {
            1: {
                'indicators': {
                    'MEAN': 'Average wages',
                    'MEDIAN': 'Median wages (most common)'
                },
                'units': {}
            },
        },
        'AVE_HRS': {
            1: {
                'indicators': {
                    'FT': 'Full-time employment',
                    'PT': 'Part-time employment'
                },
                'units': {}
            },
        },
        'ANHRS': {
            1: {
                'indicators': {
                    'TE': 'Average annual hours worked',
                },
                'units': {}
            },
        },
        'INVPT_D': {
            1: {
                'indicators': {
                    'TE': 'number of employees X 1000',
                },
                'units': {}
            },
        }
    },
    'SC': {
        'BLI2015': {
            1: {
                'indicators': {
                    'ES_EDUA': 'Educational attainment',
                    'ES_STCS': 'Student skills (PISA Score)',
                    'ES_EDUEX': 'Years in education'
                },
                'units': {}
            },
            2: {
                'indicators': {
                    'WL_EWLH': 'Employees working very long hours'
                },
                'units': {}
            },
            3: {
                'indicators': {
                    'IW_HADI': 'Household net adjusted disposable income',
                    'IW_HNFW': 'Household net financial wealth'
                },
                'units': {}
            },
            4: {
                'indicators': {
                    'JE_PEARN': 'Personal earnings USD'
                },
                'units': {}
            },
            5: {
                'indicators': {
                    'HS_LEB': 'Life expectancy'
                },
                'units': {}
            },
            6: {
                'indicators': {
                    'HS_SFRH': 'Self-reported health'
                },
                'units': {}
            },
            7: {
                'indicators': {
                    'SW_LIFS': 'Life satisfaction'
                },
                'units': {}
            },
            8: {
                'indicators': {
                    'CG_VOTO': 'Voter turnout'
                },
                'units': {}
            },
            9: {
                'indicators': {
                    'PS_REPH': 'Homicide rate'
                },
                'units': {}
            },
            10: {
                'indicators': {
                    'PS_FSAFEN': 'Feeling safe walking alone at night'
                },
                'units': {}
            },
        }
    },
    'RD': {
        'MSTI_PUB': {
            1: {
                'indicators': {
                    'G_XGDP': 'GERD as a percentage of GDP',
                    'G_XPOP': 'GERD per capita population (current PPP $)'
                },
                'units': {}
            },
            2: {
                'indicators': {
                    'G_XFB': 'Percentage of GERD financed by the business enterprise sector',
                    'G_XFG': 'Percentage of GERD financed by government',
                    'G_XFON': 'Percentage of GERD financed by other national sources',
                    'G_XFA': 'Percentage of GERD financed by the rest of the world'
                },
                'units': {}
            },
            3: {
                'indicators': {
                    'G_XEB': 'Percentage of GERD performed by the Business Enterprise sector',
                    'G_XEH': 'Percentage of GERD performed by the Higher Education sector',
                    'G_XEG': 'Percentage of GERD performed by the Government sector',
                    'G_XEI': 'Percentage of GERD performed by the Private Non-Profit sector'
                },
                'units': {}
            },
            4: {
                'indicators': {
                    'P_PCT': 'Number of patent applications filed under the PCT(priority year)',
                    'P_BIOPCT': 'Number of patents in the biotechnology sector - applications filed under the PCT (priority year)',
                    'P_ICTPCT': 'Number of patents in the ICT sector - applications filed under the PCT (priority year)',
                },
                'units': {}
            }
        }
    }
}