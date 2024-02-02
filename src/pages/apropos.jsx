import photo1 from '../images/apropos/1.jpg';
import photo3 from '../images/apropos/3.jpg';
import photo2 from '../images/apropos/2.jpg';
import '../css/pages/apropos.css';

function Apropos() {
    return(
        <div className="apropos">
            <h2 className="title-apropos">A propos de mes 3 P - mon Parcours, ma Passion, mes Projets</h2>
            <section  className="section">
                <div className="texte">
                    <h3>Mon Parcours</h3>
                    <p>  Je m'appelle Schéhérazade, originaire de Paris, je vis depuis 2017 en région PACA.<br/>
                        Issue d'un cursus d'ingénieur dans le Bâtiment, l'Aménagement et l'Architecture au sein de l'école HEI (Hautes Etudes d'Ingénieur) à Lille et de l'Ecole Nationale Supérieure d'Architecture et de Paysage à Villeneuve d'Ascq, mes professeurs me surnomment "Miss France" pour mon élégance naturelle et mon entourage m'encourage à passer des castings de mannequin.
                    </p>
                    <p>Pourtant, je décide de faire de mes études et mon travail une priorité tout en gardant la photo qui m'accompagne depuis toujours comme loisir plaisir. En 2019, sollicitée par le service de communication des armées, je deviens ambassadrice des IMI (Ingénieur Militaire de l'Infrastructure) et réalise des shootings et vidéos pour l'armée Française : <a href="https://www.youtube.com/watch?v=GgLUtlDmtzs" target="_blank" rel="noreferrer" className='lien'>Je suis chef d'antenne infrastructure au SID ! - YouTube</a>
                    </p>
                    <p>Après une interruption prématurée de ma carrière militaire au grade de Capitaine suite à un accident de travail, mon loisir plaisir a pris de plus en plus de place.
                        En 1 an, j'ai été contacté par plus de 10 marques locales de Fréjus et Saint-Raphaël pour des shootings, catalogues et défilés de vêtements, sacs à mains, robes de mariée et bijoux.
                    </p>
                    <p>"Il faut prendre le temps de s'aimer et de se connaitre avant de se lancer dans une vie qui n'est pas faite pour soi. Il n'y a pas de norme au bonheur, pas de règles, pas de dates."
                    </p>
                </div>
                <div className='image'>
                    <img src={photo1} alt='schéhérazade en voyage humanitaire aux mali' className='photo1'></img>
                </div>
            </section>

            <div className='line'></div>

            <section  className="section">
                <div className='image2'>
                    <img src={photo2} alt='schéhérazade, harmonie et sa moitié' className='photo2'></img>
                </div>
                <div className='texte'>
                    <h3>Ma Passion : la BBE - La Beauté et le Bien Être intérieur et extérieur. </h3>
                    <p>Mes centres d'intérêts sont le sport et l'adrénaline, les animaux, la nature, les voyages, l'art, l'élégance, la beauté, la psychologie, l'aménagement, la décoration d'intérieur, le fengshui, la lithothérapie.<br/>
                        J'ai créé la BBE pour résumer le lien qui relie mon monde intérieur à mon monde extérieur, c'est-à-dire l'attirance pour la beauté et la recherche constante d'un bien être intérieur et extérieur.
                        J'ai baigné très jeune dans les soins énergétiques de l'être humain et de l'habitat. Mon arrière-grand-mère était la guérisseuse de son village en Algérie et j'observais, petite, ma mère effectuer des soins énergétiques à la maison.
                    </p>
                    <p>
                        L'éveil de conscience, que nous vivons tous, amène une montée en croissance de personnes attirées par les différentes méthodes de bien-être et de soins énergétiques. Je suis honorée et heureuse de pourvoir partager tout ça et également d'en découvrir un peu plus chaque jour. 
                    </p>
                    <p>
                        "Le Moi s'élève à la grâce d'un Toi<br/>
                        Ta perception de Moi est un reflet de Toi<br/>
                        Ma réaction à Toi est une sensibilité en Moi" 
                    </p>
                    <p>Depuis petite l'être humain me touche profondément. Mon envie de le comprendre et d'améliorer sa qualité de vie fait partie de moi :
                        "Bisounours, trop gentille, coach, innocente, psychologue, vieille âme" peu importe le mot qu'on peut utiliser pour parler de mon don la bienveillance !
                        Je me sens bien quand je sens que je fais du bien tout en me faisant du bien également. J'aime la beauté et l'élégance, qu'elle soit intérieure et extérieure.
                        Le lien social est important pour moi et nous sommes tous là pour nous élever les uns les autres, avoir une meilleure compréhension de soi-même à travers l'autre.
                    </p>
                    <p>Aujourd'hui et après un gros travail d'introspection, je considère que j'ai la maturité nécessaire pour savoir ce à quoi j'aspire dans le domaine de la mode.
                        Mon esprit scientifique fera toujours partie de moi et me pousse au quotidien à comprendre ce qui m'entoure et à donner du sens à mes actions.
                    </p>
                </div>
            </section>

            <div className='liste'>
                <p>Le dénominateur commun de chacune de mes expériences est la BBE, c'est pourquoi :</p>
                <ul>
                    <li>Ma personnalité d'ingénieur et de décoratrice d'intérieur continue d'exercer à travers le blog Instagram TMH <a href="https://www.instagram.com/toit_et_moi_en_harmonie/" target="_blank" rel="noreferrer" className='lien'>@Toit_et_moi_en_Harmonie</a> dont l'objectif et de partager des outils et des méthodes de bien-être chez Soi et en Soi. TMH c'est le lien subtil entre notre monde intérieur et notre monde extérieur. L'un existe parce que l'autre le crée.</li>
                    <li>Ma personnalité de Top Model s'épanouie à travers les shootings et défilés en lien avec la BBE que vous pouvez voir sur le book en ligne et sur le portfolio Instagram <a href="https://www.instagram.com/scheherazade_portfolio/" target="_blank" rel="noreferrer" className='lien'>@scheherazade_portfolio.</a></li>
                    <li>Et pour mon plus grand bonheur, ma moitié et ma chienne Harmonie, que vous voyez sur les photos, m'accompagne dans mes différents projets.</li>
                </ul>
            </div>

            <div className='line'></div>

            <section  className="section">
                <div className='texte'>
                    <h3>Mes Projets : Œuvrer pour la BBE à plus grande échelle.</h3>
                    <p>J'ai à cœur de pouvoir mettre en lumière les sujets qui me touchent à travers mes différents projets.</p>
                    <p>C'est une manière pour moi de sentir que je contribue à l'évolution de notre planète Terre.
                        C'est en quelque sorte ma façon de remercier la vie pour toute la beauté qui réside en moi et autour de moi, c'est ce que j'ai à cœur d'exprimer où que j'aille, quoique je fasse.
                    </p>
                    <p>C'est aussi une manière de mettre en valeur mon identité, mon Moi intérieur et non me conformer à ce que 'je crois qu'il serait bien d'être".</p>
                    <p>La BBE pour la liberté, l'égalité et la féminité !</p>
                    <p>Si toi aussi tu veux faire partie de cette aventure en contribuant pour la BBE, </p>
                    <p className='lien'>parle-moi de ton projet en  cliquant ici !</p>
                </div>
                <div className='image'>
                    <img src={photo3} alt='schéhérazade aux temps des coquelicots' className='photo3'></img>
                </div>
            </section>
        </div>
    )
}

export default Apropos