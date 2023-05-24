var Main = /** @class */ (function () {
    function Main() {
        this.listeners = new Map();
        this.listeners = new Map();
    }
    // * Subscribe a listener
    Main.prototype.addListener = function (eventName, fn) {
        var listenerTrafficLamp = this.listeners.get(eventName);
        if (listenerTrafficLamp) {
            listenerTrafficLamp.push(fn);
            this.listeners.set(eventName, listenerTrafficLamp);
        }
        else {
            this.listeners.set(eventName, [fn]);
        }
    };
    // * Unsubscribe a listener
    Main.prototype.removeListener = function (eventName, fn) {
        var removeListenerTrafficLamp = this.listeners.get(eventName);
        if (removeListenerTrafficLamp) {
            var index = removeListenerTrafficLamp.indexOf(fn);
            removeListenerTrafficLamp.splice(index, 1);
            this.listeners.set(eventName, removeListenerTrafficLamp);
        }
    };
    // * Broadcast the data to all the listeners
    Main.prototype.broadcastAllListeners = function (data) {
        var broadcastListener = this.listeners.get(data.event);
        if (broadcastListener) {
            broadcastListener.forEach(function (fn) { return fn(data); });
        }
    };
    return Main;
}());
var Database = /** @class */ (function () {
    function Database(cars, colorLamp) {
        this.eventEmitter = new Main();
        this.cars = '';
        this.colorLamp = '';
        this.cars = cars;
        this.colorLamp = colorLamp;
    }
    Database.prototype.printCarMovement = function () {
        console.log(this.cars);
        this.eventEmitter.broadcastAllListeners({ event: 'printCarMovement', data: this.cars });
    };
    Database.prototype.printLampColor = function () {
        console.error(this.colorLamp);
        this.eventEmitter.broadcastAllListeners({ event: 'printLampColor', data: this.colorLamp });
    };
    Database.prototype.onUpdate = function (callback) {
        var _this = this;
        this.eventEmitter.addListener('printCarMovement', callback);
        this.eventEmitter.addListener('printLampColor', callback);
        return function () {
            _this.eventEmitter.removeListener('printCarMovement', callback);
            _this.eventEmitter.removeListener('printLampColor', callback);
        };
    };
    return Database;
}());
var statusInformation1 = new Database('LIGHT COLOR : Green', 'MOVEMENT OF CARS : Cars in motion');
var statusInformation2 = new Database('LIGHT COLOR : Yellow', 'MOVEMENT OF CARS : Cars slowed down');
var statusInformation3 = new Database('LIGHT COLOR : Red', 'MOVEMENT OF CARS : Cars stopped');
// * Listener call back
var listenerCallback = function (data) {
    console.log('PRINTER LISTENER :', data);
};
// * Subscribe the listener
var removeListenerFunction = statusInformation1.onUpdate(listenerCallback);
// * The listeners will be called
statusInformation1.printCarMovement();
statusInformation1.printLampColor();
statusInformation2.printCarMovement();
statusInformation2.printLampColor();
statusInformation3.printCarMovement();
statusInformation3.printLampColor();
removeListenerFunction();
// * The listeners will not be called
statusInformation1.printCarMovement();
statusInformation1.printLampColor();
