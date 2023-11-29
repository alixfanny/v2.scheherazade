import React, { useState } from 'react';
import '../css/composent/formulaire.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import Tooltip from './tooltip';

function Formulaire() {

    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    function handleCheckboxChange(event) {
        setIsConsentGiven(event.target.checked);
      }

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        mail: '',
        tel: '',
        message: '',
      });
     
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        const formUrl = 'https://script.google.com/macros/s/AKfycbxYKxWvArzQUSUgt0kVwufxfsTiPBpD4rCuKKQmvsZapWWJFsaKaeKiyJlFI0zrOGyp/exec';
        const data =  new URLSearchParams({
            nom: formData.nom,
            prenom: formData.prenom,
            mail: formData.mail,
            tel: formData.tel,
            message: formData.message
        });
        
        try {
            await axios.post(formUrl, data, {maxRedirects: 5});
            setShowConfirmation(true);
            setTimeout(() => {
                setShowConfirmation(false); // Masquer le message après 15 secondes
            }, 15000);
            setFormData({
              nom: '',
              mail: '',
              message: '',
              tel:'',
              prenom:'',
            });
            setIsConsentGiven(false); 
          } catch (error) {
            console.error('Une erreur s\'est produite lors de la soumission du formulaire.', error);
        }
    }

    return(
        <div>
            {showConfirmation && (
                    <div className="confirmation-message">
                        <h2>Merci pour votre message !</h2>
                        <p>Votre demande a bien été prise en compte. Je reviendrai vers vous dans les plus brefs délais. En attendant, n'hésitez pas à explorer mon portfolio pour découvrir davantage de photos et de projets passionnants.</p>
                    </div>
                )}
            <form onSubmit={handleSubmit}>
                <div className='champ'>
                    <label htmlFor="nom">Nom :</label>
                    <input className='nom' type="text" id="nom"name="nom" value={formData.nom} onChange={handleChange} required pattern="[A-Za-z]+" />
                </div>
                <div className='champ'>
                    <label htmlFor="prenom">Prénom :</label>
                    <input className='prenom' type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required pattern="[A-Za-z]+" />
                </div>
                <div className='champ'>
                    <label htmlFor="mail">mail :</label>
                    <input className='mail' type="email" id="mail" name="mail"  value={formData.mail} onChange={handleChange} required pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]+"/>
                </div>
                <div className='champ'>
                    <label htmlFor="tel">Tél :</label>
                    <input className='tel' type="tel"  id="tel" name="tel" value={formData.tel} onChange={handleChange} required pattern="[0-9]+"/>
                </div>
                <div className='champ'>
                    <label htmlFor="message">Message :</label>
                    <textarea className='message' id="message" name="message" value={formData.message} onChange={handleChange}/>
                </div>
                <div className='champ'>
                    <input type="checkbox" checked={isConsentGiven} onChange={handleCheckboxChange} id='checkbox'/>
                    <label id='texte-info'> J'accepte les conditions
                        <Tooltip
                            text="En cochant cette case, je consens à ce que mes données personnelles soient utilisées par Schéhérazade-topmodel pour répondre à ma demande de contact. Je comprends que mes données seront traitées de manière confidentielle, conservées pendant 6 mois et ne seront pas partagées avec des tiers sans mon consentement explicite. Je suis conscient(e) que j'ai le droit d'accéder à mes données, de demander leur modification ou leur suppression, et de retirer mon consentement à tout moment. Pour toute question relative à mes données, je peux contacter [adresse e-mail/numéro de téléphone]."
                        >
                        <FontAwesomeIcon icon={faInfoCircle} className='logo-info'/>
                        </Tooltip>
                    </label>
                </div>
                <button  className='button-formulaire' type="submit">Envoyer</button>
             </form>
        </div>
    )
}

export default Formulaire