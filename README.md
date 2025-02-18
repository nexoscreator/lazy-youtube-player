![GitHub Pages](https://img.shields.io/github/deployments/nexoscreator/lazy-youtube-player/github-pages.svg?style=flat-square&color=cyan)
![GitHub Release](https://img.shields.io/github/v/release/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)
![GitHub License](https://img.shields.io/github/license/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)
![GitHub code size](https://img.shields.io/github/languages/code-size/nexoscreator/lazy-youtube-player.svg?style=flat-square&color=cyan)

---

# Lazy YouTube Player 🎥

![image](.github/preview.gif)

Lazy YouTube Player is a lightweight, customizable YouTube player. It provides a simple way to embed YouTube videos with lazy loading capabilities, improving your website's performance.

---

### Features ✨

- Lazy loading of YouTube videos using Intersection Observer API
- TypeScript support for improved developer experience
- Customizable player options (thumbnail, play button, etc.)
- Accessibility improvements with ARIA attributes
- Responsive design
- Error handling for invalid video IDs or API failures

---

### Installation 📦

```html
<script type='module'
  src="https://cdn.jsdelivr.net/npm/lazy-youtube-player@v0.3.0/yt-player.min.js"
  defer
></script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/lazy-youtube-player@v0.3.0/yt-player.min.css"
/>
```

---

### Usage 🚀

Here's a basic example of how to use the Lazy YouTube Player in a website:

```html
<div
  class="NexosYt"
  data-embed="YT_VIDEO_ID"
></div>
```

optional: `data-thumbnail="CUSTOM_THUMBNAIL_URL"`

---

### Links 🔗

[![Web Demo](https://img.shields.io/badge/Web-Demo-blue?style=for-the-badge&logo=google-chrome)](https://nexoscreator.github.io/lazy-youtube-player)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-green?style=for-the-badge&logo=github)](https://github.com/nexoscreator/lazy-youtube-player)
[![YouTube Video](https://img.shields.io/badge/YouTube-Video-red?style=for-the-badge&logo=youtube)](https://youtu.be/L7UPOsBBW5Q)
[![NPM Package](https://img.shields.io/badge/NPM-Package-orange?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/lazy-youtube-player) 

---

## API

The LazyYouTubePlayer component accepts the following props:

- `NexosYT` (string, required): The YouTube Player Class.
- `videoId` (string, required): The YouTube video ID.
- `thumbnailUrl` (string, optional): Custom thumbnail URL. If not provided, the default YouTube thumbnail will be used.
- `width` (number, optional): The width of the player. Default: 640.
- `height` (number, optional): The height of the player. Default: 360.

---

### Contributing 🤝

We love contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

Check out our [Contribution Guidelines](CONTRIBUTING.md) for more details.

---

### License 📄

This project is licensed under the MIT License - see the [License](LICENSE) file for details.

---

<p align="center">
  Created with ❤️ by <a href="https://github.com/nexoscreator">@nexoscreator</a>
</p>

<p align="center">
  <a href="https://github.com/nexoscreator/lazy-youtube-player/stargazers">⭐ Star us on GitHub!</a>
</p>
