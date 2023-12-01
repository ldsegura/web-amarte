"use client";
import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import BoxSocial from "../../ui/box/BoxSocial";
import BoxDeveloper from "./components/BoxDeveloper";
import UlContact from "./components/UlContact";
import UlOther from "./components/UlOther";
import Link from "next/link";
import i18nConfig from "../../../../i18nConfig";
import footerSettings from "../../../settings/footerSettings";
import logo from "../../../assets/logo.png"
import Image from 'next/image'

const Footer = (props) => {
  const locale = i18nConfig.defaultLocale;
  const [setting, setSettings] = useState({});

  useEffect(() => {
    setSettings(locale === i18nConfig.defaultLocale ? footerSettings.es : footerSettings.en);
  },[locale])

  return (
    <footer className="footer">
      <ContainerCustom>
        <div className="boxs grid-info">
          <div className="content-logo">
            <Link href={`/`}>
              <Image
                alt={`${process.env.NEXT_PUBLIC_SITENAME}`}
                src={logo}
                height={57}
                placeholder="blur"
              />
            </Link>
          </div>
          <UlContact items={setting.ContactInfo} />
          <UlOther items={setting.AboutUs} className="content-two" />
        </div>
        <div className="boxs">
          <BoxDeveloper />
          <BoxSocial items={setting.socialNetwork} />
        </div>
      </ContainerCustom>
    </footer>
  );
};

export default Footer;
