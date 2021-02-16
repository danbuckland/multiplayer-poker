import Game from './scripts/game'
import Hand from './scripts/hand'
import './styles.css'

const poker = new Game()

const communityCards = document.querySelector('#community-cards')
const redrawButton = document.querySelector('#redraw')
const bestHandText = document.querySelector('#best-hand-text')

const hand = new Hand()

const prettyPrint = (cards) => {
  let prettyString = ''
  for (let card of cards) {
    prettyString += `${card.name} of ${card.suit}, `
  }
  return prettyString.substring(0, prettyString.length - 2)
}

const renderCards = (cards) => {
  communityCards.innerHTML = ''
  cards.forEach((card) => {
    const cardImage = document.createElement('img')
    cardImage.setAttribute('src', `cards/${card.code}.svg`)
    cardImage.setAttribute('class', 'card')
    cardImage.setAttribute('alt', `${card.name} of ${card.suit}`)
    communityCards.appendChild(cardImage)
  })
}

redrawButton.addEventListener('click', () => {
  poker.reset()
  hand.empty()
  drawnCards = poker.deck.draw(5)
  renderCards(drawnCards)
  hand.addCards(...drawnCards)
  bestHandText.textContent = `You got a ${hand.getName()}`
  console.log(prettyPrint(drawnCards))
})

let drawnCards = poker.deck.draw(5)
renderCards(drawnCards)
hand.addCards(...drawnCards)
bestHandText.textContent = `You got a ${hand.getName()}`
console.log(prettyPrint(drawnCards))
