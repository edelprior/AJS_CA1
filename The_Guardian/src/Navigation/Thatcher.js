import React from "react";
import NewsCard from "../Components/NewsCard";
import SearchBar from "../Components/SearchBar";
import Selector from "../Components/Selector";
import axios from "axios";
import PropTypes from "prop-types";
// eslint-disable-next-line
{
  /*
  Import the Components to be used building the class.
  With the Router this can be desribed as a "page" in the application.
  Below JSX defines and builds the component to be displayed
  on the screen when the class is called.
  */
}
class Thatcher extends React.Component {
  constructor() {
    super();
    this.state = {
      thatcherArticles: [],
      sectionSelected: "all",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://content.guardianapis.com/search?q=thatcher&api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(responseArray => {
        this.setState({
          thatcherArticles: responseArray.data.response.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let articleList = this.state.thatcherArticles.map(article => {
      const sectionMatch =
        this.state.sectionSelected === article.pillarName ||
        this.state.sectionSelected === "all";

      const searchMatch = article.webTitle
        .toLowerCase()
        .startsWith(this.state.searchText.toLowerCase());
      return sectionMatch && searchMatch ? (
        <NewsCard
          key={article.id}
          title={article.webTitle}
          name={article.pillarName}
          link={article.webUrl}
        />
      ) : null;
    });
    return (
      <div>
        <div className="column is-12">
          <Selector
            options={[
              "All",
              "Evil",
              "News",
              "Hitler's Friends",
              "Arts",
              "Lifestyle"
            ]}
            handleChange={this.handleChange}
            label="Filter by Section"
            name="sectionSelected"
            selected={this.state.sectionSelected}
          />
          <SearchBar
            name="searchText"
            label="Search by Title"
            value={this.state.searchText}
            handleChange={this.handleChange}
            placeholder={"e.g. Witches"}
          />
        </div>
        <div className="columns is-multiline">{articleList}</div>
      </div>
    );
  }
}

// eslint-disable-next-line
{
  /* Default values for Props
  ------------------------------
  Helps to typecheck the programme. The library displays
  a warning in the JS console if an invalid value is provided
  for the prop. Only used for development purposes.
  Also provides a default set for each prop defined, so the user doesn't
  see null as a value  */
}
Selector.defaultProps = {
  sectionSelected: "Arts",
  searchText: "",
  placeholder: "e.g. Witches"
};

Selector.propTypes = {
  sectionSelected: PropTypes.string,
  searchText: PropTypes.string,
  placeholder: PropTypes.string
};
export default Thatcher;
