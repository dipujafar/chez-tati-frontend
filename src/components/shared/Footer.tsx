import Image from "next/image";
import Container from "./Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Importing icons from lucide-react
import logo from "@/assets/images/logo_white.png";
import googlePlay from "@/assets/images/google_play_store.png";
import appStore from "@/assets/images/app_store.png";
import qrCode from "@/assets/images/qrcode.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary-black py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-y-20 flex-wrap">
          {/* Logo and description */}
          <div className="">
            <Image
              src={logo}
              alt="logo"
              width={106}
              height={61}
              className="w-[106px] h-[61px]"
            />
            <p className="text-primary-gray max-w-[320px] mt-4">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Input
                type="email"
                placeholder="Type your email address"
                className="bg-transparent text-primary-white rounded-full "
              />
              <Button className="bg-white text-primary-black hover:bg-primary-gray  rounded-full ">
                Submit
              </Button>
            </div>
          </div>

          {/* Links and supports informations */}
          <div className="flex gap-4 flex-wrap lg:gap-28">
            {/* Account Links */}
            <div>
              <h3 className="text-primary-white font-semibold mb-4">Account</h3>
              <ul className="text-primary-white space-y-2">
                <li>
                  <Link href="/profile">My Account</Link>
                </li>
                <li>
                  <Link href="/sign-in">Login / Register</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="#">Wishlist</Link>
                </li>
                <li>
                  <Link href="#">Shop</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-primary-white font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="text-primary-white space-y-2">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms Of Use</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="text-primary-white font-semibold mb-4">Support</h3>
              <ul className="text-primary-white space-y-2">
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-primary-white font-semibold mb-4">
              Download App
            </h3>
            <div className="flex items-center space-x-4">
              <Image
                src={qrCode}
                alt="QR Code"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
              <div className="space-y-2">
                <Image
                  src={googlePlay}
                  alt="Download from Google Play"
                  width={135}
                  height={30}
                  className="h-8"
                />
                <Image
                  src={appStore}
                  alt="Download from App Store"
                  width={135}
                  height={600}
                  className="h-8"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-gray">
                <Facebook size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Twitter size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Linkedin size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Instagram size={20} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
