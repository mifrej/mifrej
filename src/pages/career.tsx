import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Experience } from '../types'

export default withRouteData(({ experiences }: { experiences: Experience[] }) => (
  <div>
    <ul>
      {experiences.map(experience => (
        <li key={experience.id}>
          <Link to={`/career/experience/${experience.id}/`}>{experience.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
