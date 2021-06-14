var app = {

  bankroll: 100,

  /**
   * Cette fonction a pour but de commencer un nouveau tour en tirant 2 nombres aléatoires, puis met à jour les cartes en conséquence et masque l'élément résultat
   */
  newRound: function () {
    // Etape 2.1
    // On commence par mettre à jour la propriété values de l'objet app avec un objet qui contient la valeur de la carte la plus basse et celle de la carte la plus haute
    // Pour cela assigne un objet dans app.values avec une propriété min qui a pour valeur 3 et une propriété max qui a pour valeur 5

    // Etape 2.2
    // Puis écris en texte la valeur de la carte dans l'élément HTML qui représente la carte correspondante
    // Pour la carte du milieu, on va écrire "?" dedans (il faut attendre que le joueur mise pour tirer cette carte)
    // Au final tu dois cibler chacun leur tour, les 3 cartes, pour modifier ensuite leur contenu textuel

    // Etape 2.3
    // Pour finir, il faut masquer l'élément résultat, pense à bien le cibler avant de le masquer
    // Pour le masquer, applique lui la classe `hidden` qui est déjà présente dans le css
  },

  /**
   * Sera déclenché par la soumission d'un formulaire et obtiendra la valeur de l'input qui a l'id "pot". C'est la mise du joueur
   */
  handleInputSubmit: function (event) {
    // Etape 5.1
    // Cette fonction sera déclenchée par la soumission d'un formulaire. Enfin... quand tu l'auras branchée sur la soumission du formulaire 😈
    // Essaye d'attacher un listener à ton formulaire dans app.init avant de continuer
    // Un simple alert() te permettra de vérifier si ton formulaire est bien branché
    
    // Etape 5.2
    // L'alert s'affiche ? Mais quand tu valides, la page s'actualise ? Commence par prévenir le rechargement de la page (qui est le comportement par défaut de ce genre d'event).

    // Etape 5.3
    // Ensuite, récupère la valeur de l'input qui porte l'id "pot" ( la mise du joueur ), après l'avoir ciblé. Assure toi de transformer la valeur récuperée en nombre.

    // Etape 5.4 (bonus)
    // Il va falloir faire une série de vérification sur cette valeur: 
    // - la valeur de la mise doit être un nombre entier
    // - la valeur de la mise doit être nulle ou positive.
    // - la mise ne peut pas être supérieur aux fonds du joueur (qu'on appelle souvent "bankroll") accessible via app.bankroll
    // Si on entre dans un cas d'erreur, affiche une alerte avec un message cohérent.


    // Si tout va bien ( et UNIQUEMENT dans ce cas), il faut lancer la fonction qui termine le round (que tu vas compléter à l'étape 6)
    // Pense qu'elle attend en paramètre la valeur de la mise ( que tu viens de récupérer ) il faut donc lui passer un argument ;)
  },

  /**
   * Termine le round en cours
   */
  endCurrentRound: function (potValue){
    // Etape 6 ici
  },


   /**
   * Initialise l'application
   */
  init: function () {
    // On accroche la fonction "newRound" au bouton "newRound".
    document.getElementById('newRound').addEventListener('click', app.newRound);

    // Enfin, on lance le premier round !
    app.newRound();
  },

};


// Lorsque la page est totalement chargée, on lance la fonction app.init
document.addEventListener('DOMContentLoaded', app.init);
