import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      error: false,
    }
  }

  componentDidMount() {
    fetch(`https://my-json-server.typicode.com/roycwc/jsonserver/properties`)
      .then(data => {
        if (data.status === 200) {
          data.json().then(data => {
            this.setState({
              data,
              loaded: true,
              error: false
            })
          });
        } else {
          console.log("ERROR");
        }
      })
      .catch(e => {
        console.log(e)
        this.setState({ error: true })
      });
  }



  render() {

    const { data, error, loaded } = this.state
    console.log(data)
    return (
      <div className="App">
        {error ? "No internet connection. Please refresh and try again" : ""}
        {(!loaded && !error) ? <i className="fas fa-spinner fa-spin"></i> : ""}
        <div className="properties-wrapper">
          <div className="columns is-multiline is-marginless is-paddingless is-tablet is-centered">
            {data.map((property) => {
              return (
                <PropertyCard
                  key={property.id}
                  property={property}
                  handleFavouriteClick={this.handleFavouriteClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default App;

