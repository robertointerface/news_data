import {ModelGeo} from 'data/Geo/Geo'


export class Geo {
    constructor(geoOption){
        this.geoOption = geoOption
        this.list = ModelGeo[geoOption]
    }

    *[Symbol.iterator]() {
        var item = 0;
        var TopicsLenght = this.list.length;
        for (var item of this.list) {
            var CurrentValue = {
                name: item.Countryname,
                id: item.CountryCode,
                checked: false
            }
            yield CurrentValue;
        }
    }
}

export class OECDGeo extends Geo{
    constructor(geoOption){
        super(geoOption);

    }

    deleteGeoLocations(){

    }

}