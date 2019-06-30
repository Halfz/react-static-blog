import { Colors } from 'assets';
import Svgs from 'assets/svg';
import { MOBILE_WIDTH } from 'const';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { propsIf } from 'utils/styledComponentEx';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
  ${propsIf('topBorder', `border-top: solid 1px ${Colors.greyD1};`)};
  ${propsIf('bottomFix', `
    position: fixed;
    bottom: 0;

    @media (max-height: 960px) {
      position: relative;
    }
  `)};
  
  @media (max-width: ${MOBILE_WIDTH}) {
    padding-bottom: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 1.4em;
  color: ${Colors.warmGrey};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  & + & {
    margin-top: 10px;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
    align-items: center;
  }
`;
const FakeDiv = styled.div`
  width: 100%;
  text-align: center;
`;
export const Privacy = styled.div`
  font-size: 12px;
  height: 18px;
  text-align: center;
  color: ${Colors.warmGrey};
  margin-top: 20px;

  & > span {
    cursor: pointer;
    margin: 0 1px;
  }

  & > a {
    color: ${Colors.warmGrey};
    text-decoration: none;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    margin-top: 16px;
    margin-bottom: 30px;
  }
`;
const Copyright = styled.div`
  font-size: 12px;
  text-align: center;
  line-break: auto;
  color: ${Colors.greyish};
  margin-top: 20px;

  @media (max-width: ${MOBILE_WIDTH}) {
    margin-bottom: 20px;
  }
`;

const Facebook = styled(Svgs.IcFacebook)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 17px 9px 0;

  :hover {
    path {
      transition: all 0.3s ease;
      fill: ${Colors.facebookBlue};
    }
  }
`;

const Blog = styled(Svgs.IcBlog)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 17px 9px 0;

  :hover {
    path {
      transition: all 0.3s ease;
      fill: ${Colors.naverGreen};
    }
  }
`;

const Naver = styled(Svgs.IcNaverPost)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 17px 9px 0;

  :hover {
    circle {
      transition: all 0.3s ease;
      fill: ${Colors.naverGreen};
    }
  }
`;

const Footer = ({ topBorder, bottomFix }) => (
  <Wrapper topBorder={topBorder} bottomFix={bottomFix}>
    <Row>
      <FakeDiv>
        <a href="https://www.facebook.com/nextunicornkr/" target="_blank">
          <Facebook />
        </a>
        <a href="https://blog.naver.com/nextunicorn" target="_blank">
          <Blog />
        </a>
        <a href="https://post.naver.com/nextunicorn?isHome=1" target="_blank">
          <Naver />
        </a>
      </FakeDiv>
    </Row>
    <Row>
      <Info>
        Theme by HALFZ, Generated by
        {' '}
        <a href="https://github.com/nozzle/react-static" target="_blank">react-static</a>
      </Info>
    </Row>
    <Copyright>COPYRIGHT (C) 2019 NextUnicorn ALL RIGHTS RESERVED</Copyright>
  </Wrapper>
);

Footer.propTypes = {
  topBorder: PropTypes.bool,
  bottomFix: PropTypes.bool,
};

Footer.defaultProps = {
  topBorder: false,
};


export default Footer;
