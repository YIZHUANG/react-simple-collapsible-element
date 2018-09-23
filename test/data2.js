import React from 'react';

export default [
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
