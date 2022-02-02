import IYouTubeManager from './interfaces/IYouTubeManager';

export default class YouTubeCache implements IYouTubeManager {

    private service: IYouTubeManager;

    constructor(service: IYouTubeManager) {
        this.service = service;
    }

    getListVideo(): void {
        this.service.getListVideo();
    }
    getVideo(id: string): void {
        this.service.getVideo(id);
    }
    downloadVideo(id: string): void {
        this.service.downloadVideo(id);
    }
}

