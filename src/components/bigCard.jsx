import React from "react";

const BigCard = ({
  title,
  description,
  src,
  alt,
  isContact = false,
  titleh,
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
