import IAbstractFactory from './Interfaces/IAbstractFactory';
import ISocialConnector from './Interfaces/ISocialConnector';
import ISocialPublisher from './Interfaces/ISocialPublisher';
import FacebookConnector from './FacebookConnector';
import FacebookPublisher from './FacebookPublisher';

export default class FacebookFactory implements IAbstractFactory {

    getConnector(): ISocialConnector {
        return new FacebookConnector()
    }

    getPublisher(connector: ISocialConnector): ISocialPublisher {
        return new FacebookPublisher(connector);
    }

}
