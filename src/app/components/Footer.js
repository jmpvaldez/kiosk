import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Footer() {
  return (
    <main
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: 'url("/images/footer.png")',
      }}
      className="h-24 items-center text-red-900 font-semibold flex flex-row  gap-3  w-full mt-12s md:mt-auto"
    >
      <IoIosArrowRoundBack />
      <Link href={"/"} className=" text-dark rounded-md mt-auto">
        Back to home
      </Link>
    </main>
  );
}
