module.exports = function (videoURL,caption) {
  const url = new URL(videoURL);
  return `
  <figure>
    <iframe
    class="vimeo video"
    src="https://player.vimeo.com/video${url.pathname}"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
    >
    </iframe>
    <figcaption>${caption}</figcaption>
  </figure>
`;
}

