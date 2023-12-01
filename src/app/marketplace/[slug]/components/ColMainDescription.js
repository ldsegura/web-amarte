"use client";
import breakpointConstants from "@/constants/breakpointConstants";
import { Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import StoreFrontMainDescription from "./StoreFrontMainDescription";

const ColMainDescription = (props) => {
    const {data} = props;
    const isTablet = useMediaQuery({ maxWidth: breakpointConstants.LG });
    return ( <>
        {!isTablet && <Col lg={4} style={{paddingLeft: "40px"}}>
            <StoreFrontMainDescription data={data} />
        </Col>}
    </> );
}
 
export default ColMainDescription;