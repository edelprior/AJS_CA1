import React from "react";
import NewsCard from "./Components/NewsCard";
import SearchBar from "./Components/SearchBar";
import Selector from "./Components/Selector";
import axios from "axios";
// eslint-disable-next-line
{
  /*
  Import the Components to be used building the class.

  */
}
class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      sectionSelected: "all",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
      )
      .then(response => {
        this.setState({
          articles: response.data.response.results
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
    let articleList = this.state.articles.map(article => {
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
          section={article.sectionName}
          link={article.webUrl}
        />
      ) : null;
    });
    return (
      <div>
        <div className="column is-8">
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
            placeholder={"e.g. Weather"}
          />
        </div>
        <div className="columns is-multiline">{articleList}</div>
      </div>
    );
  }
}
export default Article;
