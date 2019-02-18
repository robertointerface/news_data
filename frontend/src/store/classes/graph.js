import {GraphLineColors} from 'data/QueryMap/QueryMap'

class graph {

    constructor(dataObject){
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
                text: `${this.Topic} (${this.Indicator})`
            },
            scales: {
                yAxes:[{
                    scaleLabel:{
                        display: true,
                        labelString: this.Unit
                    }
                }]
            }
        };
        this.type = 'line';
    }


    createData(){
        /*
            @Func: Transform table JSON data into JSON data that can be used by chart.js library to chart the data.

         */
        this.data['labels'] = [...this.SelectedTimes];
        var dataSets = this.result.map((data, i) =>{
            return {
                'data': data['values'],
                'label': data['name'],
                'borderColor': GraphLineColors[i],
                'fill': false
            }
        });

        this.data['datasets'] = dataSets;
    }

    createOptions(){

    }
}

export {graph}