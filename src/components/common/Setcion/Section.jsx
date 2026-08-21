import './Section.css';
import Title from '../Title/Title';

const Section = ({
  eyebrow = '',
  heading = '',
  description = '',
  variant = 'light',
  layout = 'default',
  className = '',
  children,
}) => {
  return (
    <section
      className={`
        content-section
        content-section-${variant}
        content-section-${layout}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <div className="content-section-container">
        <div className="content-section-layout">
          
          <div className="content-section-title">
            <Title
              titleDecription={eyebrow}
              titleHeading={heading}
            />
          </div>

          <div className="content-section-content">
            {description && (
              <p className="content-section-description">
                {description}
              </p>
            )}

            {children}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;