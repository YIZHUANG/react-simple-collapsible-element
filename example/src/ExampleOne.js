import React, { Component } from "react";
import Collapsible from "react-simple-collapsible-element";
import ReactGA from "react-ga";

import "./ExampleOne.css";

class ExampleOne extends Component {
  render() {
    const data = [
      {
        title: open => (
          <div
            presentation="role"
            onKeyPress={() =>
              ReactGA.event({
                category: "click event",
                action: "clicks on default"
              })
            }
            onClick={() =>
              ReactGA.event({
                category: "click event",
                action: "clicks on default"
              })
            }
          >
            How long do you soak clothes in bleach?
            {open ? <span style={{ color: "orange" }}>It's open!</span> : ""}
          </div>
        ),
        titleStyle: "titleStyle",
        content: open => (
          <div>
            {open ? <span style={{ color: "orange" }}>It's open!</span> : ""}
            <p style={{ fontSize: 16 }}>
              {" "}
              Add 1/4 cup of bleach to 1 gallon of water and soak the clothes
            </p>
            <a href="http://articles.chicagotribune.com/2013-04-02/features/sc-fam-0402-lifeskill-bleach-20130402_1_bleach-clothes-care-labels">
              How to bleach your clothes - tribunedigital-chicagotribune
            </a>
          </div>
        ),
        contentStyle: { marginBottom: 20 },
        activeContentStyle: "content-active-bg-color-red"
      },
      {
        title: "How do you whiten white clothes?",
        titleStyle: "titleStyle",
        content: (
          <div>
            <h2>Method 2 Using Natural Household Supplies</h2>
            <ul>
              <li>
                Use sunshine as a whitener. Wash cotton and linen sheets,
                tablecloths and other white laundry items. ...
              </li>
              <li>
                Try lemon juice. Add 1/2 cup of lemon juice to the wash cycle,
                along with your detergent. ...
              </li>
            </ul>
          </div>
        ),
        contentStyle: "contentStyle"
      }
    ];
    return (
      <div style={{ marginLeft: 40, marginTop: 20, maxWidth: 400 }}>
        <h1 style={{ textAlign: "center" }}>
          Example one <strong>(default)</strong>
        </h1>
        <Collapsible data={data} />
      </div>
    );
  }
}

export default ExampleOne;
