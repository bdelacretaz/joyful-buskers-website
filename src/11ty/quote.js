module.exports = function (auteur, texte) {
    return `
    <blockquote>
        ${texte}
        <div class='auteur'>${auteur}</div>
    </blockquote>
    
  `;
  }
  
  