var QueryModel = {


	GraphLineColors:[
						"#e6194b", //
						"#3cb44b",
						"#ffe119",
						"#0082c8",
						"#f58231",
						"#911eb4",
						"#46f0f0",
						"#f032e6",
						"#d2f53c",
						"#fabebe",
						"#008080",
						"#e6beff",
						"#aa6e28",
						"#fffac8",
						"#800000",
						"#aaffc3",
						"#808000",
						"#ffd8b1",
						"#000080",
						"#808080",
						"#000000",


		             ],

    GraphBarColors:[
		                      	//'rgba(255, 99, 132, 0.2)',

		                      	'rgba(220,20,60,0.4)', //pink
		                    	'rgba(0,139,0,0.4)', // green

		                    	'rgba(255, 215, 0, 0.4)', //gold

		                    	'rgba(238, 0, 238,0.4)',//magenta

		                    	'rgba(0,0, 128, 0.4)', //Navy

		                    	'rgba(0, 178 , 238, 0.4)', //deep sky blue

		                    	'rgba(255, 165,	0, 0.4)', //Orange


		                    	'rgba(	139, 69, 19, 0.4)', //chocolate


		                    	'rgba(	238, 0,	0, 0.4)', //red

		                    	'rgba(	142, 142 , 56,0.4)',//olive

		                    	'rgba(255,105,180, 0.4)', //hotpink


		                    	'rgba(159 ,121,	238, 0.4)', //purple


		                    	'rgba(10, 0, 255, 0.4)', //blue


		                    	'rgba(0, 134,139, 0.4)',//turquese


		                    	'rgba(118 ,238, 0, 0.4)',//chartreuse 2


		                    	'rgba(255, 255, 0, 0.4)',

		                    	'rgba(139,	90,	0, 0.4)',

		                    	'rgba(59 , 59, 59, 0.4)',

		                      ],

	//////////////////////////UNESCO/////////////////////////////
	Unesco:[
	{
	    name:"Pobreza",
	    Databases:[]},
	],//end of UNESCO

	ReferenceConditions:{
		MultipleUnitMesuare: false,
		NoUnitMesuare: false,
	},

	DataBaseSelect:[
		{ name: 'EUROPE: (Economic & demographic data Eurostat)',
		  	code:'ReferenceByEurostat'},
		{ name: 'Unesco (World demographic and education data)',
			code: 'ReferenceByUnesco'},
		{ name: 'Industrial Countries (Economic and social data from OECD countries)',
			code: 'ReferenceByOCDE'}
    ],

	QueryReferenceObject: {
			ThirdPartyAPI: '',
			Area : '',
			DataBase: '',
			DataBaseName:'',
			Indicators: [],
			UnitName: '',
			UnitMesure: [],
			Geo: '',
			Time:'',

	},

	QueryReferenceObjectList:[],

	ResultReferenceObjectList : [],

	ExternalReferences:[],


	ThirdPartyIPIBaseAddress :
		{
				EuroStatUrl : 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/',
				OCDE : 'http://stats.oecd.org/SDMX-JSON/data/',
				Unesco: 'https://api.uis.unesco.org/sdmx//data/UNESCO,',
				censuscs1: 'https://api.census.gov/data/',
				BLS: 'https://api.bls.gov/publicAPI/v2/timeseries/data/',
				censusTimeSeries : 'https://api.census.gov/data/timeseries/',
		},


	FirebaseConnection: {
		Pagination: {
			PreviousNodeLikes: 0,
			PreviousNodeKey : "",
		}

	}///end of FirebaseConnection

};//END OF MODEL


//var CurrentThidPartyAPi = null;



