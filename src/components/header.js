import React from "react";
import styled from "styled-components";
import media from "utils/media-queries";
import { color, fontSize } from "styles/theme";

import Icon from "components/icons";
import Insta from "../img/icon-templates/instagram.png"
import github from "../img/icon-templates/github.png"

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${(props) => (props.article ? "64px" : "")};
  `}
  ${media.sm`
    display: ${(props) => (props.article ? "flex" : "block")};
  `};
  z-index: 10;
  height: ${(props) => (props.article ? "74px" : "")};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`;

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? "24px 0 24px 24px" : "24px 0 0 0")};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`;

const NameLink = styled.a`
  text-decoration: none;
`;

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.8px;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`;

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`;

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`;

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? "15px 12px 0 8px" : "4px 0 0 0")};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`;

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`;

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`;

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`;

const TooltipText = styled.div``;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipIsVisible: false,
      tooltipText: "",
    };
  }

  showTooltip = (tooltipText) => {
    this.setState({
      tooltipIsVisible: true,
      tooltipText: tooltipText,
    });
  };

  hideTooltip = () => {
    this.setState({
      tooltipIsVisible: false,
    });
  };
  render() {
    return (
      <Div article={this.props.article}>
        <LogoWrapper article={this.props.article}>
          {this.props.article && (
            <NameLink href="/">
              <NameArticle article={this.props.article}>Gradiot</NameArticle>
            </NameLink>
          )}
          {!this.props.article && (
            <Name article={this.props.article}>Gradiot</Name>
          )}
          {!this.props.article && <Role>/ 4 years wasted /</Role>}
        </LogoWrapper>
        <div>
          <SocialLinks article={this.props.article}>
            <SocialLink
              // href={`mailto:${process.env.GATSBY_EMAIL}`}
              href="https://github.com/tanaypratap/gradiot"
              target="blank"
              onMouseOver={() => this.showTooltip("Github")}
              onFocus={() => this.showTooltip("Github")}
              onMouseLeave={this.hideTooltip}
              onBlur={this.hideTooltip}
              aria-label="Github Link to Gradiot"
            >
              <SvgWrapper>
                <img src={github} height="24" width="24" alt="Github"/>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/tanaypratap"
              target="blank"
              onMouseOver={() => this.showTooltip("Twitter")}
              onFocus={() => this.showTooltip("Twitter")}
              onMouseLeave={this.hideTooltip}
              onBlur={this.hideTooltip}
              aria-label="Tanay's twitter profile"
            >
              <SvgWrapper>
                <InlineSvg>
                  <path d="m21.0247938 8.63275418c.2692962 5.94511812-4.1645259 12.57304192-12.0138477 12.57304192-2.38687665 0-4.60746657-.7004644-6.47782429-1.8997889 2.24266338.2648815 4.48091208-.3590616 6.25708971-1.7496895-1.84828426-.033846-3.40961356-1.2567156-3.94967751-2.93577.66367531.1265545 1.31704969.0897654 1.91008994-.0721066-2.03222975-.4090948-3.43610171-2.2397203-3.39048323-4.1983718.57096679.3163862 1.22139804.5062179 1.91450464.5282914-1.88213023-1.25818714-2.41483637-3.74365857-1.30822031-5.64344757 2.08373448 2.55757806 5.19903526 4.2395756 8.71165825 4.41616327-.6165852-2.64292877 1.3891564-5.19020588 4.1189074-5.19020588 1.2140402 0 2.3132985.5135758 3.0843979 1.33470846.9624028-.18836018 1.8688862-.54153552 2.6841326-1.02568004-.3163862.98741938-.9859478 1.81443829-1.8585852 2.33831504.8549786-.10300948 1.670225-.32963032 2.4266089-.66661845-.5650806.85056393-1.2802606 1.59517527-2.1087511 2.19115865z" />
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/tanaypratap"
              target="blank"
              onMouseOver={() => this.showTooltip("Instagram")}
              onFocus={() => this.showTooltip("Instagram")}
              onMouseLeave={this.hideTooltip}
              onBlur={this.hideTooltip}
              aria-label="Tanay's Instagram Profile"
            >
              <SvgWrapper>
              <img src={Insta} height="24" width="24" alt="insta"/>
              </SvgWrapper>
            </SocialLink>
          </SocialLinks>
          {!this.props.article && (
            <Tooltip
              visible={this.state.tooltipIsVisible}
              article={this.props.article}
            >
              <TooltipText>{this.state.tooltipText}</TooltipText>
              <TooltipIcon>
                <Icon glyph="arrow" size={24} />
              </TooltipIcon>
            </Tooltip>
          )}
        </div>
      </Div>
    );
  }
}

export default Header;
