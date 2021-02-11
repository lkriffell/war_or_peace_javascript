export default class Deck {
  constructor(cards) {
    this.cards = cards
  }

  rankOfCardAt(index) {
    if (this.cards[index]) {
      return this.cards[index].rank
    } else if (this.cards.length > 1) {
      return this.cards[this.cards.length - 1].rank
    }
  }

  highRankingCards() {
    return this.cards.filter(function (card) {
      return card.rank > 10
    })
  }

  percentHighRanking() {
    let percent = (this.highRankingCards().length / this.cards.length) * 100
    return Math.round(percent + Number.EPSILON)
  }

  removeCard() {
    if (this.cards.length > 0) {
      this.cards.shift()
    }
  }

  addCard(card) {
    this.cards.push(card)
  }
}