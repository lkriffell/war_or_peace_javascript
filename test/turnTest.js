import Card from '../src/card.js'
import Deck from '../src/deck.js'
import Player from '../src/player.js'
import Turn from '../src/turn.js'
import assert from 'assert'

describe('Payer', function() {
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

  describe('class methods', function() {
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
  });
});