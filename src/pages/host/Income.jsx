import React from "react";
import incomeGraphURL from "../../assets/images/income-graph.png";

const transactionsData = [
  { amount: 720, date: "Jan 3, '23", id: "1" },
  { amount: 560, date: "Dec 12, '22", id: "2" },
  { amount: 980, date: "Dec 3, '22", id: "3" },
];

const Income = () => {
  return (
    <div className="flowise income">
      <section className="flowise income-intro">
        <h1>Income</h1>
        <p>
          Last <span className="time">30 days</span>
        </p>
        <p className="big">$2,260</p>
      </section>
      <img src={incomeGraphURL} alt="income graph" />

      <section className="flowise cards-list">
        <div className="banner gridwiser_01">
          <h2>Your transactions {`(${transactionsData.length})`}</h2>
          <p>
            Last <span className="time">30 days</span>
          </p>
        </div>
        <ul className="flowise cards-list-grid">
          {transactionsData.map((item) => (
            <li key={item.id} className="gridwiser_01">
              <h3 className="trans-amount">${item.amount}</h3>
              <p className="trans-date">{item.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Income;
