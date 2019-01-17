
const OECDDatabases = [

   {
	    SectorName: "Economy",
	    id: 'EC',
	    Topics:[

	               {
	            	   TopicName: "GDP growth",
	                   id: 'PDB_GR',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: [],

	                   ExtraMessage : 'Constant prices',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Unit'],
					 		DisplayExtra: '',

	            			}
	               },
	               {
	            	   TopicName: "Labour productivity",
	                   id: 'PDB_LV',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Extra', 'Unit'],
					 		DisplayExtra: ' measured ',

	            			}
	               },
	               {
	            	   TopicName: "Income, expenditure & debt of households",
	                   id: 'HH_DASH',
	                   rev: '1',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2007,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	TimeType: 'A',
	                    	IndicatorName: "INDICATOR",
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',


	            			}
	               },
	               {
	            	   TopicName: "Consumer prices growth",
	                   id: 'MEI_PRICES',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
	                    	TimeType: 'A',
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Indicator', 'Unit' ],
					 		DisplayExtra: '',

	            			}
	               },

	               {
	            	   TopicName: "Gross value Added by sector",
	                   id: 'PDBI_I4',
	                   rev: '1',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,

	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                 		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' for ',
	                		extras: {
		        				extra1: {"SUBJECT" : 'I4_ANA_GVA'},
		        				}

	            			}
	               },
	               {
	            	   TopicName: "Employment growth by sectors",
	                   id: 'PDBI_I4',
	                   rev: '2',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,

	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' at ',
	                		extras: {
		        				extra1: {"SUBJECT" : 'I4_ANA_EMPTO'},
		        				}

	            			}
	               },
	               {
	            	   TopicName: "Growth in hours worked by sectors",
	                   id: 'PDBI_I4',
	                   rev: '3',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,

	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' of hours worked at ',
	                		extras: {
		        				extra1: {"SUBJECT" : 'I4_ANA_HRSTO'},
		        				}

	            			}
	               },
	               {
	            	   TopicName: "Salaries growth by sector",
	                   id: 'PDBI_I4',
	                   rev: '4',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,

	                    	IndicatorName: "ACTIVITY",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' at ',
	                		extras: {
		        				extra1: {"SUBJECT" : 'I4_ANA_LCEMP'},
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
	                   rev: '1',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
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
	                   rev: '2',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	TimeType: 'A',
	                    	orderOption: 1,
	                    	IndicatorName: "SUBJECT",
	                		UnitName: 'MEASURE',
	                		DisplayMessageOrder:['Unit' , 'Extra', 'Indicator'],
					 		DisplayExtra: ' at ',
	            			}
	               },
	               {
	            	   TopicName: "Consumer & production prices",
	                   id: 'KEI',
	                   rev: '3',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
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
	                   rev: '4',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1985,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
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
	                   rev: '5',
	                   Geo: 'OCDE',
	                   ExtraMessage : 'long-term interest rates (central government bond yields on the secondary market, with around 10 years residual maturity).',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
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
	                   rev: '6',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1995,
	                     	End: 2017
	                     },
	                    UrlStructure:{
	                    	orderOption: 1,
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
	                   rev: '1',
	                   Geo: 'OCDE',
	                   ExtraMessage : '% of the population between 15 & 65 years old',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1988,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "SERIES",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator' ],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1: {"SEX" : 'MW'},
		        				extra2:{'AGE' : '1564'}
		        				}
	                		//UnitName: 'MEASURE',
	            			},

	               },
	               {
	            	   TopicName: "Employment by job duration",
	                   id: 'TENURE_DIS',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: ['ISR', 'NZL'],
	                   ExtraMessage : 'Result x 1000',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2005,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "TENURE",
	                    	TimeType: 'A',
	                      	DisplayMessageOrder:['Extra', 'Indicator'],
					 		DisplayExtra: 'Number of employees that hold in the job for ',
	                    	extras: {
		        				extra1: {"SEX" : 'MW'},
		        				extra2:{'AGE' : '1564'},
		        				extra3:{'EMPSTAT' : 'TE'},
		        				}

	            			},

	               },
	               {
	            	   TopicName: "Real minimum wages",
	                   id: 'RMW',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: ['FIN','ITA','DNK','AUT','NOR','SWE','CHE','ISL'],
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,
	                    	IndicatorName: "PERIOD",
	                    	UnitName: 'SERIES',
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra', 'Unit' ],
					 		DisplayExtra: ' salary in ',


	            			},

	               },
	               {
	            	   TopicName: "Minimum wages compared to average wages of full-time workers",
	                   id: 'MIN2AVE',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: ['FIN','ITA','DNK','AUT','NOR','SWE','CHE','ISL'],
	                   ExtraMessage : 'Minimum wages / (Average or Median wages)',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 1990,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 3,
	                    	IndicatorName: "SERIES",
	                    	DisplayMessageOrder:['Extra' , 'Indicator'],
					 		DisplayExtra: ' Minimum wages/ ',
	                    	TimeType: 'A'

	            			},
	               },
	               {
	            	   TopicName: "Average weekly hours worked",
	                   id: 'AVE_HRS',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: ['JPN'],
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,

	                    	IndicatorName: "JOBTYPE",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Extra' , 'Indicator'],
					 		DisplayExtra: ' Weekly hours worked for ',
	                    	extras: {
		        				extra1: {"SEX" : 'MW'},
		        				extra2:{'AGE' : '900000'},
		        				extra3:{'EMPSTAT' : 'TE'},
		        				}

	            			},
	               },
	               {
	            	   TopicName: "Average annual hours worked per worker",
	                   id: 'ANHRS',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "EMPSTAT",
	                    	TimeType: 'A',
	                       	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	            			},
	               },
	               {
	            	   TopicName: "Involuntary part time workers",
	                   id: 'INVPT_D',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   RemoveGeo: ['KOR','MEX'],
	                   ExtraMessage : 'Result x 1000',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2000,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 2,
	                    	IndicatorName: "EMPSTAT",
	                    	TimeType: 'A',
	                      	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' that are working part time and would like to work full time ',
	                    	extras: {
		        				extra1: {"SEX" : 'MW'},
		        				extra2:{'AGE' : '900000'},

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
	                   rev: '1',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 1965,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 6,
	                    	IndicatorName: "TAX",
	                    	UnitName: 'VAR',
	                     	DisplayMessageOrder:['Indicator', 'Unit'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1: {"GOV" : 'NES'},
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
	                   id: 'BLI',
	                   rev: '1',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    ExtraMessage : 'Data is from 2015 except educational atteintment which is from 2016',
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                     	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },
	               {
	            	   TopicName: "work-life balance",
	                   id: 'BLI',
	                   rev: '2',
	                   Geo: 'OCDE',
	                   ExtraMessage : 'Data for Time devoted to leisure and personal care ranges from 2000 to 2016',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },

	               {
	            	   TopicName: "Household Income",
	                   id: 'BLI',
	                   rev: '3',
	                   Geo: 'OCDE',
	                   ExtraMessage : 'US dollars at current Purchasing Power Parity per capita',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Personal earnings",
	                   id: 'BLI',
	                   rev: '4',
	                   Geo: 'OCDE',
	                   ExtraMessage : 'US dollars at current Purchasing Power Parity per capita',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2016,
	                     	End: 2016
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Life expectancy",
	                   id: 'BLI',
	                   rev: '5',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator'],
					 		DisplayExtra: '',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},
		        				}

	            			},
	               },
	               {
	            	   TopicName: "Population feeling that they are in good or better health",
	                   id: 'BLI',
	                   rev: '6',
	                   Geo: 'OCDE',
	                   ExtraMessage : '',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra' ],
					 		DisplayExtra: ' ,percentage of the population that think they are in good or better health',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},
		        				}

	            			},
	               },

	               {
	            	   TopicName: "Life satisfaction",
	                   id: 'BLI',
	                   rev: '7',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,scale from 0 to 10, 0 = No satisfaction, 10 = Fully satisfied.',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}
	            			},
	               },
	               {
	            	   TopicName: "Voter turnout",
	                   id: 'BLI',
	                   rev: '8',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Voter turnout is taken from the last election',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },
	               {
	            	   TopicName: "Homicide rate",
	                   id: 'BLI',
	                   rev: '9',
	                   Geo: 'OCDE',

	                   Time: {
	                    	Type: 'A',
	                    	Start: 2014,
	                     	End: 2014
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Homicides per 100,000 population',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

		        				}

	            			},
	               },
	               {
	            	   TopicName: "safety",
	                   id: 'BLI',
	                   rev: '10',
	                   Geo: 'OCDE',
	                   Time: {
	                    	Type: 'A',
	                    	Start: 2015,
	                     	End: 2015
	                     },
	                    UrlStructure:{
	                    	orderOption: 5,
	                    	IndicatorName: "INDICATOR",
	                    	TimeType: 'A',
	                    	DisplayMessageOrder:['Indicator', 'Extra'],
					 		DisplayExtra: ' ,Percentage of the population feeling safe while walking during the night',
	                    	extras: {
		        				extra1:{'MEASURE' : 'L'},
		        				extra2:{'INEQUALITY' : 'TOT'},

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
						    rev: '1',
						    Geo: 'OCDE',
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: 1,
						     	IndicatorName: "MSTI_VAR",
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: ' ',
									},
						},

						{
							TopicName: "Source of fund of R&D",
						    id: 'MSTI_PUB',
						    rev: '2',
						    Geo: 'OCDE',
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: 1,
						     	IndicatorName: "MSTI_VAR",
						    	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',
									},
						},

						{
							TopicName: "Perfomance of R&D",
						    id: 'MSTI_PUB',
						    rev: '3',
						    Geo: 'OCDE',
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: 1,
						     	IndicatorName: "MSTI_VAR",
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',
									},
						},
						{
							TopicName: "Patent aplications",
						    id: 'MSTI_PUB',
						    rev: '4',
						    Geo: 'OCDE',
						    Time: {
						     	Type: 'A',
						     	Start: 1995,
						      	End: 2016
						      },
						     UrlStructure:{
						     	orderOption: 1,
						     	IndicatorName: "MSTI_VAR",
						     	DisplayMessageOrder:['Indicator'],
						 		DisplayExtra: '',

									},
						},


					]}



      ]

export default OECDDatabases


