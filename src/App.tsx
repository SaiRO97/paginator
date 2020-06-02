import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { stores } from "./interfaces/store";
import "./App.css";

@inject("stores")
@observer
export default class App extends Component<stores> {
  constructor(props: stores) {
    super(props);
  }

  render() {
    return (
      <>
        <span>{this.props.PaginatorStore.params.count}</span>
        <div onClick={() => this.props.PaginatorStore.nextAction()}>click</div>
      </>
    );
  }
}
