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

    },


}  # end of eurostat























