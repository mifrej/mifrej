import Icon from '@components/Icon/Icon';
import React from 'react';
import { withSiteData } from 'react-static';
import './contact.css';

export default withSiteData(() => (
  <section className='contact-section'>
    <h2>Let's keep in touch</h2>
    <address>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/mifrej/' title='linkedin'>
            <Icon name='svg-icon-linkedin' />
            <em className='visuallyhidden'>linkedin</em>
          </a>
        </li>
        <li>
          <a href='https://github.com/mifrej' title='github'>
            <Icon name='svg-icon-github' />
            <em className='visuallyhidden'>github</em>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/mifrej' title='twitter'>
            <Icon name='svg-icon-twitter' />
            <em className='visuallyhidden'>twitter</em>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/mifrej' title='facebook'>
            <Icon name='svg-icon-facebook' />
            <em className='visuallyhidden'>facebook</em>
          </a>
        </li>
        <li>
          <a href='mailto:milosz@frejnik.com' title='email'>
            <Icon name='svg-icon-envelop' />
            <em className='visuallyhidden'>email</em>
          </a>
        </li>
        <li>
          <a href='/cv/cv-milosz-frejnik.pdf' title='resume'>
            <Icon name='svg-icon-profile' />
            <em className='visuallyhidden'>Resume</em>
          </a>
        </li>
      </ul>
    </address>

  </section>
));
