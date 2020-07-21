import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardContent,
  Typography,
  InputLabel,
  Box,
  Button,
  Collapse,
} from "@material-ui/core";
import "./scss/orderDetail.scss";
import OrderDetailList from "../../../order/OrderDetailList";
import { getOrder, updateClientOrderStatus } from "../../../api/order";
import { Alert } from "@material-ui/lab";
import storeyPic from "../../../assets/images/storey.png";
import bedroomPic from "../../../assets/images/bedroom.png";
import bathroomPic from "../../../assets/images/bathroom.png";
import garagePic from "../../../assets/images/garage.png";
import { convertCurrency } from "../../../utils/helper";
import {
  NEW_ORDER,
  ASSIGNED,
  CANCEL_BUILDER,
  CANCEL_CLIENT,
  COMPLETED,
} from "../../../utils/variables";
import { getStatusText } from "../../../utils/helper";

const listArray = [
  {
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook",
    description: "facebook",
  },
  {
    link: "https://twitter.com/",
    icon: "fab fa-twitter",
    description: "twitter",
  },
  {
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    description: "instagram",
  },
];

class OrderDetail extends React.Component {
  state = {
    order: {},
    clientName: "",
    client: "",
    builder: "",
    error: null,
    isLoading: false,
    isUpdating: false,
    expanded: false,
    star: 0,
    comment: "",
    showCommentModal: false,
    commentSubmit: false,
  };

  componentDidMount() {
    const orderId = this.props.match.params.orderId;
    this.loadOrder(orderId);
  }

  loadOrder = (orderId) => {
    this.setState({ isLoading: true }, () => {
      getOrder(orderId)
        .then((order) =>
          this.setState({
            order,
            isLoading: false,
            isUpdating: false,
          })
        )
        .then(() => {
          console.log("order:", this.state.order);
          this.setState({
            builder: this.state.order.takenBy,
            //builderPhoto: this.state.order.takenBy.photo || "",
            client: this.state.order.postBy,
            clientName: this.state.order.postBy.fullName,
            clientPhoto: this.state.order.postBy.photo || "",
            //star: this.state.order.star || "",
            //comment: this.state.order.comment || "",
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };
  getButtonText = () => {
    let buttonText;
    if (this.state.order.status === NEW_ORDER) {
      buttonText = "Cancel Order";
    } else if (this.state.order.status === ASSIGNED) {
      buttonText = "Order is Done";
    }
    return buttonText;
  };

  getEditButtonText = () => {
    let buttonText;
    if (
      this.state.order.status === CANCEL_CLIENT ||
      this.state.order.status === CANCEL_BUILDER
    ) {
      buttonText = "Cancelled";
    } else if (this.state.order.status === ASSIGNED) {
      buttonText = "Assigned";
    } else if (this.state.order.status === COMPLETED) {
      buttonText = "Completed";
    } else {
      buttonText = "Edit Order";
    }
    return buttonText;
  };

  isEditDisabled = () => {
    if (this.state.order.status === NEW_ORDER) return false;
    return true;
  };

  isDisabled = (value) => {
    return value === true ? "order-detail__btn-disabled" : "";
  };

  handleChangeStatus = () => {
    let status;
    const orderId = this.props.match.params.orderId;
    const clientId = this.props.match.params.clientId;
    if (this.state.order.status === NEW_ORDER) {
      status = CANCEL_CLIENT;
      if (window.confirm(`Do you want to cancel this order?`)) {
        this.setState({ isUpdating: true }, () => {
          updateClientOrderStatus(orderId, clientId, status)
            .then(() => this.loadOrder(orderId))
            .catch((error) => {
              this.setState({
                error,
                isUpdating: false,
              });
            });
        });
      }
    } else if (this.state.order.status === ASSIGNED) {
      status = COMPLETED;

      this.setState({ isUpdating: true }, () => {
        updateClientOrderStatus(orderId, clientId, status)
          .then(() => this.loadOrder(orderId))
          .catch((error) =>
            this.setState({
              error,
              isUpdating: false,
            })
          );
      });
    }
  };

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleGoBack = () => {
    this.props.history.go(-1);
  };

  showCommentModal = () => {
    this.setState({ showCommentModal: true });
  };

  closeCommentModal = () => {
    this.setState({ showCommentModal: false });
  };

  renderContent = () => {
    if (this.state.isLoading || this.state.isUpdating) {
      return (
        <div className="orders-progress__container">
          <CircularProgress size={150} color="secondary" />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div>
          <Alert severity="error">
            Sorry, something went wrong:
            <p>{this.state.error.toString()}</p>
          </Alert>
        </div>
      );
    } else {
      return (
        <Fragment>
          <Grid container className="order-detail__top" spacing={2}>
            <Grid item sm={8} xs={12}>
              <div className="order-detail__head">
                <ul className="order-detail__status">
                  <li className="order-detail__status-active">
                    {getStatusText(this.state.order.status)}
                  </li>
                </ul>
              </div>
              <Typography variant="h2" component="h2">
                House Building
              </Typography>
              <OrderDetailList
                clientName={this.state.clientName}
                address={this.state.order.address}
                dueDate={this.state.order.dueDate}
                postDate={this.state.order.postDate}
                //clientPhoto={this.state.clientPhoto}
                //builderPhoto={this.state.builderPhoto}
                builder={this.state.builder}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Card style={{ backgroundColor: "#f4f6f8" }}>
                <CardContent className="order-detail__budget">
                  <Typography gutterBottom>Price</Typography>
                  <Typography variant="h3" component="p">
                    {convertCurrency(this.state.order.price)}
                  </Typography>
                </CardContent>
                <div className="order-detail__offer">
                  {this.getButtonText() && (
                    <Button
                      variant="contained"
                      color={"primary"}
                      onClick={this.handleChangeStatus}
                    >
                      {this.getButtonText()}
                    </Button>
                  )}
                  <Button
                    className={this.isDisabled(this.isEditDisabled())}
                    disabled={this.isEditDisabled()}
                    component={Link}
                    to={`${this.props.location.pathname}/edit`}
                    variant="contained"
                    color={"primary"}
                  >
                    {this.getEditButtonText()}
                  </Button>
                  {this.state.order.status === COMPLETED &&
                    !this.state.order.comment &&
                    !this.state.commentSubmit && (
                      <Button
                        color={"primary"}
                        variant="contained"
                        onClick={this.showWriteCommentModal}
                      >
                        LEAVE A COMMNET
                      </Button>
                    )}
                  {this.state.order.comment &&
                    this.state.order.status === COMPLETED && (
                      <Button
                        color={"primary"}
                        variant="contained"
                        onClick={this.showCommentModal}
                      >
                        VIEW YOUR COMMENT
                      </Button>
                    )}
                </div>
              </Card>
              <Box
                border={1}
                borderRadius={5}
                borderColor="#eee"
                className="order-detail__share"
              >
                <InputLabel className="order-detail__share--label">
                  SHARE
                </InputLabel>
                <div className="order-detail__share--whole">
                  {listArray.map((list) => {
                    return (
                      <a
                        key={list.description}
                        href={list.link}
                        className="order-detail__share--single"
                      >
                        <i className={list.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </Box>
            </Grid>
          </Grid>
          {/* <ShowOrderComment
						clientPhoto={this.state.client.photo}
						clientName={this.state.clientName}
						star={this.state.star}
						comment={this.state.comment}
						showCommentModal={this.state.showCommentModal}
						closeCommentModal={this.closeCommentModal}
						orderId={this.state.order._id}
						builder={this.state.builder}
					/> */}
          <div className="order-detail__details">
            <Typography variant="h6" component="p">
              DETAILS
            </Typography>
            <ul className="order-detail__details--list">
              <li className="order-detail__details--singlelist">
                <img
                  className="order-detail__icon--pic"
                  src={storeyPic}
                  alt={storeyPic}
                />
                <span className="order-detail__icon--title">
                  Number of storeys: {this.state.order.storeys}
                </span>
              </li>
              <li className="order-detail__details--singlelist">
                <img
                  className="order-detail__icon--pic"
                  src={bedroomPic}
                  alt={bedroomPic}
                />
                <span className="order-detail__icon--title">
                  Number of bedrooms: {this.state.order.bedrooms}
                </span>
              </li>
              <li className="order-detail__details--singlelist">
                <img
                  className="order-detail__icon--pic"
                  src={bathroomPic}
                  alt={bathroomPic}
                />
                <span className="order-detail__icon--title">
                  Number of bathrooms: {this.state.order.bathrooms}
                </span>
              </li>

              <li className="order-detail__details--singlelist">
                <img
                  className="order-detail__icon--pic"
                  src={garagePic}
                  alt={garagePic}
                />
                <span className="order-detail__icon--title">
                  Number of garages: {this.state.order.garages}
                </span>
              </li>
            </ul>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consectetur vitae diam sollicitudin mattis. Nam sagittis dui non
              lectus feugiat accumsan. Phasellus sit amet magna ut diam pharetra
              euismod ac et enim. Proin leo elit, condimentum non bibendum in,
              feugiat sed ante. Fusce mattis scelerisque orci ut maximus.
              Maecenas ut auctor metus, nec eleifend lacus. Praesent lobortis,
              nulla ut mollis luctus, est quam convallis diam, at bibendum dolor
              risus quis velit. Duis orci justo, dictum in fringilla non,
              ultricies id quam. Quisque iaculis est lacus, in pretium urna
              convallis ac. Fusce eget feugiat justo, feugiat maximus nisl.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Proin suscipit rutrum lacus, ut
              sagittis augue pulvinar ut. Nullam laoreet, quam at tempor
              pulvinar, felis enim finibus dui, non ultrices felis leo a ex.
            </Typography>
            <p
              className="order-detail__details--collapse"
              onClick={this.handleExpand}
            >
              View all
            </p>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur vitae diam sollicitudin mattis. Nam sagittis dui non
                lectus feugiat accumsan. Phasellus sit amet magna ut diam
                pharetra euismod ac et enim. Proin leo elit, condimentum non
                bibendum in, feugiat sed ante. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean consectetur vitae diam
                sollicitudin mattis. Nam sagittis dui non lectus feugiat
                accumsan. Phasellus sit amet magna ut diam pharetra euismod ac
                et enim. Proin leo elit, condimentum non bibendum in, feugiat
                sed ante.
              </p>
            </Collapse>
          </div>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="order-detail">
        <header className="order-detail__header">ORDER INFORMATION</header>
        {this.renderContent()}
      </div>
    );
  }
}

export default OrderDetail;
