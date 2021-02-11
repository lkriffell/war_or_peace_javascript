import Card from '../src/card.js'
import Deck from '../src/deck.js'
import Player from '../src/player.js'
import assert from 'assert'

describe('Payer', function() {
  var cardOne = new Card('Hearts', 'King', 13)
  var cardTwo = new Card('Diamonds', '7', 7)
  var cardThree = new Card('Spades', '9', 9)
  var cards = [cardOne, cardTwo, cardThree]
  var deck = new Deck(cards)
  var player = new Player("Barry", deck)

  it('can exist', function() { 
    assert(player instanceof Player)
  });

  describe('instance methods', function() {
    it('hasLost', function() { 
      assert.equal(player.hasLost(), false)
      player.deck.removeCard()
      player.deck.removeCard()
      player.deck.removeCard()
      assert.equal(player.hasLost(), true)
    });
  });
});