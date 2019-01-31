import React from 'react'
import { withSiteData } from 'react-static';
import Button from '@components/Button/Button';

export default withSiteData(() => (
  <section>
    <h2>Hello! 👋🏻 I'm Miłosz Frejnik</h2>
    <h3>I build applications for the web</h3>
    <p>
      I'm a frontend engineer based in Berlin.<br />
      I write clean, elegant and efficient code.
    </p>
    <p>My current weapon of choice is <em>React</em> and related ecosystem.</p>
    <p>I have a profound understanding of <em>Component Driven Architecture</em> with the proper separation of concerns in it.</p>
    <p>I'm strong proponent of open web standards, thus my current autodidactic interests are targeted at Web Components (html template, custom element, shadow DOM)</p>
    <p>I perform at my best when I have sense of ownership over my work and my teammates share similar enthusiasm with me.</p>
    <p>I care about technical standards and prefer well thought comprehensive solutions over so called temporary hacks</p>
    <h2 className="action-bar">
      <Button secondary url="mailto:milosz@frejnik.com" label="Hire Me!" />
      <Button primary url="/docs/cv.pdf" label="Download my CV" />
    </h2>
  </section>
))
