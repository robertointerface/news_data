import {GraphLineColors} from 'data/QueryMap/QueryMap'

class graph {
    /*
        @Class: Base class that creates JSON objects that can be used to create charts/graphs with library chart.js

     */
    constructor(dataObject){
        this.Topic = dataObject.Topic.name;
        this.Indicator = dataObject.Indicator.name;
        this.Unit = dataObject.Unit.name;
        this.SelectedTimes = dataObject.SelectedTimes;
        this.SelectedGeo = dataObject.SelectedGeo;
        this.displayMessage = dataObject.displayMessage;
        this.result = dataObject.result;
        this.data = {};

    }

    createData(){};

}

class lineGraph extends graph{
    /*
        @Class: Extension of graph class and used to create a JSON object with the structure required to create chart
        of type 'line' in chartjs library.
        Data in 'line' chart is structured the following way:
        ////////////////////////////////////////////////////////////
         type: 'line',
          data: {
            labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
            datasets: [{
                data: [86,114,106,106,107,111,133,221,783,2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
              }, {
                data: [282,350,411,502,635,809,947,1402,3700,5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
              }, {
                data: [168,170,178,190,203,276,408,547,675,734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
              }, {
                data: [40,20,10,16,24,38,74,167,508,784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
              }, {
                data: [6,3,2,2,7,26,82,172,312,433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'World population per region (in millions)'
            }
          }
        ////////////////////////////////////////////////////////////
     */
    constructor(dataObject){
        super(dataObject);
        this.type = 'line';
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

    createOptions(){}
}

class barGraph extends graph{
    /*
        @Class: Extension of class Graph and used to create a JSON object with the structure required to create chart
        of type 'bar' in chartjs library.
        Data in 'bar' type chart is structured the following way:
        //////////////////////////////////////////////////////////////////////////////
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: [2478,5267,734,784,433]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
              }
            }
        //////////////////////////////////////////////////////////////////////////////
     */
    constructor(dataObject){
        super(dataObject);
        this.type = 'bar';
        this.options = {
            legend: { display: false },
            title: {
                display: true,
                text: `${this.Topic} (${this.Indicator})`
            }
        }
    }

    createData(){
        /*

         */
        this.data['labels'] = this.result.map((result, i) => {
            return result['name']
        })

        this.data['datasets'] = [{
            'label': this.Unit,
            'backgroundColor': GraphLineColors.slice(0, this.SelectedGeo.length),
            'data': this.result.map((data, i) => {
                return data['values'][0] //If is a bar it means only one result per country/geo
            }),
        }]

    }
}

export {lineGraph, barGraph}