/* eslint-disable react/prop-types */
import React from "react";
import { Title,Button,Text} from "@apf/core";
import "@apf/core/dist/style.css";
import "./HeroBrikThree.css";
function HeroThree(props){

    const titleObject = props?.data?.data?.find((item) => item?.content?.type === "title" && item?.content?.for === "main title");
    const BackgroundImage = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "Background Image");
    const ButtonOne = props?.data?.data?.find((item) => item?.content?.type === "button" && item?.content?.for === "button One");
    const textObject = props?.data?.data?.find((item) => item?.content?.type === "subtext" && item?.content?.for === "subText");
    const BrikImage = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "Brik Image");
    const handleButtonClick = (button) => {
        window.open(button?.content?.link, button?.content?.target);
      };
    return(
    <div className="brik-container" style={{backgroundColor: props?.data?.style?.backgroundColor}}>
        {BackgroundImage && BackgroundImage?.display === "block" &&<div className="brik-Background-Image" >
             <img src={BackgroundImage?.content?.src} className="Background-Image-div"></img>
         </div>}
        <div className="content-one">
            <div className="content-one-container">

        {BrikImage && BrikImage?.display === "block" &&<div className="Hero-Image">
                 <img src={BrikImage?.content?.src}  className="Hero-Image-Tag" ></img>
             </div>}
             </div>
        </div>
        <div className="content-two">
            <div className="content-two-container">
        {titleObject && titleObject?.display === "block" &&<div className="Hero-Title">
                 <Title c={titleObject?.style?.font?.color} fz={titleObject?.style?.font?.size}  style={{ fontFamily: titleObject?.style?.font?.family }} fw={titleObject?.style?.font?.weight} className="Title-Tag">{titleObject?.content?.value}</Title>
            </div>}
            {textObject && textObject?.display === "block" &&<div className="Hero-Text">
                <Text c={textObject?.style?.font.color} fz={textObject?.style?.font?.size} style={{ fontFamily: textObject?.style?.font?.family}} fs={textObject?.style?.font?.style} fw={textObject?.style?.font?.weight}className="text-Tag">{textObject?.content?.value}</Text>
             </div>}
            {ButtonOne && ButtonOne?.display === "block" &&<div className="button-div"><Button style={{ color: ButtonOne?.style?.font.color, backgroundColor: ButtonOne?.style?.backgroundColor ,fontFamily: ButtonOne?.style.font.family, height:ButtonOne?.style?.height, width:ButtonOne?.style?.width}}  fz={ButtonOne?.style.font.size} fw={ButtonOne?.style.font.weight} variant="filled" radius={ButtonOne?.style?.radius} onClick={() =>handleButtonClick(ButtonOne)} className="button-tag">{ButtonOne?.content?.value}</Button></div>}
            </div>
        </div>
    </div>
    );
}
export default HeroThree;
