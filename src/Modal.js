import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

class Modal extends React.Component {

  render() {
    const { data, active, disableModal, favourite, loadFavourite } = this.props
    console.log(data, favourite)
    return (

      <div className={`modal ${active ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => disableModal()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Your Favourite List</p>
            <button className="delete" aria-label="close" onClick={() => disableModal()} ></button>
          </header>
          <section className="modal-card-body">
            <div className="properties-wrapper">
              <div className="columns is-multiline is-marginless is-paddingless is-mobile is-centered">
              
                {data.map((property) => {
                  if (favourite[property.id]) {
                    return (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        handleFavouriteClick={this.handleFavouriteClick}
                        loadFavourite={loadFavourite}
                      />
                    )
                  }
                })}
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
           
          </footer>
        </div>
      </div>

    );
  }

}

export default Modal;

