import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllList, savedListAction } from "../redux/features/actions/actions";
import BackResult from "./backResult";
import CardList from "./cardList";

class SearchMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      lists: [],
      toggleModal: false,
    };
  }

  componentDidMount() {
    this.props
      .getAllList(this.props.match?.params?.id)
      .then((res) => {
        this.setState({
          lists: res?.results,
        });
      })
      .catch((e) => alert('can"t read data'));
  }

  savedListAction = (searchInput) => {
    this.props.savedListAction(searchInput);
    this.setState({ toggleModal: false, searchInput });
  };

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value?.toLowerCase().trimStart(),
      toggleModal: !!e.target.value.length,
    });
  };
  render() {
    const { searchInput, lists, toggleModal } = this.state;
    return (
      <Fragment>
        <div id="search-input">
          <div className="col-lg-12 col-md-12 col-sm=12">
            <input
              value={searchInput?.toUpperCase()}
              onChange={this.handleSearch}
              placeholder={searchInput}
              className=""
            />
          </div>
          <div id="results">
            <div
              className="scroll "
              style={{
                visibility: toggleModal ? "visible" : "hidden",
              }}
            >
              <CardList
                header="Artist"
                keyword={"artistName"}
                searchInput={searchInput}
                lists={lists}
                savedListAction={this.savedListAction}
              />
              <CardList
                header="Song"
                keyword={"trackName"}
                searchInput={searchInput}
                lists={lists}
                savedListAction={this.savedListAction}
              />
              <CardList
                header="Album"
                keyword={"collectionCensoredName"}
                searchInput={searchInput}
                lists={lists}
                savedListAction={this.savedListAction}
              />
            </div>
            <BackResult lists={lists} searchInput={searchInput} />
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  getAllList: (id) => dispatch(getAllList(id)),
  savedListAction: (r) => dispatch(savedListAction(r)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMusic);
