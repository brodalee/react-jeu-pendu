## Deviner un mot ou une phrase
Le jeu du pendu consiste à faire deviner un mot ou une phrase, en essayant tour à tour des lettres possibles. Chaque essai révèle les lettres correspondantes dans le schéma du texte à deviner.

Dans le jeu classique, chaque essai infructueux (lettre non utilisée) fait progresser le dessin d’un pendu, et lorsque le dessin est complet (tête, corps, membres), on a perdu. C’est un jeu à deux, tour par tour, et la personne qui réalise l’ultime mauvais essai a perdu.

## Pour cette activité, simplifions un peu
Afin de conserver une activité assez rapide à mettre en œuvre, on mettra de côté le côté « pendu » à proprement parler, ainsi que le tour par tour, pour se concentrer sur la mécanique de découverte du mot. Des extensions possibles vous seront proposées au-delà de l'objectif principal.

Le jeu est donc orienté mono-joueur·se, et une partie consiste donc à tirer au sort un mot ou une phrase, afficher le masque associé, et proposer des saisies possibles pour toutes les lettres de l’alphabet latin. On peut alors essayer une lettre après l'autre, ce qui actualise le masque jusqu’à ce que tout le texte soit visible : on pourra alors recommencer une partie.

Le but consiste donc, simplement, à trouver le texte en utilisant le moins d’essais possibles.

## Consignes d’interface utilisateur
L’affichage comprend deux parties : le masque de la devinette, et une série de boutons d'essai, à raison d’un par lettre. Par exemple, deux rangées de 13.
Le masque utilise un _underscore_ ( _ ) pour toute lettre de la devinette qui n’a pas encore été révélé.
On prend soin de bien séparer visuellement chaque lettre à deviner, pour faciliter la perception des tailles des mots.
Pour simplifier la saisie et l’exploitation des lettres, on cantonnera les devinettes et les boutons à l'alphabet latin majuscule, sans signes diacritiques (accents, cédilles, etc.). Donc 26 lettres de A à Z.
Les lettres déjà essayées doivent être signalées visuellement (par exemple, grisées). Il n'est pas obligatoire d'interdire une nouvelle tentative dessus, c'est comme vous voulez.
Une fois le texte deviné, la liste des boutons de lettres est remplacée par un seul bouton qui permet de redémarrer une partie… sans avoir à recharger la page !

## Consignes de réalisation
Partez d’une nouvelle application générée avec  create-react-app  
Vous pouvez retirer  index.css  et  logo.svg , et ce serait bien de changer le  <title>  de  public/index.html
Le besoin est assez simple pour tout faire dans  App.js (et styler avec  App.css ), mais si vous tenez à découper en sous-composants (par exemple, pour le « clavier » de 26 touches), libre à vous.
Le déroulement de la partie se base naturellement sur une évolution de l’état local du composant<App/>.
Afin de vous permettre de vous concentrer sur React, vous trouverez ci-dessous une petite fonction utile qui construit le masque affiché à partir du texte à deviner et de la série des lettres déjà testées. Cette dernière est supposée être un Set (ES2015), mais vous pouvez en faire un simple tableau en remplaçant le.has() par un.includes().
  
## Extensions possibles
Ces suggestions n'ont pas d'effet sur la validation de cette activité, mais vous permettent de renforcer vos compétences. Elles vous permettent de créer un jeu véritablement abouti que vous pouvez fièrement afficher sur votre compte GitHub à l'attention de vos futurs clients/employeurs !

## Score / Compteur
Comptez le nombre d’essais et affichez-le au fur et à mesure.
Vous pouvez décider d’interdire un nouvel essai d’une lettre, ou au contraire compter double un essai d’une lettre déjà tentée (si vous indiquiez visuellement qu’elle l’était).
Pour calculer plutôt un score, vous pouvez compter 2 points pour une lettre présente, -1 pour une absente, et -2 pour une lettre retentée, par exemple.

## Mode deux joueurs
Ajoutez à l’état un tableau de noms de joueurs et un joueur courant, qui bascule dès qu’on tente une lettre absente (il faut évidemment gérer la saisie initiale, puis afficher le joueur courant).
Si vous voulez introduire une notion de « perdu » (et pas seulement de vainqueur au moment de la dernière tentative réussie), imposez un nombre maximum de lettres absentes par joueur (ou au global) et gérez leur comptage (afficher ça serait alors souhaitable aussi).

## Utiliser le clavier plutôt que des boutons
Pour permettre l’utilisation du clavier, deux possibilités :
Un champ textuel stylé pour être « invisible » (pas de bordures, texte de la même couleur que le fond, etc.) qui conserve le focus, a une valeur vide, mais vous réagissez au `onChange` pour récupérer la valeur et la traiter comme lettre, à mettre alors en majuscule. On ignore les saisies hors alphabet latin ASCII.
L’interception de l’événement   keypress  au niveau dedocument. Cela nécessite toutefois que vous gériez l’attache et la libération de ces événements manuellement dans  componentDidMount()   et  componentWillUnmount() , et empêchera, si vous le souhaitiez, la mise en place de tests unitaires en mode _shallow_.

## Ajouter un véritable pendu
Soit en dessinant sur un  <canvas> , soit en prédéfinissant les images des différentes étapes et en affichant la bonne, implémentez le véritable Jeu du Pendu !
