import Icon from '@components/Icon/Icon';
import React from 'react';
import './icon-list.css';

interface IListItem {
  label: string;
  iconName: string;
  svgName?: string;
}

interface IProps {
  data: IListItem[];
}

export default function IconList({ data }: IProps) {
  return (
    <ul className='icon-list'>
      {data.map((element) => (
        <li title={element.label}>
          <Icon name={element.iconName}  svgName={element.svgName} />
          <em className='visuallyhidden'>{element.label}</em>
        </li>
      ))}
    </ul>
  );
}
