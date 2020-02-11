import './button.css';

type Props = {
  buttonType?: boolean;
  label: string;
  url?: string;
  primary?: boolean;
  secondary?: boolean;
};

function Button({
  primary = false,
  secondary = false,
  label,
  buttonType = false,
  url = '#',
}: Props) {
  const buttonClasses = `mf-button ${primary ? 'mf-button--primary' : ''} ${
    secondary ? 'mf-button--secondary' : ''
  }`;
  if (buttonType) {
    return (
      <button type="button" className={buttonClasses}>
        {label}
      </button>
    );
  }
  return (
    <a href={url} className={buttonClasses}>
      {label}
    </a>
  );
}
export { Button };
