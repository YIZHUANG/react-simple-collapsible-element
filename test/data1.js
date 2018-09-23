import React from 'react';

export default [
  {
    title: 'How long do you soak clothes in bleach?',
    titleStyle: 'titleStyle',
    content: (
      <div>
        <p style={{ fontSize: 16 }}>
          {' '}
          Add 1/4 cup of bleach to 1 gallon of water and soak the clothes for
          only 5 to 10 minutes; any more, and you'll start to break down the
          fabric. If you have stains on pastel, colorfast clothes, try soaking
          them in all-fabric bleach, which is gentler than chlorine bleach.Apr
          2, 2013
        </p>
        <a href="http://articles.chicagotribune.com/2013-04-02/features/sc-fam-0402-lifeskill-bleach-20130402_1_bleach-clothes-care-labels">
          How to bleach your clothes - tribunedigital-chicagotribune
        </a>
      </div>
    ),
    contentStyle: { marginBottom: 20 },
    activeContentStyle: 'content-active-bg-color-red',
  },
  {
    title: 'How do you whiten white clothes?',
    titleStyle: 'titleStyle',
    content: (
      <div>
        <h2>Method 2 Using Natural Household Supplies</h2>
        <ul>
          <li>
            Use sunshine as a whitener. Wash cotton and linen sheets,
            tablecloths and other white laundry items. ...
          </li>
          <li>
            Try lemon juice. Add 1/2 cup of lemon juice to the wash cycle, along
            with your detergent. ...
          </li>
        </ul>
      </div>
    ),
    contentStyle: 'contentStyle',
  },
];
