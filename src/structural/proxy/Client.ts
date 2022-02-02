import IYouTubeManager from './interfaces/IYouTubeManager';
import YouTubeCache from './YouTubeCache';
import YouTubeService from './YouTubeService';

let client: IYouTubeManager = new YouTubeService();
let proxy: IYouTubeManager = new YouTubeCache(client);

proxy.getVideo('video1');
proxy.getVideo('video1');

