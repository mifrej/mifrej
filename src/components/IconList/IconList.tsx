import React from 'react';
import Icon from '@components/Icon/Icon';
import './icon-list.css';

interface ListItem {
  label: string,
  iconName: string,
  svgName?: string
}

interface Props {
  data: Array<ListItem>
}

export default function IconList({ data }: Props) {
  return (
    <ul className="icon-list">
      {data.map(element => (
        <li title={element.label}>
          <Icon name={element.iconName}  svgName={element.svgName} />
          <em className="visuallyhidden">{element.label}</em>
        </li>
      ))}
    </ul>
  )
}
