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
class SearchBar extends React.Component {
  render() {
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{this.props.label}</label>
        </div>

        <div className="field-body">
          <div className="field">
            <div className="control ">
              <input
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
                className="input"
                type="text"
                placeholder={this.props.placeholder}
              />
              {/* Gets
                {console.log(this.props.name)}
                Retrieves Array that is inputted by the user.
                this.props.value is whatever the user has inputted,
                directed to lowercase, as having CamelCase was causing
                issues with the mapping function declared in App.js
                 */}
            </div>
          </div>
        </div>
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
SearchBar.defaultProps = {
  name: "searchText",
  value: "",
  placeholder: "e.g. Theresa May"
};

SearchBar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchBar;
