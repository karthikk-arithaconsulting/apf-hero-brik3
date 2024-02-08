import React from "react";
import { Title,Text,Button} from "@apf/core";
import "@apf/core/dist/style.css";
import "./HeroBrikThree.css";
function HeroThree(props){
    // eslint-disable-next-line react/prop-types
    const titleObject = props?.data?.data?.find((item) => item?.content?.type === "title" && item?.content?.for === "main title");
    // eslint-disable-next-line react/prop-types
    const BackgroundImage = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "Background Image");
    // eslint-disable-next-line react/prop-types
    const ButtonOne = props?.data?.data?.find((item) => item?.content?.type === "button" && item?.content?.for === "button One");
    // eslint-disable-next-line react/prop-types
    const ButtonTwo = props?.data?.data?.find((item) => item?.content?.type === "button" && item?.content?.for === "button Two");
    // eslint-disable-next-line react/prop-types
    const textObject = props.data.data.find((item) => item.content.type === "subtext" && item?.content?.for === "subText");
    // eslint-disable-next-line react/prop-types
    const BrikImage = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "Brik Image");

    return(
    <div className="Hero-containor">
        <div className="Hero-Background-Image">
            <img src={BackgroundImage?.content?.src} className="Hero-Background-Image-Tag"></img>
        </div>
        <div className="Hero-containor-content">
            <div className="Hero-Title">
                <Title c={titleObject?.style?.font?.color} fz={titleObject?.style?.font?.size}  style={{ fontFamily: titleObject?.style?.font?.family }} fw={titleObject?.style?.font?.weight} className="Title-Tag">{titleObject?.content?.value}</Title>
            </div>
            <div className="Hero-Buttons-Container">
                <Button style={{ color: ButtonOne?.style?.font.color, backgroundColor: ButtonOne?.style?.backgroundColor ,fontFamily: ButtonOne?.style.font.family, height:ButtonOne?.style?.height, width:ButtonOne?.style?.width}}  fz={ButtonOne?.style.font.size} fw={ButtonOne?.style.font.weight} variant="filled" radius={ButtonOne?.style?.radius}>{ButtonOne?.content?.value}</Button>
                <Button style={{ color: ButtonTwo?.style?.font.color, backgroundColor: ButtonTwo?.style?.backgroundColor ,fontFamily: ButtonTwo?.style.font.family, height:ButtonTwo?.style?.height, width:ButtonTwo?.style?.width}}  fz={ButtonTwo?.style.font.size} fw={ButtonTwo?.style.font.weight}variant="filled" radius={ButtonTwo?.style?.radius}>{ButtonTwo?.content?.value}</Button>
            </div>
            <div className="Hero-Text">
                <Text c={textObject?.style?.font.color} fz={textObject?.style?.font?.size} style={{ fontFamily: textObject?.style?.font?.family}} fs={textObject?.style?.font?.style} fw={textObject?.style?.font?.weight}>{textObject?.content?.value}</Text>
            </div>
            <div className="Hero-Image">
                <img src={BrikImage?.content?.src}  className="Hero-Image-Tag" ></img>
            </div>
        </div>
    </div>
    );
}
export default HeroThree;
