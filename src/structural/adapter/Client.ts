import NotificationService from './NotificationService';
import INotification from './Notifications/Interfaces/INotification';
import FacebookNotification from './Notifications/FacebookNotification';
import TwitterNotification from './Notifications/TwitterNotification';
import TeamsNotificationAdapter from './Notifications/TeamsNotificationAdapter';
import TeamsNotification from './Notifications/TeamsNotification';

const providers: INotification[] = [
    new FacebookNotification(),
    new TwitterNotification(),
    new TeamsNotificationAdapter(
        new TeamsNotification()
    )
];

const notification: NotificationService = new NotificationService(providers);
notification.send('Hello Social', 'My nick is AkeUs');
