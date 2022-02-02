import IYouTubeManager from './interfaces/IYouTubeManager';
import YouTubeCache from './YouTubeCache';
import YouTubeService from './YouTubeService';

let client: IYouTubeManager = new YouTubeCache(new YouTubeService());

try {
    client.getListVideo();
    client.getVideo('123');
    client.downloadVideo('123');
} catch(err) {
    console.log(err);
}
