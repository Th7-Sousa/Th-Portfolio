"use client"

import { useState } from "react";
import styles from "./../page.module.css";
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

const ActiveLink = ({ href, children, ...rest }:
  ActiveLinkProps) => {
  const pathname = usePathname();

  const isCurrentPath = pathname === href;

  const [hover, setHover] = useState(false);

  return (
    <Link
    className={styles.menuLink}
      {...rest}
      href={href}
      style={{
        color: `${isCurrentPath ? '#F2952C' : '#ffffff'}`
      }}
    >
      {children}
    </Link>
  )
}

export default ActiveLink;