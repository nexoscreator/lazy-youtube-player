export class LazyYoutubePlayer {
  constructor(private element: HTMLElement, private videoId: string) {
    this.init();
  }

  private init() {
    // Create and set up the thumbnail image
    const thumbnailSrc = `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`;
    const thumbnail = new Image();
    thumbnail.className = "lazy";
    thumbnail.src = thumbnailSrc;
    thumbnail.alt = "Youtube video";

    thumbnail.onload = () => {
      this.element.appendChild(thumbnail);
    };

    // Create and insert the play button SVG
    const playButton = document.createElement('div');
    playButton.className = 'play';
    playButton.innerHTML = `
      <svg viewBox='0 0 213.7 213.7'>
        <polygon class='t' points='73.5,62.5 148.5,105.8 73.5,149.1'></polygon>
        <circle class='c' cx='106.8' cy='106.8' r='103.3'></circle>
      </svg>
    `;
    this.element.appendChild(playButton);

    // Add click event listener to load the iframe
    this.element.addEventListener("click", () => this.loadIframe());
  }

  private loadIframe() {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&autoplay=1`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    this.element.innerHTML = ""; // Clear the thumbnail and play button
    this.element.appendChild(iframe);
  }
}

// Function to initialize all players on the page
export function initLazyYoutubePlayers() {
  const youtubeElements = document.querySelectorAll(".NexosYt");
  youtubeElements.forEach((element: HTMLElement) => {
    const videoId = element.dataset.embed;
    if (videoId) {
      new LazyYoutubePlayer(element, videoId);
    }
  });
}
