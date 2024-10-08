import Logo from "@/components/shared/Logo";
import CartIcon from "@/components/shared/CartIcon";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className="flex flex-col h20"
      style={{ background: "white" }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="">
            <CartIcon quantity={0} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-white/10 to-white/10"></div>
    </div>
  );
}
