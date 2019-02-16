import {GraphLineColors} from 'data/QueryMap/QueryMap'

class graph {
    constructor(dataObject){

        this.Sector = dataObject.Sector.name;
        this.Topic = dataObject.Topic.name;
        this.Indicator = dataObject.Indicator.name;
        this.Unit = dataObject.Unit.name;
        this.SelectedTimes = dataObject.SelectedTimes;
        this.SelectedGeo = dataObject.SelectedGeo;
        this.displayMessage = dataObject.displayMessage;
        this.result = dataObject.result;
        this.data = {};
        this.options = {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        };
        this.type = 'line';
    }


    createData(){
        this.data['labels'] = [...this.SelectedTimes];
        var dataSets = [];
        for(var i in this.result){
            dataSets.push({
                'data': this.result[i]['values'],
                'label': this.result[i]['name'],
                'borderColor': GraphLineColors[i],

            })
        }
        this.data['datasets'] = dataSets;
    }

    createOptions(){

    }
}

export {graph}