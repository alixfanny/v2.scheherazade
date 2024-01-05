import photo from '../images/contact/1.jpg'
import Formulaire from '../composant/contact'
import '../css/pages/contact.css';
import '../css/composent/formulaire.css';

function Contact() {
    return(
        <div className="contact-section">
            <h2 className='title-contact'>Contact</h2>
            <div className="contenue-contact">
                <div className="formulaire"> <Formulaire /></div>
                <div className="texte-photo">
                    <div className="texte">
                        <p>Schéhérazade - Top model et ingénieure au service de la BBE.<br/>La Beauté et le Bien Être intérieur et extérieur.</p>
                        <p>Nous partageons la même passion ?<br/>Alors <b>contact moi maintenant </b>et parlons ensemble de ton projet !</p>
                    </div>
                    <div className="container-photo">
                    <img src={photo} alt='schéhérazade' className='photo'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact