export default class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  rankOfCardAt(index) {
    return this.cards[index].rank
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
    this.cards.shift()
  }

  addCard(card) {
    this.cards.push(card)
  }
}