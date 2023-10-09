import {FC} from 'react'

import GameCategoryCardClassNames from './GameCategoryCardClassName';
import Image from 'next/image'; 

import Link from 'next/link';
interface GameCategoryCardprops{
    categoryImage: string;
    categoryName: string;
    slug:string;
}




const GameCategoryCard: FC<GameCategoryCardprops> = (props) => 
{
const {categoryImage,categoryName,slug} =props;
const {image,name,container,arrow} = GameCategoryCardClassNames
  return <Link href={`categories/${slug}` } className = {container}>
    <Image src={categoryImage} alt={categoryName} width={200}
    height={200} className={image}/>
  
  <h3 className={name}>{categoryName}</h3>
  <Image src="/images/arrow.svg"alt="veiw" width={20}
    height={20} className={image}/>
  </Link>
}

export default GameCategoryCard