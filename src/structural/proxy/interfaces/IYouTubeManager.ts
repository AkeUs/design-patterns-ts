export default interface IYouTubeManager {
    getListVideo(): void;
    getVideo(id: string): void;
    downloadVideo(id: string): void;
}
