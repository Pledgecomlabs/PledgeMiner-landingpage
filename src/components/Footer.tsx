import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 mt-20 mb-2">
        <div className="text-center">
          <p className="text-white font-semibold">
            <span className="text-lg">
              &copy; {new Date().getFullYear()} Pledge Miner
            </span>
          </p>

          <p className="text-white text-lg my-3">
            <Link href="/" className="text-white">
              Privacy Policy{" "}
            </Link>
            |{" "}
            <Link href="/" className="text-white">
              Terms of Use{" "}
            </Link>
            |{" "}
            <Link href="/" className="text-white">
              FAQ
            </Link>
          </p>

          <a
            href="mailto:support@pledgecom.org"
            className="text-white underline text-lg"
          >
            support@pledgecom.org
          </a>
        </div>

        <div
          id="social-links"
          className="socials flex justify-center mt-5 gap-4"
        >
          <Link href="https://x.com/pledgecomlabs?s=21">
            <Image src="/x.png" width={50} height={50} alt="" />
          </Link>

          <Link href="https://t.me/pledgecom">
            <Image src="/telegram.png" width={50} height={50} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
