import INotification from './Interfaces/INotification';

export default class FacebookNotification implements INotification {
    
    post(title: string, message: string): void {
        console.log(`Facebook Sending: ${title} - ${message}`);
    }
}
