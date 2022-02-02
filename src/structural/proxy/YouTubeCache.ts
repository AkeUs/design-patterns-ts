import IYouTubeManager from './interfaces/IYouTubeManager';

export default class YouTubeCache implements IYouTubeManager {

    private service: IYouTubeManager;
    private cache: string[] = [];

    constructor(service: IYouTubeManager) {
        this.service = service;
    }

    getVideo(id: string): void {
        if (this.cache.find(video => video === id)) {
            return console.log(`Get video ${id} from cache`);
        }
        
        this.service.getVideo(id);
        this.cache.push(id);
    }
}

