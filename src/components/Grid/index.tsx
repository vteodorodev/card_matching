import React, { useCallback, useEffect, useImperativeHandle, useState } from "react";
import { Card, CardType, GridProps, GridRef } from "../../types";
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

function Grid({ incrementTurn }: GridProps, ref: any) {
  const [boardCards, setBoardCards] = useState<Card[]>(cards);
  const [firstChoice, setFirstChoice] = useState<Card | null>(null);
  const [secondChoice, setSecondChoice] = useState<Card | null>(null);

  const flipCard = (card: Card) => {
    setBoardCards((prev) =>
      prev.map((c) => {
        if (c.index === card.index) {
          return { ...c, flipped: !c.flipped };
        } else {
          return c;
        }
      })
    );
  };

  const onChooseCard = (card: Card) => {
    flipCard(card);
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  const shuffleBoard = useCallback(() => {
    const shuffledCards = shuffleCards(cards);
    setBoardCards(shuffledCards);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      shuffle: shuffleBoard,
    };
  });

  useEffect(shuffleBoard, [shuffleBoard]);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.type === secondChoice.type) {
      } else {
        setTimeout(() => {
          flipCard(firstChoice);
          flipCard(secondChoice);
        }, 500);
      }
      resetTurn();
      incrementTurn();
    }
  }, [firstChoice, secondChoice, incrementTurn]);

  return (
    <div className="grid">
      {boardCards.map((card) => (
        <CardComponent card={card} onChooseCard={onChooseCard} key={card.index} />
      ))}
    </div>
  );
}

export default React.forwardRef<GridRef, GridProps>(Grid);
