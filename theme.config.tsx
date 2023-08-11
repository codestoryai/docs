import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/assets/cs-logomark.png"
        alt="CodeStory logo"
        width={48}
        height={48}
      />
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>CodeStory</h1>
    </div>
  ),
  primaryHue: 161,
  chat: {
    link: "https://discord.gg/4JXfX5YR",
  },
  footer: {
    text: "CodeStory",
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: "",
  },
};

export default config;
