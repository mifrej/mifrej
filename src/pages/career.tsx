import React from 'react';

import Icon from '@components/Icon/Icon';
import IconList from '@components/IconList/IconList';
import { withSiteData } from 'react-static';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './career.css';

export default withSiteData(() => (
  <div>
    <VerticalTimeline className={'career-timeline'}>
    <VerticalTimelineElement
        date='08/2019 - present'
        icon={<Icon name='svg-briefcase' />}
      >
        <h3>Senior Frontend Engineer (JavaScript)</h3>
        <h4><span><a href="https://wattsight.com">Wattsight GmbH</a></span> <em>Berlin</em></h4>
        <ul>
          <li><p>Yet to come ...</p></li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList
          data={
          [
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-react',
              label: 'React',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-graphql',
              label: 'GraphQL',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-apollostack',
              label: 'Apollo',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jest',
              label: 'Jest',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-postcss',
              label: 'PostCSS',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-material-ui',
              label: 'Material UI',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-webpack',
              label: 'Webpack',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-kubernetes',
              label: 'Kubernetes',
              svgName: 'tech-stack',
            },
          ]
          }
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='08/2017 - 07/2019'
        icon={<Icon name='svg-briefcase' />}
        position={'right'}
      >
        <h3>Software Engineer (JavaScript/RoR)</h3>
        <h4><span><a href="https://akelius.com">Akelius GmbH</a></span> <em>Berlin</em></h4>
        <ul>
          <li><p>Designed and kickstarted Single Page Application projects
            with React consuming backend API with GraphQL Apollo client</p></li>
          <li>Maintain and support legacy RoR application</li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList
          data={
          [
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-react',
              label: 'React',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-graphql',
              label: 'GraphQL',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-apollostack',
              label: 'Apollo',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-flow',
              label: 'FlowJS',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jest',
              label: 'Jest',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-postcss',
              label: 'PostCSS',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-material-ui',
              label: 'Material UI',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-webpack',
              label: 'Webpack',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-kubernetes',
              label: 'Kubernetes',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jenkins',
              label: 'Jenkins',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-rails',
              label: 'Ruby on Rails',
              svgName: 'tech-stack',
            },

          ]
          }
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='08/2016 - 07/2017'
        icon={<Icon name='svg-briefcase' />}
      >
        <h3>Full Stack Developer (JavaScript/RoR)</h3>
        <h4><a href='https://sofatutor.de'>Sofatutor GmbH</a> <em>Berlin</em></h4>
        <ul>
          <li>
            <p>Built new workflow for Admin Panel to serve as support for Video Production team.
              That involved developing full CRUD interface in Rails application based
              on a state machine.Also extending roles on authorisation layer.</p>
          </li>
          <li>
            <p>Built new Instant Search component supported
              with Thinking Sphinx as a full text search engine layer,
              and Backbone as a Single Page Application interface</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-backbone-icon',
              label: 'Backbone',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-coffeescript',
              label: 'CoffeeScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-sass',
              label: 'Sass',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-rails',
              label: 'Ruby on Rails',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-mysql',
              label: 'MySQL',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='03/2015 - 07/2016'
        icon={<Icon name='svg-briefcase' />}
        position={'right'}
      >
        <h3>Full Stack Developer (RoR)</h3>
        <h4><a href='https://www.hisharethat.com/'>
          Sharepop (hi! share that)</a> <em>Berlin</em>
        </h4>
        <ul>
          <li>
            <p>Successfully built and kickstart greenfield product with one teammate.</p>
          </li>
          <li>
            <p>Designed and lead Frontend architecture and UX.</p>
          </li>
          <li>
            <p>After product stabilisation I developed Full Stack features in RoR</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-coffeescript',
              label: 'CoffeeScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-sass',
              label: 'Sass',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-foundation',
              label: 'Zurb Foundation',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-rails',
              label: 'Ruby on Rails',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-mysql',
              label: 'MySQL',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='11/2013 - 02/2015'
        icon={<Icon name='svg-briefcase' />}
      >
        <h3>Senior Frontend Developer</h3>
        <h4><a href='https://www.applift.com/'>AppLift GmbH (HitFox Group)</a> <em>Berlin</em></h4>
        <ul>
          <li>
            <p>Implemented (Frontend Layer) and supporting analytic
              dashboard applications based on Ruby on Rails</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-coffeescript',
              label: 'CoffeeScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-sass',
              label: 'Sass',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-foundation',
              label: 'Zurb Foundation',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-bootstrap',
              label: 'Bootstrap',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-rails',
              label: 'Ruby on Rails',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-aws',
              label: 'AWS',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='10/2010 - 09/2013'
        icon={<Icon name='svg-briefcase' />}
        position={'right'}
      >
        <h3>User Interface Developer</h3>
        <h4><a href='https://www.possible.com/'>POSSIBLE</a> <em>Katowice, Poland</em></h4>
        <ul>
          <li>
            <p>
              Provide Frontend Layer solutions for key clients.
              Developed solutions were based on Episerver CMS as a backend layer.
            </p>
          </li>
          <li>
            <p>Examplary shipped services:</p>
            <ul>
              <li><a href='http://www.nfumutual.co.uk'>http://www.nfumutual.co.uk</a></li>
              <li><a href='http://www.slh.com'>http://www.slh.com</a></li>
              <li><a href='http://www.aegon.com'>http://www.aegon.com</a></li>
            </ul>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-sass',
              label: 'Sass',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html5-boilerplate',
              label: 'HTML5 Boilerplate',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-dotnet',
              label: '.NET',
              svgName: 'tech-stack',
            },
          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='11/2008 - 11/2010'
        icon={<Icon name='svg-briefcase' />}
      >
        <h3>Senior Webmaster</h3>
        <h4><a href='https://getresponse.com'>Getresponse</a> <em>Gdynia, Poland</em></h4>
        <ul>
          <li>
            <p>
              Built complete revamped UI for the platform with all it's existing tools.
            </p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-php',
              label: 'PHP',
              svgName: 'tech-stack',
            },
          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='11/2007 - 11/2008'
        icon={<Icon name='svg-briefcase' />}
        position='right'
      >
        <h3>Web Developer</h3>
        <h4><a href='https://engine.pl'>Engine</a> <em>Gdynia, Poland</em></h4>
        <ul>
          <li>
            <p>Providing services in Digital Agency workflow with many key clients.
            Mastered my bread and butter skills of Front End for various demands.</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              iconName: 'stack-icons-jquery',
              label: 'jQuery',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-javascript',
              label: 'JavaScript',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-html-5',
              label: 'HTML5',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-css-3',
              label: 'CSS3',
              svgName: 'tech-stack',
            },
            {
              iconName: 'stack-icons-php',
              label: 'PHP',
              svgName: 'tech-stack',
            },
          ]
        } />
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
));
