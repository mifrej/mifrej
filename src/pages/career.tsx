import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { withSiteData } from 'react-static'
import Icon from '@components/Icon/Icon';
import './career.css';
// import { Link } from '@reach/router'

export default withSiteData(() => (
  <div>
    <VerticalTimeline>
      <VerticalTimelineElement
        date="08/2017 - present"
        icon={<Icon name="svg-briefcase" />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Berlin, Akelius GmbH</h4>
        <p>Design and kickstart Single Page Application with React as a core library.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    <VerticalTimeline>
      <VerticalTimelineElement
        date="08/2016 - 07/2017"
        icon={<Icon name="svg-briefcase" />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer (RoR/JavaScript)</h3>
        <h4 className="vertical-timeline-element-subtitle">Berlin, Sofatutor GmbH</h4>
        <h5>Independently serving solutions for the top Online Learning Platform in Germany</h5>
        <ul>
          <li>Built new workflow for Admin Panel to serve as support for Video Production team. That involved developing full CRUD interface in Rails application based on a state machine. Also extending roles on authorisation layer.</li>
          <li>Building new Instant Search component supported with Thinking Sphinx as a full text search engine layer, and Backbone as a Single Page Application interface</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
));
