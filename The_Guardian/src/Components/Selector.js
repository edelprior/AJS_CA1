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
class Selector extends React.Component {
  render() {
    const options = this.props.options.map(data => {
      return (
        <option key={data} value={data}>
          {data}
          {/* Gets
            console.log(this.props.options)
            Retrieves Array that is declared in Article.js.
            Also uses a matching html element, <option> which
            handles what option is initially selected) */}
        </option>
      );
    });
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{this.props.label}</label>
        </div>
        {/* Label is a HTML element that can take in
            <input> and <select> elements */}

        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select">
                <select
                  value={this.props.selected}
                  name={this.props.name}
                  onChange={this.props.handleChange}
                >
                  {options}
                </select>
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
  /* Default values for Props
  ------------------------------
  Helps to typecheck the programme. The library displays
  a warning in the JS console if an invalid value is provided
  for the prop. Only used for development purposes.
  Also provides a default set for each prop defined, so the user doesn't
  see null as a value  */
}
Selector.defaultProps = {
  label: "",
  selected: "Arts",
  name: "Arts"
};

Selector.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string,
  name: PropTypes.string
};
export default Selector;
