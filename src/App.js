import React from "react";
import "./App.css";
import PropertyCard from "./PropertyCard";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      error: false,
      modalActive: false,
      favourite: {}
    };

    this.disableModal = this.disableModal.bind(this);
    this.loadFavourite = this.loadFavourite.bind(this);
  }

  componentDidMount() {
    fetch(`https://my-json-server.typicode.com/roycwc/jsonserver/properties`)
      .then(data => {
        if (data.status === 200) {
          data.json().then(data => {
            this.setState(
              {
                data,
                loaded: true,
                error: false
              },
              this.loadfavourite
            );
          });
        } else {
          console.log("ERROR");
        }
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: true });
      });
  }

  disableModal() {
    this.setState({ modalActive: false });
  }

  loadFavourite() {
    console.log("load");
    const { data } = this.state;
    let favourite = {};
    for (let i = 0; i < data.length; i++) {
      if (localStorage.getItem(data[i].id)) {
        favourite[data[i].id] = true;
      }
    }
    this.setState({ favourite: favourite });
  }

  render() {
    const { data, error, loaded, modalActive, favourite } = this.state;
    console.log(data, favourite);
    return (
      <div className="App">
        {error ? "No internet connection. Please refresh and try again" : ""}
        {!loaded && !error ? <i className="fas fa-spinner fa-spin" /> : ""}
        <br />
        <button
          className="button"
          onClick={() => this.setState({ modalActive: true })}
        >
          View All Favourites
        </button>
        <Modal
          data={data}
          active={modalActive}
          disableModal={this.disableModal}
          favourite={favourite}
          loadFavourite={this.loadFavourite}
        />
        <div className="container">
          <div className="columns is-multiline is-marginless is-paddingless is-centered is-mobile">
            {data.map(property => {
              return (
                <PropertyCard
                  key={property.id}
                  property={property}
                  handleFavouriteClick={this.handleFavouriteClick}
                  loadFavourite={this.loadFavourite}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
