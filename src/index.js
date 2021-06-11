import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const a="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14&ab_channel=ThapaTechnicalThapaTechnicalVerified"
ReactDOM.render(
<>
<h1 contentEditable="true" > hello my nmae is xyz</h1>
<h1 className="heading"> hii how are you</h1>
<a href={a}>
<img src="https://picsum.photos/200/300"/> </a>
</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
