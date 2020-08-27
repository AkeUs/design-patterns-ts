export default class TeamsNotification {

    send(channel: string, title: string, message: string) {
        console.log(`MS Teams Sending On Channel ${channel}: ${title} - ${message}`)
    }
}
