import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
{
  /*
  All Components in one folder, for ease of use.
  Below JSX defines and builds the component to be displayed
  on the screen when the class is called.
  */
}
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
                {/* Goes into the articlelist[] defined in
                    Article.js and finds the matching values with
                    props going "up to a level" to get where
                    this.name etc are defined. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// eslint-disable-next-line
{
  /* Default values for Props */
}
NewsCard.defaultProps = {
  name: "",
  section: "",
  title: ""
};

NewsCard.propTypes = {
  name: PropTypes.string,
  section: PropTypes.string,
  title: PropTypes.string
};

export default NewsCard;
