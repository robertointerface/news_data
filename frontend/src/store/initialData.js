import {flashFlags} from 'constants/constants'

export const appStatus = {
    flash: '',
    flashFlag: flashFlags.MESSAGE,
    isFetching: false,

}

export const userData = {
    isFetching: false,
    logged_in: false,
    username: '',
    password: '',
    passwordRepeat: '',
    location: '',
    email: '',
    token: '',
    first_name: '',
    last_name: '',
    error: '',
}

const DataBaseSelect = [
		{ name: 'EUROPE: (Economic & demographic data Eurostat)', id:'EU', select: false},
		{ name: 'Unesco (World demographic and education data)', id: 'UNESCO', select: false},
		{ name: 'Industrial Countries (Economic and social data from OECD countries)', id: 'OECD', select: false}
]

export const ThirdPartyIPIBaseAddress = {
    EuroStatUrl : 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en',
    OCDE : 'http://stats.oecd.org/SDMX-JSON/data',
    Unesco: 'https://api.uis.unesco.org/sdmx/data/UNESCO',
    censuscs1: 'https://api.census.gov/data',
    BLS: 'https://api.bls.gov/publicAPI/v2/timeseries/data',
    censusTimeSeries : 'https://api.census.gov/data/timeseries'
}

export const initialStateCurrentSearch = {
        id: "",
        PossibleThirdPartyAPI: DataBaseSelect,
        ThirdPartyAPI: {},
        PossibleSectors: [],
        Sector: {},
        PossibleTopics: [],
        Topic: {},
        TopicMap: {},
        version: 1,
        PossibleIndicators: [],
        Indicator: {},
        PossibleUnitMeasure: [],
        Unit: {},
        Times: [],
        SelectedTimes: [],
        Geo: [],
        SelectedGeo: [],
        queryMap: {},
        requestActive: true,
        fetching: false,
        progress: 0,
        errorMessage: ''
}

export const results = {
    numberQueries: 0,
    tables: [],
    charts:[]
}

export const createNewForm = {
    title: '',
    headline1: '',
    headline2: '',
    headline3: '',
    content: '',
    references: {
        tables: [],
        charts: []
    },
}

export const newDisplay = {
    news: [],


}

export const DataOrderObject = {
	ThirdParty: '',
	DataSetId:'',
	DataBaseName:'',
	IndicatorName:'',
	UnitName: '',
	ExtraMessage:'',
	DisplayMessage:'',
	unit: [],
	geo: [],
	geoOption: '',
	time:[],
	s_adj: [],
	values: [],
	Graph:false,
	Table: false
};


