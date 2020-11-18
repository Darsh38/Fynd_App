 export const request = () => {
  fetch("http://demo4126999.mockable.io/images", {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
  })
    .then(res => res.json())
    .then((response) => {
      this.setState({
        images: response
      });
    }, (error) => {
      console.log('error', error)
    }
    )
}