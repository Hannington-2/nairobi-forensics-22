import './Sectionbutton.css';

const Sectionbutton = ({
  href,
  children,
  align = 'left',
  className = '',
  ...props
}) => {
  return (
    <a
      href={href}
      className={`section-button section-button-${align} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <span className="section-button-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
};

export default Sectionbutton;
