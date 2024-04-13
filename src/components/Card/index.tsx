import { CardProps, CardType } from "../../types";

import CoverImage from "../../assets/cover.png";
import HelmetImage from "../../assets/helmet-1.png";
import PotionImage from "../../assets/potion-1.png";
import RingImage from "../../assets/ring-1.png";
import ScrollImage from "../../assets/scroll-1.png";
import ShieldImage from "../../assets/shield-1.png";
import SwordImage from "../../assets/sword-1.png";

import "./styles.css";

function getCard(type: CardType) {
  switch (type) {
    case CardType.Helmet:
      return HelmetImage;
    case CardType.Potion:
      return PotionImage;
    case CardType.Ring:
      return RingImage;
    case CardType.Scroll:
      return ScrollImage;
    case CardType.Shield:
      return ShieldImage;
    case CardType.Sword:
      return SwordImage;
    default:
      return CoverImage;
  }
}

function Card({ card, onChooseCard }: CardProps) {
  const handleClick = () => onChooseCard(card);

  return (
    <div className="card">
      <img
        className={`card back ${card.flipped ? "visible" : "not-visible"}`}
        src={getCard(card.type)}
        alt={`${card.type.toString()}`}
      />
      <img
        className={`card front ${!card.flipped ? "visible" : "not-visible"}`}
        src={CoverImage}
        onClick={handleClick}
        alt="card back cover"
      />
    </div>
  );
}

export default Card;
