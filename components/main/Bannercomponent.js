/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
// import herobanner from "../../assets/images/staticslider/slider/hero-banner.jpg";
import herobanner from "../../assets/survey.png";
const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Habsiguda</h1>
              <h4 className="subtitle">
                This is a case-study of habsiguda neighborhood.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">Survey</span>
              <h1 className="title">A survey on Habsiguda neighborhood.</h1>
              {/* <h6 className="subtitle op-8">
                Pellentesque vehicula eros a dui pretium ornare. Phasellus
                congue vel quam nec luctus.In accumsan at eros in dignissim.
                Cras sodales nisi nonn accumsan.
              </h6> */}
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Questionare</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider3">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center text-center">
              <h1 className="title">
                <b className="font-bold">Report on neighborhood case study</b>
                {/* I’m Johanthan Doe, an{" "}
                <b className="font-bold">
                  Entreprenuer, Designer & Front-end Developer
                </b>
                , Making{" "} */}
              </h1>
              <a
                className="btn btn-danger btn-md btn-arrow m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>
                  Checkout Our Report <i className="ti-arrow-right"></i>
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
