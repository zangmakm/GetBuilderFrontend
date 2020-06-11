import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <ListGroup.Item
        onClick={this.handleClick}
        className={this.state.clicked && "active"}
      >
        {this.props.option}
      </ListGroup.Item>
    );
  }
}

export default OptionList;
