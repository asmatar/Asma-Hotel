"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
  const { theme } = useTheme();
  return (
    <Image
      src={`${theme === "light" ? "/logo-dark.png" : "/logo-light.png"}`}
      alt="Logo"
      width={100}
      height={100}
    ></Image>
  );
}
