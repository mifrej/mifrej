import React from 'react';
import './button.css';

interface Props {
  buttonType?: boolean,
  label: string,
  url?: string
  primary?: boolean,
  secondary?: boolean
}

export default function Button({
  primary = false,
  secondary = false,
  label,
  buttonType = false,
  url = "#"
}: Props) {
  const buttonClasses = `mf-button ${primary ? 'mf-button--primary': ''} ${secondary ? 'mf-button--secondary': ''}`
  if (buttonType) {
    return (
      <button className={buttonClasses}>
        {label}
      </button>
    )
  } else {
    return (
      <a href={url} className={buttonClasses}>
        {label}
      </a>
    )
  }
}
