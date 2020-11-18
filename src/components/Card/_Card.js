import React from 'react';
import './style.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.item
    }
  }

  render() {
    return (
      <div className='ImageView'>
        <button className='ImageView--on delete' onClick={(e, i) => {
          window.confirm("Are you sure you wish to delete this item?") &&
            this.props.deleteImage(e, i)
        }}>
          X
        </button>
        <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="display" />
        <button className='ImageView--on edit' onClick={(e) => {
          this.props.onclick(e, this.props.image)
        }}>
          Edit
        </button>
      </div>
    );
  }
}

export default Card;
