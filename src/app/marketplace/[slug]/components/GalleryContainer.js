"use client";
import breakpointConstants from "@/constants/breakpointConstants";
import { Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import StoreFrontMainDescription from "./StoreFrontMainDescription";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const GalleryContainer = (props) => {
  const { data } = props;
  const isTablet = useMediaQuery({ maxWidth: breakpointConstants.LG });
  return (
    <>
      <Col xs={12} style={{ background: "red", height: "300px" }}></Col>
      <ButtonGroup aria-label="Basic example" className="mt-3">
        <Button variant="outline-primary" as="a" href="#about">
          Acerca de
        </Button>
        <Button variant="outline-primary" as="a" href="#faq">
          Preguntas frecuentes
        </Button>
        <Button variant="outline-primary">Promociones</Button>
      </ButtonGroup>
      {isTablet && <div className="pt-4">
        <StoreFrontMainDescription data={data} />
      </div>}
    </>
  );
};

export default GalleryContainer;
