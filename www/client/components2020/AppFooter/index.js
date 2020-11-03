import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AppFooter extends Component {

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {

  }

  render() {

    const logo = (<svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M53.5093 25.4907V0H0V53.5093H25.4907V79H52.2453C66.992 79 79 66.992 79 52.2453C79 37.92 67.6767 26.1753 53.5093 25.4907ZM26.7547 24.964L4.37133 2.528H49.1907L26.7547 24.964ZM50.9813 4.37133V25.4907H29.8093L50.9813 4.37133ZM28.0187 28.0187H50.9287V50.9287H28.0187V28.0187ZM2.528 50.9813V4.37133L25.438 27.2813V50.9813H2.528ZM52.2453 76.472H28.0187V53.562H53.5093V28.0713C66.2547 28.756 76.4193 39.342 76.4193 52.2453C76.472 65.57 65.57 76.472 52.2453 76.472Z" fill="black" />
    </svg>
    );

    return (
      <div className={'site-con site-footer'}>
        <div className={'site-warp flex-con-row'}>
          <div className={'flex-item'}>
            { logo }
          </div>
          <div className={'flex-item flex-margin'}>
            <a className={'site-footer-title'} href="/2020/tokens">Tokens</a>
            <a href="/2020/tokens/color">Color</a>
            <a href="/2020/tokens/typography">Typography</a>
            <a href="/2020/tokens/elevation">Elevation</a>
            <a href="/2020/tokens/space">Space</a>
          </div>
          <div className={'flex-item flex-margin'}>
            <a className={'site-footer-title'} href="/2020/components">Components</a>
            <a className={'site-footer-title'} href="/2020/icons">Icons</a>
          </div>
          <div className={'flex-item flex-margin'}>
            <a className={'site-footer-title'} href="/2020/personality">Personality</a>
          </div>
        </div>
        <div className={'site-warp flex-con-row'}>
          <div className={'flex-item'}></div>
          <div className={'footer-bottom-text'}>
            <div>© 2020 Cisco and/or its affiliates. All rights reserved.</div>
            <div className='site-friend-link'>
              <a href="/feedback">Support & Feedback</a>
              <a href="https://www.cisco.com/c/en/us/about/legal/privacy.html">Privacy Policy</a>
              <a href="https://www.cisco.com/c/en/us/about/legal/privacy.html#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppFooter.displayName = 'AppFooter2020';

function mapStateToProps(state) {
  return {
  };
}

export default withRouter(
  connect(
    mapStateToProps,
  )(AppFooter)
);
