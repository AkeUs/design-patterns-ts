import IAbstractFactory from './Interfaces/IAbstractFactory';
import ISocialConnector from './Interfaces/ISocialConnector';
import ISocialPublisher from './Interfaces/ISocialPublisher';
import TwitterConnector from './TwitterConnector';
import TwitterPublisher from './TwitterPublisher';

export default class TwitterFactory implements IAbstractFactory{

    getConnector(): ISocialConnector {
        return new TwitterConnector();
    }

    getPublisher(connector: ISocialConnector): ISocialPublisher {
        return new TwitterPublisher(connector);
    }

}
