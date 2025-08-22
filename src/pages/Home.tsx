import Image from "next/image";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="mt-14">
        <div className="container mx-auto px-4">
          <div className="lg:flex justify-between items-center">
            <div className="hidden md:block relative flex-1">
              <div className="w-[300px] min-h-[200px] lg:w-[400px] lg:min-h-[400px] lg:mr-auto relative">
                <Image
                  src={"/pledging.png"}
                  alt=""
                  className="block object-contain"
                  fill
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-white text-4xl font-bold">
                What is PledgeMiner?
              </h2>

              <p className="mt-6 text-[#ffffff99] text-lg">
                PledgeMiner is a browser-based mining app that gives everyone
                free access to cryptocurrency mining. Unlike traditional mining,
                which requires powerful machines and high electricity bills,
                PledgeMiner makes it possible for anyone with a browser to earn
                crypto daily. It's simple, free and beginner-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-white text-4xl font-bold">What is Pledge?</h2>

              <p className="my-3" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                Pledge is the native token you mine with PledgeMiner. It
                represents the communities effort and is designed for growth,
                utility, and future adoption.
              </p>

              <p className="my-3 mb-2 text-white text-lg font-semibold">
                Key features of Pledge:
              </p>

              <ul className="list-disc flex flex-col pl-5 text-white">
                <li className="text-lg">
                  <b>Earned, not bought</b> — Pledge starts with miners, not
                  investors
                </li>

                <li className="text-lg mt-3">
                  <b>Accessible to all</b> — Anyone with internet can mine it
                </li>

                <li className="text-lg mt-3">
                  <b>Utility-driven</b> — Trade, stake, vote, and access
                  ecosystem benefits
                </li>

                <li className="text-lg mt-3">
                  <b>Community-powered</b> — The more miners, the stronger the
                  network
                </li>
              </ul>
            </div>

            <div className="flex-1 order-1 lg:order-2 relative">
              <div className="w-[300px] min-h-[200px] lg:w-[400px] lg:min-h-[400px] lg:ml-auto relative">
                <Image
                  src={"/pledging.png"}
                  alt=""
                  className="block object-contain"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="flex-1">
              <div className="w-[300px] min-h-[200px] lg:w-[400px] lg:min-h-[400px] lg:mr-auto relative">
                <Image
                  src={"/pledging.png"}
                  alt=""
                  className="object-contain"
                  fill
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-white text-4xl font-bold mb-7">
                Why choose PledgeMiner?
              </h2>

              <ul className="list-disc flex flex-col pl-5 text-white">
                <li className="text-lg">
                  <b>Free Mining</b> — No costs, no rigs, no electricity waste
                </li>

                <li className="text-lg mt-3">
                  <b>Daily Rewards</b> — Log in once per day and mine your
                  tokens
                </li>

                <li className="text-lg mt-3">
                  <b>Made for Everyone</b> — Beginner-friendly design, no crypto
                  knowledge needed
                </li>

                <li className="text-lg mt-3">
                  <b>Eco-friendly</b> — Lightweight, energy-efficient mining
                  through your browser
                </li>

                <li className="text-lg mt-3">
                  <b>Future utility</b> — Pledge will power swaps, staking,
                  goverance & more
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-white text-center font-semibold text-4xl md:text-5xl leading-snug md:leading-normal">
              No mining rigs. No gas fees. <br />
              Just presence.
            </h3>

            <p className="text-white text-center mt-5 font-light text-xl">
              Think of it like checking in daily to level up in crypto.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-white mb-12">
            How It Works
          </h2>

          <div className="flex flex-col mx-auto gap-5">
            <div className="md:flex items-center justify-around">
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Step 1:
              </h3>

              <p className="text-white md:ml-10 mb-0 flex-1 text-lg">
                <b>Install PledgeMiner</b> <br />
                Quick and easy setup on your browser
              </p>
            </div>

            <div className="md:flex items-center justify-around mt-5">
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Step 2:
              </h3>

              <p className="text-white md:ml-10 mb-0 flex-1 text-xl">
                <b>Create Your Free Account</b> <br />
                Secure sign-up — no crypto wallet required to start
              </p>
            </div>

            <div className="md:flex items-center justify-around mt-5">
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Step 3:
              </h3>

              <p className="text-white md:ml-10 mb-0 flex-1 text-xl">
                <b>Click "Mine" Daily</b> <br />
                Earn Pledge once per day with a single tap
              </p>
            </div>

            <div className="md:flex items-center justify-around mt-5">
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Step 4:
              </h3>

              <p className="text-white md:ml-10 mb-0 flex-1 text-xl">
                <b>Build your Balance</b> <br />
                Track your growing Pledge holdings directly in the app
              </p>
            </div>

            <div className="md:flex items-center justify-around mt-5">
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                Step 5:
              </h3>

              <p className="text-white md:ml-10 mb-0 flex-1 text-xl">
                <b>Unlock Utility (Coming Soon)</b> <br />
                Use Pledge for swaps, staking, goverance, and ecosystem perks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto px-4 text-white">
          <h2 className="font-bold text-3xl text-center mb-6">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="faq-section text-white mt-5">
            <div className="faq-item">
              <div className="faq-question relative bg-[#dfdfdf] p-5 cursor-pointer transition-all">
                <h2 className="text-black font-medium">Is it really free?</h2>
              </div>

              <div className="faq-answer">
                <p className="mb-0">
                  Yes. No electricity costs, no hidden fees, no purchases
                  required
                </p>
              </div>
            </div>
          </div>

          <div className="faq-section text-white">
            <div className="faq-item">
              <div className="faq-question relative bg-[#dfdfdf] p-5 cursor-pointer transition-all">
                <h2 className="text-black font-medium">
                  How often can I mine?
                </h2>
              </div>

              <div className="faq-answer">
                <p className="mb-0">
                  Once per day, One click = fresh Pledge tokens
                </p>
              </div>
            </div>
          </div>

          <div className="faq-section text-white">
            <div className="faq-item">
              <div className="faq-question relative bg-[#dfdfdf] p-5 cursor-pointer transition-all">
                <h2 className="text-black font-medium">
                  Do I need a crypto wallet?
                </h2>
              </div>

              <div className="faq-answer">
                <p className="mb-0">
                  Pledging is checking in every 12 hours to earn $Pledge. It’s
                  our version of “mining” simple, sustainable, and
                  community-driven.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-section text-white">
            <div className="faq-item">
              <div className="faq-question relative bg-[#dfdfdf] p-5 cursor-pointer transition-all">
                <h2 className="text-black font-medium">Is this safe?</h2>
              </div>

              <div className="faq-answer">
                <p className="mb-0">
                  Pledging is checking in every 12 hours to earn $Pledge. It’s
                  our version of “mining” simple, sustainable, and
                  community-driven.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-section text-white">
            <div className="faq-item">
              <div className="faq-question relative bg-[#dfdfdf] p-5 cursor-pointer transition-all">
                <h2 className="text-black font-medium">
                  What can I do with Pledge?
                </h2>
              </div>

              <div className="faq-answer">
                <p className="mb-0">
                  Pledging is checking in every 12 hours to earn $Pledge. It’s
                  our version of “mining” simple, sustainable, and
                  community-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
