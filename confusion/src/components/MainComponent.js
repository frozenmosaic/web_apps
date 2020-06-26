import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  //   onDishSelect(dishId) {
  //     this.setState({
  //       selectedDish: dishId,
  //     });
  //   }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component="{HomePage}" />
          <Route
            exact
            path="/menu"
            component={() => <Menu dish={this.state.dishes} />}
          />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        /> */}
        {/* <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id == this.state.selectedDish
            )[0]
          }
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
