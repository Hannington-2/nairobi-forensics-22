import './Title.css';

const Title = ({
  titleDecription = '',
  titleHeading = '',
}) => {
  return (
    <div className="section-title">
      
      {titleDecription && (
        <span className="section-title-eyebrow">
          {titleDecription}
        </span>
      )}

      {titleHeading && (
        <h2 className="section-title-heading">
          {titleHeading}
        </h2>
      )}

    </div>
  );
};

export default Title;