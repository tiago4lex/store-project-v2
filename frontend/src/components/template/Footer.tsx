import { IconBrandInstagram, IconBrandYoutube, IconBrandSoundcloud, IconBrandSpotify } from "@tabler/icons-react";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white/100 text-black">
      <div className="h-px bg-gradient-to-r from-white/10 to-white/10 " />
      <div className="container flex flex-col py-5 gap-5">
        <div className="flex flex-col md:flex-row items0center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
          <Logo />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-black pb-2">About</span>
            <span className="text-sm font-medium">Our History</span>
            <span className="text-sm font-medium">Privacy Policy</span>
            <span className="text-sm font-medium">Terms of use</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-black pb-2">Contacts</span>
            <span className="text-sm">text@email.com</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
          <div className="flex gap-2">
            <IconBrandInstagram size={28} stroke={2} />
            <IconBrandYoutube size={28} stroke={2} />
            <IconBrandSoundcloud size={28} stroke={2} />
            <IconBrandSpotify size={28} stroke={2} />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-black">
            <div className="flex gap-1.5">
              <span>BrazasideClan ©</span>
              <span>{new Date().getFullYear()}</span>
            </div>
            <span className="hidden md:inline-block">-</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
