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
    assert(deck.cards[0].suit, 'Hearts')
    assert(deck.cards[0].rank, 'King')
    assert(deck.cards[0].value, 13)
    assert(deck.cards[2].suit, 'Spades')
    assert(deck.cards[2].rank, '9')
    assert(deck.cards[2].value, 9)
  });

  describe('class methods', function() {
    // it('rankOfCardAt', function() { 
    //   assert(deck.cards[0].suit, 'Hearts')
    //   assert(deck.cards[0].rank, 'King')
    //   assert(deck.cards[0].value, 13)
    //   assert(deck.cards[2].suit, 'Spades')
    //   assert(deck.cards[2].rank, '9')
    //   assert(deck.cards[2].value, 9)
    // });
  });
});