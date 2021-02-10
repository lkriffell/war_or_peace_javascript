import Card from '../lib/card.js'
import Deck from '../lib/deck.js'
import assert from 'assert'

describe('Deck', function() {
  var cardOne = new Card('Hearts', 'King', 13)
  var cardTwo = new Card('Diamonds', '7', 7)
  var cardThree = new Card('Spades', '9', 9)
  var cards = [cardOne, cardTwo, cardThree]
  var deck = new Deck(cards)

  it('can exist', function() { 
    assert(deck instanceof Deck)
  });

  it('has cards', function() { 
    assert.equal(deck.cards[0].suit, 'Hearts')
    assert.equal(deck.cards[0].value, 'King')
    assert.equal(deck.cards[0].rank, 13)
    assert.equal(deck.cards[2].suit, 'Spades')
    assert.equal(deck.cards[2].value, '9')
    assert.equal(deck.cards[2].rank, 9)
  });

  describe('class methods', function() {
    it('rankOfCardAt', function() { 
      assert(deck.rankOfCardAt, 'Hearts')
    });
  });
});