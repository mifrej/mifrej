import { Button } from '../components/button/button';

const Homepage = () => (
  <section>
    <h2>
      Hello!{' '}
      <span aria-label="waving hand" role="img">
        👋🏻
      </span>{' '}
      I&apos;m Miłosz{'\u00a0'}Frejnik
    </h2>
    <h3>I build applications for the web</h3>
    <p>
      I&apos;m a Front End Engineer based in Berlin.
      <br />I write clean, elegant and efficient code.
    </p>
    <p>
      My current weapon of choice is <em>React</em> and related ecosystem.
    </p>
    <p>
      I have a profound understanding of <em>Component Driven Architecture </em>
      with the proper separation of concerns in it.
    </p>
    <p>
      I&apos;m strong proponent of open web standards, thus my current
      autodidactic interests are targeted at Web Components (html template,
      custom element, shadow DOM)
    </p>
    <p>
      I perform at my best when I have sense of ownership over my work and my
      teammates share similar enthusiasm with me.
    </p>
    <p>
      I care about technical standards and prefer well thought comprehensive
      solutions over so called temporary hacks
    </p>
    <p>
      In currently very complicated world of many technologies in hand i try to
      implement new motto <strong>Good Enough</strong>!
    </p>
    <h2 className="action-bar">
      <Button secondary url="mailto:milosz@frejnik.com" label="Hire Me!" />
      <Button primary url="/cv/cv-milosz-frejnik.pdf" label="Download my CV" />
    </h2>
  </section>
);

export default Homepage;
