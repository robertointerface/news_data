import {ModelGeo} from 'data/Geo/Geo'


export class Geo {
    /*
        @Class: Creates a list of geo locations (countries) depending on the given option. List is used to
        create HTML checkbox or select lists.
        @Input (string): Give a geo option that will match the object keys 'ModelGeo from 'data/Geo/Geo'
        @Iterator: iterate over this.list and returns objects with structure
        {name: locationName,
        id: LocationId,
        checked: false}
     */
    constructor(geoOption){
        this.geoOption = geoOption.location
        this.list = ModelGeo[geoOption.location]
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
    /*
        @Class: extends Geo option with extra functions that are required for OECD locations
     */
    constructor(geoOption){
        super(geoOption);

    }

    deleteGeoLocations(){

    }

}