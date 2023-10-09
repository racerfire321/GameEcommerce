import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import heroClassName from "./heroClassName";

const HeroSection: FC<{ showLink?: boolean }> = (props) => {
  const { showLink } = props;

  return (
    <section className={heroClassName.hero}>
      <div className={heroClassName.grid}>
        <div className={heroClassName.content}>
          <h1 className={heroClassName.heading}>Gaming</h1>
          <h1 className={heroClassName.ctaText}>
            Unlock Your Gaming Potential
          </h1>
          <p className={heroClassName.paragraph}>
            Discover, Learn, and Conquer with Our Extensive Collection of Games
          </p>
          {showLink && (
            <div className="mt-16 sm:mt-10 rounded">
              <Link href="#recent-games" className={heroClassName.button}>
                Find Games
              </Link>
            </div>
          )}
        </div>

        <div className={heroClassName.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            alt="3D Game Development"
            className={heroClassName.image}
            width="400"
            height={400}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;