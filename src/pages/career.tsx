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
            }
          ]
        } />
        <ul className="stack-list">
          <li title="JavaScript">
            <Icon name="stack-icons-javascript" svgName="tech-stack" />
            <em className="visuallyhidden">JavaScript</em>
          </li>
          <li title="HTML5">
            <Icon name="stack-icons-html-5" svgName="tech-stack" />
            <em className="visuallyhidden">HTML5</em>
          </li>
          <li title="React">
            <Icon name="stack-icons-react" svgName="tech-stack" />
            <em className="visuallyhidden">React</em>
          </li>
          <li title="GraphQL">
            <Icon name="stack-icons-graphql" svgName="tech-stack" />
            <em className="visuallyhidden">GraphQL</em>
          </li>
          <li title="Apollo">
            <Icon name="stack-icons-apollostack" svgName="tech-stack" />
            <em className="visuallyhidden">Apollo</em>
          </li>
          <li title="FlowJS">
            <Icon name="stack-icons-flow" svgName="tech-stack" />
            <em className="visuallyhidden">FlowJS</em>
          </li>
          <li title="Jest">
            <Icon name="stack-icons-jest" svgName="tech-stack" />
            <em className="visuallyhidden">Jest</em>
          </li>
          <li title="CSS3">
            <Icon name="stack-icons-css-3" svgName="tech-stack" />
            <em className="visuallyhidden">CSS3</em>
          </li>
          <li title="PostCSS">
            <Icon name="stack-icons-postcss" svgName="tech-stack" />
            <em className="visuallyhidden">PostCSS</em>
          </li>
          <li title="Material UI">
            <Icon name="stack-icons-material-ui" svgName="tech-stack" />
            <em className="visuallyhidden">Material UI</em>
          </li>
          <li title="Webpack">
            <Icon name="stack-icons-webpack" svgName="tech-stack" />
            <em className="visuallyhidden">Webpack</em>
          </li>
          <li title="Kubernetes">
            <Icon name="stack-icons-kubernetes" svgName="tech-stack" />
            <em className="visuallyhidden">Kubernetes</em>
          </li>
          <li title="Jenkins">
            <Icon name="stack-icons-jenkins" svgName="tech-stack" />
            <em className="visuallyhidden">Jenkins</em>
          </li>
          <li title="Ruby on Rails">
            <Icon name="stack-icons-rails" svgName="tech-stack" />
            <em className="visuallyhidden">Ruby on Rails</em>
          </li>
        </ul>
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
      </VerticalTimelineElement>
    </VerticalTimeline>
    <div style={{ clear: 'both' }}>{' '}</div>
  </div>
));
