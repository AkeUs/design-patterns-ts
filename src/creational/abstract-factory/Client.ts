import Publisher from './Publisher';
import FacebookFactory from './SocialTypes/FacebookFactory';
import TwitterFactory from './SocialTypes/TwitterFactory';

const message: string = 'Hello my nick is AkeUs';
const publisher: Publisher = new Publisher(message);

publisher.send(new FacebookFactory());
publisher.send(new TwitterFactory());
