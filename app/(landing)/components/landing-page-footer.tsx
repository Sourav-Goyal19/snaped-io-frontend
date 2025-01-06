// LandingPageFooter.js
import clsx from "clsx";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const rubikLight = Rubik({
  subsets: ["latin"],
  weight: "300",
});

const rubikMedium = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const LandingPageFooter = () => {
  const productLinks = [
    { label: "Get a Demo", href: "#" },
    { label: "Signup for free", href: "#" },
    { label: "Signin", href: "#" },
  ];

  const resourceLinks = [
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X (Telegram)", href: "#" },
  ];

  const renderLinks = (links: typeof productLinks) => {
    return links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className="text-lg font-thin hover:underline">
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <footer
      className={clsx("bg-custom-gradient text-white", rubikLight.className)}
    >
      <div className="flex flex-wrap gap-x-8 gap-y-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-28 py-10 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="w-full md:w-72">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 bg-background p-2 rounded-lg">
              <Image
                src="/logo.svg"
                alt="Logo"
                height={400}
                width={400}
                className="h-full"
              />
            </div>
            <h3 className={clsx("text-2xl", rubikMedium.className)}>Snaped</h3>
          </div>
          <p className="mt-4 text-lg">
            Snaped is your AI-powered video creation tool, transforming text and
            ideas into stunning faceless videos in minutes. Fast, easy, and
            professional-quality videos at your fingertips.
          </p>
        </div>
        <div className="flex flex-wrap justify-between flex-1 lg:justify-start gap-x-28 sm:gap-x-20 xl:gap-x-24 gap-y-8 mt-2">
          <div>
            <p className="text-lg font-semibold mb-2">Product</p>
            <ul className="space-y-2">{renderLinks(productLinks)}</ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">{renderLinks(resourceLinks)}</ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <ul className="space-y-2">{renderLinks(socialLinks)}</ul>
          </div>
        </div>
      </div>
      <div className="bg-white/20 py-5">
        <p className="text-center text-base tracking-wider">
          © 2024 Snaped. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
