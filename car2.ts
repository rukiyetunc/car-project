// type EventData = { event: string; data: any };

// class Database {
//     private listeners = new Map<string, Function[]>();

//     constructor() {
//         this.listeners = new Map();
//     }
//   // * Subscribe a listener
//     addListener(eventName: string, fn: Function){
//         const eListener = this.listeners.get(eventName);

//         if (eListener){
//             eListener.push(fn);
//             this.listeners.set(eventName, eListener);
//         }else{
//             this.listeners.set(eventName,[fn]);
//         }
//     }
//     // * Unsubscribe a listener
//     removeListener(eventName: string, fn: Function){
//         const removeListener = this.listeners.get(eventName);

//         if(removeListener){
//             const index = removeListener.indexOf(fn);
//             removeListener.splice(index, 1);
//             this.listeners.set(eventName,removeListener);
//         }
//     }

//     // * Broadcast the data to all the listeners
//     broadcastAllListeners(data: EventData){
//         const broadcastListener = this.listeners.get(data.event);

//         if(broadcastListener){
//             broadcastListener.forEach((fn) => fn (data));
//         }
//     }
// }

// class User {
//     private eventEmitter = new Database()
//     private username = ''
//     private password = ''

//     constructor(username, password){
//         this.username = username
//         this.password = password
//     }

//     printUserName(){
//         console.log(this.username);
//         this.eventEmitter.broadcastAllListeners({event: 'printUserName', data: this.username})
//     }

//     printPassword(){
//         console.error(this.password);
//         this.eventEmitter.broadcastAllListeners({event: 'printPassword', data: this.password})

//     }

//     onUpdate(callback: Function){
//         this.eventEmitter.addListener('printUserName', callback);
//         this.eventEmitter.addListener('printPassword', callback);

//         return () => {
//             this.eventEmitter.removeListener('printUserName' , callback);
//             this.eventEmitter.removeListener('printPassword' , callback);
//         };
//     }
// }

// const user1 = new User('username', 'password');


// // * Listener call back
// const listenerCallback = (data: EventData) => {
//     console.log('PRINTER LISTENER :', data);

// };
  
//   // * Subscribe the listener
//   const removeListenerFunction = user1.onUpdate(listenerCallback);
  
//   // * The listeners will be called
//   user1.printUserName();
//   user1.printPassword();
  
//   removeListenerFunction();
  
//   // * The listeners will not be called
//   user1.printUserName();
//   user1.printPassword();
  

//  const  user2 = new User('rulo', 'asasd') 

//  user2.onUpdate(console.log)

//  user2.printPassword()