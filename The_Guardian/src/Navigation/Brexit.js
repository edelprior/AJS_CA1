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
class Brexit extends React.Component {
  constructor() {
    super();
    this.state = {
      brexitArticles: [],
      sectionSelected: "all",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // eslint-disable-next-line
    {
      /*
      Declares a state, defining variables that will be
      populated after the axios call.
      */
    }
  }

  componentDidMount() {
    // eslint-disable-next-line
    {
      /* Handles axios request to API, The Guardian.
         Axios is a promise based HTTP client for browser & Node.

    */
    }
    axios
      .get(
        "https://content.guardianapis.com/tags?q=brexit&api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(responseArray => {
        this.setState({
          brexitArticles: responseArray.data.response.results
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
    // eslint-disable-next-line
    {
      /* Allows handleChange to update the state of the specific component
       */
    }
  }

  render() {
    let brexitArticleList = this.state.brexitArticles.map(article => {
      const sectionMatch =
        this.state.sectionSelected === article.pillarName ||
        this.state.sectionSelected === "all";
      // eslint-disable-next-line
      {
        /* SectionMatch will either be selected by the
           user or just 'all' as a default selection &
           then put into the map function.

           */
      }

      const searchMatch = article.webTitle
        .toLowerCase()
        .startsWith(this.state.searchText.toLowerCase());
      // eslint-disable-next-line
      {
        /*Declares searchMatch as a const that will take in
            and change what the user has inputted to lower text,
            and then check does it match any of the beginning of
            the words of article.webTitle.
           */
      }
      return sectionMatch && searchMatch ? (
        <NewsCard
          key={article.id}
          title={article.webTitle}
          name={article.pillarName}
          section={article.sectionName}
        />
      ) : null;
    });
    // eslint-disable-next-line
    {
      /*Populate the class NewsCard or null */
    }
    return (
      <div>
        <div className="column is-12">
          <Selector
            options={["All", "News", "Sport", "Arts", "Opinion", "Lifestyle"]}
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
            placeholder={"e.g. Brexit"}
          />
        </div>
        <div className="columns is-multiline">{brexitArticleList}</div>
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
  placeholder: "e.g. Brexit"
};

Selector.propTypes = {
  sectionSelected: PropTypes.string,
  searchText: PropTypes.string,
  placeholder: PropTypes.string
};

export default Brexit;
