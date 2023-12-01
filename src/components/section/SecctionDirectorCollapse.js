"use client";
import { Container, Row } from "react-bootstrap";
import BoxPersonalInformation from "../ui/box/BoxPersonalInformation";

const SecctionDirectorCollapse = (props) => {
    const {data} = props;

    return ( <div className="section-secondary-grey">
    <Container>
      <Row>
        {data.map((item, i) => {
          return (
            <BoxPersonalInformation key={i} {...item}
                description={`Tim Chi is the Chief Executive Officer of The Knot Worldwide. After getting married in 2005, Tim set out to make wedding planning less stressful and frustrating. Together with his co-founders, Jeff, Lee, and Sonny, they threw four desks into his empty living room in Chevy Chase, Maryland and created WeddingWire, which became a leading global vendor marketplace serving the wedding industry, helping millions of engaged couples plan, execute and celebrate the most important day of their lives. WeddingWire grew to 1,000 employees worldwide and owned leading wedding brands in North America, Europe, South America and India. In 2019, Tim became CEO of The Knot Worldwide following the merger of XO Group Inc. (parent company of The Knot) and WeddingWire Inc.
<br><br>
Previously, Tim co-founded Blackboard Inc. in 1998. While at Blackboard, Tim pioneered many of Blackboard’s flagship products and strategic initiatives, bringing technology into the classrooms of colleges, universities and school districts across the world. During his tenure, the company raised over $100 million in capital and was taken public on the Nasdaq in 2004.
<br><br>
Tim holds a B.S. in operations research and industrial engineering from Cornell University and an M.S. in engineering management from Tufts University. He resides in Maryland with his family and is based out of The Knot Worldwide’s Chevy Chase headquarters.`}
            />
          );
        })}
      </Row>
    </Container>
  </div> );
}
 

export default SecctionDirectorCollapse;