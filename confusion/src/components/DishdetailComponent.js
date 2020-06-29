import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((c) => {
            return (
              <li className="p-3">
                {c.comment} <br />
                -- {c.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(c.date)))}
              </li>
            );
          })}
        </ul>
        <CommentForm addComment={addComment} dishId={dishId}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  // console.log('DDT render invoked');

  if (props.dish != null) {
    return (
      <div key={props.dish.id} className="container">
        <div className="row">
          <Breadcrumb>
          <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
