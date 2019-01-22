
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
				      	End: 2014
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, ['_T', '_T'] , C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Indicator'],
				 		DisplayExtra: ''

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
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: [C.TOPIC, C.INDICATOR, '_T', 'Y0T1', C.GEO],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' children deaths under one year of age ',
					}
				},

				{
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
				    	orderOption: ['D', 'I', 'E', 'G'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' population living on less than $3.10 ',
				 		extras: ['_T', '_T']

					}
				},

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
				      	End: 2014
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'I', 'E', 'G'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Indicator'],
				 		DisplayExtra: '',
				 		extras: ['_T', '_T']

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
				      	End: 2015
				      },
				     UrlStructure:{

						orderOption:['D', 'I', 'E', 'G'],
						IndicatorName: "UNIT_MEASURE",
						DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' Population living in rural areas ',
				 		extras: ['_T', '_T']

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
				      	End: 2016
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'U', 'E', 'I'],
				    	IndicatorName: "AGE",
					    UnitName: 'UNIT_MEASURE',
					    DisplayMessageOrder:['Unit','Extra','Indicator'],
				 		DisplayExtra: ' with ages ',
				 		extras: ['_T']

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
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'U', 'E', 'I'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' population ',
				 		extras: ['_T', '_T']

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
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'I', 'E'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' GDP ',
						 extras: ['_Z', '_Z']

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
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'I', 'E'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' GDP per capita at ',
				 		extras: ['_Z', '_Z']

					}
				},
				{
					TopicName: "GDP per capita, purchasing power parity",
				    id: 'GDP_CAP_PPP',
				    rev: 1,
					Geo: {
						location: 'Unesco'
                    },

				    Time: {
				     	Type: 'A',
				     	Start: 1990,
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'I', 'E'],
				    	IndicatorName: "UNIT_MEASURE",
				    	DisplayMessageOrder:['Extra','Indicator'],
				 		DisplayExtra: ' GDP per capita in purchasing power at ',
				 		extras: ['_Z', '_Z'],

					}
				},
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
				      	End: 2015
				      },
				     UrlStructure:{
				    	orderOption: ['D', 'U', 'I', 'E'],
				    	UnitName: 'UNIT_MEASURE',
				    	IndicatorName: "SEX",
				    	DisplayMessageOrder:['Indicator', 'Unit'],
				 		DisplayExtra: ' over 15 years (over 65 included) that are working ',
				 		extras: ['Y_GE15']

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
				      	End: 2015
				      },
				     UrlStructure:{
				   		orderOption: ['D', 'U', 'I', 'E'],
				    	IndicatorName: "SEX",
				    	DisplayMessageOrder:['Indicator', 'Unit'],
				 		DisplayExtra: ' over 15 years (over 65 included) that are working or looking for employement ',
				 		extras: ['PT', 'Y_GE15']

					}
				},

  	               ]
    },
    {
   	   SectorName: "Education",
   	   id: 'EDU_NON_FINANCE-Rev1',
   	   Topics:[

					{
						TopicName: "Net enrolment rate by education level",
					    id: 'NER',
					    rev: 1,
						Geo: {
							location: 'UnescoEduRegions'
						},
					    Time: {
					     	Type: 'A',
					     	Start: 1990,
					      	End: 2015
					      },
					     UrlStructure:{
							orderOption: [C.TOPIC, C.MEASURE, C.INDICATOR, ['PT', '_T', '_T','SCH_AGE_GROUP','_T',
								'INST_T', '_Z', '_Z', '_T' , '_T', '_T', '_Z', '_Z', 'W00', 'W00']],
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Unit' ,'Indicator' ],
					 		DisplayExtra: '',

						}
					},
					{
						TopicName: "Literacy rate",
					    id: 'LR',
					    rev: 1,
					    Geo: {
							location: 'UnescoEduRegions'
						},

					    Time: {
					     	Type: 'A',
					     	Start: 1985,
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: ['D', 'U', 'E', {'I': 4}],
					        IndicatorName: "AGE",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Unit' ,'Indicator', 'Extra' ],
					 		DisplayExtra: ' that know how to read',
					 		extras: ['PT', '_Z', '_Z','_T','_Z','_Z', '_Z', '_Z',
					 			       '_T' , '_Z', '_Z', '_Z', '_Z', 'W00', 'W00' ]

						}
					},

					{
						TopicName: "% students that are women",
					    id: 'FEP',
					    rev: 1,
					    Geo: {
							location: 'UnescoEduRegions'
						},

					    Time: {
					     	Type: 'A',
					     	Start: 2000,
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: 1,
					        IndicatorPosition: 1,
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Unit' , 'Indicator',  'Extra'],
					 		DisplayExtra: ' that are women ',
					 		extras:['PT', '_T', 'F','_T','_T','INST_T', '', '',
					 			       '_T' , '_T', '_T', '', '', 'W00', 'W00' ]

						}
					},

					{
						TopicName: "Repetition rate",
					    id: 'REPP',
					    rev: 1,
					    Geo: {
							location: 'Unesco'
						},

					    Time: {
					     	Type: 'A',
					     	Start: 2000,
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: 1,
					        IndicatorPosition: 1,
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Unit' , 'Indicator',  'Extra'],
					 		DisplayExtra: ' that repeat one course or more',
					 		extras: ['PT', '' ,'_T','_T','_T','INST_T', '', '',
					 			       '_T' , 'INIT', '_T', '', '', 'W00', 'W00' ]

						}
					},

					{
						TopicName: "Duration of compulsory education",
					    id: 'TH_DUR_COMP_EDU',
					    rev: 1,
					     Geo: {
							location: 'Unesco'
						},

					    Time: {
					     	Type: 'A',
					     	Start: 2000,
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: 1,
					        IndicatorPosition: 0,
					        IndicatorName: "UNIT_MEASURE",
					        DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' required to finish compulsory education',
					 		extras: ['_T', '_T' ,'_T','_T','_T','INST_T', '', '',
					 			       '_T' , '_T', '_T', '', '', 'W00', 'W00' ]

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
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: 1,
					        IndicatorPosition: 0,
					        UnitMessurePosition: 0,
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Extra', 'Indicator', 'Unit'],
					 		DisplayExtra: ' government expenditure on ',
					 		extras: ['_T', '_T', '_T', 'GOV', '_T', '', '']

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
					      	End: 2015
					      },
					     UrlStructure:{
					        orderOption: 1,
					        IndicatorPosition: 0,
					        UnitMessurePosition: 0,
					        IndicatorName: "EDU_LEVEL",
					        UnitName: 'UNIT_MEASURE',
					        DisplayMessageOrder:['Extra', 'Indicator', 'Unit'],
					 		DisplayExtra: ' government expenditure per student on ',
					 		extras: ['_T', '_T', '_T', 'GOV', 'FFNTP', '', '']

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
				     UrlStructure:{
				        orderOption: 1,
				        IndicatorPosition: 3,
				        UnitMessurePosition: 0,
				        IndicatorName: "RD_SECTOR",
				        UnitName: 'UNIT_MEASURE',
				        DisplayMessageOrder:['Indicator', 'Extra', 'Unit'],
				 		DisplayExtra: ' expenditure on R&D ',
				 		extras: [ '', '', '', '_T', '', '_T', '_T', '_T']

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
				        orderOption: 1,
				        IndicatorPosition: 3,
				        UnitMessurePosition: 0,
				        IndicatorName: "RD_SECTOR",
				        UnitName: 'UNIT_MEASURE',
				        DisplayMessageOrder:['Unit' , 'Extra' ,'Indicator'],
				 		DisplayExtra: ' on ',
				 		extras: [ '_T', '_T', '_T', '_T', '_T', '', '', '']

					}
				},


 	               ]

    },



    {
   	   SectorName: "Cinema industry",
   	   id: 'FF-Rev1',
   	   Topics:[
			{
				TopicName: "Produced films by type of film",
			    id: 'FF',
			    rev: 1,
			     Geo: {
					location: 'Unesco'
				 },

			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 6,
			        CountryPosition: 2,
			        IndicatorName: 'FILM_TYPE',
			        UnitName: 'UNIT_MEASURE',
			        DisplayMessageOrder:['Unit' , 'Indicator', 'Extra' ],
			 		DisplayExtra: ' produced ',
			 		extras: [ '_T','NAT', '_T', '_T', '_T',
			 			         'PROD', '_T']

				}
			},
			{
				TopicName: "Produced films by type of financing",
			    id: 'FF',
			    rev: 2,
			   Geo: {
					location: 'Unesco'
				 },

			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 5,
			        CountryPosition: 2,
			        UnitName: 'UNIT_MEASURE',
			        IndicatorName: 'FINANCE_TYPE',
			        DisplayMessageOrder:['Unit' , 'Extra', 'Indicator' ],
			 		DisplayExtra: ' of films ',
			 		extras: [ '_T','NAT', '_T', '_T', '_T',
			 			         'PROD', '_T']

				}
			},
			{
				TopicName: "Number of Cinemas by size",
			    id: 'C_SITE',
			    rev: 1,
			   Geo: {
					location: 'Unesco'
				 },

			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 1,
			        CountryPosition: 2,
			        UnitName: 'UNIT_MEASURE',
			        IndicatorName: 'NB_SCREEN',
			        DisplayMessageOrder:['Unit' , 'Extra', 'Indicator' ],
			 		DisplayExtra: ' of ',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', 'INFRA', 'C_SITE_INDOOR']

				}
			},

			{
				TopicName: "Feature film",
			    id: 'FF',
			    rev: 3,
			   	Geo: {
					location: 'Unesco'
				 },

			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 2,
			        CountryPosition: 2,
			        UnitName: 'UNIT_MEASURE',
			        IndicatorName: 'ORIGIN',
			        DisplayMessageOrder:['Unit' , 'Extra', 'Indicator' ],
			 		DisplayExtra: ' of ',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', 'EXHIB', '_T']

				}
			},
			{
				TopicName: "Cinema Admissions",
			    id: 'ADM',
			    rev: 1,
			   	Geo: {
					location: 'Unesco'
				 },
			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 2,
			        CountryPosition: 2,
			        UnitName: 'UNIT_MEASURE',
			        IndicatorName: 'ORIGIN',
			        DisplayMessageOrder:['Unit' , 'Extra', 'Indicator' ],
			 		DisplayExtra: ' of admissions for ',
			 		extras: [ '_T', '_T', '_T',
							  '_T', '_T', 'EXHIB', '_T']

				}
			},
			{
				TopicName: "Gross box office",
			    id: 'GBO',
			    rev: 1,
			   	Geo: {
					location: 'Unesco'
				 },
			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,
			        UnitMessurePosition: 0,
			        IndicatorPosition: 2,
			        CountryPosition: 2,
			        UnitName: 'UNIT_MEASURE',
			        IndicatorName: 'ORIGIN',
			        DisplayMessageOrder:['Indicator', 'Extra', 'Unit'],
			 		DisplayExtra: ' Gross box office in ',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', 'EXHIB', '_T']

				}
			},
			{
				TopicName: "Cinema spending per person",
			    id: 'GBO',
			    rev: 2,
			    Geo: {
					location: 'Unesco'
				 },

			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,

			        IndicatorPosition: 0,
			        CountryPosition: 2,
			        IndicatorName: 'UNIT_MEASURE',
			        DisplayMessageOrder:[ 'Extra', 'Indicator'],
			 		DisplayExtra: ' Cinema spending (local currency) ',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', '_T','EXHIB', '_T']

				}
			},

			{
				TopicName: "Attendance frequency",
			    id: 'ATTEND_FREQ',
			    rev: 1,
			   	Geo: {
					location: 'Unesco'
				 },
			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,

			        IndicatorPosition: 0,
			        CountryPosition: 2,
			        DisplayMessageOrder:[ 'Extra'],
			 		DisplayExtra: 'Attendance frequency per year',
			        IndicatorName: 'UNIT_MEASURE',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', '_T', 'EXHIB', '_T']

				}
			},
			{
				TopicName: "Average ticket price",
			    id: 'AVG_TICKET_PRICE',
			    rev: 1,
			    Geo: {
					location: 'Unesco'
				 },
			    Time: {
			     	Type: 'A',
			     	Start: 2005,
			      	End: 2015
			      },
			     UrlStructure:{
			        orderOption: 1,
			        DataBasePosition:0,

			        IndicatorPosition: 0,
			        CountryPosition: 2,
			        DisplayMessageOrder:[ 'Extra', 'Indicator'],
			 		DisplayExtra: 'Average ticket price in',
			        IndicatorName: 'UNIT_MEASURE',
			 		extras: [ '_T', '_T', '_T',
			 			       '_T', '_T', '_T', 'EXHIB', '_T']

				}
			},
   	               ]
    }

]

export default UnescoDatabase