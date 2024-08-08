![GitHub Pages](https://img.shields.io/github/deployments/nexoscreator/lazy-youtube-player/github-pages.svg?style=flat-square&color=cyan)
![GitHub Release](https://img.shields.io/github/v/release/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)
![GitHub License](https://img.shields.io/github/license/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)
![GitHub code size](https://img.shields.io/github/languages/code-size/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)

---

# NexosYT - Lazy Loaded YouTube Player

![image](.github/preview.png)

NexosYT is a lightweight JavaScript library that enables lazy loading of YouTube videos on your website. It replaces video thumbnails with a play button, loading the video only when the thumbnail is clicked. This enhances page load times and user experience.

---

### Features

- Lazy loading of YouTube videos
- Customizable play button
- Smooth transitions and hover effects
- Responsive design

---

### Links

[![Web Demo](https://img.shields.io/badge/Web-Demo-blue?style=for-the-badge&logo=google-chrome)](https://nexoscreator.github.io/lazy-youtube-player)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-green?style=for-the-badge&logo=github)](https://github.com/nexoscreator/lazy-youtube-player)
[![YouTube Video](https://img.shields.io/badge/YouTube-Video-red?style=for-the-badge&logo=youtube)](https://youtu.be/rMnDe0iEGRs?si=B2viVesOhHYusbBG)

---

### Installation

To use NexosYT, include the following files in your project:

1. HTML
Add this HTML structure where you want to embed the YouTube player. Replace `YT_VIDEO_ID` with the actual YouTube video ID.

  ```html
  <div class="NexosYt" data-embed="YT_VIDEO_ID"></div>
  ```

2. CSS
Add the following CSS to style the player and play button:

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nexoscreator/lazy-youtube-player@v0.0.1/yt-player.min.css">
  ```

3. JavaScript
Include the following JavaScript to enable lazy loading of YouTube videos:

  ```html
  <script src="https://cdn.jsdelivr.net/gh/nexoscreator/lazy-youtube-player@v0.0.1/yt-player.min.js" defer></script>
  ```

---

### Contributing
Contributions are welcome! If you have any suggestions, bug fixes, or improvements, feel free to open an issue or submit a pull request.
If you'd like to contribute to this project, please follow these ste

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes and commit them (`git commit -m 'Add feature/improvement'`).
4. Push to the branch (`git push origin feature/improvement`).
5. Open a Pull Request.

Please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

---

### License

This project is licensed under the [MIT License](LICENSE).