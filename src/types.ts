export enum CardType {
  Helmet,
  Potion,
  Ring,
  Scroll,
  Shield,
  Sword,
}

interface GridProps {
  incrementTurn: () => void;
}

interface GridRef {
  shuffle: () => void;
}

interface Card {
  type: CardType;
  flipped: Boolean;
  matched: Boolean;
  index?: number;
}

interface CardProps {
  card: Card;
  onChooseCard: (card: Card) => void;
}

interface HeaderProps {
  title: String;
}

export type { GridRef, GridProps, CardProps, HeaderProps, Card };
