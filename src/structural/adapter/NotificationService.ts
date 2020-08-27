import INotification from './Notifications/Interfaces/INotification';

export default class NotificationService {

    private readonly providers: INotification[];

    constructor(providers: INotification[]) {
        this.providers = providers;
    }

    send(title: string, message: string): void {
        this.providers.forEach(p => {
            p.post(title, message);
        });
    }

}
