// command.ts
import { Light } from './light.ts'; 

// Command interface
export interface Command {
  execute(): void;
}

// Concrete Command: LightOnCommand
export class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    if (!this.light.isOn()) {
      this.light.turnOn();
    } else {
      console.log('Light is already ON');
    }
  }
}

// Concrete Command: LightOffCommand
export class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    if (!this.light.isOff()) {
      this.light.turnOff();
    } else {
      console.log('Light is already OFF');
    }
  }
}
