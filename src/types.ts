export enum CardType {
  Helmet,
  Potion,
  Ring,
  Scroll,
  Shield,
  Sword,
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

export type { CardProps, HeaderProps, Card };
