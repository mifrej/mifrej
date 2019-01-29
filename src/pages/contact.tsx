import React from 'react';
import { withSiteData } from 'react-static';
import Icon from '@components/Icon/Icon';


export default withSiteData(() => (
  <section>
    <h3>Let's keep in touch</h3>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/mifrej/">linkedin</a>
      </li>
      <li>
        <a href="https://github.com/mifrej">
          <Icon name={'svg-icon-github'} />
        github
        </a>
      </li>
      <li>
        <a href="https://twitter.com/mifrej">twitter</a>
      </li>
      <li>
        <a href="https://www.facebook.com/mifrej">facebook</a>
      </li>
      <li>
        <a href="mailto:milosz@frejnik.com">email</a>
      </li>
    </ul>
  </section>
));
