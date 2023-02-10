import React from 'react';
import styles from '../styles/TALinkCard.module.css';
import Image from 'next/image';
import OrganizationDetailsIcon from '../public/icons/organization-details-icon.svg';
import UserManagementIcon from '../public/icons/user-management-icon.svg';
import MailServerSettingIcon from '../public/icons/mail-server-setting-icon.svg';
import Link from 'next/link';
import OrganizationDetailsArrowIcon from '../public/icons/blue-right-arrow.svg';
import UserManagementArrowIcon from '../public/icons/green-right-arrow.svg';
import MailServerSettingArrowIcon from '../public/icons/purple-right-arrow.svg';

type Props = {
  [key: string]: any;
};

// a Link Card used in Tenant admin pannel homepage.
const TALinkCard = (props: Props) => {
  // a logical funtion to render the correct icon for a certain card value
  const handleCardIcon = (cardName: string) => {
    if (cardName === 'Organization Details') {
      return OrganizationDetailsIcon;
    } else if (cardName === 'User Managements') {
      return UserManagementIcon;
    } else if (cardName === 'Mail Server Settings') {
      return MailServerSettingIcon;
    }
  };

  // a logical funtion to render the correct background for a certain card value
  const HandeleIconBg = (cardName: string) => {
    if (cardName === 'Organization Details') {
      return styles.orgnizationDetailsBg;
    } else if (cardName === 'User Managements') {
      return styles.userManagementsBg;
    } else if (cardName === 'Mail Server Settings') {
      return styles.mailServerSettingsBg;
    }
  };

  // a logical funtion to render the correct Arrow Icon for a certain card value
  const handleCardArrow = (cardName: string) => {
    if (cardName === 'Organization Details') {
      return OrganizationDetailsArrowIcon;
    } else if (cardName === 'User Managements') {
      return UserManagementArrowIcon;
    } else if (cardName === 'Mail Server Settings') {
      return MailServerSettingArrowIcon;
    }
  };

  return (
    <Link href={`${props.onClickRoute}`}>
      <a className="text-decoration-none">
        <div className={`card border-0 ${styles.TALinkCard}`}>
          <div className={`card-body p-0`}>
            <div
              className={`d-flex align-items-center justify-content-center ${HandeleIconBg(
                props.cardName
              )}`}>
              <div className={`d-flex ${styles.iconContainer}`}>
                <Image
                  alt="card name icon"
                  src={handleCardIcon(props.cardName)}
                  width={68}
                  height={68}
                />
              </div>
            </div>
            <div className={`card-body p-4`}>
              <h4 className="text-black text-center">{props.cardName}</h4>
              <div className="d-flex justify-content-end pt-5 mt-5">
                <Image
                  src={handleCardArrow(props.cardName)}
                  alt="card arrow"
                  width={32}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default TALinkCard;
