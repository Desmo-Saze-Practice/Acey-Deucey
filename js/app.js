// const core = require('./core');

var app = {
  draw: [],
  bankroll: 100,
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'],
  /**
   * Cette fonction a pour but de commencer un nouveau tour en tirant 2 nombres aléatoires, puis met à jour les cartes en conséquence et masque l'élément résultat
   */
  updateCards: function () {
    // clean text field
    potElement = document.getElementById('pot');
    potElement.innerHTML = '';

    // defines cards value
    const cardLowElement = document.getElementById('card_low');
    const cardHighElement = document.getElementById('card_high');

    // attributes corect css regarding numbers draw out
    cardLowElement.className = `card val-${app.cards[app.values.min]}`;
    cardHighElement.className = `card val-${app.cards[app.values.max]}`;

  },
  newRound: function () {
    document.getElementById('potContainer').className = '';

    const resultElement = document.getElementById('result');
    document.getElementById('question').className = 'card__face';
    document.getElementById('question--back').className = 'card';
    // display pot if not first round
    resultElement.className = '';

    // initialize min and max values to generate cards accordingly
    app.values = core.getTwoNumbers(0, 12);

    app.updateCards();

    // hides replay button
    resultElement.classList.add('hidden');
  },

  handleInputSubmit: function () {

    //get pot element then parse its value string into number
    app.potElement = document.getElementById('pot');
    app.potValue = parseInt(app.potElement.value, 10);

    // check for errors from user
    if (app.potValue != parseInt(app.potValue, 10)) {
      alert('Your bet must be a number.');
    }
    else if (app.potValue < 0) {
      alert('Your bet must be greater or equal to zero.');
    }
    else if (app.potValue > app.bankroll) {
      alert('Your bet must inferior or equal to your bankroll.');
    }

    // if no error, proced to next step
    else {
      app.endCurrentRound();
    }
  },

  endCurrentRound: function (potValue) {
    // Etape 6 ici

    const bankrollElement = document.getElementById('bankroll');

    // generate one random number to define random card
    app.randomNumber = core.getRandomNumber(0, 12);

    // get unknown card
    const questionCardElement = document.getElementById('question');

    //display random card base on random number with the appropriate class
    questionCardElement.className = `card card__face val-${app.cards[app.randomNumber]}`;
    const flipperCardElement = document.querySelector('.flipperCard');
    flipperCardElement.classList.toggle('is-flipped');

    // winning cituation
    if (app.randomNumber >= app.values.min && app.randomNumber <= app.values.max) {
      app.bankroll -= app.potValue;
      app.potValue *= 2;
      app.bankroll += app.potValue;
      bankrollElement.innerHTML = '';
      bankrollElement.innerHTML = app.bankroll;
      core.showResults(`You have won ${app.potValue /= 2} points.`);
    }

    // Losing cituation
    else {
      app.bankroll -= app.potValue;
      bankrollElement.innerHTML = '';
      bankrollElement.innerHTML = app.bankroll;
      core.showResults(`You have lost ${app.potValue} points.`);
    }
  },


  /**
  * Initialise l'application
  */
  init: function () {
    // On accroche la fonction "newRound" au bouton "newRound".
    document.getElementById('newRound').addEventListener('click', app.newRound);

    // sbmit listener
    document.getElementById('submitPot').addEventListener('click', function (event) {
      event.preventDefault();
      app.handleInputSubmit();
    });

    // Enfin, on lance le premier round !
    app.newRound();
  },

};


// Lorsque la page est totalement chargée, on lance la fonction app.init
document.addEventListener('DOMContentLoaded', app.init);

