import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ErrorDiv = styled.div`
  margin: 0 2em;
  p {
    font-size: 1.25em;
  }
`;

const ReturnButton = styled.div`
  a {
    padding: 5px 10px;
    border: 1px solid white;
  }
`;

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    var response;
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <ErrorDiv>
            <div className="pt-5 text-center">
              <h1 className="display-4">Sorry, this page does not exist.</h1>
              <p>Please click the button below to return home.</p>
              <ReturnButton>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ReturnButton>
            </div>
          </ErrorDiv>
        );
        break;
      case 500:
        response = (
          <ErrorDiv>
            <div className="pt-5 text-center">
              <h1 className="display-4">Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </div>
          </ErrorDiv>
        );
        break;
      default:
        response = (
          <ErrorDiv>
            <div className="pt-5 text-center">
              <h1 className="display-4">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred
                while trying to access this location.
              </p>
            </div>
          </ErrorDiv>
        );
    }

    return response;
  }
}

export default ErrorPage;
