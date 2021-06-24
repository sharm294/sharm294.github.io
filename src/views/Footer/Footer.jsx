import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";
import ThemeChanger from "components/themeChanger"
import useWindowOnScroll from "hooks/useWindowOnScroll";

import "./Footer.scss";

const Footer = ({ frontmatter }) => {
  const [fixed, setFixed] = React.useState(true);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setFixed(scrollTop <= 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer className={clsx("footer py-3", { "footer-fixed": fixed })} id="footer">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <ThemeChanger/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
