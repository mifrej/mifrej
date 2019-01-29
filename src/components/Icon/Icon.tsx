import React from 'react';
import './icon.css';

export default function Icon({ name }: { name: string }) {
  return (
    <svg className={`svg-icon ${name}--element`}>
      <use xlinkHref={`/img/svg-sprite.svg#${name}`} />
    </svg>
  )
};
