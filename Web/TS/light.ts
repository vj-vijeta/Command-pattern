// 
export class Light {
    private isOnState: boolean = false;
  
    turnOn(): void {
      this.isOnState = true;
      console.log('Light is ON');
    }
  
    turnOff(): void {
      this.isOnState = false;
      console.log('Light is OFF');
    }
  
    isOn(): boolean {
      return this.isOnState;
    }
  
    isOff(): boolean {
      return !this.isOnState;
    }
  }
  