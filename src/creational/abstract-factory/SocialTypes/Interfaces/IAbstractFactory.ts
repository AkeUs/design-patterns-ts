import ISocialConnector from './ISocialConnector';
import ISocialPublisher from './ISocialPublisher';

export default interface IAbstractFactory {
    getConnector(): ISocialConnector;
    getPublisher(connector: ISocialConnector): ISocialPublisher;
}
