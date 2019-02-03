import React from 'react';
import './icon.css';

interface Icon {
  name: string;
  svgName?: string;
}

export default function Icon({ name, svgName = 'svg-sprite' }: Icon) {
  return (
    <svg className={`svg-icon ${name}--element`}>
      <use xlinkHref={`/img/${svgName}.svg#${name}`} />
    </svg>
  );
}
