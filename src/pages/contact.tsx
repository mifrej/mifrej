import React from 'react';
import { withSiteData } from 'react-static';
import Icon from '@components/Icon/Icon';
import './contact.css';


export default withSiteData(() => (
  <section>
    <h3>Let's keep in touch</h3>
    <address>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mifrej/">
            <Icon name="svg-icon-linkedin" />
            <em className="visuallyhidden">linkedin</em>
          </a>
        </li>
        <li>
          <a href="https://github.com/mifrej">
            <Icon name="svg-icon-github" />
            <em className="visuallyhidden">github</em>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mifrej">
            <Icon name="svg-icon-twitter" />
            <em className="visuallyhidden">twitter</em>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/mifrej">
            <Icon name="svg-icon-facebook" />
            <em className="visuallyhidden">facebook</em>
          </a>
        </li>
        <li>
          <a href="mailto:milosz@frejnik.com">
            <Icon name="svg-icon-envelop" />
            <em className="visuallyhidden">email</em>
          </a>
        </li>
        <li>
          <a href="#">
            <Icon name="svg-icon-profile" />
            <em className="visuallyhidden">Resume</em>
          </a>
        </li>
      </ul>
    </address>

  </section>
));
