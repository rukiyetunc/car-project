var Database = /** @class */ (function () {
    function Database(_a) {
        var trafficLamp = _a.trafficLamp;
        this.fiat = '';
        this.ford = '';
        this.audi = '';
        this.trafficLamp = trafficLamp;
    }
    Database.prototype.trafficLampChange = function (trafficLampp) {
        var red = -1;
        var yellow = 0;
        var green = 1;
        if (trafficLampp == 1)
            console.log('you can contine');
        if (trafficLampp == 0) {
            console.log('you need to slow down');
        }
        else {
            console.log('you need to stop');
        }
    };
    return Database;
}());
var car1 = new Database({ trafficLamp: 'green' });
console.log(car1);
/*
at['dsdsfdf'] = 'sdsdf'
dsdsf.sdsfd = 'sd'
exampleMap.set('property', 'value')
 */ 
