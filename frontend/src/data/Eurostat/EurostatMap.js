

var EurostatDatabases = [
	{
    SectorName: "Economy",
    id: 'EC',
    Topics:[{
    	TopicName: "Gross value added by sector (% del GDP)",
		id: 'nama_10_a10',
		rev: 1,
		Geo: {
			location: 'EU',
	    },
		Time: {
			Type: 'A',
			Start: 1995,
			End: 2017
		},
		UrlStructure:{
			IndicatorName: "nace_r2",
			UnitName: 'unit',
			DisplayMessageOrder:['Unit', ' for ', 'Indicator'],
			extras: {
				na_item : 'B1G'
			},
		}
	},

       {
    	   TopicName: "Exports & Imports of goods",
           id: 'ext_lt_intertrd',
           rev: 1,
           Geo: {
			location: 'EU',
		   },
           Time: {
            	Type: 'A',
            	Start: 2002,
             	End: 2016
             },
            UrlStructure:{
            	IndicatorName: "indic_et",
            	UnitName: 'sitc06',
            	DisplayMessageOrder:['Indicator', 'Extra', 'Unit'],
		 		DisplayExtra: ' for ',
            	extras: {
    				extra1: {"partner" : 'WORLD'},

    				},
    			}
       },

       {
    	   TopicName: "Number of enterprises by sector",
           id: 'sbs_sc_sca_r2',
           rev: 1,
           Geo: {
			location: 'EU',
		   },
           Time: {
            	Type: 'A',
            	Start: 2010,
             	End: 2015
             },
            UrlStructure:{
            	IndicatorName: "nace_r2",
            	UnitName: 'size_emp',
            	DisplayMessageOrder:['Indicator', 'Extra', 'Unit'],
		 		DisplayExtra: ' companies - ',
            	extras: {
    				extra1: {"indic_sb" : 'V11110'},
    				},
    			}
       },

       {
    	   TopicName: "Employment by major industry sectors",
           id: 'nama_10_a10_e',
           rev: 1,
           Geo: {
			location: 'EU',
	    	},

           Time: {
            	Type: 'A',
            	Start: 1995,
             	End: 2017
             },
            UrlStructure:{
            	IndicatorName: "nace_r2",
        		UnitName: 'unit',
        		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
		 		DisplayExtra: ' dedicated to ',
    			extras: {
    				extra1: {"na_item" : 'EMP_DC'},

    				},

    			}
       },
       {
    	   TopicName: "Wages & salaries",
           id: 'lc_lci_r2_a',
           rev: 1,
           Geo: {
			location: 'EU',
	    	},

           Time: {
            	Type: 'A',
            	Start: 2003,
             	End: 2016
             },
            UrlStructure:{
            	IndicatorName: "nace_r2",
        		UnitName: 'unit',
        		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
		 		DisplayExtra: ' for ',
    			extras: {
    				extra1: {"lcstruct" : 'D11'},
    				},
    			}
       },
       {
    	   TopicName: "Exports & imports by EU Member States to UE or Non-EU countries",
           id: 'namq_10_exi',
           rev: 1,
           Geo: 'EU',
           Time: {
            	Type: 'Q',
            	Start: 2001,
             	End: 2017,
             	EndQuarter: 3
             },
            UrlStructure:{
            	IndicatorName: "na_item",
        		UnitName: 'unit',
        		DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
		 		DisplayExtra: ' measured in ',
    			extras: {
    				extra1: {"s_adj" : 'NSA'},
    				},
    			}
       },
       {
    	   TopicName: "Gross fixed capital formation by asset type",
           id: 'nama_10_an6',
           rev: 1,
           Geo: 'EU',
           Time: {
            	Type: 'A',
            	Start: 1995,
             	End: 2017
             },
            UrlStructure:{
            	IndicatorName: "asset10",
        		UnitName: 'unit',
        		DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
		 		DisplayExtra: ' as ',
    			}
       },
       {
    	   TopicName: "Interest rates (bond yields)",
           id: 'irt_lt_mcby_q',
           rev: 1,
           Geo: 'EU',
           ExtraMessage : 'long-term interest rates (central government bond yields on the secondary market, with around 10 years residual maturity).',
           Time: {
            	Type: 'Q',
            	Start: 1980,
             	End: 2017,
             	EndQuarter: 4,
             },
            UrlStructure:{
            	IndicatorName: "intrt",
            	DisplayMessageOrder:[ 'Indicator' ],
		 		DisplayExtra: '',
    			}
       },
       {
    	   TopicName: "Consumption expenditure of households",
           id: 'nama_10_co3_p3',
           rev: 1,
           Geo: 'EU',
           Time: {
            	Type: 'A',
            	Start: 1995,
             	End: 2016
             },
            UrlStructure:{
            	IndicatorName: "coicop",
            	UnitName: 'unit',
            	DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
		 		DisplayExtra: ' as ',
    			}
       },


        ]},//end of economia eurostat

{
	  SectorName: "Principal economic indicators",
	  id: "PIE",
        	  Topics:[
        	    {
        	    	  TopicName: "Sentiment indicators",
        	          id: 'ei_bssi_m_r2',
        	          rev: 1,
        	          ExtraMessage : 'Seasonally adjusted data',
        	          Time: {
        	          	Type: 'M',
        	          	Start: 1993,
        	          	End: 2018,
        	          	EndMonth: 1,
        	          },
        	          Geo: 'EU',
        	          UrlStructure:{
        	          	IndicatorName: "indic",
        	        	DisplayMessageOrder:[ 'Indicator'],
        		 		DisplayExtra: '',
        	        	extras: {
            				extra1: {"s_adj" : 'SA'}
            				}
        	          }
        	    },
        	    {
                	TopicName:"GDP and main components (output, expenditure and income)",
                	id:"nama_10_gdp",
                	rev: 1,
                	 Time: {
                      	Type: 'A',
                      	Start: 1990,
                      	End: 2017
                      },
                      Geo: 'EU',
                	UrlStructure:{
                		IndicatorName: "na_item",
                		UnitName: 'unit',
                    	DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
        		 		DisplayExtra: ' as ',
                	}
                },
                {
            	TopicName:"GDP per capita",
            	id:"nama_10_pc",
            	rev: 1,
            	 Time: {
                  	Type: 'A',
                  	Start: 1995,
                  	End: 2017
                  },
                  Geo: 'EU',
            	UrlStructure:{
            		IndicatorName: "na_item",
            		UnitName: 'unit',
            		DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
    		 		DisplayExtra: ' as ',
            		}
              },
                {
                	TopicName:"Key indicators (Households)",
                	id:"nasa_10_ki",
                	rev: 1,
                	 Time: {
                      	Type: 'A',
                      	Start: 1996,
                      	End: 2016
                      },
                      Geo: 'EU',
                	UrlStructure:{
                		IndicatorName: "na_item",
                		UnitName: 'sector',
                		DisplayMessageOrder:[ 'Indicator'],
        		 		DisplayExtra: '',
                		extras: {
            				extra1: {"unit" : 'PC'}
            				}
                	}
                  },
                  {
                  	TopicName:"debt-to-income ratio for non financial corporations",
                  	id:"nasa_10_ki",
                  	rev: 2,
                  	 Time: {
                        	Type: 'A',
                        	Start: 1996,
                        	End: 2016
                        },
                        Geo: 'EU',
                  		UrlStructure:{
                  		IndicatorName: "na_item",
                  		UnitName: 'sector',
                  		DisplayMessageOrder:[ 'Unit'],
        		 		DisplayExtra: '',
                  		extras: {
              				extra1: {"unit" : 'PC'}
              				}
                  	}
                    },
                    {
                      	TopicName:"Coorporate investment",
                      	id:"nasa_10_ki",
                      	rev: '3',
                      	 Time: {
                            	Type: 'A',
                            	Start: 1996,
                            	End: 2016
                            },
                            Geo: 'EU',
                      	UrlStructure:{
                      		IndicatorName: "na_item",
                      		UnitName: 'sector',
                      		DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
            		 		DisplayExtra: ' as ',
                      		extras: {
                  				extra1: {"unit" : 'PC'}
                  				}
                      	}
                        },
                        {
                          	TopicName:"Total investement in the economy",
                          	id:"nasa_10_ki",
                          	rev: '4',
                          	 Time: {
                                	Type: 'A',
                                	Start: 1996,
                                	End: 2016
                                },
                                Geo: 'EU',
                          	UrlStructure:{
                          		IndicatorName: "na_item",
                          		UnitName: 'sector',
                          		DisplayMessageOrder:[ 'Unit'],
                		 		DisplayExtra: '',
                          		extras: {
                      				extra1: {"unit" : 'PC'}
                      				}
                          	}
                            },
                  {
                  	TopicName:"Consumer Prices (HICP 2015 = 100) - annual data (average index and rate of change)",
                  	id:"prc_hicp_aind",
                  	rev: '1',
                  	 Time: {
                        	Type: 'A',
                        	Start: 1997,
                        	End: 2017
                        },
                        Geo: 'EU',
                        UrlStructure:{
	                  		IndicatorName: "coicop",
	                  		UnitName: 'unit',
	                  		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
            		 		DisplayExtra: ' for ',
                  		}
                   },
                   {
                     	TopicName:"Unemployment",
                     	id:"une_rt_a",
                     	rev: '1',
                     	 Time: {
                           	Type: 'A',
                           	Start: 1987,
                           	End: 2017
                           },
                           Geo: 'EU',
                     	UrlStructure:{
                     		IndicatorName: "age",
                     		UnitName: 'unit',
                     		DisplayMessageOrder:[ 'Indicator' , 'Extra', 'Unit' ],
            		 		DisplayExtra: ' that is unemployeed as ',
                     		extras: {
                				extra1: {"sex" : 'T'}
                				}
                     		}
                      },
]},


{
	    SectorName: "Employment & Unemployment",
	    id: "EMP",
	    Topics:[
	               {
                    	TopicName:"Unemployment (Annual)",
                    	id:"une_rt_a",
                    	rev: '1',
                    	 Time: {
                          	Type: 'A',
                          	Start: 1987,
                          	End: 2017
                          },
                          Geo: 'EU',
                    	UrlStructure:{
                    		IndicatorName: "age",
                    		UnitName: 'unit',
                    		DisplayMessageOrder:[ 'Indicator' , 'Extra', 'Unit' ],
            		 		DisplayExtra: ' that is unemployeed as ',
                    		extras: {
               				extra1: {"sex" : 'T'}
               					}
                    		}
                     },
                     {
                     	TopicName:"Unemployment (quarterly)",
                     	id:"une_rt_q",
                     	rev: '1',
                     	ExtraMessage : 'Seasonally adjusted data',
                     	 Time: {
                           	Type: 'Q',
                           	Start: 1987,
                           	End: 2017,
                           	EndQuarter: 4,

                           },
                           Geo: 'EU',
                           UrlStructure:{
                     		IndicatorName: "age",
                     		UnitName: 'unit',
                     		DisplayMessageOrder:[ 'Indicator' , 'Extra', 'Unit' ],
            		 		DisplayExtra: ' that is unemployeed as ',
                     		extras: {
                				extra1: {"sex" : 'T'},
                				extra2: {"s_adj" : 'SA'}
                					}
                     		}
                      },

                      {
                       	TopicName:"Employment rate (quarterly)",
                       	id:"lfsi_emp_q",
                       	rev: '1',
                       	ExtraMessage : 'Seasonally adjusted data, population from 15 to 64 years old',
                       	 Time: {
                             	Type: 'Q',
                             	Start: 1995,
                             	End: 2017,
                             	EndQuarter: 3,

                             },
                             Geo: 'EU',
                             UrlStructure:{
                       		IndicatorName: "sex",
                       		UnitName: 'unit',
                     		DisplayMessageOrder:[ 'Indicator' , 'Extra', 'Unit' ],
            		 		DisplayExtra: ' that is employeed as ',
                       		extras: {
                  				extra1: {"s_adj" : 'SA'},
                  				extra2: {"age" : 'Y15-64'},
                  				extra3: {'indic_em' : 'EMP_LFS'}
                  					}
                       		}
                        },

                        {
                           	TopicName:"labour force participation rate (quarterly)",
                           	id:"lfsi_emp_q",
                           	rev: '2',

                           	 Time: {
                                 	Type: 'Q',
                                 	Start: 1995,
                                 	End: 2017,
                                 	EndQuarter: 3,

                                 },
                                 Geo: 'EU',
                                 UrlStructure:{
                           		IndicatorName: "sex",
                           		UnitName: 'unit',
                           		DisplayMessageOrder:[ 'Indicator' , 'Extra', 'Unit' ],
                		 		DisplayExtra: ' that is working or are actively looking for work as ',
                           		extras: {
                      				extra1: {"s_adj" : 'SA'},
                      				extra2: {"age" : 'Y15-64'},
                      				extra3: {'indic_em' : 'ACT'}
                      					}
                           		}
                            },

                     {
                     	TopicName:"Employment by educational attainment level",
                     	id:"lfsi_educ_a",
                     	rev: '1',
                     	Time: {
                     			Type: 'A',
                           		Start: 1998,
                           		End: 2016
                          	},
                        ExtraMessage : 'From 15 to 64 years',
                        Geo: 'EU',
                     	UrlStructure:{
                     		IndicatorName: "isced11",
                     		UnitName: 'unit',
                     		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
                            DisplayExtra: ' with ',
                     		extras: {
                				extra1: {"age" : 'Y15-64'},
                				extra2: {'sex' : 'T'}
                					}
                     		}
                      },
	              {
	            	  TopicName: "Temporary employees",
	            	  id:"lfsa_etpgan",
	            	  rev: '1',
                    	 Time: {
                          	Type: 'A',
                          	Start: 1990,
                          	End: 2016
                          },
                          Geo: 'EU',
                    	UrlStructure:{
                    		IndicatorName: "age",
                    		UnitName: 'unit',
                    		DisplayMessageOrder:[ 'Unit', 'Indicator', 'Extra', ],
                            DisplayExtra: ' that are Temporary employees ',
                    		extras: {
                    			extra1: {"sex" : 'T'},
                    			extra2: {'citizen' : 'TOTAL'}
               					}
                    		}
	              },
	              {
	            	  TopicName: "Part-time employment",
	            	  id:"lfsa_eppga",
	            	  rev: '1',
                    	 Time: {
                          	Type: 'A',
                          	Start: 1987,
                          	End: 2016
                          },
                          Geo: 'EU',
                    	UrlStructure:{
                    		IndicatorName: "age",
                    		UnitName: 'unit',
                    		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator' ],
                            DisplayExtra: ' that is part time ',
                    		extras: {
                    			extra1: {"sex" : 'T'}
               					}
                    		}
	              },
	              {
	            	  TopicName: "Involuntary part-time employment",
	            	  id:"lfsa_eppgai",
	            	  rev: '1',
                    	 Time: {
                          	Type: 'A',
                          	Start: 1987,
                          	End: 2016
                          },
                          Geo: 'EU',
                    	  UrlStructure:{
                    		IndicatorName: "age",
                    		UnitName: 'unit',
                    		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator' ],
                            DisplayExtra: ' that is unvoluntary ',
                    		extras: {
                    			extra1: {"sex" : 'T'}
               					}
                    		}
	              },
	              {
	            	  TopicName: "Precarious employment (2008-2016)",
	            	  id:"lfsa_qoe_4ax1r2",
	            	  rev: '1',
                    	 Time: {
                          	Type: 'A',
                          	Start: 2008,
                          	End: 2016
                          },
                        Geo: 'EU',
                        ExtraMessage : '15 years or over',
                    	UrlStructure:{
                    		IndicatorName: "nace_r2",
                    		UnitName: 'unit',
                    		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator' ],
                            DisplayExtra: ' that is precarious at ',
                    		extras: {
                    			extra1: {"sex" : 'T'},
                    			extra2:	{'age' : 'Y_GE15'}
                    			},

               				},
                    },
                    {
  	            	  TopicName: "Precarious employment (2000-2008)",
  	            	  id:"lfsa_qoe_4ax1r1",
  	            	  rev: '1',
                      	 Time: {
                            	Type: 'A',
                            	Start: 2000,
                            	End: 2008
                            },
                        Geo: 'EU',
                        ExtraMessage : '15 years or over',
                      	UrlStructure:{
                      		IndicatorName: "nace_r1",
                      		UnitName: 'unit',
                      		DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator' ],
                            DisplayExtra: ' that is precarious at ',
                      		extras: {
                      			extra1: {"sex" : 'T'},
                      			extra2:	{'age' : 'Y_GE15'}
                      			},
                 				},
                      },
                    {
  	            	  TopicName: "Long-term unemployment",
  	            	  id:"une_ltu_a",
  	            	  rev: '1',
                      	 Time: {
                            	Type: 'A',
                            	Start: 1996,
                            	End: 2016
                            },
                        Geo: 'EU',
                        ExtraMessage : '15 years or over',
                      	UrlStructure:{
                      		IndicatorName: "indic_em",
                      		UnitName: 'unit',
                      		DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
                      		DisplayExtra: ' as ',
                      		extras: {
                      			extra1: {"sex" : 'T'},
                      			extra2:	{'age' : 'Y15-74'}
                      			},
                 			},
                      },

	   ]},//end of empleo
{
		    SectorName: "Government",
			id: "GV",
		   	Topics:[
		   	        {
		   	         TopicName: "government expenditure by function",
		   	         id: 'gov_10a_exp',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1995,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "cofog99",
		   	            UnitName: 'unit',
			   	   		DisplayMessageOrder:[ 'Unit' , 'Extra', 'Indicator'],
	              		DisplayExtra: ' spent on ',
		   	         extras: {
         				extra1: {"sector" : 'S13'},
         				extra2: {'na_item' : 'TE'}
         				}
		   	         }
		   	     },
		         {
		   	         TopicName: "Government debt",
		   	         id: 'gov_10dd_edpt1',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1995,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "na_item",
		   	            UnitName: 'unit',
		   	            DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
		   	            DisplayExtra: ' as ',
		   	         extras: {
         				extra1: {"sector" : 'S13'}
         				}
		   	         }
		   	     },
		         {
		   	         TopicName: "Government revenue & expenditure",
		   	         id: 'gov_10a_main',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1995,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "na_item",
		   	            UnitName: 'unit',
		   	            DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
		   	            DisplayExtra: ' as ',
		   	         extras: {
         				extra1: {"sector" : 'S13'}
         				}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "who owns government debt?",
		   	         id: 'gov_10dd_ggd',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2015,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "sector",
		   	            UnitName: 'unit',
		   	            DisplayMessageOrder:[ 'Unit' , 'Extra', 'Indicator'],
		   	            DisplayExtra: ' owned by ',
		   	         extras: {
         				extra1: {"maturity" : 'TOTAL'},
         				extra2: {'na_item': 'GD'}
         				}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Government revenue (Tax)",
		   	         id: 'gov_10a_taxag',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1999,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "na_item",
		   	            UnitName: 'unit',
		   	         DisplayMessageOrder:['Indicator','Extra', 'Unit'],
		   	            DisplayExtra: ' as ',
		   	         extras: {
         				extra1: {"sector" : 'S13'},

         				}
		   	         }
		   	     },



]},//end of Gobierno

{
	SectorName: "Demographic & crime",
	id: "DEM",
	Topics:[
	     	  {
		   	         TopicName: "Population by nationality",
		   	         id: 'migr_pop2ctz',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1998,
		   	         	End: 2017
		   	         },

		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "citizen",
		   	            UnitName: 'unit',
		   	            DisplayMessageOrder:['Indicator'],
		   	            DisplayExtra: '',
		   	         extras: {
		   	        	 extra1: {"age" : 'TOTAL'},
		   	        	 extra2: {'sex': 'T'}
		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Population by age",
		   	         id: 'demo_pjanind',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1960,
		   	         	End: 2017
		   	         },

		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "indic_de",
		   	         	DisplayMessageOrder:['Indicator'],
		   	            DisplayExtra: '',

		   	         }
		   	     },
		    	  {
		   	         TopicName: "Immigration",
		   	         id: 'migr_imm8',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1990,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "sex",
		   	         	UnitName: 'unit',
		   	         	DisplayMessageOrder:['Unit', 'Extra', 'Indicator'],
		   	         	DisplayExtra: ' of ',
		   	         extras: {
		   	        	 extra1: {"agedef" : 'REACH'},
		   	        	 extra2: {'age': 'TOTAL'}
		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Emigration by age",
		   	         id: 'migr_emi1ctz',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2002,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	           	IndicatorName: "age",
		   	           UnitName: 'unit',
		   	    	DisplayMessageOrder:['Unit',  'Indicator'],
	   	         	DisplayExtra: ' of emmigrants ',
		   	         extras: {
		   	        	 extra1: {"citizen" : 'TOTAL'},
		   	        	 extra2: {'agedef': 'REACH'},
		   	        	 extra3: {'sex' : 'T'}
		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Life expectancy",
		   	         id: 'demo_mlexpec',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1975,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         IndicatorName: "sex",
		   	         UnitName: 'unit',
		   	         DisplayMessageOrder:['Indicator', 'Extra', 'Unit' ],
		   	         DisplayExtra: ' Life expectancy ',
		   	         extras: {
		   	        	 extra1: {"age" : 'Y_LT1'},

		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Divorce indicators",
		   	         id: 'demo_ndivind',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1970,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         IndicatorName: "indic_de",
		   	         DisplayMessageOrder:['Indicator'],
		   	         DisplayExtra: '',
		   	         }
		   	     },
		    	  {
		   	         TopicName: "Asylum applications",
		   	         id: 'migr_asyappctza',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2008,
		   	         	End: 2017
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "citizen",
		   	         	UnitName: 'unit',
		   	         DisplayMessageOrder:['Unit', 'Extra', 'Indicator'],
		   	         DisplayExtra: ' that applyed for asylum from ',
		   	         extras: {
		   	        	 extra1: {"asyl_app" : 'ASY_APP'},
		   	        	 extra2: {'age': 'TOTAL'},
		   	        	 extra3: {'sex' : 'T'}
		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Decision on Asylum applications",
		   	         id: 'migr_asydcfsta',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2008,
		   	         	End: 2017
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "decision",
		   	         	UnitName: 'unit',
		   	         	DisplayMessageOrder:['Unit', 'Extra', 'Indicator'],
		   	         	DisplayExtra: ' with ',
		   	         extras: {
		   	        	 extra1: {"citizen" : 'TOTAL'},
		   	        	 extra2: {'age': 'TOTAL'},
		   	        	 extra3: {'sex' : 'T'}
		   	         		}
		   	         }
		   	     },
		   	  {
		   	         TopicName: "Crimes by category (police data)",
		   	         id: 'crim_off_cat',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2008,
		   	         	End: 2015
		   	         },

		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "iccs",
		   	            UnitName: 'unit',
		   	            DisplayMessageOrder:[ 'Indicator', 'Unit'],
		   	            DisplayExtra: '',
		   	         }
		   	     },



	           ]},//end of demografia
{
	SectorName: "Health system",
	id: "SAN",
	Topics:[
           {

        	      TopicName: "Health care expenditure by financing scheme",
		   	         id: 'hlth_sha11_hf',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2003,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         IndicatorName: "icha11_hf",
		   	         UnitName: 'unit',
		   	         DisplayMessageOrder:['Unit', 'Extra', 'Indicator'],
		   	         DisplayExtra: ' financed by ',
		   	         }
           },
           {

     	      	TopicName: "Self-perceived health",
		   	         id: 'hlth_silc_18',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2004,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',

		   	         UrlStructure:{
		   	         	IndicatorName: "levels",
		   	         	UnitName: 'age',
		   	         	DisplayMessageOrder:['Unit', 'Extra', 'Indicator'],
		   	         	DisplayExtra: ' that rate their health status as  ',
		   	         extras: {
		   	        	 extra1: {"deg_urb" : 'TOTAL'},
		   	        	 extra2:{'unit': 'PC'},
		   	        	 extra3: {'sex' : 'T'}
		   	         		}
		   	         }
        },
        {

   	      		TopicName: "People having a long-standing illness or health problem",
		   	         id: 'hlth_silc_04',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2004,
		   	         	End: 2016
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "wstatus",
		   	         	UnitName: 'unit',
		   	         	DisplayMessageOrder:['Unit', 'Indicator', 'Extra' ],
		   	         	DisplayExtra: ' having a long-standing illness or health problem ',
		   	         extras: {
		   	        	 extra1: {'age': 'Y_GE16'},
		   	        	 extra2: {'sex' : 'T'}
		   	         		}
		   	         }
      },
      {

   	      		TopicName: "Hospital beds by hospital ownership (public or private)",
		   	         id: 'hlth_rs_bds2',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 1986,
		   	         	End: 2015
		   	         },
		   	      Geo: 'EU',
		   	         UrlStructure:{
		   	         IndicatorName: "owner",
		   	         UnitName: 'unit',
		   	         DisplayMessageOrder:['Unit', 'Extra', 'Indicator' ],
		   	         DisplayExtra: ' that are ',

		   	         }
      },

      {

   	      TopicName: "Technical resources in hospital",
		   	         id: 'hlth_rs_tech',
		   	         rev: '1',
		   	         Time: {
		   	         	Type: 'A',
		   	         	Start: 2000,
		   	         	End: 2015
		   	         },
		   	         Geo: 'EU',
		   	         UrlStructure:{
		   	         	IndicatorName: "facility",
		   	         	UnitName: 'unit',
		   	         DisplayMessageOrder:['Indicator', 'Unit' ],
		   	         DisplayExtra: ' that are ',

		   	         }
      },
//      {
//
//   	      DataBaseName: "Medical technology",
//		   	         code: 'hlth_rs_equip',
//		   	         rev: '1',
//		   	         Time: {
//		   	         	Type: 'A',
//		   	         	Start: 2000,
//		   	         	End: 2015
//		   	         },
//		   	         Geo: 'EU',
//		   	         UrlStructure:{
//		   	         	IndicatorName: "facility",
//		   	         	UnitName: 'unit',
//		   	         extras: {
//		   	        	 extra1:{'icha_hp': 'HP1'},
//
//		   	         		}
//		   	        }
//      },

      ]


},
{
	SectorName: "Education",
    id: "EDU",
    Topics: [
               {
                   TopicName: "Early leavers from education and training",
                   id: 'edat_lfse_30',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2000,
                   	End: 2016
                   },

                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "sex",
                   	UnitName: 'unit',
                    DisplayMessageOrder:['Unit', 'Indicator', 'Extra'  ],
		   	        DisplayExtra: ' that has not completed education or training ',
                    extras: {
		   	        	 extra1: {"wstatus" : 'POP'},
		   	        	 extra2:{'age': 'Y18-24'},
		   	        	 extra3: {'deg_urb' : 'TOTAL'}

		   	         		}
                   }
               },
               {
                   TopicName: "Ratio of students to teachers",
                   id: 'educ_uoe_perp04',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2013,
                   	End: 2016
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "isced11",
                   	UnitName: 'unit',
                    DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
		   	        DisplayExtra: ' for ',

                   }
               },
               {
                   TopicName: "public expenditure on education as % of GDP (2001-2011)",
                   id: 'educ_figdp',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2001,
                   	End: 2011
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "indic_ed",
                   	UnitName: 'unit',
                    DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
		   	        DisplayExtra: ' dedicated to ',

                   }
               },
               {
                   TopicName: "Public expenditure on education (Euros per student)",
                   id: 'educ_uoe_fine09',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2012,
                   	End: 2014
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "isced11",
                	UnitName: 'unit',
                	 DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
  		   	        DisplayExtra: ' dedicated to ',
                   }
               },
               {
                   TopicName: "Financial aid to students, 2001-2011",
                   id: 'educ_fiaid',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2001,
                   	End: 2011
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "indic_ed",
                	UnitName: 'unit',
                	DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
  		   	        DisplayExtra: ' dedicated to Financial aid for ',
                   }
               },
               {
                   TopicName: "Financial aid to students, 2012-2014",
                   id: 'educ_uoe_fina01',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2012,
                   	End: 2014
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "isced11",
                	UnitName: 'unit',
                	DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
  		   	        DisplayExtra: ' dedicated to Financial aid for ',
                   }
               },
               {
                   TopicName: "Young people neither in employment nor in education and training",
                   id: 'edat_lfse_20',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 2000,
                   	End: 2016
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "wstatus",
                	UnitName: 'unit',
                 	DisplayMessageOrder:['Unit', 'Extra' ,'Indicator'],
  		   	        DisplayExtra: ' that ',
                	extras: {
		   	        	 extra1: {"sex" : 'T'},
		   	        	 extra2:{'age': 'Y15-34'},
		   	        	 extra3: {'typtrai' : 'NO_FED_NFE'}

		   	         		}
                   }
               },
               {
                   TopicName: "Unemployment by educational attainment level",
                   id: 'lfsa_urgaed',
                   rev: '1',
                   Time: {
                   	Type: 'A',
                   	Start: 1995,
                   	End: 2016
                   },
                   Geo: 'EU',
                   UrlStructure:{
                   	IndicatorName: "isced11",
                	UnitName: 'unit',
                	DisplayMessageOrder:['Unit', 'Indicator', 'Extra'],
  		   	        DisplayExtra: ' & unemployed ',
                	extras: {
		   	        	 extra1: {"sex" : 'T'},
		   	        	 extra2:{'age': 'Y15-74'},
		   	         		}
                   }
               },
    ]

},

{
    SectorName: "Social, welfare & pensions",
    id: "SC",
    Topics:[
    {
        TopicName: "People at risk of poverty or social exclusion",
        id: 'ilc_peps01',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 2003,
        	End: 2016
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "age",
        	UnitName: 'unit',
        	DisplayMessageOrder:['Unit', 'Indicator', 'Extra'],
	   	    DisplayExtra: ' that are at risk of poverty or social exclusion ',
        	extras: {
  	        	 extra1: {"sex" : 'T'},

  	         		}
        }
    },

    {
        TopicName: "Working and at risk of poverty rate (educational attainment level)",
        id: 'ilc_iw04',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 2003,
        	End: 2016
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "isced11",
        	DisplayMessageOrder:[ 'Indicator', 'Extra'],
	   	    DisplayExtra: ' working & at risk of poverty ',

        }
    },
    {
        TopicName: "At risk of poverty threshold (60% of median equivalised income)",
        id: 'ilc_li01',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 2003,
        	End: 2016
        },
        Geo: 'EU',

        UrlStructure:{
        	IndicatorName: "hhtyp",
        	UnitName: 'currency',
        	DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit'],
	   	    DisplayExtra: ' with less income are considered to be in risk at poverty, ',
        	extras: {
  	        	 extra1: {"indic_il" : 'T'},
  	        	 extra2:{'indic_il': 'LI_C_M60'},
  	         		}
        }
    },
    {
        TopicName: "Gini coefficient (Inequality on income)",
        id: 'ilc_di12',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 1995,
        	End: 2016
        },
        Geo: 'EU',

        UrlStructure:{
        	IndicatorName: "indic_il",
        	DisplayMessageOrder:['Extra'],
	   	    DisplayExtra: '0 = perfect Equality, 100 = Perfect Inequality',

        }
    },
    {
        TopicName: "Government expenditure on welfare",
        id: 'spr_exp_sum',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 1995,
        	End: 2015,
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "spdeps",
        	UnitName: 'unit',
        	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
	   	    DisplayExtra: ' deditaced to ',


        }
    },
    {
        TopicName: "Pensions beneficiaries",
        id: 'spr_pns_ben',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 2006,
        	End: 2015
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "spdepb",
        	UnitName: 'unit',
        	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
	   	    DisplayExtra: ' of ',
          	extras: {
 	        	 extra1: {"spdepm" : 'TOTAL'},
 	        	 extra2:{'sex': 'T'},
 	         		}

        }
    },
    {
        TopicName: "Pensions expenditure",
        id: 'spr_exp_pens',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 1995,
        	End: 2015
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "spdepb",
        	UnitName: 'unit',
        	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
	   	    DisplayExtra: ' deditaced to ',
          	extras: {
 	        	 extra1: {"spdepm" : 'TOTAL'}
 	         		}

        }
    },
    {
        TopicName: "Distribution of population by tenure status",
        id: 'ilc_lvho02',
        rev: '1',
        Time: {
        	Type: 'A',
        	Start: 2007,
        	End: 2016
        },
        Geo: 'EU',
        UrlStructure:{
        	IndicatorName: "tenure",
        	UnitName: 'hhtyp',
          	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
	   	    DisplayExtra: ' that is ',
          	extras: {
 	        	 extra1: {"incgrp" : 'TOTAL'},
 	         		}
        }
    },


    ]},//end of social eurostat


    {
        SectorName: "Climate Change & energy",
        id : "ENV&NRG",
        Topics:[
			{
			TopicName: "Greenhouse gases emission by sector",
			id: 'env_ac_ainah_r2',
			rev: '1',
			Time: {
				Type: 'A',
				Start: 2005,
				End: 2016
			},
			Geo: 'EU',
			UrlStructure:{
				IndicatorName : 'nace_r2',
				UnitName: 'unit',
				DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
				DisplayExtra: ' of greenhouse gases created by ',
				extras: {
					extra1: {"airpol" : 'CO2_N2O_CH4_CO2E'}
					}
				},


			},
			{
				TopicName: "Greenhouse gases emissions intensities",
				id: 'env_ac_aeint_r2',
				rev: '1',
				ExtraMessage : 'Greenhouse gases emissions required to produce economic benefit',
				Time: {
					Type: 'A',
					Start: 2005,
					End: 2016
				},
				Geo: 'EU',
				UrlStructure:{
					IndicatorName : 'nace_r2',
					UnitName: 'unit',
					DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
					DisplayExtra: ' by ',
					extras: {
						extra1: {"airpol" : 'CO2_N2O_CH4_CO2E'},
						extra2: {"na_item" : 'B1G'}
						}
					},


				},
				{
					TopicName: "Environmental tax revenues",
					id: 'env_ac_tax',
					rev: '1',
					Time: {
						Type: 'A',
						Start: 1995,
						 End: 2016
					},
					Geo: 'EU',
					UrlStructure:{
						IndicatorName : 'tax',
						UnitName: 'unit',
						DisplayMessageOrder:[ 'Indicator', 'Extra', 'Unit' ],
						DisplayExtra: ' as ',
					},

				},

				{
					TopicName: "Government expenditure on Environmental protection",
					id: 'env_ac_eptrf',
					rev: '1',
					Time: {
						Type: 'A',
						Start: 2006,
						 End: 2014
					},
					Geo: 'EU',
					UrlStructure:{
						IndicatorName : 'ceparema',
						UnitName: 'unit',
						DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
						DisplayExtra: ' dedicated to ',
						extras: {
							extra1: {"sector" : 'S13_S15'},
							extra2: {"env_econ" : 'EP_D3_7_92_99_P'},

							}
					},

				},


				{
					TopicName: "Electricity prices for household consumers (euro/kWh)",
					id: 'nrg_pc_204',
					rev: '1',
					Time: {
						Type: 'B',
						Start: 2008,
						 End: 2017,
						EndSemester: 1,
					},
					Geo: 'EU',
					UrlStructure:{
						IndicatorName : 'tax',
						UnitName: 'currency',
						DisplayMessageOrder:[ 'Extra', 'Unit',  'Indicator'],
						DisplayExtra: ' Electicity prices in ',
						extras: {
							extra1: {"unit" : 'KWH'},
							extra2: {"consom" : '4161903'}
							}
					},

				},
				{
					TopicName: "Electricity prices components for household consumers",
					id: 'nrg_pc_204_c',
					rev: '1',
					Time: {
						Type: 'B',
						Start: 2008,
						 End: 2016,
						EndSemester: 2,
					},
					Geo: 'EU',
					UrlStructure:{
						IndicatorName : 'breakdown',
						UnitName: 'currency',
						DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
						DisplayExtra: ' dedicated to ',
						extras: {
							extra1: {"consom" : '4161903'}
							}
					},

				},
				{
					TopicName: "Electricity prices for non-household consumers (euro/kWh), taxes included",
					id: 'nrg_pc_205',
					rev: '1',
					Time: {
						Type: 'B',
						Start: 2008,
						End: 2017,
						EndSemester: 1,
					},
					Geo: 'EU',

					UrlStructure:{
						IndicatorName : 'consom',
						UnitName: 'currency',
						DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
						DisplayExtra: ' for ',
						extras: {
							extra1: {"unit" : 'KWH'},
							extra2: {"tax": 'I_TAX'},

							}
					},

				},
				{
					TopicName: "Electricity prices for non-household consumers (euro/kWh), taxes not included",
					id: 'nrg_pc_205',
					rev: '2',
					Time: {
						Type: 'B',
						Start: 2008,
						 End: 2017,
						 EndSemester: 1
					},
					Geo: 'EU',
					UrlStructure:{
						IndicatorName : 'consom',
						UnitName: 'currency',
						DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
						DisplayExtra: ' for ',
						extras: {
							extra1: {"unit" : 'KWH'},
							extra2: {"tax": 'X_TAX'},

							}
					},


				},



            ]},// end of Medio ambiente y energia

            {
	SectorName: "science & technology",
	id : "IT",
	Topics:[
                {
                    TopicName: "Expenditure on R&D by sector",
                    id: 'rd_e_gerdtot',
                    rev: '1',
                    Geo: 'EU',
                    UrlStructure:{
                    IndicatorName: 'sectperf',
                    UnitName: 'unit',
                 	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
        	   	    DisplayExtra: ' spent in R&D by ',
                    },
                    Time: {
                    	Type: 'A',
                    	Start: 1981,
                    	End: 2016
                    },
                },
                {
                    TopicName: "Source of funding of R&D",
                    id: 'rd_e_gerdfund',
                    rev: '1',
                    Geo: 'EU',
                    Time: {
                    	Type: 'A',
                    	Start: 1981,
                    	End: 2016
                    },
                    UrlStructure:{
                    IndicatorName :'sectfund',
                    UnitName: 'unit',
                	DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
        	   	    DisplayExtra: ' invested in R&D by ',
                	extras: {
            			extra1: {"sectperf" : 'TOTAL'}
            			}
                    },
                },

                    {
                        TopicName: "Total R&D personnel by sectors",
                        id: 'rd_p_persocc',
                        rev: '1',
                        Geo: 'EU',
                        Time: {
                        	Type: 'A',
                        	Start: 1988,
                        	End: 2016
                        },
                        UrlStructure:{
                        IndicatorName :'sectperf',
                        UnitName: 'unit',
                        DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
            	   	    DisplayExtra: ' R&D personnel in ',
                    	extras: {
                			extra1: {"prof_pos" : 'TOTAL'},
                			extra2:{"sex" : 'T'}
                			}
                        },

                },
                {
                    TopicName: "Patent applications to the EPO by international patent classification (IPC) sections",
                    id: 'pat_ep_nipc',
                    rev: '1',
                    Geo: 'EU',
                    Time: {
                    	Type: 'A',
                    	Start: 1980,
                    	End: 2013
                    },
                    UrlStructure:{
                    IndicatorName :'ipc',
                    UnitName: 'unit',
                    DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
        	   	    DisplayExtra: ' in ',

                    },

            },
            {
                TopicName: "Patents granted by the USPTO by international patent classification (IPC) sections",
                id: 'pat_us_nipc',
                rev: '1',
                Geo: 'EU',
                Time: {
                	Type: 'A',
                	Start: 1980,
                	End: 2010
                },
                UrlStructure:{
                IndicatorName :'ipc',
                UnitName: 'unit',
                DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
    	   	    DisplayExtra: ' in ',

                },
            },

            {
                TopicName: "Number of tech enterprises",
                id: 'htec_eco_ent2',
                rev: '1',
                Geo: 'EU',
                Time: {
                	Type: 'A',
                	Start: 2008,
                	End: 2014
                },
                UrlStructure:{
                IndicatorName :'nace_r2',
                UnitName: 'unit',
                DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
    	   	    DisplayExtra: ' of enterprises dedicated to ',

                },
            },

            {
                TopicName: "Employment in technology and knowledge-intensive sectors (2008-2016)",
                id: 'htec_emp_nat2',
                rev: '1',
                Geo: 'EU',
                Time: {
                	Type: 'A',
                	Start: 2008,
                	End: 2016
                },
                UrlStructure:{
                IndicatorName :'nace_r2',
                UnitName: 'unit',
                DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
    	   	    DisplayExtra: ' employeed at ',
            	extras: {
        			extra1:{"sex" : 'T'}
        			}

                },
            },
            {
                TopicName: "Employment in technology and knowledge-intensive sectors (1994-2008)",
                id: 'htec_emp_nat',
                rev: '1',
                Geo: 'EU',
                Time: {
                	Type: 'A',
                	Start: 1994,
                	End: 2008
                },
                UrlStructure:{
                IndicatorName :'nace_r1',
                UnitName: 'unit',
                DisplayMessageOrder:[ 'Unit', 'Extra', 'Indicator'],
    	   	    DisplayExtra: ' employeed at ',
            	extras: {
        			extra1:{"sex" : 'T'}
        			}

                },
            },
               ]},   //end of ciencia y technologia eurostat


]//end of EUROSTAT


export default EurostatDatabases