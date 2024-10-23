module.exports = function (src, title) {
    return `
  <figure>
    <img src="${src}" alt="${title}"></img>
    <figcaption>${title}</figcaption>
  </figure>
  `;
  }