import Card from '../src/card.js'
import Deck from '../src/deck.js'
import Player from '../src/player.js'
import Turn from '../src/turn.js'
import assert from 'assert'

describe('Turn', function() {
  var cardOne = new Card('Hearts', 'King', 13)
  var cardTwo = new Card('Diamonds', '7', 7)
  var cardThree = new Card('Spades', '9', 9)
  var cardFour = new Card('Hearts', '2', 2)
  var cardFive = new Card('Diamonds', 'King', 13)
  var cardSix = new Card('Spades', '9', 9)
  var cardStackOne = [cardOne, cardTwo, cardThree]
  var cardStackTwo = [cardFour, cardFive, cardSix]
  var deckOne = new Deck(cardStackOne)
  var deckTwo = new Deck(cardStackTwo)
  var player1 = new Player("Barry", deckOne)
  var player2 = new Player("Dre", deckTwo)
  var turn = new Turn(player1, player2)

  it('can exist', function() { 
    assert(turn instanceof Turn)
    assert.equal(turn.player1.name, "Barry")
    assert.equal(turn.player2.name, "Dre")
  });

  describe('instance methods', function() {
    describe('turnType()', function() {
      it('turnType basic', function() { 
        assert.equal(turn.turnType(), 'basic')
      });
  
      it('turnType war', function() { 
        player2.deck.removeCard()
        assert.equal(turn.turnType(), 'war')
      });

      it('turnType MAD', function() { 
        let newCard = new Card('Hearts', '9', 9)
        player2.deck.addCard(newCard);
        assert.equal(turn.turnType(), 'MAD')
      });
    });

    describe('winner()', function() {
      it('winner basic', function() { 
        player2.deck.removeCard()
        assert.equal(turn.turnType(), 'basic')
        assert.equal(turn.winner(), player1)
      });
      
      it('winner war', function() { 
        player2.deck.cards.unshift(cardFive);
        player1.deck.cards.unshift(cardFive);
        assert.equal(turn.turnType(), 'war')
        assert.equal(turn.winner(), player2)
      });
      
      it('winner MAD', function() { 
        player1.deck.removeCard()
        assert.equal(turn.turnType(), 'MAD')
        assert.equal(turn.winner(), 'No Winner X(')
      });
    });

    describe('pileCards()', function() {
      it('pileCards basic', function() { 
        player1.deck.removeCard()
        assert.equal(turn.turnType(), 'basic')
        turn.pileCards()
        assert.equal(turn.cardPile.length, 2)
      });
      
      it('pileCards war', function() { 
        player1.deck.addCard(cardOne)
        player1.deck.addCard(cardTwo)
        player2.deck.addCard(cardFive)
        assert.equal(turn.turnType(), 'war')
        turn.cardPile = []
        turn.pileCards()
        assert.equal(turn.cardPile.length, 6)
      });
      
      it('pileCards MAD', function() { 
        player1.deck.cards = [cardOne, cardTwo, cardThree]
        player2.deck.cards = [cardFive, cardFour, cardSix]
        assert.equal(turn.turnType(), 'MAD')
        turn.cardPile = []
        turn.pileCards()
        assert.equal(turn.cardPile.length, 0)
      });
    });
    describe('awardSpoils()', function() {
      it('awardSpoils', function() {
        turn.player1.deck.cards = [cardOne, cardTwo, cardThree]
        turn.player2.deck.cards = [cardFour, cardFive, cardSix]
        turn.cardPile = []
        let winner = turn.winner()
        turn.pileCards()
        turn.awardSpoils(winner)
        assert.equal(player1.deck.cards.length, 4)
      });
    });
  });
});