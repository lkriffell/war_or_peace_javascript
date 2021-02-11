import Card from '../src/card.js'
import Deck from '../src/deck.js'
import Player from '../src/player.js'
import assert from 'assert'

describe('Payer', function() {
  const cardOne = new Card('Hearts', 'King', 13)
  const cardTwo = new Card('Diamonds', '7', 7)
  const cardThree = new Card('Spades', '9', 9)
  const cards = [cardOne, cardTwo, cardThree]
  const deck = new Deck(cards)
  const player = new Player("Barry", deck)

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