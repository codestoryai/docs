import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CodeStory Docs" />
      <meta
        property="og:description"
        content="CodeStory ✨ is an AI-powered mod of VSCode."
      />
      <link rel="icon" href="/assets/cs-logomark.png"></link>
    </>
  ),
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/assets/cs-logomark.png"
        alt="CodeStory logo"
        width={40}
        height={40}
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
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
};

export default config;
