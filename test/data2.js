import React from "react";

const data = [
  {
    title: open => (
      <h1>
        {open ? "This title is current open" : "This title is current close"}
      </h1>
    ),
    titleStyle: "titleStyle",
    content: (
      <div>
        <button>Purchase now</button>
      </div>
    ),
    contentStyle: { marginBottom: 20 },
    activeContentStyle: "content-active-bg-color-red"
  },
  {
    title: "Title 2",
    content: [
      {
        title: open => (
          <div>
            {open
              ? "This nested title is current open"
              : "This nested title is current close"}
          </div>
        ),
        content: "Its currently open",
        activeContentStyle: "contentActiveStyle--margin-left"
      }
    ]
  }
];

export default data;
