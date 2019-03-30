import {ModelGeo} from 'data/Geo/Geo'


export class Geo {
/**
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

export class OECDGeo {
/**
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
        this.removeGeo = geoOption.RemoveGeo ? geoOption.RemoveGeo : []

    }

   *[Symbol.iterator]() {
        var item = 0;
        var TopicsLenght = this.list.length;
        if (this.removeGeo.length > 0) {
            /*
                Some requests made to specific countries will return '500' from the third party API, that is why
                for some specific requests like 'Employment by job duration', the best option is
                to describe which countries to remove from the geo options list so user can not make requests related
                to those countries and avoid '500's.
             */
            for(var geo of this.removeGeo){
                var index = this.list.findIndex(x => x['CountryCode'] == geo)
                this.list.splice(index, 1)
            }
        }
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