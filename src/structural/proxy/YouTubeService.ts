import IYouTubeManager from './interfaces/IYouTubeManager';

export default class YouTubeService implements IYouTubeManager {

    getListVideo(): void {
        setTimeout(() => {
            console.log('Get list video');    
        }, 1500);
    }

    getVideo(id: string): void {
        setTimeout(() => {
            console.log(`Get video ${id}`);   
        }, 1500);
    }
    
    downloadVideo(id: string): void {
        setTimeout(() => {
            console.log(`Download video ${id}`);
        }, 1500);
    }
}
