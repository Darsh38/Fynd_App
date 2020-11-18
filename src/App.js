import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ModalDetails from './components/Modal/ModalDetails';
import Card from './components/Card/_Card'
import { request } from './lib/api';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [1,2,3,4,5,6,7,8],
      selectedImage: ''
    }
  }

  componentDidMount() {
    request();
  }

  handler(e, image) {
    this.setState({ show: !this.state.show, selectedImage: image });
  }

  deleteImage() {
    this.state.images.pop()
    this.setState({ images: this.state.images })
  }

  modifyImage(index, newImage) {
    let newValues = this.state.images;
    newValues[index] = newImage;
    this.setState({ 
      images: this.state.images
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          {
            this.state.images.map((item, i) => (
              <Card parentScope={this} image={item} key={i} onclick={(e, item) => { this.handler(e, item) }} deleteImage={() => this.deleteImage()}/>
            ))
          }
        </div>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={(e, item) => { this.handler(e, item) }}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <ModalDetails
            item={this.state.selectedImage}
            images={this.state.images}
            modifyImage={() => this.modifyImage()}
            hideModal={() => { this.setState({ show: false }) }}
        />
        </Modal>
      </div>
    );
  }
}

export default App;
