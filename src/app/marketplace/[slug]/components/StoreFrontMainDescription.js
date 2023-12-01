"use client";
import BoxSocial from "@/components/ui/box/BoxSocial";
import { Button } from "react-bootstrap";
import { CiLocationOn, CiDiscount1, CiLink } from "react-icons/ci";
const StoreFrontMainDescription = (props) => {
  const { data } = props;
  return (
    <div>
      <h1 style={style.title}>{data.name}</h1>
      <ul style={style.ul}>
        <li style={style.li}>
          <CiLocationOn style={{ fontSize: "20px" }} />
          <span>{data.state.name}</span>
        </li>
        <li style={style.li}>
          <CiDiscount1 style={{ fontSize: "20px" }} /> Promociones
        </li>
        {data.my_website && (
          <li style={style.li}>
            <CiLink style={{ fontSize: "20px" }} />
            <a href={data.my_website} target="_blank">{`Visitar sitio web`}</a>
          </li>
        )}
      </ul>
      <div className="d-grid gap-2 ps-4 pe-4 mb-3">
        <Button variant="primary">Contactar</Button>
      </div>
      <div>
      <hr />

      </div>
      <h6 className="pt-2">Siguenos en nuestras redes sociales</h6>
      <BoxSocial items={data.social_network} />
    </div>
  );
};
const style = {
  title: {
    fontSize: "1.5rem",
  },
  ul: {
    paddingLeft: 0,
  },
  li: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    paddingBottom: "4px",
  },
};
export default StoreFrontMainDescription;
