
import { Command } from './command';

// Invoker: RemoteControl
export class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log('No command set');
    }
  }
}
