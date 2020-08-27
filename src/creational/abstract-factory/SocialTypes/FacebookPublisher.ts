import ISocialPublisher from './Interfaces/ISocialPublisher';
import ISocialConnector from './Interfaces/ISocialConnector';
import FacebookConnector from './FacebookConnector';

export default class FacebookPublisher implements ISocialPublisher {

    private readonly connector: ISocialConnector;

    constructor(connector: ISocialConnector) {
        if (connector instanceof FacebookConnector) {
            this.connector = connector
        } else {
            throw new Error('Connector invalid');
        }
    }

    publish(content: string): void {
        console.log(`Posted on Facebook: ${content}`);
    }
}
