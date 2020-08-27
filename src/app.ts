import { Configuration } from './creational/singleton/Configuration';

const config: Configuration = Configuration.getInstance();

console.log(`Environment: ${config.environment}`);
console.log(`Connection: ${config.connection}`);
