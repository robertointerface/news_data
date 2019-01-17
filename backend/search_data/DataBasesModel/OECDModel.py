
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
                'unit': {
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
        }

    }
}