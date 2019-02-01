import React from "react";

class NewsCard extends React.Component {
  render() {
    return (
      <div className="column is-6">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-10">{this.props.name}</p>
                <p className="subtitle is-16">{this.props.section}</p>
                <p className="title is-4">{this.props.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsCard;
