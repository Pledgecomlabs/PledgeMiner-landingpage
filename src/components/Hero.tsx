import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-28">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <div className="hero-content">
            <h1 className="text-white font-bold text-4xl xl:text-[55px] leading-tight capitalize">
              The simplest way to mine cryptocurrency
            </h1>

            <p className="text-white mt-5 mb-8">
              With PledgeMiner, you earn Pledge tokens daily — no hardware, no
              electricity costs, no hidden fees. Just install, click, and grow
              your balance.
            </p>

            <div className="flex flex-col items-start sm:flex-row">
              <a
                href="https://chromewebstore.google.com/detail/pledgecom-extension/amfpepiagonfjlalcjcnmpbbjnmnpleb?authuser=0&hl=en-GB&pli=1"
                target="_blank"
                className="cta text-center"
              >
                Download PledgeMiner
              </a>

              <Link
                href="/"
                className="cta-outline mt-5 sm:mt-0 sm:ml-6 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={"/hero.png"}
              width={1000}
              height={1000}
              alt="Image of PledgeCOM Chrome Extension"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
