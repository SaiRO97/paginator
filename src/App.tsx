import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Paginator from "./components/paginator";
import paginatorStore from "./stores/paginator";
import "./App.css";

@inject("stores")
@observer
export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(this.props);

    return <Paginator />;
  }
}
