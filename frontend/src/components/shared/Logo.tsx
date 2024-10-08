import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="logo" width={80} height={80} className="cursor-pointer" />
    </Link>
  );
}
