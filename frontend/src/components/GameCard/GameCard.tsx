import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import gameClassName from "./gameClassName";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price: number;
}

const GameCard: FC<GameCardProps> = (props) => {
  const { gameName, imageUrl, slug, price } = props;

  return (
    <Link href={`/games/${slug}`} className={gameClassName.container}>
      <h3 className={gameClassName.price}>{price} $</h3>

      <Image
        className={gameClassName.image}
        src={imageUrl}
        alt={gameName}
        width={200}
        height={200}
      />

      <div className={gameClassName.gameName}>{gameName}</div>
    </Link>
  );
};

export default GameCard;