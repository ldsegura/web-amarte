import React from "react";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../../constants/breakpointConstants";
import Link from "next/link";

const UlOther = (props) => {
  const { title, items } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  return (
    <div className="content-others">
      {title && (<h5>{title}</h5>)}
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i} style={{
                order: isMobile
                  ? item.orderMobile
                    ? item.orderMobile
                    : item.order
                  : item.order,
                display: "flex"
              }}>
                <Link href={`/${item.link}`}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UlOther;