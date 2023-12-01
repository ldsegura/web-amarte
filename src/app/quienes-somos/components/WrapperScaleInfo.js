"use client";
import {WrapperRowScaleImage} from "mystique-web-components/dist/components";

const WrapperScaleInfo = (props) => {
    const {data} = props;

    return ( data.map((item,i) => {
        return <WrapperRowScaleImage key={i}
            srcImage={item.image}
            alt={item.alt}
            title={item.title}
            description={item.description}
            imageOrder={item.imageOrder}
            descriptionOrder={item.descriptionOrder}
          />
    }) );
}

export default WrapperScaleInfo;