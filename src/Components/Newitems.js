import React, { useState } from 'react';
const Newitems = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log("Error loading image:", imageUrl);  // Log the error for debugging
    setImageError(true);
  };

  const validImageUrl = imageUrl || "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-9.jpg";

  console.log("imageUrl: ", validImageUrl);  // Log the image URL to verify it's correct

  return (
    <div className="my-3">
      <div className={`card bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        {!imageError ? (
          <img
            src={validImageUrl}
            className="card-img-top"
            alt={title}
            onError={handleImageError} 
          />
        ) : (
          <img
            src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-9.jpg" 
            className="card-img-top"
            alt="not available"
          />
        )}
        <div className="card-body">
          <h5 className={`card-title text-${props.mode === 'dark' ? 'white' : 'black'}`}>{title}</h5>
          <p className={`card-text text-${props.mode === 'dark' ? 'white' : 'black'}`}>{description}</p>
          <p className="card-text">
            <small className={`text-body-secondary`}>
              <span className={`text-${props.mode === 'dark' ? 'white' : 'black'}`}>By {author ? author : "Unknown"}</span> <span className={`text-${props.mode === 'dark' ? 'white' : 'black'}`}> on {new Date(date).toGMTString()}</span>
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn ${props.mode === 'dark' ? 'btn-black btn-dark-mode' : 'btn-dark'}`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newitems;
