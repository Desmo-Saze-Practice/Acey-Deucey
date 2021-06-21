// const core = require('./core');

var app = {
  bankroll: 100,
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'],

  newRound: function () {
    // display pot allowing player to gamble
    document.getElementById('potContainer').className = '';

    const resultElement = document.getElementById('result');
    document.getElementById('question--back').className = 'card card__face--back';
    document.getElementById('question').className = `card card__face card__face--front val-${app.cards[app.randomNumber]}`;
    resultElement.className = '';

    // initialize min and max values to generate cards accordingly
    app.values = core.getTwoNumbers(0, 12);

    app.updateCards();

    // hides replay button
    resultElement.classList.add('hidden');
  },

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

    const bankrollElement = document.getElementById('bankroll');

    // generate one random number to define random card
    app.randomNumber = core.getRandomNumber(0, 12);

    // get unknown card
    const questionCardElement = document.getElementById('question');

    //display random card base on random number with the appropriate class
    questionCardElement.className = `card card__face card__face--front val-${app.cards[app.randomNumber]}`;
    const flipperCardElement = document.querySelector('.flipContainer');
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

  init: function () {

    // first round
    app.newRound();

    // to submit player's bet
    document.getElementById('submitPot').addEventListener('click', function (event) {
      event.preventDefault();
      app.handleInputSubmit();
    });
    
    // on using "replay" button
    document.getElementById('newRound').addEventListener('click', function() {
      const flipperCardElement = document.querySelector('.flipContainer');
      flipperCardElement.classList.toggle('is-flipped');
      app.newRound();
    });

  },

};

document.addEventListener('DOMContentLoaded', app.init);

