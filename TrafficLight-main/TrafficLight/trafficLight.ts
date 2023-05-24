type EventData = { event: string; data: any };

class Main {
    private listeners = new Map<string, Function[]>();

    constructor() {
        this.listeners = new Map();
    }
  // * Subscribe a listener
    addListener(eventName: string, fn: Function){
        const listenerTrafficLamp = this.listeners.get(eventName);

        if (listenerTrafficLamp){
            listenerTrafficLamp.push(fn);
            this.listeners.set(eventName, listenerTrafficLamp);
        }else{
            this.listeners.set(eventName,[fn]);
        }
    }
    // * Unsubscribe a listener
    removeListener(eventName: string, fn: Function){
        const removeListenerTrafficLamp = this.listeners.get(eventName);

        if(removeListenerTrafficLamp){
            const index = removeListenerTrafficLamp.indexOf(fn);
            removeListenerTrafficLamp.splice(index, 1);
            this.listeners.set(eventName,removeListenerTrafficLamp);
        }
    }

    // * Broadcast the data to all the listeners
    broadcastAllListeners(data: EventData){
        const broadcastListener = this.listeners.get(data.event);

        if(broadcastListener){
            broadcastListener.forEach((fn) => fn (data));
        }
    }
}

class Database {
    private eventEmitter = new Main()
    private cars = ''
    private colorLamp = ''
   
    constructor(cars, colorLamp){
        this.cars = cars
        this.colorLamp = colorLamp
     
    }

    printCarMovement(){
        console.log(this.cars);
        this.eventEmitter.broadcastAllListeners({event: 'printCarMovement', data: this.cars})
    }

    printLampColor(){
        console.error(this.colorLamp);
        this.eventEmitter.broadcastAllListeners({event: 'printLampColor', data: this.colorLamp})

    }

    onUpdate(callback: Function){
        this.eventEmitter.addListener('printCarMovement', callback);
        this.eventEmitter.addListener('printLampColor', callback);

        return () => {
            this.eventEmitter.removeListener('printCarMovement' , callback);
            this.eventEmitter.removeListener('printLampColor' , callback);
        };
    }
}

const statusInformation1 = new Database('LIGHT COLOR : Green', 'MOVEMENT OF CARS : Cars in motion');
const statusInformation2 = new Database('LIGHT COLOR : Yellow', 'MOVEMENT OF CARS : Cars slowed down');
const statusInformation3 = new Database('LIGHT COLOR : Red', 'MOVEMENT OF CARS : Cars stopped');


// * Listener call back
const listenerCallback = (data: EventData) => {
    console.log('PRINTER LISTENER :', data);

};
  
  // * Subscribe the listener
  const removeListenerFunction = statusInformation1.onUpdate(listenerCallback);
  
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

//123