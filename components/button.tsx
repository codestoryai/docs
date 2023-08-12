import React from "react";

import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.primary}>{children}</button>;
};
