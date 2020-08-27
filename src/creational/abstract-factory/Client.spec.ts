import FacebookFactory from './SocialTypes/FacebookFactory';
import TwitterFactory from './SocialTypes/TwitterFactory';
import FacebookConnector from './SocialTypes/FacebookConnector';
import ISocialConnector from './SocialTypes/Interfaces/ISocialConnector';
import FacebookPublisher from './SocialTypes/FacebookPublisher';
import TwitterConnector from './SocialTypes/TwitterConnector';
import TwitterPublisher from './SocialTypes/TwitterPublisher';

import { expect } from 'chai'
import 'mocha';

const facebookFactory = new FacebookFactory();
const twitterFactory = new TwitterFactory();

describe('Abstract Factory', () => {

    describe('Facebook publisher', () => {
        it('It must be a Facebook connector', () => {
            expect(facebookFactory.getConnector() instanceof FacebookConnector).to.equal(true);
        });

        it('It must be a Facebook publisher', () => {
            const connector: ISocialConnector = facebookFactory.getConnector()
            expect(facebookFactory.getPublisher(connector) instanceof FacebookPublisher).to.equal(true);
        });

    });

    describe('Twitter publisher', () => {
        it('It must be a Twitter connector', () => {
            expect(twitterFactory.getConnector() instanceof TwitterConnector).to.equal(true);
        });

        it('It must be a Twitter publisher', () => {
            const connector: ISocialConnector = twitterFactory.getConnector()
            expect(twitterFactory.getPublisher(connector) instanceof TwitterPublisher).to.equal(true);
        });

    });

});
