import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/assets/cs-logomark.png"
      alt="CodeStory logo"
      width={48}
      height={48}
    />
  ),
  primaryHue: 161,
  chat: {
    link: "https://discord.gg/4JXfX5YR",
  },
  footer: {
    text: "CodeStory",
  },
};

export default config;
