import React from "react";
import imageUtils from "../../../utils/imageUtils";
import Image from 'next/image'

const BoxSocial = (props) => {
  const {items, styleContent} = props;

  return ( items &&
    <div className="content-social" style={styleContent}>
      {items.map((item, i) => {
        return <a key={i} href={item.url ? item.url : item.link} target={"_blank"} rel="noreferrer">
          <Image
            alt={item.socialNetwork ? item.socialNetwork : `social network ${item?.type}`}
            src={imageUtils.getIconSocialNetwork(item?.type?.toLowerCase())}
            height={20}
          />
        </a>
      })}
    </div>
  );
};

export default BoxSocial;
