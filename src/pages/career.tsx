import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { withSiteData } from 'react-static'
import Icon from '@components/Icon/Icon';
import IconList from '@components/IconList/IconList';
import './career.css';
// import { Link } from '@reach/router'

export default withSiteData(() => (
  <div>
    <VerticalTimeline className={"career-timeline"}>
      <VerticalTimelineElement
        date="08/2017 - present"
        icon={<Icon name="svg-briefcase" />}
      >
        <h3>Frontend Engineer (RoR/JavaScript)</h3>
        <h4><span>Akelius GmbH</span> <em>Berlin</em></h4>
        <ul>
          <li><p>Designed and kickstarted Single Page Application with React consuming backend API with GraphQL Apollo client</p></li>
          <li>Maintain and support legacy RoR application</li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={

          [
            {
              label: "JavaScript",
              iconName: 'stack-icons-javascript',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5",
              iconName: 'stack-icons-html-5',
              svgName: 'tech-stack',
            },
            {
              label: "React",
              iconName: 'stack-icons-react',
              svgName: 'tech-stack',
            },
            {
              label: "GraphQL",
              iconName: 'stack-icons-graphql',
              svgName: 'tech-stack',
            },
            {
              label: "Apollo",
              iconName: 'stack-icons-apollostack',
              svgName: 'tech-stack',
            },
            {
              label: "FlowJS",
              iconName: 'stack-icons-flow',
              svgName: 'tech-stack',
            },
            {
              label: "Jest",
              iconName: 'stack-icons-jest',
              svgName: 'tech-stack',
            },
            {
              label: "CSS3",
              iconName: 'stack-icons-css-3',
              svgName: 'tech-stack',
            },
            {
              label: "PostCSS",
              iconName: 'stack-icons-postcss',
              svgName: 'tech-stack',
            },
            {
              label: "Material UI",
              iconName: 'stack-icons-material-ui',
              svgName: 'tech-stack',
            },
            {
              label: "Webpack",
              iconName: 'stack-icons-webpack',
              svgName: 'tech-stack',
            },
            {
              label: "Kubernetes",
              iconName: 'stack-icons-kubernetes',
              svgName: 'tech-stack',
            },
            {
              label: "Jenkins",
              iconName: 'stack-icons-jenkins',
              svgName: 'tech-stack',
            },
            {
              label: "Ruby on Rails",
              iconName: 'stack-icons-rails',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="08/2016 - 07/2017"
        icon={<Icon name="svg-briefcase" />}
        position={"right"}
      >
        <h3>Full Stack Developer (RoR/JavaScript)</h3>
        <h4><span>Sofatutor GmbH</span> <em>Berlin</em></h4>
        <ul>
          <li>
            <p>Built new workflow for Admin Panel to serve as support for Video Production team. That involved developing full CRUD interface in Rails application based on a state machine. Also extending roles on authorisation layer.</p>
          </li>
          <li>
            <p>Built new Instant Search component supported with Thinking Sphinx as a full text search engine layer, and Backbone as a Single Page Application interface</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              label: "Backbone",
              iconName: 'stack-icons-backbone-icon',
              svgName: 'tech-stack',
            },
            {
              label: "CoffeeScript",
              iconName: 'stack-icons-coffeescript',
              svgName: 'tech-stack',
            },
            {
              label: "jQuery",
              iconName: 'stack-icons-jquery',
              svgName: 'tech-stack',
            },
            {
              label: "JavaScript",
              iconName: 'stack-icons-javascript',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5",
              iconName: 'stack-icons-html-5',
              svgName: 'tech-stack',
            },
            {
              label: "CSS3",
              iconName: 'stack-icons-css-3',
              svgName: 'tech-stack',
            },
            {
              label: "Sass",
              iconName: 'stack-icons-sass',
              svgName: 'tech-stack',
            },
            {
              label: "Ruby on Rails",
              iconName: 'stack-icons-rails',
              svgName: 'tech-stack',
            },
            {
              label: "MySQL",
              iconName: 'stack-icons-mysql',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="03/2015 - 07/2016"
        icon={<Icon name="svg-briefcase" />}
      >
        <h3>Full Stack Developer (RoR)</h3>
        <h4><span>Sharepop</span> <em>Berlin</em></h4>
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
              label: "CoffeeScript",
              iconName: 'stack-icons-coffeescript',
              svgName: 'tech-stack',
            },
            {
              label: "jQuery",
              iconName: 'stack-icons-jquery',
              svgName: 'tech-stack',
            },
            {
              label: "JavaScript",
              iconName: 'stack-icons-javascript',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5",
              iconName: 'stack-icons-html-5',
              svgName: 'tech-stack',
            },
            {
              label: "CSS3",
              iconName: 'stack-icons-css-3',
              svgName: 'tech-stack',
            },
            {
              label: "Sass",
              iconName: 'stack-icons-sass',
              svgName: 'tech-stack',
            },
            {
              label: "Zurb Foundation",
              iconName: 'stack-icons-foundation',
              svgName: 'tech-stack',
            },
            {
              label: "Ruby on Rails",
              iconName: 'stack-icons-rails',
              svgName: 'tech-stack',
            },
            {
              label: "MySQL",
              iconName: 'stack-icons-mysql',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="11/2013 - 02/2015"
        icon={<Icon name="svg-briefcase" />}
        position={"right"}
      >
        <h3>Senior Frontend Developer</h3>
        <h4><span>AppLift (HitFox Group)</span> <em>Berlin</em></h4>
        <ul>
          <li>
            <p>Implemented (Frontend Layer) and supporting analytic dashboard applications based on Ruby on Rails</p>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              label: "CoffeeScript",
              iconName: 'stack-icons-coffeescript',
              svgName: 'tech-stack',
            },
            {
              label: "jQuery",
              iconName: 'stack-icons-jquery',
              svgName: 'tech-stack',
            },
            {
              label: "JavaScript",
              iconName: 'stack-icons-javascript',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5",
              iconName: 'stack-icons-html-5',
              svgName: 'tech-stack',
            },
            {
              label: "CSS3",
              iconName: 'stack-icons-css-3',
              svgName: 'tech-stack',
            },
            {
              label: "Sass",
              iconName: 'stack-icons-sass',
              svgName: 'tech-stack',
            },
            {
              label: "Zurb Foundation",
              iconName: 'stack-icons-foundation',
              svgName: 'tech-stack',
            },
            {
              label: "Bootstrap",
              iconName: 'stack-icons-bootstrap',
              svgName: 'tech-stack',
            },
            {
              label: "Ruby on Rails",
              iconName: 'stack-icons-rails',
              svgName: 'tech-stack',
            },
            {
              label: "AWS",
              iconName: 'stack-icons-aws',
              svgName: 'tech-stack',
            },

          ]
        } />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="10/2010 - 09/2013"
        icon={<Icon name="svg-briefcase" />}
      >
        <h3>User Interface Developer</h3>
        <h4><span>POSSIBLE</span> <em>Katowice, Poland</em></h4>
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
              <li><a href="http://www.nfumutual.co.uk">http://www.nfumutual.co.uk</a></li>
              <li><a href="http://www.slh.com">http://www.slh.com</a></li>
              <li><a href="http://www.aegon.com">http://www.aegon.com</a></li>
            </ul>
          </li>
        </ul>
        <h5>Tech Stack</h5>
        <IconList data={
          [
            {
              label: "jQuery",
              iconName: 'stack-icons-jquery',
              svgName: 'tech-stack',
            },
            {
              label: "JavaScript",
              iconName: 'stack-icons-javascript',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5",
              iconName: 'stack-icons-html-5',
              svgName: 'tech-stack',
            },
            {
              label: "CSS3",
              iconName: 'stack-icons-css-3',
              svgName: 'tech-stack',
            },
            {
              label: "Sass",
              iconName: 'stack-icons-sass',
              svgName: 'tech-stack',
            },
            {
              label: "HTML5 Boilerplate",
              iconName: 'stack-icons-html5-boilerplate',
              svgName: 'tech-stack',
            },
            {
              label: ".NET",
              iconName: 'stack-icons-dotnet',
              svgName: 'tech-stack',
            },
          ]
        } />
      </VerticalTimelineElement>
    </VerticalTimeline>
    <div style={{ clear: 'both' }}>{' '}</div>
  </div>
));
