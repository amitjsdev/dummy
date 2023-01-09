import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./cart.css";
import { connect } from "react-redux";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cartItem &&
                        cartItem.length > 0 &&
                        cartItem.map(() => {
                          return (
                            <>
                              <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                <MDBCol md="2" lg="2" xl="2">
                                  <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                    fluid
                                    className="rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                  <MDBTypography
                                    tag="h6"
                                    className="text-muted"
                                  >
                                    Shirt
                                  </MDBTypography>
                                  <MDBTypography
                                    tag="h6"
                                    className="text-black mb-0"
                                  >
                                    {item.price}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="3"
                                  xl="3"
                                  className="d-flex align-items-center"
                                >
                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="minus" />
                                  </MDBBtn>

                                  <MDBInput
                                    type="number"
                                    min="0"
                                    defaultValue={1}
                                    size="sm"
                                  />

                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="plus" />
                                  </MDBBtn>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="2"
                                  xl="2"
                                  className="text-end"
                                >
                                  <MDBTypography tag="h6" className="mb-0">
                                    {item.price}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  <a href="#!" className="text-muted">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-x"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </a>
                                </MDBCol>
                              </MDBRow>
                              <hr className="my-4" />
                            </>
                          );
                        })}

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          {cartItem?.qty}
                        </MDBTypography>
                        <MDBTypography tag="h5">{cartItem?.qty}</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 137.00</MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg">
                        Register
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user_info_status: state?.security?.user_info_status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   getActiveCoins: () => dispatch(getActiveCoins()),
    //   getWithdrawTxnHistory: (data) => dispatch(getWithdrawTxnHistory(data)),
    //   getDepositTxnHistory: (data) => dispatch(getDepositTxnHistory(data)),
    //   getWithdrawDepositTxnHistory: (data) =>
    //     dispatch(getWithdrawDepositTxnHistory(data)),
    //   getTransak_deposit_history: (data) =>
    //     dispatch(getTransak_deposit_history(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
