import IYouTubeManager from './interfaces/IYouTubeManager';

export default class YouTubeService implements IYouTubeManager {

    getVideo(id: string): void {
        setTimeout(() => {
            console.log(`Get video ${id}`);   
        }, 1500);
    }
}
