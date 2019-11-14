import React from "react";
import "./App.css";

class PropertyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false
    };
  }

  handleFavouriteClick(propertyID) {
    console.log(propertyID);
    if (localStorage.getItem(propertyID)) {
      localStorage.removeItem(propertyID);
    } else {
      localStorage.setItem(propertyID, "active");
    }
    this.setState({ reload: !this.state.reload });
    this.props.loadFavourite();
  }

  render() {
    const { property } = this.props;
    let width = 400;
    return (
      <div
        className="column is-one-third is-flex"
        style={{ minWidth: width }}
        key={property.id}
      >
        <div className="card card-container">
          <figure className="image">
            <img
              src={property.propertyPhoto}
              alt="cardimg"
              className="card-image"
            />
          </figure>
          <div className="card-content has-text-left card-block">
            <span className="title is-5">{property.buildingName}</span>
            <div className="content is-size-7">
              {property.districtName}
              <br />
              <i className="fas fa-map-marker-alt" />&nbsp;
              {property.streetNo}&nbsp;{property.streetName}
              <br />
            </div>
            <div className="content is-size-6 has-text-grey-dark">
              {property.netSize}&nbsp;<span className="is-size-7">sqft</span>
              &nbsp;&nbsp;
              {property.bedrooms === 0 ? "Studio" : `${property.bedrooms}`}{" "}
              <i className="fas fa-bed" />
              &nbsp;&nbsp;
              {property.bathrooms}&nbsp;<i className="fas fa-shower" />
              <br />
              <div
                className={`heart-icon ${localStorage.getItem(property.id)
                  ? "has-text-danger"
                  : "has-text-grey-light"}`}
              >
                <i
                  className="fas fa-heart"
                  onClick={() => this.handleFavouriteClick(property.id)}
                />
              </div>
              <div className="price is-size-5 has-text-weight-medium">
                HK${property.salePrice / 10 ** 6}M
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
