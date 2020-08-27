import FacebookNotification from "./Notifications/FacebookNotification";
import TwitterNotification from "./Notifications/TwitterNotification";
import TeamsNotification from "./Notifications/TeamsNotification";

import { assert } from 'chai'
import 'mocha'

const providers: any[] = [
    new FacebookNotification(),
    new TwitterNotification(),
    new TeamsNotification()
]

describe('Adapter', () => {

    describe('INotification', () => {
        it('Are providers compatible?', () => {
            providers.forEach(p => {
               assert.typeOf(p.post, 'function');
            });
        });
    });

});
