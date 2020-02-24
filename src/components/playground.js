import React, { useState } from 'react';

import formatHTML from '../helpers/format-html';

import './playground.css';

const successIcon = <i className="fas fa-check-circle success"></i>;
const errorIcon = <i className="fas fa-times-circle error"></i>;
const playground = ({exercise: {html, question, selector}, next}) => {
    let selected;
    setTimeout(() => {
        selected = document.querySelectorAll(selector);
        console.log(selected);
        selected && selected.forEach((crtSelected) => crtSelected.classList.add('selected'));
    }, 100);
    const [answer, setAnswer] = useState('');
    const [isOverlayVisible, setOverlayVisibility] = useState(false);
    const [icon, setIcon] = useState(successIcon);

    const parsedHTML = formatHTML(html);

    const testAnswer = (e) => {
        e.preventDefault();
        setOverlayVisibility(true);
        if (answer === selector) {
            setIcon(successIcon);
            setTimeout(() => {
                next();
                setAnswer('');
                setOverlayVisibility(false);
            }, 1500);
        } else {
            setIcon(errorIcon);
            setTimeout(() => setOverlayVisibility(false), 1500);
        }
    };

    return (
        <main>
            <div className="title-container">
                <h1 className="title">{question}</h1>
            </div>
            <section className="container">
                <div className="code-container">
                    <pre className="code" dangerouslySetInnerHTML={{__html: parsedHTML}}></pre>
                </div>
                <div className="html-container" dangerouslySetInnerHTML={{__html: html}}>
                </div>
            </section>
            <form onSubmit={testAnswer} className="answer-form">
                <input type="text" onChange={(e) => setAnswer(e.target.value)} autoFocus={true} value={answer}/>
                <button type="submit">try</button>
            </form>
            {
                isOverlayVisible && <div className="overlay">
                    {icon}
                </div>
            }
        </main>
    );
};

export default playground;

