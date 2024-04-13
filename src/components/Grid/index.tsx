import { useCallback, useEffect, useState } from "react";
import { Card, CardType } from "../../types";
import CardComponent from "../Card";

import "./styles.css";

const cards: Array<Card> = [
  { type: CardType.Helmet, flipped: false, matched: false },
  { type: CardType.Helmet, flipped: false, matched: false },
  { type: CardType.Scroll, flipped: false, matched: false },
  { type: CardType.Scroll, flipped: false, matched: false },
  { type: CardType.Potion, flipped: false, matched: false },
  { type: CardType.Potion, flipped: false, matched: false },
  { type: CardType.Sword, flipped: false, matched: false },
  { type: CardType.Sword, flipped: false, matched: false },
  { type: CardType.Shield, flipped: false, matched: false },
  { type: CardType.Shield, flipped: false, matched: false },
  { type: CardType.Ring, flipped: false, matched: false },
  { type: CardType.Ring, flipped: false, matched: false },
];

function shuffleCards(cards: Array<Card>) {
  return cards
    .sort((cardA, cardB) => Math.random() - 0.5)
    .map((card) => {
      card.index = Math.round(100000 * Math.random());
      return card;
    });
}

function Grid() {
  const [boardCards, setBoardCards] = useState<Card[]>(cards);
  const [firstChoice, setFirstChoice] = useState<Card | null>(null);
  const [secondChoice, setSecondChoice] = useState<Card | null>(null);

  const onChooseCard = (card: Card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  useEffect(() => {
    const shuffledCards = shuffleCards(cards);
    setBoardCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.type === secondChoice.type) {
        console.log("match");
      } else {
        console.log("mismatch");
      }
      resetTurn();
    }
  }, [firstChoice, secondChoice]);

  return (
    <div className="grid">
      {boardCards.map((card) => (
        <CardComponent card={card} onChooseCard={onChooseCard} key={card.index} />
      ))}
    </div>
  );
}

export default Grid;
