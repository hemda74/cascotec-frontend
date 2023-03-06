import React from 'react';
import styles from '../styles/OrgDetailsSiteNavLink.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  [key: string]: any;
};
// Orgnaization details Site Nav Links.
const OrgDetailsSiteNavLink = (props: Props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <a type="button" className={`text-decoration-none `}>
        <small
          className={`text-black ${styles.siteNavLink} ${
            router.asPath.includes(props.unique) ? `${styles.activeLink}` : ''
          }`}>
          {props.linkName}
        </small>
      </a>
    </Link>
  );
};

export default OrgDetailsSiteNavLink;
