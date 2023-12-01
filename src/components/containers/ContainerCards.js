"use client";
import breakpointConstants from "@/constants/breakpointConstants";
import pagesContants from "@/constants/pagesContants";
import { MystiqueCard } from "mystique-web-components";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const ContainerCards = (props) => {
  const { categories } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

  return (
    <Container>
      <div className="mt-4 pt-4">
        <h2>Top Wedding Vendor Categories</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            paddingTop: 15,
            paddingBottom: 30,
            justifyContent: isMobile ? "center" : "initial",
          }}
        >
          {categories.map((item, i) => {
            //TODO CAMBIAR LA IMAGEN DE DEFAULT
            const imageDefault =
              "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250";
            const imagen = item.picture
              ? `${process.env.NEXT_PUBLIC_APP_API}${item.picture.formats.thumbnail.url}`
              : imageDefault;
              return (
                <MystiqueCard
                  key={i}
                  href={`/${pagesContants.catergory}/${item.slug}`}
                  srcImage={imagen}
                  alt={item.name}
                  name={item.name}
                  //iconObject={"objeto"}
                />
              );
            }
          )}
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default ContainerCards;
