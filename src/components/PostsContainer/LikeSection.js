import React from 'react';

function likes(){
  const [data] = useState(likes);
  console.log(data)
}
const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">

      likes</p>
</div>
  )
};

export default LikeSection;
