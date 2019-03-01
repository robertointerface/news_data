
const OECDDatabases = [

   {
	    SectorName: "Economy",
	    id: 'EC',
	    Topics:[
	               {
	            	   TopicName: "GDP growth",
	                   id: 'PDB_GR',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   ExtraMessage : 'Constant prices',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U'],
							TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Unit'],
					 		DisplayExtra: '',

	            			}
	               },
	               {
	            	   TopicName: "Labour productivity",
	                   id: 'PDB_LV',
	                   rev: 1,
					   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U'],
							TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'at', 'Unit'],
					 		DisplayExtra: ' measured ',

	            			}
	               },
	               {
	            	   TopicName: "Income, expenditure & debt of households",
	                   id: 'HH_DASH',
	                   rev: 1,
					   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2007,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "INDICATOR",
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',


	            			}
	               },
/*	               {
	            	   TopicName: "Consumer prices growth",
	                   id: 'MEI_PRICES',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Unit' ],
					 		DisplayExtra: '',

	            			}
	               },*/

	               {
	            	   TopicName: "Gross value Added by sector",
	                   id: 'PDBI_I4',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'U', 'I'],
	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                 		DisplayMessageOrder:['Unit' , 'for', 'Indicator'],
	                		extras: {
		        				"SUBJECT" : 'I4_ANA_GVA'
	            			}
	            	   }
	               },
	               {
	            	   TopicName: "Employment growth by sectors",
	                   id: 'PDBI_I4',
	                   rev: 2,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'U', 'I'],
							TimeType: 'A',
	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'at', 'Indicator'],
					 		DisplayExtra: ' at ',
	                		extras: {
		        				"SUBJECT" : 'I4_ANA_EMPTO',
		        				}

	            			}
	               },
	               {
	            	   TopicName: "Growth in hours worked by sectors",
	                   id: 'PDBI_I4',
	                   rev: 3,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'U', 'I'],
							TimeType: 'A',
	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'of hours worked at', 'Indicator'],
					 		DisplayExtra: ' of hours worked at ',
	                		extras: {
		        				"SUBJECT" : 'I4_ANA_HRSTO',
		        				}

	            			}
	               },
	               {
	            	   TopicName: "Salaries growth by sector",
	                   id: 'PDBI_I4',
	                   rev: 4,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'U', 'I'],
							TimeType: 'A',
	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'at', 'Indicator'],
	                		extras: {
		        			"SUBJECT" : 'I4_ANA_LCEMP',
		        				}

	            			}
	               },


	               ],

   },//end of economy
    {

	    SectorName: "Key economic indicators",
	    id: 'ICE',
	    Topics:[

	               {
	            	   TopicName: "industrial and manufacturing growth",
	                   id: 'KEI',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                 		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' in ',
	            			}
	               },
	               {
	            	   TopicName: "exports and import growth (Goods)",
	                   id: 'KEI',
	                   rev: 2,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	TimeType: 'A',
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' at ',
	            			}
	               },
	               {
	            	   TopicName: "Consumer & production prices",
	                   id: 'KEI',
	                   rev: 3,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                  		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' for ',
	            			}
	               },
	               {
	            	   TopicName: "GDP growth and components",
	                   id: 'KEI',
	                   rev: 4,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' of ',
	            			}
	               },
	               {
	            	   TopicName: "Long-Term interest rates",
	                   id: 'KEI',
	                   rev: 5,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   ExtraMessage : 'long-term interest rates (central government bond yields on the secondary market, with around 10 years residual maturity).',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	            			}
	               },
	               {
	            	   TopicName: "Retail trade and car registration",
	                   id: 'KEI',
	                   rev: 6,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2018
	                     },
	                    UrlStructure:{
	                    	orderOption: ['I', 'G', 'E', 'U', 'TT'],
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Unit' ],
					 		DisplayExtra: '',
	            			}
	               },

	               ],

   },
   {
	    SectorName: "Employment & unemployment",
	    id: 'EMP',
	    Topics:[
	               {
	            	   TopicName: "Employment statistics",
	                   id: 'LFS_SEXAGE_I_R',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
                       },
	                   ExtraMessage : '% of the population between 15 & 65 years old',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1988,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	IndicatorName: "SERIES",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator' ],
					 		DisplayExtra: '',
	                    	extras: {
		        				"SEX" : 'MW',
		        				'AGE' : '1564'
		        				}
	                		//UnitName: 'MEASURE',
	            			},

	               },
	               {
	            	   TopicName: "Employment by job duration",
	                   id: 'TENURE_DIS',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
					   	RemoveGeo: ['ISR', 'NZL'],
                       },

	                   ExtraMessage : 'Result x 1000',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2005,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	IndicatorName: "TENURE",
	                    	TimeType: 'A',
	                      	DisplayMessageOrder:['Extra', 'Indicator'],
					 		DisplayExtra: 'Number of employees that hold in the job for ',
	                    	extras: {
		        				"SEX" : 'MW',
		        				'AGE' : '1564',
		        				'EMPSTAT' : 'TE',
		        				}

	            			},

	               },
	               {
	            	   TopicName: "Real minimum wages",
	                   id: 'RMW',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
					   RemoveGeo: ['FIN','ITA','DNK','AUT','NOR','SWE','CHE','ISL'],
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'U', 'I'],
	                    	IndicatorName: "PERIOD",
	                    	UnitName: 'SERIES',
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'salary in', 'Unit' ],
	            			},

	               },
	               {
	            	   TopicName: "Minimum wages compared to average wages of full-time workers",
	                   id: 'MIN2AVE',
	                   rev: 1,
	                   Geo: {
	            	   	location: 'OECD',
					    RemoveGeo: ['FIN','ITA','DNK','AUT','NOR','SWE','CHE','ISL'],
                       },
	                   ExtraMessage : 'Minimum wages / (Average or Median wages)',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption:['G', 'E', 'U', 'I'],
	                    	IndicatorName: "SERIES",
							TimeType: 'A',
	                    	DisplayMessageOrder:['Minimum wages/' , 'Indicator'],

	                    	TimeType: 'A'

	            			},
	               },
	               {
	            	   TopicName: "Average weekly hours worked",
	                   id: 'AVE_HRS',
	                   rev: 1,
	                   Geo: {
                           location: 'OECD',
                           RemoveGeo: ['JPN'],
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	IndicatorName: "JOBTYPE",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Extra' , 'Indicator'],
					 		DisplayExtra: ' Weekly hours worked for ',
	                    	extras: {
		        				"SEX" : 'MW',
		        				'AGE' : '900000',
		        				'EMPSTAT' : 'TE',
		        				}

	            			},
	               },
	               {
	            	   TopicName: "Average annual hours worked per worker",
	                   id: 'ANHRS',
	                   rev: 1,
	                   Geo: {
                           location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	IndicatorName: "EMPSTAT",
	                    	TimeType: 'A',
	                       	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	            			},
	               },
	               {
	            	   TopicName: "Involuntary part time workers",
	                   id: 'INVPT_D',
	                   rev: 1,
	                    Geo: {
                           location: 'OECD',
							RemoveGeo: ['KOR','MEX'],
                       },

	                   ExtraMessage : 'Result x 1000',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'E', 'I', 'U', 'TT'],
	                    	IndicatorName: "EMPSTAT",
	                    	TimeType: 'A',
	                      	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' that are working part time and would like to work full time ',
	                    	extras: {
		        				"SEX" : 'MW',
		        				'AGE' : '900000',

		        				}

	            			},
	               },

	               ],

   },//end of EMP

   {
	    SectorName: "Government Revenue",
	    id: 'GV',
	    Topics:[
	               {
	            	   TopicName: "Revenue statistics",
	                   id: 'REV',
	                   rev: 1,
	                    Geo: {
                           location: 'OECD',
                       },

	                   Time: {
	                    	Type: 'A',
	                    	Start: 1965,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['E', 'I', 'U', 'G'],
							TimeType: 'A',
	                    	IndicatorName: "TAX",
	                    	UnitName: 'VAR',
	                     	DisplayMessageOrder:['Indicator', 'Unit'],
					 		DisplayExtra: '',
	                    	extras: {
		        				"GOV" : 'NES',
		        				}

	            			},
	               },

	               ]

   },


   {
	    SectorName: "Education & social data",
	    id: 'SC',
	    Topics:[
	               {
	            	   TopicName: "Education data",
	                   id: 'BLI2015',
	                   rev: 1,
	                    Geo: {
                           location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    ExtraMessage : 'Data is from 2015 except educational atteintment which is from 2016',
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                     	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',
		        				}
	            			},
	               },
	               {
	            	   TopicName: "work-life balance",
	                   id: 'BLI2015',
	                   rev: 2,
	                   Geo: {
                           location: 'OECD',
                       },
	                   ExtraMessage : 'Data for Time devoted to leisure and personal care ranges from 2000 to 2016',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',
		        				}
	            			},
	               },

	               {
	            	   TopicName: "Household Income",
	                   id: 'BLI2015',
	                   rev: 3,
	                   Geo: {
                           location: 'OECD',
                       },
	                   ExtraMessage : 'US dollars at current Purchasing Power Parity per capita',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Personal earnings",
	                   id: 'BLI2015',
	                   rev: 4,
	                    Geo: {
                           location: 'OECD',
                       },
	                   ExtraMessage : 'US dollars at current Purchasing Power Parity per capita',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2016,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Life expectancy",
	                   id: 'BLI2015',
	                   rev: 5,
	                   Geo: {
                           location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',
		        				}

	            			},
	               },
	               {
	            	   TopicName: "Population feeling that they are in good or better health",
	                   id: 'BLI2015',
	                   rev: 6,
	                    Geo: {
                           location: 'OECD',
                       },
	                   ExtraMessage : '',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra' ],
					 		DisplayExtra: ' ,percentage of the population that think they are in good or better health',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',
		        				}

	            			},
	               },

	               {
	            	   TopicName: "Life satisfaction",
	                   id: 'BLI2015',
	                   rev: 7,
	                    Geo: {
                           location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,scale from 0 to 10, 0 = No satisfaction, 10 = Fully satisfied.',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}
	            			},
	               },
	               {
	            	   TopicName: "Voter turnout",
	                   id: 'BLI2015',
	                   rev: 8,
	                    Geo: {
                           location: 'OECD',
                       },

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Voter turnout is taken from the last election',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Homicide rate",
	                   id: 'BLI2015',
	                   rev: 9,
	                    Geo: {
                           location: 'OECD',
                       },

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2014,
	                     	End: 2014
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Homicides per 100,000 population',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}

	            			},
	               },
	               {
	            	   TopicName: "safety",
	                   id: 'BLI2015',
	                   rev: 10,
	                   Geo: {
                           location: 'OECD',
                       },
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: ['G', 'I', 'E', 'U'],
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Percentage of the population feeling safe while walking during the night',
	                    	extras: {
		        				'MEASURE' : 'L',
		        				'INEQUALITY' : 'TOT',

		        				}

	            			},
	               },

	               ]
   },
   {
	    SectorName: "Reseach & Development",
	    id: 'RD',
	    Topics:[
						{
							TopicName: "Expenditure on R&D",
						    id: 'MSTI_PUB',
						    rev: 1,
						     Geo: {
                           		location: 'OECD',
                       		},
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: ['I', 'G', 'E', 'U'],
								 TimeType: 'A',
						     	IndicatorName: "MSTI_VAR",
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: ' ',
									},
						},

						{
							TopicName: "Source of fund of R&D",
						    id: 'MSTI_PUB',
						    rev: 2,
						     Geo: {
                           		location: 'OECD',
                       		},
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: ['I', 'G', 'E', 'U'],
								 TimeType: 'A',
						     	IndicatorName: "MSTI_VAR",
						    	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',
									},
						},

						{
							TopicName: "Perfomance of R&D",
						    id: 'MSTI_PUB',
						    rev: 3,
						     Geo: {
                           		location: 'OECD',
                       		},
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2017
						      },
						     UrlStructure:{
						     	orderOption: ['I', 'G', 'E', 'U'],
						     	IndicatorName: "MSTI_VAR",
								 TimeType: 'A',
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',
									},
						},
						{
							TopicName: "Patent aplications",
						    id: 'MSTI_PUB',
						    rev: 4,
						     Geo: {
                           		location: 'OECD',
							},
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2017
						      },
						     UrlStructure:{
						     	orderOption: ['I', 'G', 'E', 'U'],
								 TimeType: 'A',
						     	IndicatorName: "MSTI_VAR",
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',

									},
						},


					]}



      ]

export default OECDDatabases


