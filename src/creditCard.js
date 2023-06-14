import React from "react";
import FrontCard from "./assets/Frame 2.png";
import BackCard from "./assets/Group 4.png";
import eclipse from "./assets/Ellipse 1.png";
import s_eclipse from "./assets/Ellipse_small 2.png";

import "./Card.css";

function CreditCard(props) {
  const { cardHolderName, cardNumber, expiryDate, expiryMonth, cvc } = props;

  return (
    <>
      <div className="cards_imgg">
        
        <div>
          <img src={FrontCard} className="front" alt="logo" />
        </div>
        {cardNumber && expiryDate && expiryMonth && cvc ? 
        (
          <>
          <div className="e_img">
          <img src={eclipse} className="elip" />
          <img src={s_eclipse} className="selip" />
        </div>
            <div>
              <img src={BackCard} className="back" alt="logo" />
              <p className="cvcno">{cvc}</p>
            </div>
            <div className="crd_no">
              <p>{cardNumber}</p>
            </div>
            <div className="c_details">
              <p className="c_name">
                {cardHolderName}
                <span className="c_date">
                  {expiryDate}/{expiryMonth}
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <img src={BackCard} className="back" alt="logo" />
              <p className="cvcno"></p>
            </div>
            <div className="crd_no">
              <p>0000 0000 0000 0000</p>
            </div>
            <div className="c_details">
              <p className="c_name">
                Jane Appleseed
                <span className="c_date">00/00</span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CreditCard;
