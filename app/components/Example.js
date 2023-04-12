import React, { Component } from "react";
import { selectOptions } from "./CheckListData";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import styles from '../styles/Courses.module.css'
const Option = (props) => {
  return (
    <div className={`${styles.formGroup}`}>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
  };

  render() {
    return (
      <div
        className={` form-group   ${styles.formGroup}`}
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={selectOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
        />
      </div>
    );
  }
}