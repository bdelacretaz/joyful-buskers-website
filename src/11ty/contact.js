module.exports = function (src, title) {
    return `
    <h2>Contactez nous!</h2>
    <p>Ici ou par email <a href="mailto:allo@joyful-buskers.ch">allo@joyful-buskers.ch</a></p>
    <form method='POST' name='contact' data-netlify='true' netlify-honeypot="faux-pas">
        <input type='hidden' name='form-name' value='contact' />
        <p>
            <label>Votre nom<br/><input required type="text" name="name" /></label>
        </p>
        <p>
            <label>Votre adresse email ou téléphone<br/><input required type="text" name="email" /></label>
        </p>
        <p>
            <label>Votre message<br/><textarea required name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Envoyer ce message</button>
        </p>
        <p style="display:none">
            <label>
            Ne remplissez pas ce champ...<br/><input name="faux-pas" />
            </label>
        </p>
    </form>
`}