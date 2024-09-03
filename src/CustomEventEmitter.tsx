// CustomEventEmitter.ts
type EventCallback = (data: any) => void;

class CustomEventEmitter {
  events: { [key: string]: EventCallback[] };

  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: EventCallback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string, data: any) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach(callback => {
        callback(data);
      });
    }
  }
  
  off(eventName: string, callback: EventCallback) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter(cb => cb !== callback);
    }
  }
}

const eventEmitter = new CustomEventEmitter();
export default eventEmitter;