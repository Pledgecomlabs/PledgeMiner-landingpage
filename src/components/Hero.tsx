import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-28">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <div className="hero-content">
            <h1 className="text-white font-bold text-3xl xl:text-[55px] leading-tight capitalize">
              The simplest way to mine cryptocurrency
            </h1>

            <p className="text-white mt-5 mb-8">
              With PledgeMiner, you earn Pledge tokens daily — no hardware, no
              electricity costs, no hidden fees. Just install, click, and grow
              your balance.
            </p>

            <div className="xl:flex items-center">
              <Link
                href="https://chromewebstore.google.com/detail/pledgecom-extension/amfpepiagonfjlalcjcnmpbbjnmnpleb?authuser=0&hl=en-GB&pli=1"
                className="cta block text-center sm:inline"
              >
                Download PledgeMiner
              </Link>

              <Link
                href="https://chromewebstore.google.com/detail/pledgecom-extension/amfpepiagonfjlalcjcnmpbbjnmnpleb?authuser=0&hl=en-GB&pli=1"
                className="cta-outline mt-7 xl:mt-0 sm:ml-5 text-center block sm:inline"
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
