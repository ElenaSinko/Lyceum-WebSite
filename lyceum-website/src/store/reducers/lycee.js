import {CHANGE_MENU_STATE, CLOSE_MENU, OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW} from "../actions/actionTypes";

const initialState = {
    menu: false,
    modalWindowIsShown: false,
    message: '',
    directors: [
        {
            name: 'M le Directeur',
            src: '',
            title: `Directeur des Études`,
            cite: '(1er cite)',
            telephone: `0556338332`,
            email: `dir1@mail.ru`,
        }, {
            name: 'M le Directeur',
            src: '',
            title: `Directeur des Études`,
            cite: '(2ndr cite)',
            telephone: `0556338332`,
            email: `dir2@mail.ru`,
        },{
            name: 'M le Directeur',
            src: '',
            title: `Directeur des Études`,
            cite: '(3em cite)',
            telephone: `0556338332`,
            email: `dir3@mail.ru`,
        },  {
            name: 'M le Proviseur Adjoint',
            src: '',
            title: 'Proviseur Adjoint',
            telephone: `0556338332`,
            email: `prov@mail.ru`,
        }
    ],
    announcements: [
        {
        title: 'Affectation au lycée Mbele en prébac 2de-1ère-Terminale',
        text: ['Le lycée Gustave Eiffel n\'a pas vocation à instruire directement les demandes d\'affectation.Seule l\'inspection académique peut affecter des élèves dans les 3 niveaux de prébac (2de GT/Pro, 1ère et terminale) et ce aussi bien dans le cadre de l\'affectation par internet  :procédure Affelnet pour les 2des (+ procédure téléservice pour les collèges publics cette année) et les 1ères technologiques que par le biais de demandes de changement d\'établissement lesquelles sont toujours initiées par les établissements d\'origine des élèves.',
            'A l\'heure actuelle aucun calendrier n\'a encore été arrêté concernant la procédure d\'affectation mais ce sera toujours l\'établissement fréquenté par l\'élève qui sera la ressource à contacter concernant cette procédure.',
            'Pour les élèves qui arrivent du privé hors contrat, d\'une autre académie ou de l\'étranger il faudra s\'adresser auprès des services de l\'inspection académique (procédures particulières).',
            'Pour toutes les raisons évoquées ci-dessus, il est donc inutile de solliciter directement les services du lycée Gustave Eiffel pour des inscriptions en prébac.', 'Pages à consulter sur notre site :', 'Pour les élèves qui veulent intégrer une seconde :', 'https://www.eiffel-bordeaux.org/bienvenue/actualites/apres-la-3eme-entre...\n' +
            '\n' +
            'https://www.liberation.fr/checknews/2020/05/01/ecoles-colleges-lycees-qui-ouvre-quand_1786962'],
        type: 'simple'
        }, {
        title: 'Report des entretiens euro anglais',
        text: ['Bonjour,', 'C’était l’une des grandes questions qui se posaient en amont du discours du Premier ministre Edouard Philippe sur le déconfinement : quand les enfants et les adolescents retourneraient-ils à l’école, au collège, et au lycée ? Une partie de l’allocution a bien porté sur ce sujet, mais de manière assez évasive, relevait alors Libération. Le ministre de l’Education, Jean-Michel Blanquer, est venu confirmer ces éléments de réponses, sans trancher toutes les questions, lors d’une interview mercredi sur RMC et BFM TV. CheckNews a également échangé avec le service de presse du ministère sur le sujet.', 'En préambule, le ministère de l’Education nous rappelle que «pour tous les niveaux, le retour des enfants à l’école se fera sur la base du volontariat des familles». Par ailleurs, les autorités ont produit un protocole sanitaire pour adapter l’accueil des enfants dans les classes.'],
        type: 'simple'
        }, {
        title: 'Information Coronavirus',
        text: ['Bonjour,', 'C’était l’une des grandes questions qui se posaient en amont du discours du Premier ministre Edouard Philippe sur le déconfinement : quand les enfants et les adolescents retourneraient-ils à l’école, au collège, et au lycée ? Une partie de l’allocution a bien porté sur ce sujet, mais de manière assez évasive, relevait alors Libération. Le ministre de l’Education, Jean-Michel Blanquer, est venu confirmer ces éléments de réponses, sans trancher toutes les questions, lors d’une interview mercredi sur RMC et BFM TV. CheckNews a également échangé avec le service de presse du ministère sur le sujet.', 'En préambule, le ministère de l’Education nous rappelle que «pour tous les niveaux, le retour des enfants à l’école se fera sur la base du volontariat des familles». Par ailleurs, les autorités ont produit un protocole sanitaire pour adapter l’accueil des enfants dans les classes.'],
        type: 'important'
        }],
    vacancies: [
        {
            vacancy: `Professeur d'SVT`,
            level: '(niveau: 5ème-6ème)',
        }, {
            vacancy: `Professeur d'espagnol`,
        }, {
            vacancy: `Professeur d'espagnol`,
            level: '(niveau: 4ème-3ème)',
        },{
            vacancy: `Surveillant`,
        }
    ],
};

export default function lyceeReducer(state = initialState, action) {
  switch (action.type) {
      case CHANGE_MENU_STATE:
          return {
              ...state, menu: !state.menu
          }
      case CLOSE_MENU:
          return {
              ...state, menu: false
          }
      case OPEN_MODAL_WINDOW:
          return {
              ...state, modalWindowIsShown: true, message: action.message
          }
      case CLOSE_MODAL_WINDOW:
          return {
              ...state, modalWindowIsShown: false
          }
      default:
          return state
  }
}
