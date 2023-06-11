import React, { useState } from "react";
import "./cardForm.css";
import logo from "./assets/Group 2.png";

function CardForm() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardHolderName.trim().length === 0 ||
      cardNumber.trim().length === 0 ||
      (cvc.length > 0 && !/^\d+$/.test(cvc))
    ) {
      setError(true);
    }

    if (cardHolderName && cardNumber && expiryDate && expiryMonth && cvc) {
      console.log(
        "Cardholder Name:",
        cardHolderName,
        "Card Number:",
        cardNumber,
        "Expiry Date:",
        expiryDate,
        "Expiry Month:",
        expiryMonth,
        "CVC:",
        cvc
      );
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, "");
    setCardNumber(numericInput);
  };

  return (
    <div className="compo">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="cardss">CARDHOLDER NAME</p>
            <input
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setCardHolderName(e.target.value)}
              className="cards"
              id="Cname"
            />
            {error && cardHolderName.length === 0 ? (
              <label>Name can't be empty</label>
            ) : null}
          </div>

          <div>
            <p className="cardss">CARD NUMBER</p>
            <input
              placeholder="eg 1234 5678 9123 0000"
              maxLength={19}
              onChange={handleCardNumberChange}
              value={cardNumber}
              className="cards"
              id="Cno"
            />
            {error && cardNumber.length === 0 ? (
              <label>Card number required</label>
            ) : null}
          </div>

          <section id="startD">
            <div>
              <p>EXP.DATE</p>
              <input
                placeholder="MM"
                maxLength={2}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                className="in_my"
                id="Cdate"
              />
            </div>
            <div>
              <p> (MM/YY)</p>
              <input
                placeholder="YY"
                maxLength={2}
                onChange={(e) => setExpiryMonth(e.target.value)}
                required
                className="in_my"
                id="Cyear"
              />
            </div>

            <div>
              <p className="cvc_p">CVC</p>
              <input
                placeholder="e.g. 123"
                maxLength={3}
                onChange={(e) => setCvc(e.target.value)}
                id="cvc"
              />
              {error && cvc.length === 0 ? (
                <label>CVC must be provided</label>
              ) : null}
              {error && cvc.length > 0 && !/^\d+$/.test(cvc) ? (
                <label>CVC must be numeric</label>
              ) : null}
            </div>
          </section>

          <button className="sub">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default CardForm;
