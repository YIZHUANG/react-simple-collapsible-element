# react-simple-collapsible-element

[![npm Version](https://image.ibb.co/fU7OeK/We_Chat_Screenshot_20180929205959.png)](https://www.npmjs.com/package/react-simple-collapsible-element)

## Demo

```
See example for demo, npm install and npm start
```

## Why use this?

```
Simple, Lightweight, Production-ready, has all the common use cases covered. Data for the collapsible can be jsx or
pure JSON data coming from a CMS by non-technical people.
```

## Install

```
$ npm install react-simple-collapsible-element --save
```

## Usage

```
$ Production-ready Simple react collapsible supports nested element and custom styling.
```

## example1.

```js
import Collapsible from "react-simple-collapsible-element";

const data = [
  {
    title: "title 1",
    // title: <myReactComponent /> this is ok too!
    // title: (open) => open ? <PurchaseForm /> : <ProductCard />  this is ok too!
    content: "content 1" // content: <PayButton /> or content: (open) => <PayButton isActive={open} />
  },
  {
    // title and content can be a function or non-function.
    // open props is only true when the children which is content is open.
    title: open => (
      <h1 style={{ color: open ? "orange" : "white " }}>title 2</h1>
    ),
    // title: <h1>title 2</h1>   this is ok too!
    contentStyle: { backgroundColor: "red" }, // can be a classname also.
    activeContentStyle: "activeContentStyle", // classname
    content: open => (
      <ul>
        <li>{open ? "This content is currently open" : ""}</li>
        <li>content 2</li>
        <li>content 2</li>
      </ul>
    )
  }
];

return <Collapsible data={data} />;
```

## example2.

```js
import Collapsible from 'react-simple-collapsible-element';

const data = [
  {
    title: (open) => <h1>title 1 { open ? 'this is current opened!' : 'its close ATM'}</h1>,
    content: <span>content 1</span>,
    contentStyle: 'content-class'
  },
  {
    title: 'title 2',
    content: [
      {
        title: 'title 2 title 1',
        content: 'title 2 title 1 content',
        titleStyle: { backgroundColor: 'black' }, // can be a classname also.
        activeTitleStyle: 'activeTitleStyle',
        contentStyle: { backgroundColor: 'red' }, // can be a classname also.
        activeContentStyle: 'activeContentStyle'
      }
    ]
  }
];

return <Collapsible keepOpen={true or false} data={data} />;
```

## Title and Content as a function

```
When title and content are functions, it takes a boolean as a params, it is false by default if the Collapsible is current closed.
```

## Props

| Name                 | Type                               | Default               | Description                                                              |
| :------------------- | :--------------------------------- | :-------------------- | :----------------------------------------------------------------------- |
| `title`              | `Element, function, string`        | `'div'`               | parent                                                                   |
| `content`            | `Element, string, function, array` | `div`                 | child                                                                    |
| `keepOpen`           | `bool`                             | `false`               | whether or not keep the current element open when click on other element |
| `customTransition`   | `String`                           | `height .3s ease-out` | custom transition                                                        |
| `titleStyle`         | `String / Object`                  | `undefined`           | Can be a style object or multiple classnames together.                   |
| `contentStyle`       | `String / Object`                  | `undefined`           | Can be a style object or multiple classnames together.                   |
| `activeTitleStyle`   | `String`                           | `undefined`           | a classname to pass to when the title is active.                         |
| `activeContentStyle` | `String`                           | `undefined`           | a classname to pass to when the content is active.                       |
