module.exports = function (videoURL) {
  const url = new URL(videoURL);
  return `
  <iframe
  class="vimeo video"
  src="https://player.vimeo.com/video${url.pathname}"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
  >
</iframe>
`;
}

