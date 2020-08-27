import IAbstractFactory from './SocialTypes/Interfaces/IAbstractFactory';
import ISocialConnector from './SocialTypes/Interfaces/ISocialConnector';
import ISocialPublisher from './SocialTypes/Interfaces/ISocialPublisher';

export default class Publisher {
    private readonly message: string;

    constructor(message: string) {
        this.message = message;
    }

    public send(factory: IAbstractFactory): void {
        const connector: ISocialConnector = factory.getConnector();
        const posted: ISocialPublisher = factory.getPublisher(connector);

        connector.open();
        posted.publish(this.message);
        connector.close();
    }
}
