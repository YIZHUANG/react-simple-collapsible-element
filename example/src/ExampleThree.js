import React, { Component } from "react";
import Collapsible from "react-simple-collapsible-element";
import ReactGA from "react-ga";

import "./ExampleTwo.css";

class ExampleThree extends Component {
  render() {
    const data = [
      {
        title: (
          <div
            presentation="role"
            onKeyPress={() =>
              ReactGA.event({
                category: "click event",
                action: "clicks on custom transition"
              })
            }
            onClick={() =>
              ReactGA.event({
                category: "click event",
                action: "clicks on custom transition"
              })
            }
          >
            What is the computer coding?
          </div>
        ),
        titleStyle: "titleStyle",
        content:
          "That line of code is written in the Python programming language. Put simply, a programming (or coding) language is a set of syntax rules that define how code should be written and formatted. Thousands of different programming languages make it possible for us to create computer software, apps and websites.",
        contentStyle: { marginBottom: 20 }
      },
      {
        title: "How do I learn to code?",
        titleStyle: "titleStyle",
        content: [
          {
            title: <li>Method one</li>,
            activeTitleStyle: "activeTitleStyle",
            content: (
              <ul>
                <li>Figure Out Why You Want to Learn to Code.</li>
                <li>Choose the Right Language. ...</li>
              </ul>
            )
          },
          {
            title: <li>But There is a shortcut</li>,
            titleStyle: { marginTop: 10, borderTop: "1px solid #e5e5e5" },
            content: [
              {
                title: open => (
                  <ul>
                    {open ? (
                      <span style={{ color: "orange" }}>It's open!</span>
                    ) : (
                      ""
                    )}
                    <li>short cut one</li>
                  </ul>
                ),
                content: "Go to a bootcamp",
                activeContentStyle: "contentActiveStyle--margin-left"
              },
              {
                title: (
                  <ul>
                    <li>short cut two</li>
                  </ul>
                ),
                content: "Find a mentor",
                activeContentStyle: "contentActiveStyle--margin-left"
              }
            ]
          }
        ]
      }
    ];
    return (
      <div style={{ marginLeft: 40, marginTop: 20, maxWidth: 400 }}>
        <h1 style={{ textAlign: "center" }}>
          Example three<strong>(custom transition)</strong>
        </h1>
        <Collapsible data={data} customTransition="height .4s ease-out" />
      </div>
    );
  }
}

export default ExampleThree;
