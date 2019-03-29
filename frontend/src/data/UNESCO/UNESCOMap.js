
import {SearchConstants as C} from 'constants/constants'
const UnescoDatabase = [

    {
 	   SectorName: "Demographic",
 	    id: 'DEM_ECO-Rev1',
 	    Topics:[

				{
					TopicName: "Fertility rate",
				    id: 'FR',
				    rev: 1,

				    Geo: {
						location: 'Unesco'
                    },
				    Time: {
				     	Type: 'A',
				     	Start: 1975,
				      	End: 2016
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_T', '_T'] , C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Indicator'],

					}
				},
				{
					TopicName: "Infant mortality rate",
				    id: 'IMR',
				    rev: 1,
				    Geo: {
						location: 'Unesco'
                    },
				    ExtraMessage : '',
				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, '_T', 'Y0T1', C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['children deaths under one year of age','Indicator'],
					}
				},

	/*			{
					TopicName: "Poverty headcount ratio at $3.10 a day",
				    id: 'PHR_USD310',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },
				    ExtraMessage : '',
				    Time: {
				     	Type: 'A',
				     	Start: 1990,
				      	End: 2014
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC,  C.INDICATOR, ['_T', '_T'] ,C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' population living on less than $3.10 ',
				 		extras: ['_T', '_T']

					}
				},*/

				{
					TopicName: "Life expectancy",
				    id: 'LIFE_EXP',
				    rev: 1,
				    Geo: {
						location: 'Unesco'
                    },
				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2016
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_T', '_T'], C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Indicator'],


					}
				},
				{
					TopicName: "Rural population",
				    id: 'POP_RUR',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2017
				      },
				     UrlStructure:{

						orderOption:[C.TOPIC, C.INDICATOR, ['_T', '_T'], C.GEO],
						IndicatorName: "UNIT_MEASURE",
						DisplayMessageOrder:['Population living in rural area','Indicator'],

					}
				},

				{
					TopicName: "Population",
				    id: 'POP',
				    rev: 1,
				    Geo: {
						location: 'Unesco'
                    },
				    ExtraMessage : 'Result X 1000',
				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.MEASURE, '_T', C.INDICATOR, C.GEO],
				    	IndicatorName: "AGE",
					    UnitName: 'UNIT_MEASURE',
					    DisplayMessageOrder:['Unit','with ages','Indicator'],

					}
				},
				{
					TopicName: "Population growth",
				    id: 'POP_GROWTH',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },
				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_T', '_T'], C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['population', 'Indicator'],
					}
				},

 	     ]
    },
    {
  	   SectorName: "Economy",
  	   id: 'DEM_ECO-Rev2',
  	   Topics:[
  	         	{
					TopicName: "GDP Growth",
				    id: 'GDP_GROWTH',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1980,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_Z', '_Z'], C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['GDP','Indicator'],

					}
				},

  	         	{
					TopicName: "GDP per capita",
				    id: 'GDP_CAP',
				    rev: 1,
				    Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1990,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_Z', '_Z'], C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:[' GDP per capita at','Indicator'],
					}
				},
			/*	{
					TopicName: "GDP per capita, purchasing power parity",
				    id: 'GDP_CAP_PPP',
				    rev: 1,
					Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1990,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC,  C.INDICATOR, ['_Z', '_Z']],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['GDP per capita in purchasing power at', 'Indicator'],

					}
				},*/
				{
					TopicName: "Employment rate",
				    id: 'ILO_ETPR',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1995,
				      	End: 2017
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.MEASURE, C.INDICATOR, 'Y_GE15', C.GEO],
				    	UnitName: 'UNIT_MEASURE',
				    	IndicatorName: "SEX",
				    	DisplayMessageOrder:['Indicator', 'Unit', 'over 15 years (over 65 included) that are working'],
					}
				},


				{
					TopicName: "Labour force participation rate",
				    id: 'ILO_LFPR',
				    rev: 1,
				     Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1995,
				      	End: 2017
				      },
				     UrlStructure:{
				   		orderOption: [C.TOPIC, C.MEASURE, C.INDICATOR, ['Y_GE15'], C.GEO],
				    	IndicatorName: "SEX",
				    	DisplayMessageOrder:['Unit', 'over 15 years (over 65 included) that are working or looking for employement'],
					}
				},

	   ]
    },
    {
    	   SectorName: "Education expenditure",
    	   id: 'EDU_FINANCE-Rev1',
    	   Topics:[
					{
						TopicName: "Government expenditure on education",
					    id: 'EDU_EXP',
					    rev: 1,
					   Geo: {
							location: 'Unesco'
						},

					    Time: {
					     	Type: 'A',
					     	Start: 2000,
					      	End: 2017
					      },
					     UrlStructure:{
							orderOption: [C.TOPIC, C.MEASURE, C.INDICATOR, ['_T', '_T', '_T', 'GOV', '_T', '_Z', '_Z'], C.GEO],
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['government expenditure on', 'Indicator', 'Unit'],
						}
					},

					{
						TopicName: "Government expenditure per student",
					    id: 'XUNIT',
					    rev: 1,
					     Geo: {
							location: 'Unesco'
						},
					    Time: {
					     	Type: 'A',
					     	Start: 1998,
					      	End: 2017
					      },
					     UrlStructure:{
					        orderOption: [C.TOPIC, C.MEASURE, C.INDICATOR, ['_T', '_T', '_T', 'GOV', 'FFNTP', '_Z', '_Z'], C.GEO],
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['government expenditure per student on', 'Indicator', 'Unit'],
						}
					},

    	              ]

    },

    {
 	   SectorName: "R&D",
 	   id: 'RD-Rev1',
 	   Topics:[
				{
					TopicName: "Gross domestic expenditure on R&D ",
				    id: 'GERD',
				    rev: 1,
				    Geo: {
							location: 'Unesco'
						},

				    Time: {
				     	Type: 'A',
				     	Start: 1998,
				      	End: 2015
				      },
				     UrlStructure: {
				        orderOption: [C.TOPIC, C.MEASURE, ['_Z', '_Z', '_Z'], C.INDICATOR, ['_T', '_Z', '_T', '_T', '_T'] , C.GEO],
				        IndicatorName: "RD_SECTOR",
				        UnitName: 'UNIT_MEASURE',
				        DisplayMessageOrder:['Indicator', 'expenditure on R&D', 'Unit'],
					}
				},
				{
					TopicName: "Total R&D personnel",
				    id: 'RD_PS_HC',
				    rev: 1,
				     Geo: {
							location: 'Unesco'
					},
				    Time: {
				     	Type: 'A',
				     	Start: 1998,
				      	End: 2015
				      },
				     UrlStructure:{
				        orderOption: [C.TOPIC, C.MEASURE, ['_T', '_T', '_T'], C.INDICATOR, ['_T', '_T', '_Z', '_Z', '_Z'] , C.GEO],
				        IndicatorName: "RD_SECTOR",
				        UnitName: 'UNIT_MEASURE',
				        DisplayMessageOrder:['Unit' , 'on' ,'Indicator'],

					}
				},

 	               ]

    },
]

export default UnescoDatabase