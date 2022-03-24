import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-deep flex justify-around xs:flex-col 2xs:flex-col 2xs:pt-4  xs:pt-4  pt-20 ">
      <div>
        <h1 className="font-bold text-white xs:p-4 2xs:p-4 ">QUARTENION</h1>
        <p className="text-white max-w-md pt-4 xs:hidden 2xs:hidden">
          Vivamus rhoncus mattis laoreet nunc, netus pellentesque. Feugiat in
          urna et lacinia fringilla sed. Quis tempus aliquam pharetra ut vel.
          Tellus odio suspendisse donec nisl, nulla. Ornare sed semper mi cras
          vitae, tincidunt at. Nunc aenean ut et etiam fringilla feugiat
          malesuada netus praesent. Risus ridiculus vivamus nisi, nunc molestie
          morbi quis auctor mi.
        </p>
        <p className="pt-12 xs:p-4 2xs:p-4  text-white text-xs">
          {" "}
          Copyright &copy; Quartenion 2021
        </p>
      </div>

      <div className="text-white px-2 py-4 m-2 xs:hidden 2xs:hidden  ">
        <h1 className="">Quick Link</h1>
        <nav className="flex flex-col">
          <Link href="/about">
            <a>About us</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a>Terms and Condition</a>
          </Link>
        </nav>
      </div>
      <div className="text-white xs:p-4 2xs:p-4 ">
        <h1 className="pl-2">Social Media</h1>
        <div className="flex flex-col ">
          <div className="flex p-2">
            <img className="mr-2" src="/icons/facebook.svg" />
            <p>Facebook</p>
          </div>
          <div className="flex p-2">
            <img className="mr-2 " src="/icons/twitter.svg" />
            <p>Twitter</p>
          </div>
          <div className="flex p-2">
            <img className="mr-2 " src="/icons/linkedin.svg" />
            <p> Linkedin</p>
          </div>
          <div className="flex p-2">
            <img className="mr-2 " src="/icons/instagram.svg" />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
