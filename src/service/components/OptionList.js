import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, disabled: this.props.storeys };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
    if (!this.state.clicked) {
      this.props.handleOption(this.props.name, this.props.option);
      this.props.handleEnable(this.props.name);
    } else {
      this.props.clearOption(this.props.name, this.props.option);
      this.props.clearEnable(this.props.name);
    }
  }

  render() {
    return (
      <ListGroup.Item
        onClick={this.handleClick}
        className={this.state.clicked && "active"}
        disabled={!this.state.clicked && this.props.disabled}
      >
        {this.props.option}
      </ListGroup.Item>
    );
  }
}

export default OptionList;
