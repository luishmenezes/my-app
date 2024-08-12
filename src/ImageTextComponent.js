import React from 'react';

const ImageTextComponent = ({ ImageSrc, AltText, text}) => {
    return (
        <div className="Imagem"  > 
            <img src={ImageSrc} alt= {AltText} />
            <p>{text}</p>
        </div>
    )
}

export default ImageTextComponent;