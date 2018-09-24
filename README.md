# react-simple-collapsible-element

[![npm Version](https://image.ibb.co/fU7OeK/We_Chat_Screenshot_20180929205959.png)](https://www.npmjs.com/package/react-simple-collapsible-element)

[Demo](http://dashing-attention.surge.sh/).

## Install

```
$ npm install react-simple-collapsible-element --save
```

## Usage

```
$ Simple react collapsible supports nested element and custom styling.
```

## example1.

```js
import Collapsible from 'react-simple-collapsible-element';

const data = [
  {
    title: 'title 1',
    content: 'content 1'
  },
  {
    title: 'title 2',
    contentStyle: { backgroundColor: 'red' }, // can be a classname also.
    activeContentStyle: 'activeContentStyle', // classname
    content: 'content 2'
  }
];

return <Collapsible data={data} />;
```

## example2.

```js
import Collapsible from 'react-simple-collapsible-element';

const data = [
  {
    title: <h1>title 1</h1>,
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

## Props

| Name                 | Type              | Default               | Description                                                              |
| :------------------- | :---------------- | :-------------------- | :----------------------------------------------------------------------- |
| `title`              | `Element`         | `'div'`               | parent                                                                   |
| `content`            | `Element / array` | `div`                 | child                                                                    |
| `keepOpen`           | `bool`            | `false`               | whether or not keep the current element open when click on other element |
| `customTransition`   | `String`          | `height .3s ease-out` | custom transition                                                        |
| `titleStyle`         | `String / Object` | `undefined`           | Can be a style object or multiple classnames together.                   |
| `contentStyle`       | `String / Object` | `undefined`           | Can be a style object or multiple classnames together.                   |
| `activeTitleStyle`   | `String`          | `undefined`           | a classname to pass to when the title is active.                         |
| `activeContentStyle` | `String`          | `undefined`           | a classname to pass to when the content is active.                       |
