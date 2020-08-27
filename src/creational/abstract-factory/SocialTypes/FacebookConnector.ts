import ISocialConnector from './Interfaces/ISocialConnector';

export default class FacebookConnector implements ISocialConnector{

    open(): void {
        console.log('Connected to Facebook');
    }

    close(): void {
        console.log('Facebook disconnected')
    }
}
