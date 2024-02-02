import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/pages/avis.css'

function Avis () {
    return(
        <div className="avis-section">
            <h2 className='avis-tittle'>Ils m'ont fait confiance alors pourquoi pas vous ?</h2>
            <div className="avis">
                <p className="texte">
                    "J'ai été sollicitée par Schéhérazade pour faire quelques photos afin d'alimenter son book.
                    J'ai apprécié immédiatement son côté tres professionnel ! Schéhérazade est vraiment passionnée par le métier, ça se voit et ça se sent.
                    En plus de son professionnalisme, Schéhérazade est une personne vraiment gentille, de bonne humeur et bienveillante.
                    Le combo parfait pour être dans des conditions optimales de travail!
                    
                    Merci Schéhérazaded'avoir fait appel à moi pour tes photos.Ce fût un réel plaisir de travailler avec toi 😊"
                </p>
                <a href="https://www.instagram.com/nat.photo.var/" target="_blank" rel="noreferrer" className='lien'>
                   <p><FontAwesomeIcon icon={faInstagram} className='logo-instagram' /> nat.photo.var</p> 
                </a>
            </div>
            <div className="avis avis-right">
                <p className="texte">
                    "Schéhérazade est une modèle photo rayonnante et professionnelle.
                    Sa personnalité chaleureuse, son enthousiasme et sa passion pour le métier sont des atouts indéniables qui la distinguent.
                    Collaborer avec Schéhérazade est synonyme d’excellence. Son expertise dans l’art de la pose et son sourire contagieux ajoutent une dimension spéciale à chaque photo.
                    En effet, vous ne trouverez pas seulement une modèle compétente, mais également une source d’inspiration."
                </p>
                <a href="https://www.instagram.com/vanerra_vannerie/" target="_blank" rel="noreferrer" className='lien'>
                   <p><FontAwesomeIcon icon={faInstagram} className='logo-instagram' /> Vanerra</p> 
                </a>
            </div>

            <div className="avis">
                <p className="texte">
                "Schéhérazade a été une rencontre professionnelle mais également humaine. Sa beauté naturelle m'a tout de suite convaincue de collaborer avec elle. Douce, intrigante avec beaucoup d'allure, j'ai pris plaisir à la sublimer lors des différents shootings." Laetitia,
                </p>
                <a href="https://www.instagram.com/par_laetitia/" className='lien' target="_blank" rel="noreferrer">
                    <p><FontAwesomeIcon icon={faInstagram} className='logo-instagram' /> Par Laetitia Salvi</p>
                </a>
            </div>

            <div className="avis avis-right">
                <p className="texte">
                "Jeune officier dynamique et réactive, d'une grande disponibilité et soucieuse du détail, a été la spécialiste attendue et incontournable fortement apprécié de ses chefs mais aussi par les conducteurs de travaux tout au long de son mandat. Douée de remarquables facultés intellectuelles et de qualités humaines et professionnelles indéniables, s'est particulièrement distinguée, dans la rédaction du marché de travaux, de l'une des opérations majeures des FFCI, relatives à la transformation complète de carburant du Service des Essences des Armées sur le Camp de Port-Bouët, destinée à garantir l'autonomie en carburant des forces [...]. Pour l'excellence de son comportement et les services rendus, dans le contexte d'un engagement en mission de courte durée à l'étranger, mérite d'être félicitée."
                </p>
                <p className='lien'>Extrait de la lettre de félicitions reçu en fin de mission en Côte d'Ivoire</p>
            </div>

            <div className="avis">
                <p className="texte">
                "Chef d'antenne encore jeune en service, l'IMI Schéhérazade.B démontre quotidiennement ses excellentes aptitudes techniques et organisationnelles et l'adage que "la valeur n'attend pas le nombre des années". Ayant acquis de l'assurance, elle assume avec professionnalisme et détermination ses responsabilités dans le contexte difficile des écoles militaires de Draguignan. Animée d'un état d'esprit irréprochable, elle a à cœur de progresser dans tous les domaines et se montre très volontaire. L'IMI Schéhérazade.B a confirmé cette année son excellent potentiel et mérite d'être suivi tout particulièrement." 
                </p>
                <p className='lien'>Chef d'unité, extrait de la notation 2018</p>
            </div>
        </div>
    )
}

export default Avis