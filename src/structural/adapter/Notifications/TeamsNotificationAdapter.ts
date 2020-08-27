import INotification from './Interfaces/INotification';
import TeamsNotification from './TeamsNotification';

export default class TeamsNotificationAdapter implements INotification {
    private readonly teamsNotification: TeamsNotification;

    constructor(teamsNotification: TeamsNotification) {
        this.teamsNotification = teamsNotification;
    }

    post(title: string, message: string) {
        this.teamsNotification.send('General', title, message);
    }
}
