import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { withSiteData } from 'react-static'
import Icon from '@components/Icon/Icon';
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
