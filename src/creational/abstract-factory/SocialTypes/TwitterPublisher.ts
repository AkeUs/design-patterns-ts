import ISocialPublisher from './Interfaces/ISocialPublisher';
import ISocialConnector from './Interfaces/ISocialConnector';
import TwitterConnector from './TwitterConnector';

export default class TwitterPublisher implements ISocialPublisher {

    private readonly connector: ISocialConnector;

    constructor(connector: ISocialConnector) {
        if (connector instanceof TwitterConnector) {
            this.connector = connector
        } else {
            throw new Error('Connector invalid');
        }
    }

    publish(content: string): void {
        console.log(`Posted on Twitter: ${content}`);
    }
}
