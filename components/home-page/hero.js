import classess from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image showing Görkem"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Görkem</h1>
      <p>
        I blog about web development - especially frontend framewroks like
        React.
      </p>
    </section>
  );
}

export default Hero;
