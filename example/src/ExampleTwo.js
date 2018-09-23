import React, { Component } from 'react';
import Collapsible from './lib/Collapsible';

import './ExampleTwo.css';

class ExampleTwo extends Component {
  render() {
    const data = [
      {
        title: 'What is the computer coding?',
        titleStyle: 'titleStyle',
        content:
          'That line of code is written in the Python programming language. Put simply, a programming (or coding) language is a set of syntax rules that define how code should be written and formatted. Thousands of different programming languages make it possible for us to create computer software, apps and websites.',
        contentStyle: { marginBottom: 20 },
      },
      {
        title: 'How do I learn to code?',
        titleStyle: 'titleStyle',
        content: [
          {
            title: <li>Method one</li>,
            activeTitleStyle: 'activeTitleStyle',
            content: (
              <ul>
                <li>Figure Out Why You Want to Learn to Code.</li>
                <li>Choose the Right Language. ...</li>
              </ul>
            ),
          },
          {
            title: <li>But There is a shortcut</li>,
            titleStyle: { marginTop: 10, borderTop: '1px solid #e5e5e5' },
            content: [
              {
                title: (
                  <ul>
                    <li>short cut one</li>
                  </ul>
                ),
                content: 'Go to a bootcamp',
                activeContentStyle: 'contentActiveStyle--margin-left',
              },
              {
                title: (
                  <ul>
                    <li>short cut two</li>
                  </ul>
                ),
                content: 'Find a mentor',
                activeContentStyle: 'contentActiveStyle--margin-left',
              },
            ],
          },
        ],
      },
    ];
    return (
      <div style={{ marginLeft: 40, marginTop: 20, maxWidth: 400 }}>
        <h1 style={{ textAlign: 'center' }}>
          Example two<strong>(keep open and custom transition)</strong>
        </h1>
        <Collapsible
          data={data}
          customTransition="height .1s ease-out"
          keepOpen
        />
      </div>
    );
  }
}

export default ExampleTwo;
