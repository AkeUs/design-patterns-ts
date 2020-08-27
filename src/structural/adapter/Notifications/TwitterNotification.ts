import INotification from './Interfaces/INotification';

export default class TwitterNotification implements INotification {

    post(title: string, message: string): void {
        console.log(`Twitter Sending: ${title} - ${message}`);
    }
}
