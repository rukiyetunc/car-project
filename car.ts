type EventData = { event: string; data: any };

type NewType = string;

class Cars {
    private fiat= '';
    private ford= '';
    private audi= '';
    trafficLamp: string;


    
    constructor({ trafficLamp }: { trafficLamp: NewType; }){
        this.trafficLamp = trafficLamp;
    }

    trafficLampChange(trafficLampp){
        const red = -1; 
        const yellow = 0; 
        const green = 1; 

        if(trafficLampp == 1)
        console.log('you can contine')

        if(trafficLampp == 0){
            console.log('you need to slow down')

        }else{
            console.log('you need to stop')
        }


    }

}

const car1 = new Cars({ trafficLamp: 'green' });
console.log(car1)


/*
hayyyyyyyyy 
at['dsdsfdf'] = 'sdsdf'
dsdsf.sdsfd = 'sd'
exampleMap.set('property', 'value')
 */