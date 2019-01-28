import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Experience } from '../types'

export default withRouteData(({ experience }: { experience: Experience }) => (
  <div>
    <Link to="/career/">{'<'} Back</Link>
    <br />
    <h3>{experience.title}</h3>
    <p>{experience.body}</p>
  </div>
))
