import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import Loader from "./Components/Loader";
import ImageGallery from "./Components/ImageGallery";
import { fetchImagesByQuerry } from "./services/galleryAPI";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

export default class App extends Component {
  state = {
    images: [],
    querry: "",
    loading: false,
    page: 1,
    modal: false,
    largeImageUrl: "",
  };


componentDidUpdate(prevProps, prevState) {
  if (this.state.images !== prevState.images) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  }
}


  fetchImages = () => {
    this.setState({ loading: true, error: null });
    fetchImagesByQuerry(this.state.querry, this.state.page)
      .then((res) =>
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...res],
            page: prevState.page + 1,
          };
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = (searchQuerry) => {
    this.setState(
      { querry: searchQuerry, images: [], page: 1 },
      this.fetchImages
    );
  };

closeModal = (e) => {
  this.setState({ modal: false, largeImageUrl: '' });

}

  showModal = (e) => {
    const imgUrl = e.target.dataset.url;
console.log(e.target.dataset)
    this.setState({ modal: true, largeImageUrl: imgUrl });
  };

  render() {
    const { images, modal, largeImageUrl } = this.state;
    return (
      <div className="App">
        <SearchBar onSearch={this.handleSearch} />
        {this.error && <h3>Error</h3>}
        {this.state.loading && <Loader />}
        {modal && (
          <Modal Onclose={this.closeModal}>
            <img src={largeImageUrl} alt=''/>
          </Modal>
        )}
        <ImageGallery images={images} onOpenModal={this.showModal} />
        {images.length > 0 ? <Button onClick={this.fetchImages} /> : null}
      </div>
    );
  }
}
