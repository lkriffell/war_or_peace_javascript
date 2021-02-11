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
    let highRank = []
    this.cards.forEach(card => {
      if (card.rank > 10) {
        highRank.push(card)
      }
    });
    return highRank
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