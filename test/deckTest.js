import Card from '../src/card.js'
import Deck from '../src/deck.js'
import assert from 'assert'

describe('Deck', function() {
  const cardOne = new Card('Hearts', 'King', 13)
  const cardTwo = new Card('Diamonds', '7', 7)
  const cardThree = new Card('Spades', '9', 9)
  const cards = [cardOne, cardTwo, cardThree]
  const deck = new Deck(cards)

  it('can exist', function() { 
    assert(deck instanceof Deck)
  })

  it('has cards', function() { 
    assert.equal(deck.cards[0].suit, 'Hearts')
    assert.equal(deck.cards[0].value, 'King')
    assert.equal(deck.cards[0].rank, 13)
    assert.equal(deck.cards[2].suit, 'Spades')
    assert.equal(deck.cards[2].value, '9')
    assert.equal(deck.cards[2].rank, 9)
  });

  describe('instance methods', function() {
    it('rankOfCardAt', function() { 
      assert.equal(deck.rankOfCardAt(0), 13)
      assert.equal(deck.rankOfCardAt(1), 7)
      assert.equal(deck.rankOfCardAt(2), 9)
    })

    it('highRankingCards', function() { 
      assert.equal(deck.highRankingCards()[0], cardOne)
      assert.equal(deck.highRankingCards().length, 1)
    })

    it('percentHighRanking', function() { 
      assert.equal(deck.percentHighRanking(), 33)
    })

    it('removeCard', function() { 
      deck.removeCard()
      assert.equal(deck.cards.length, 2)
    })

    it('addCard', function() { 
      deck.addCard(cardOne)
      assert.equal(deck.cards[2], cardOne)
      assert.equal(deck.cards.length, 3)
    })
  })
})