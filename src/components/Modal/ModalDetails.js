
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default class ModalDetailsDetails extends React.Component {

  constructor(){
    super();
    this.state = {
      file: []
    }
  }

  _onChange = () => {
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        imgSrc: [reader.result]
      })
    }.bind(this);
    console.log(url)
  }

  render(){
    return (
      <div>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Small Modal
          </Modal.Title>
          </Modal.Header>
        <Modal.Body>
      <div style={{
        paddingHorizontal: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <div>
          <p>Original Image</p>
          <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="display" />
        </div>
        <div>
          <p>New Image</p>
            <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="display" />
          <form>
            <input
              ref="file"
              type="file"
              name="user[image]"
              multiple="true"
              onChange={this._onChange} />
          </form>
          <br />
          <Button onClick={() => {
            if (this.state.imgSrc){
              this.props.hideModal();
              this.props.modifyImage(this.props.item, '');
              alert('Image has been updated successfully')
            } else{
              alert('Kindly select image to proceed')
            }
          }} variant="primary">Confirm Image</Button>
        </div>
      </div>
        </Modal.Body>
      </div>
    );
  }
}