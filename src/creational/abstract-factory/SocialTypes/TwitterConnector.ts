import ISocialConnector from './Interfaces/ISocialConnector';

export default class TwitterConnector implements ISocialConnector{

    open(): void {
        console.log('Connected to Twitter');
    }

    close(): void {
        console.log('Twitter disconnected')
    }
}
