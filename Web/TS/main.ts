
import { Light } from './light';
import { LightOnCommand, LightOffCommand } from './command';
import { RemoteControl } from './remoteControl';

// Client code
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();

// Setting and executing commands
remote.setCommand(lightOnCommand);
remote.pressButton(); // Output: Light is ON

remote.setCommand(lightOffCommand);
remote.pressButton(); // Output: Light is OFF
