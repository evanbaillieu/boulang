import React from "react";

const BigCard = ({
  title,
  description,
  src,
  alt,
  isContact = false,
  titleh,
  isDownload,
  descriptionh,
}) => {
  return (
    <div class="bigCard">
      <div class="bigCard-left">
        <img src={src} alt={alt} />
      </div>
      <div class="bigCard-right">
        <div>
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
          </div>
          {isDownload ? (
          <div class="btn-download"><a href="/download/carte.pdf" download>telecharger la carte</a></div>
          
        
      ): (<></>)}
        </div>
        {isContact ? (
          <div>
            <h1>{titleh}</h1>
            <div>
              <p>{descriptionh}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BigCard;
