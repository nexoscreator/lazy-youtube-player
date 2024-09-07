export interface LazyYoutubePlayerOptions {
    videoId: string;
    width ? : number;
    height ? : number;
    autoplay ? : boolean;
    customClass ? : string;
}

export class LazyYoutubePlayerCore {
    private options: LazyYoutubePlayerOptions;
    private player: YT.Player | null = null;

    constructor(options: LazyYoutubePlayerOptions) {
        this.options = {
            width: 640,
            height: 360,
            autoplay: false,
            ...options
        };
    }

    async init(elementId: string): Promise < void > {
        await this.loadYouTubeAPI();
        this.createPlayer(elementId);
    }

    private loadYouTubeAPI(): Promise < void > {
        return new Promise((resolve) => {
            if (typeof window !== 'undefined' && !window.YT) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
                window.onYouTubeIframeAPIReady = resolve;
            } else {
                resolve();
            }
        });
    }

    private createPlayer(elementId: string): void {
        const playerElement = document.getElementById(elementId);
        if (playerElement) {
            playerElement.classList.add('lazy-youtube-player');
            if (this.options.customClass) {
                playerElement.classList.add(this.options.customClass);
            }
        }

        this.player = new YT.Player(elementId, {
            videoId: this.options.videoId,
            width: this.options.width,
            height: this.options.height,
            playerVars: {
                autoplay: this.options.autoplay ? 1 : 0,
            },
        });
    }
}