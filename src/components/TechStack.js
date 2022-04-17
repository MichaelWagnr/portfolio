import React from 'react';
import {
    HTML5,
    CSS,
    JS,
    Figma,
    Git,
    MUI,
    MongoDB,
    NextJS,
    NodeJS,
    ReactIcon,
    Redux,
    Sass,
    TypeScript,
    Yarn,
} from './Icons.js';

const TechStack = () => {
    return (
        <>
            <hr />
            {/* <h3>Tech</h3> */}
            <section className="tech-stack">
                <p>Frequently using:</p>
                <div className="frequently">
                    {HTML5}
                    {CSS}
                    {JS}
                    {Figma}
                    {Git}
                    {ReactIcon}
                    {Yarn}
                </div>
                <p>Learning:</p>
                <div className="learning">
                    {Sass}
                    {MUI}
                    {TypeScript}
                </div>
                <p>Interested in:</p>
                <div className="interested">
                    {MongoDB}
                    {NextJS}
                    {NodeJS}
                    {Redux}
                </div>
            </section>
        </>
    )
}

export default TechStack;