import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ setModal: !this.state.setModal });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.name,
      values.comment
    );
    // alert("current state: " + JSON.stringify(values));
  }

  render() {
    return (
      <>
        <Button
          outline
          color="secondary"
          // data-toggle="modal"
          // data-target="#commentModal"
          onClick={this.toggleModal}
        >
          Submit Comment
        </Button>
        <Modal
          id="commentModal"
          class="modal fade modal-lg"
          role="dialog"
          isOpen={this.state.setModal}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>
            <h4 class="modal-title">Comment</h4>
            {/* <button type="button" class="close pull-right" data-dismiss="modal">
              &times;
            </button> */}
          </ModalHeader>

          <ModalBody>
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={2}>
                    Rating
                  </Label>
                  <Col md={10}>
                    <Control.select
                      model=".rating"
                      className="form-control"
                      id="rating"
                      name="rating"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="name" md={2}>
                    Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".name"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      validators={{
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        minLength: "Must be at least 3 characters",
                        maxLength: "Must be fewer than 15 characters",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={2}>
                    Comment
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".comment"
                      className="form-control"
                      id="comment"
                      name="comment"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Submit Comment
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentForm;
