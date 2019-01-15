# coding=utf-8
"""
Options required for the user to make data requests.
Data is in dict format (JSON) to take advantage of fast data iteration due to Hast tables

"""
Eurostat = {
    'EC': {
        'nama_10_a10': {
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
        },
        'nama_10_a10_e': {
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
        },
        'lc_lci_r2_a': {
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
        },
        'namq_10_exi': {
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
        },
        'nama_10_an6': {
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
        },
        'nama_10_co3_p3': {
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
        },
        'irt_lt_mcby_q': {
            'indicators': {
                'MCBY': 'bond yields'
            }
        },
        'ext_lt_intertrd': {
            'indicators': {
                'MIO_IMP_VAL': 'Imports in million of Euros',
                'MIO_EXP_VAL': 'Exports in million of Euros',
                'MIO_BAL_VAL': 'Trade balance (Exports - imports) in million Euros'
            },
            'units': {
                'TOTAL': 'Total - all products'
            }
        },
        'sbs_sc_sca_r2': {
            'indicators': {
                'N_S95_X_K': 'Total business economy',
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


}  # end of eurostat























