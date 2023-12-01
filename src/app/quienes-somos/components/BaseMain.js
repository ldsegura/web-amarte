"use client";
import {WrapperHeaderBasic} from "mystique-web-components/dist/components";

const BaseMain = (props) => {
    const {image, alt, title} = props;

    return ( <WrapperHeaderBasic
        srcImage={image}
        alt={alt}
        title={title}
      /> );
}

export default BaseMain;