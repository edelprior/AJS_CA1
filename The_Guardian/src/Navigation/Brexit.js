import React from "react";
import NewsCard from "../Components/NewsCard";
import LabelledInput from "../Components/LabelledInput";
import DropDown from "../Components/DropDown";
import axios from "axios";

class Brexit extends React.Component {
  constructor() {
    super();
    this.state = {
      brexitArticles: [],
      sectionSelected: "all",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        //"https://content.guardianapis.com/search?q=thatcher&api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
        //"https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
        "https://content.guardianapis.com/tags?q=brexit&api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
        //"https://content.guardianapis.com/search?api-key=b21e1e64-196e-4742-b2b9-5d8ebdbdf57d"
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
  }

  render() {
    let articleList = this.state.brexitArticles.map(article => {
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
        <div className="column is-6">
          <DropDown
            options={["All", "News", "Sport", "Arts", "Opinion", "Lifestyle"]}
            handleChange={this.handleChange}
            label="Filter by Section"
            name="sectionSelected"
            selected={this.state.sectionSelected}
          />
          <LabelledInput
            name="searchText"
            label="Search by Title"
            value={this.state.searchText}
            handleChange={this.handleChange}
            placeholder={"e.g. Brexit"}
          />
        </div>
        <div className="columns is-multiline">{articleList}</div>
      </div>
    );
  }
}
export default Brexit;
