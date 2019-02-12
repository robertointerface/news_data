# coding=utf-8
"""
Options required for the user to make data requests.
Data is in dict format (JSON) to take advantage of fast data iteration due to Hast tables

"""
Eurostat = {
    'EC': {
        'nama_10_a10': {
            1: {
                'indicators': {
                    'TOTAL': 'Total - all NACE activities',
                    'A': 'Agriculture, forestry and fishing',
                    'F': 'Construction',
                    'G-I': '''Wholesale and retail trade, transport, accomodation and
                           food service activities''',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'L': 'Real estate activities',
                    'M_N': '''Professional, scientific and technical activities; 
                    administrative and support service activities''',
                    'O-Q':  '''Public administration, defence, education, human health and 
                    social work activities'''
                },
                'units': {
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'CLV_PCH_PRE': 'Chain linked volumes, percentage change on previous period',
                    'CP_MEUR': 'Current prices, million euro',
                    'CLV_I10': 'Chain linked volumes, index 2010=100'
                }
            }
        },
        'ext_lt_intertrd': {
            1: {
                'indicators': {
                    'MIO_IMP_VAL': 'Imports in million of Euros',
                    'MIO_EXP_VAL': 'Exports in million of Euros',
                    'MIO_BAL_VAL': 'Trade balance (Exports - imports) in million Euros'
                },
                'units': {
                    'TOTAL': 'Total - all products'
                }
            }
        },
        'sbs_sc_sca_r2': {
            1: {
                'indicators': {
                    'B-N_S95_X_K': 'Total business economy',
                    'B': 'Mining and quarrying',
                    'C': 'Manufacturing',
                    'D': 'Electricity, gas, steam and air conditioning supply',
                    'E': 'Water supply; sewerage, waste management and remediation activities',
                    'F': 'Construction',
                    'G': 'Wholesale and retail trade; repair of motor vehicles and motorcycles',
                    'H': 'Transportation and storage',
                    'I': 'Accommodation and food service activities',
                    'J': 'Information and communication',
                    'L': 'Real estate activities',
                    'N': 'Administrative and support service activities',
                },
                'units': {
                    'TOTAL': 'Total',
                    '0-9': 'From 0 to 9 persons employed',
                    '10-19': 'From 10 to 19 persons employed',
                    '20-49': 'From 20 to 49 persons employed',
                    '50-249': 'From 50 to 249 persons employed',
                    'GE250': '250 persons employed or more'
                }
            }
        },
        'nama_10_a10_e': {
            1: {
                'indicators': {
                    'TOTAL': 'Total - all activities',
                    'A': 'Agriculture, forestry and fishing',
                    'B-E': 'Industry (except construction)',
                    'F': 'Construction',
                    'G-I': 'Wholesale and retail trade, transport, accomodation and food service activities',
                    'J': 'Information and communication',
                    'K': 'Financial and insurance activities',
                    'L': 'Real estate activities',
                    'M_N': 'Professional, scientific and technical activities',
                    'O-Q': 'Public administration, defence, education...',
                    'R-U': 'Arts, entertainment and recreation; other service activities'
                },
                'units': {
                    'PC_TOT_PER': 'Percentage of total employment (based on persons)',
                    'PC_TOT_HW': 'Percentage of total employment (based on hours worked)',
                    'THS_PER': 'Thousand persons (Result X 1000)',
                    'HS_HW': 'Thousand hours worked (Result X 1000)',
                    'PCH_PRE_PER': 'Percentage change on previous period (based on persons)',
                    'PCH_PRE_HW': 'Percentage change on previous period (based on hours worked)'
                }
            }
        },
        'lc_lci_r2_a': {
            1: {
                'indicators': {
                    'B-N': 'Total of Private Sector',
                    'B-E': 'Industry (except construction)',
                    'F': 'Construction',
                    'G-N': 'Services of the business economy',
                    'O-S': 'Public administration'
                },
                'units': {
                    'PCH_PRE': 'PCH_PRE',
                    'I12': 'Index, 2012=100'
                }
            }
        },
        'namq_10_exi': {
            1: {
                'indicators': {
                    'P6_S21': 'Exports of goods and services to the European Union',
                    'P6_S22': 'Exports of goods and services to third countries and international organisations',
                    'P7_S21': 'Imports of goods and services from the European Union',
                    'P7_S22': 'Imports of goods and services from third countries and international organisations',
                },
                'units': {
                    'CP_MEUR': 'Current prices, million euro',
                    'CLV10_MEUR': 'Chain linked volumes (2010), million euro'
                }
            }
        },
        'nama_10_an6': {
            1: {
                'indicators': {
                    'N11G': 'Total fixed assets (gross)',
                    'N11KG': 'Total Construction (gross)',
                    'N111G': 'Dwellings (gross)',
                    'N112G': 'Other buildings and structures (gross)',
                    'N11MG': 'Machinery and equipment and weapons systems (gross)',
                    'N1131G': 'Transport equipment (gross)',
                    'N1132G': 'ICT equipment (gross)',
                    'N11OG': 'Other machinery and equipment and weapons systems (gross)',
                    'N115G': 'Cultivated biological resources (gross)',
                    'N117G': 'Intellectual property products (gross)',
                },
                'units': {
                    'PC_TOT': 'Percentage of total capital',
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'CLV_PCH_PRE': 'Chain linked volumes, percentage change on previous period',
                    'CP_MEUR': 'Current prices, million euro',
                    'CLV_I10': 'Chain linked volumes, index 2010=100'
                }
            }
        },
        'irt_lt_mcby_q': {
            1: {
                'indicators': {
                    'MCBY': 'bond yields'
                },
                'units': {}
            }
        },
        'nama_10_co3_p3': {
            1: {
                'indicators': {
                    'TOTAL': 'Total consumption',
                    'CP01': 'Food and non-alcoholic beverages',
                    'CP02': 'Alcoholic beverages, tobacco and narcotics',
                    'CP03': 'Clothing and footwear',
                    'CP04': 'Housing, water, electricity, gas and other fuels',
                    'CP05': 'Furnishings, household equipment and routine household maintenance',
                    'CP06': 'Health',
                    'CP07': 'Transport',
                    'CP08': 'Communications',
                    'CP09': 'Recreation and culture',
                    'CP10': 'Education',
                    'CP11': 'Restaurants and hotels',
                    'CP12': 'Miscellaneous goods and services',
                },
                'units': {
                    'PC_TOT': 'Percentage of total consumption',
                    'CLV_PCH_PRE': 'Chain linked volumes, percentage change on previous period',
                    'CP_MEUR': 'Current prices, million euro',
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'CLV10_MEUR': 'Chain linked volumes (2010), million euro'
                }
            }
        },

    },
    'PIE': {
        'ei_bssi_m_r2': {
            1: {
                'indicators': {
                    'BS-CCI-BAL': 'Construction confidence indicator',
                    'BS-ESI-I': 'Economic sentiment indicator',
                    'BS-ICI-BAL': 'Industrial confidence indicator',
                    'BS-RCI-BAL': 'Retail confidence indicator',
                    'BS-CSMCI-BAL': 'Consumer confidence indicator',
                    'BS-SCI-BAL': 'Services Confidence Indicator',
                },
                'units': {}
            },
        },
        'nama_10_gdp': {
            1: {
                'indicators': {
                    'B1GQ': 'Gross domestic product at market prices',
                    'P3': 'Final consumption expenditure',
                    'P3_S13': 'Actual individual consumption',
                    'P41': 'Gross domestic product at market prices',
                    'P5G': 'Gross capital formation',
                    'P6': 'Exports of goods and services',
                    'P7': 'Imports of goods and services',
                    'B1G': 'Value added, gross',
                },
                'units': {
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'CLV_PCH_PRE': 'Chain linked volumes, percentage change on previous period',
                    'CLV_I10': 'Chain linked volumes, index 2010=100',
                    'CP_MEUR': 'Current prices, million euro',
                    'PC_EU28_MEUR_CP': 'Percentage of EU28 total (based on million euro), current prices',
                    'CLV10_MEUR': 'Chain linked volumes (2010), million euro'
                }
            },
        },
        'nama_10_pc': {
            1: {
                'indicators': {
                    'B1GQ': 'Gross domestic product at market prices',
                    'P3': 'Final consumption expenditure',
                    'P3_S13': 'Final consumption expenditure of general government',
                    'P31_S14': 'Final consumption expenditure of households',

                },
                'units': {
                    'CP_EUR_HAB': 'Current prices, euro per capita',
                    'CP_PPS_HAB': 'Current prices, purchasing power standard per capita',
                    'CLV10_EUR_HAB': 'Chain linked volumes (2010), euro per capita',
                    'CLV_PCH_PRE_HAB': 'Chain linked volumes, percentage change on previous period, per capita'
                }
            }
        },
        'nasa_10_ki': {
            1: {
                'indicators': {
                    'B7G_R_HAB_GR': 'Disposable income of households per capita (percentage change on previous Year)',
                    'P4_R_HAB_GR': 'Final consumption per capita (percentage change on previous Year)',
                    'DIR_S14_S15': 'Debt-to-anual income ratio of households',
                    'SRG_S14_S15': 'Household saving rate (% of income that is saved)',
                    'P51G_RAT_GDP_S1M': 'Households investment (% of GDP)'
                },
                'units': {
                    'S14_S15': 'Households'
                }
            },

            2: {
                'indicators': {
                    'DIR_S11': 'Net debt-to-income ratio, after taxes',
                },
                'units': {
                    'S11': 'Company debt as % of income after taxes'
                }
            },
            3: {
                'indicators': {
                    'P51G_RAT_GDP_BUS': 'Business investment to GDP ratio',
                },
                'units': {
                    'S11_S12': '% of GDP'
                }
            },

            4: {
                'indicators': {
                    'P51G_RAT_GDP_S1': 'Total investment to GDP ratio',
                },
                'units': {
                    'S1': 'Total Investment at the economy as % of GDP'
                }
            }
        },
        'prc_hicp_aind': {
            1: {
                'indicators': {
                    'CP00': 'All-items',
                    'CP01': 'Food and non-alcoholic beverages',
                    'CP02': 'Alcoholic beverages, tobacco and narcotics',
                    'CP03': 'Clothing and footwear',
                    'CP04': 'Housing, water, electricity, gas and other fuels',
                    'CP05': 'Furnishings, household equipment and routine household maintenance',
                    'CP06': 'Health',
                    'CP07': 'Transport',
                    'CP08': 'Communications',
                    'CP09': 'Recreation and culture',
                    'CP10': 'Education',
                    'CP11': 'Restaurants and hotels',
                },
                'units': {
                    'INX_A_AVG': 'Annual average index (2015 = 100)',
                    'RCH_A_AVG': 'Annual average rate of change'
                }
            }
        },
        'une_rt_a': {
            1: {
                'indicators': {
                    'TOTAL': 'Total population',
                    'Y_LT25': 'Population less than 25 years',
                    'Y25-74': 'Population From 25 to 74 years',
                },
                'units': {
                    'PC_ACT': 'Percentage of active population',
                    'PC_POP': 'Percentage of total population',

                }
            }
        }
    },
    'EMP': {
        'une_rt_a': {
            1: {
                'indicators': {
                    'TOTAL': 'total population',
                    'Y_LT25': 'Population less than 25 years',
                    'Y25-74': 'Population from 25 to 74 years',
                },
                'units': {
                    'PC_ACT': 'Percentage of active population',
                    'PC_POP': 'Percentage of total population'
                }
            }
        },
        'une_rt_q': {
            1: {
                'indicators': {
                    'TOTAL': 'total population',
                    'Y_LT25': 'Population less than 25 years',
                    'Y25-74': 'Population from 25 to 74 years',
                },
                'units': {
                    'PC_ACT': 'Percentage of active population',
                }
            }

        },
        'lfsi_emp_q': {
            1: {
                'indicators': {
                    'T': 'total population',
                    'M': 'Males',
                    'F': 'Females',
                },
                'units': {
                    'PC_POP': 'Percentage of the population between 15 to 64 years',
                    'THS_PER': 'Thousand persons (Result X 1000)'
                }
            },
            2: {
                'indicators': {
                    'T': 'total population',
                    'M': 'Males',
                    'F': 'Females',
                },
                'units': {
                    'PC_POP': 'Percentage of the population between 15 to 64 years',
                    'THS_PER': 'Thousand persons (Result X 1000)'
                }
            }
        },
        'lfsi_educ_a': {
            1: {
                'indicators': {
                    'ED0-2': 'primary/secondary education or less',
                    'ED3_4': 'upper secondary & vocational education',
                    'ED5-8': 'University',
                },
                'units': {
                    'PC_EMP': 'Percentage of total employment',
                    'THS_PER': 'Thousand persons (Result X 1000) employed'
                }
            }
        },
        'lfsa_etpgan': {
            1: {
                'indicators': {
                    'Y15-64': '15 years or over and employed',
                    'Y15-24': 'From 15 to 24 years and employed',
                    'Y25-54': 'From 25 to 54 years and employed',
                    'Y55-64': 'From 55 to 64 years and employed',

                },
                'units': {
                    'PC': 'Percentage of ',
                }
            }
        },
        'lfsa_eppga': {
            1: {
                'indicators': {
                    'Y_GE15': 'from 15 years or over',
                    'Y15-39': 'From 15 to 39 years',
                    'Y40-64': 'From 40 to 64 years',
                },
                'units': {
                    'PC': 'Percentage of employment',
                }
            }
        },
        'lfsa_eppgai': {
            1: {
                'indicators': {
                    'Y_GE15': 'from 15 years or over',
                    'Y15-39': 'From 15 to 39 years',
                    'Y40-64': 'From 40 to 64 years',
                },
                'units': {
                    'PC': 'percentage of the total part-time employment ',
                }
            }
        },
        'lfsa_qoe_4ax1r2': {
            1: {
                'indicators': {
                    'TOTAL': 'Total - all activities',
                    'A': 'griculture, forestry and fishing',
                    'B-F': 'Industry and construction',
                    'G-I': 'Wholesale and retail trade, transport, accomodation and food service activities',
                    'J-N': 'Information and communication; financial, scientific and technical activities',
                    'O-R_U': 'Public administration',
                    'S_T': 'Other service activities, activities of households as employers',
                },
                'units': {
                    'PC': 'Percentage of total employment',
                }
            },
        },
        'lfsa_qoe_4ax1r1': {
            1: {
                'indicators': {
                    'TOTAL': 'Total - all activities',
                    'A_B': 'griculture, forestry and fishing',
                    'C-F': 'Industry and construction',
                    'G-I': 'Wholesale and retail trade, transport, accomodation and food service activities',
                    'J_K': 'Information and communication; financial, scientific and technical activities',
                    'L-O_Q': 'Public administration',
                    'P': 'Other service activities, activities of households as employers',

                },
                'units': {
                    'PC': 'Percentage of total employment',
                }
            }
        },
        'une_ltu_a': {
            1: {
                'indicators': {
                    'LTU': 'Long-term unemployment (12 months or more)',
                    'VLTU': 'Very long-term unemployment (24 months or more)',
                },
                'units': {
                    'PC_ACT': 'Percentage of active population',
                    'PC_UNE': 'Percentage of unemployment',
                    'THS_PER': 'Thousand persons (Result X 1000)',
                }
            }
        },
        'lfst_r_lfu3rt': {
            1: {
                'indicators': {
                    'Y_GE15': '15 years or over',
                    'Y15-24': 'From 15 to 24 years',
                },
                'units': {
                    'PC_ACT': 'Percentage of active population',
                    'PC_UNE': 'Percentage of unemployment',
                    'PC': 'Percentage of active population',
                }
            }
        },
    },
    'GV': {
        'gov_10a_exp': {
            1: {
                'indicators':{
                    'TOTAL': 'All public services',
                    'GF01': 'General public services',
                    'GF02': 'Defence',
                    'GF03': 'Public order and safety',
                    'GF04': 'Economic affairs',
                    'GF05': 'Environment protection',
                    'GF06': 'Housing and community amenities',
                    'GF07': 'Health',
                    'GF08': 'Recreation, culture and religion',
                    'GF09': 'Education',
                    'GF10': 'Social protection',
                },
                'units': {
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'PC_TOT': 'Percentage of total government expenditure',
                    'MIO_EUR': 'Million euros',
                }
            }
        },
        'gov_10dd_edpt1': {
            1: {
                'indicators': {
                    'B9': 'Government budget balance',
                    'GD': 'Government consolidated gross debt',
                    'D41PAY': 'Interest, payable',
                },
                'units': {
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'MIO_EUR': 'Million euro',
                }
            }
        },
        'gov_10a_main': {
            1: {
                'indicators': {
                    'TE': 'Total general government expenditure',
                    'TR': 'Total general government revenue',
                    'B9': 'Government budget balance',
                },
                'units': {
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'MIO_EUR': 'Million euro',
                }
            }
        },
        'gov_10dd_ggd': {
            1: {
                'indicators': {
                    'S12': 'Financial corporations',
                    'S11': 'Non-financial corporations',
                    'S14_S15': 'Households; non-profit institutions serving households',
                    'S2': 'Rest of the world',
                },
                'units': {
                    'PC_TOT': 'Percentage of total government debt',
                    'MIO_EUR': 'Million euros of government debt',
                }
            }
        },
        'gov_10a_taxag': {
            1: {
                'indicators': {
                    'D2': 'Taxes on production and imports',
                    'D5': 'Current taxes on income, wealth, etc.',
                    'D61': 'Net social contributions',
                    'D91': 'Capital taxes',
                    'D2_D5_D91_D61_M_D995': 'Total taxes',
                    'D91': 'Capital taxes',
                },
                'units': {
                    'PC_TOT': 'Percentage of total tax income',
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                    'MIO_EUR': 'Million euro',
                }
            }
        },
    },
    'DEM': {
        'migr_pop2ctz': {
            1: {
                'indicators': {
                    'TOTAL': 'Total population',
                    'NAT': 'Reporting country',
                    'FOR_STLS': 'Foreign country and stateless',
                },
                'units': {
                    'NR': 'Number'
                }
            }
        },
        'demo_pjanind': {
            1: {
                'indicators': {
                    'MEDAGEPOP': 'Median age of population',
                    'PC_Y0_19': 'Proportion of population aged 0-19 years',
                    'PC_Y20_39': 'Proportion of population aged 20-39 years',
                    'PC_Y40_59': 'Proportion of population aged 40-59 years',
                    'PC_Y60_MAX': 'Proportion of population aged 60 years and more'
                },
                'units': {}
            }
        },
        'migr_imm8': {
            1: {
                'indicators': {
                    'T': 'Total immigration',
                    'M': 'Males',
                    'F': 'Females',
                },
                'units': {
                    'NR': 'Number',
                }
            }
        },
        'migr_emi1ctz': {
            1: {
                'indicators': {
                    'TOTAL': 'From all ages',
                    'Y20-24': 'From 20 to 24 years',
                    'Y25-29': 'From 25 to 29 years',
                    'Y30-34': 'From 30 to 34 years',
                    'Y35-39': 'From 35 to 39 years',
                    'Y40-44': 'From 40 to 44 years',
                    'Y45-49': 'From 45 to 49 years',
                    'Y50-54': 'From 50 to 54 years',
                    'Y55-59': 'From 55 to 59 year',
                    'Y60-64': 'From 60 to 64 years',
                    'Y_GE65': '65 years or over'
                },
                'units': {
                    'NR': 'Number',
                }
            }
        },
        'demo_mlexpec': {
            1: {
                'indicators': {
                    'T': 'population',
                    'M': 'Males',
                    'F': 'Females'
                },
                'units': {
                    'YR': '(Years)'
                }
            }
        },
        'demo_ndivind': {
            1: {
                'indicators': {
                    'DIVMARPCT': 'Divorces per 100 marriages',
                    'DIV': 'number Divorces',
                    'GDIVRT': 'Number of divorces per 1000 population'
                },
                'units': {}
            }
        },
        'migr_asyappctza': {
            1: {
                'indicators': {
                    'TOTAL': 'Total (all countries)',
                    'SY': 'Syria',
                    'IQ': 'Iraq',
                    'PK': 'Pakistan',
                    'IR': 'Iran',
                    'AF': 'Afghanistan',
                    'VE': 'Iran',
                    'AF': 'Venezuela',
                },
                'units': {
                    'PER': 'Person',
                }
            }
        },
        'migr_asydcfsta': {
            1: {
                'indicators': {
                    'TOTAL_POS': 'with positive decision',
                    'REJECTED': 'Reject decision',
                    'TOTAL': 'TOTAL decisions (positive + rejected)'
                },
                'units': {
                    'PER': 'Person',
                }
            }
        },
        'crim_off_cat': {
            1: {
                'indicators': {
                    'ICCS0101': 'Intentional homicide',
                    'ICCS02011': 'Assault',
                    'ICCS0301': 'Sexual violence',
                    'ICCS03011': 'Rape',
                    'ICCS0401': 'Robbery with violence',
                    'ICCS05012': 'Burglary of private residential premises',
                    'ICCS0502': 'Theft',
                },
                'units': {
                    'P_HTHAB': 'Per hundred thousand inhabitants',
                    'NR': '(Number)',
                }
            }
        },
    },
    'SAN': {
        'hlth_silc_18': {
            1: {
                'indicators': {
                    'VG_G': 'Very good or good',
                    'FAIR': 'Fair',
                    'B_VB': 'Bad or very bad',
                    'Y_GE16': 'From 16 years or over',
                    'Y16-24': 'From 16 to 24 years',
                    'Y25-34': 'From 25 to 34 years',
                    'Y35-44': 'From 35 to 44 years',
                    'Y45-64': 'From 45 to 64 years',
                },
                'units': {
                    'Y_GE65': 'From 65 years or over',
                }
            }
        },
        'hlth_sha11_hf': {
            1:{
                'indicators': {
                    'TOT_HF': 'All financing agents',
                    'HF1': 'General government',
                    'HF2': 'Voluntary health care payment schemes',
                    'HF3': 'Household out-of-pocket payment',
                    'EUR_HAB': 'Euro per inhabitant',
                    'PPS_HAB': 'Purchasing power standard (PPS) per inhabitant',
                },
                'units': {
                    'MIO_EUR': 'Million euro',
                    'PC_GDP': 'Percentage of gross domestic product (GDP)',
                }
            }
        },
    'hlth_silc_04': {
            1:{
                'indicators': {
                    'POP': 'Total population',
                    'EMP': 'Employed population',
                    'UNE': 'Unemployed population',
                    'HF3': 'Household out-of-pocket payment',
                    'RET': 'Retired population',
                    'INAC_OTH': 'Other inactive populationt',
                },
                'units': {
                    'PC': 'Percentage of',
                }
            }
        },
    'hlth_rs_bds2': {
        1: {
            'indicators': {
                'PUB': 'Public ownership',
                'PRV_P': 'For-profit private ownership',
                'PRV_NP': 'Not-for-profit private ownership',

            },
            'units': {
                'NR': 'Number of beds',
                'HAB_P': 'Inhabitants per bed',
                'P_HTHAB': 'beds Per hundred thousand inhabitants'
            }
        }
    },
    'hlth_rs_tech': {
        1: {
            'indicators': {
                'OPER': 'Operation theatres in hospital',
                'DAY_SUR': 'Surgical day care places',
                'DAY_ONC': 'Oncological day care place',
                'DAY_PSY': 'Psychiatric day care place',
                'DAY_GER': 'Geriatric day care places'
            },
            'units': {
                'NR': '(Number)',
                'P_HTHAB': 'Per hundred thousand inhabitants'
            }
        }
    },
},

    'EDU': {
        'edat_lfse_30': {
            1: {
                'indicators': {
                    'T': 'Population (18 to 24 years old)',
                    'F': 'Males (18 to 24 years old)',
                    'M': 'Females (18 to 24 years old)',
                },
                'units': {
                    'PC': 'Percentage'
                }
            }
        },
        'educ_uoe_perp04': {
            1: {
                'indicators': {
                    'ED1': 'Primary education',
                    'ED2': 'Lower secondary education',
                    'ED34': 'Upper secondary education - general',
                    'ED35': 'Upper secondary education - vocational',
                    'ED4': 'Post-secondary non-university education',
                    'ED5': 'Short-cycle University education',
                    'ED6-8': 'University'
                },
                'units': {
                    'RT': 'number of students per teacher'
                }
            }
        },
        'educ_figdp': {
            1: {
                'indicators': {
                    'FP01_1': 'all levels of education combined',
                    'FP02_1': 'all levels of education combined',
                    'FP02_2': 'secondary education & vocational',
                    'FP02_3': 'University',
                },
                'units': {
                    'PC': 'Percentage of GDP',
                }
            }
        },
        'educ_uoe_fine09': {
            1: {
                'indicators': {
                    'ED1': 'Primary education',
                    'ED2': 'Lower secondary education',
                    'ED34': 'Upper secondary education - general',
                    'ED35': 'Upper secondary education - vocational',
                    'ED4': 'Post-secondary non-university education',
                    'ED5-8': 'University'
                },
                'units': {
                    'EUR': 'Euros',
                    'PPS': 'Purchasing power standard (PPS)',
                    'GDP_HAB': 'GDP per capita',
                }
            }
        },
        'educ_fiaid': {
            1: {
                'indicators': {
                    'FD01_1': 'all education levels',
                    'FD01_2': 'Primary, secondary & vocational education',
                    'FD01_3': 'University education'
                },
                'units': {
                    'PC': '% of total public expenditure'
                }
            }
        },
        'educ_uoe_fina01': {
            1: {
                'indicators': {
                        'ED02-8': 'all education levels',
                        'ED1_2': 'Primary, secondary education',
                        'FD01_3': 'Upper secondary and vocational',
                        'ED5-8': 'University'
                },
                'units': {
                    'PC': '% of total public expenditure'
                }
            }
        },
        'edat_lfse_20': {
            1: {
                'indicators':{
                    'NEMP': 'are Not employed',
                    'WANT': 'would like to work (seeking employment or not)',
                    'NWANT': 'do not want to work',
                },
                'units': {
                    'PC': 'Percentage of population between 15 & 34 years'
                }
            }
        },
        'lfsa_urgaed': {
            1: {
                'indicators': {
                    'ED0-2': 'Secondary education or lower',
                    'ED3_4': 'Upper secondary and vocational',
                    'ED5-8': 'University education'
                },
                'units': {
                    'PC': 'Percentage of the population with'
                }
            }
        }

    }












}  # end of eurostat























