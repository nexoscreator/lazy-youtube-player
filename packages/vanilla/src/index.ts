import { LazyYoutubePlayerCore, LazyYoutubePlayerOptions } from '@lazy-youtube-player/core';
import '@lazy-youtube-player/core/styles.css';

export class LazyYoutubePlayer {
    private core: LazyYoutubePlayerCore;
    private element: HTMLElement;

    constructor(element: HTMLElement | string, options: LazyYoutubePlayerOptions) {
        this.core = new LazyYoutubePlayerCore(options);
        this.element = typeof element === 'string' ? document.querySelector(element) as HTMLElement : element;

        if (!this.element) {
            throw new Error('Element not found');
        }

        this.init();
    }

    private async init(): Promise < void > {
        const playerId = `lazy-youtube-player-${Math.random().toString(36).substr(2, 9)}`;
        this.element.id = playerId;
        await this.core.init(playerId);
    }
}