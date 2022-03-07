import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 2.4rem;
  margin-bottom: 32px;
  align-self: ${(props) =>
    props.alignRight
      ? 'flex-end'
      : props.alignCenter
      ? 'center'
      : ' flex-start'};
  position: relative;
  width: fit-content;

  ::before {
    display: block;
    position: absolute;
    content: ${(props) => (props.alignCenter ? 'unset' : "''")};
    width: 100%;
    background-color: ${(props) => (props.alignRight ? '#009ddc' : '#fff')};
    height: 4px;
    bottom: 0;
  }

  ::after {
    display: block;
    position: ${(props) => !props.alignCenter && 'absolute'};
    content: '';
    width: ${(props) => (props.alignRight ? '40%' : ' 60%')};
    background-color: ${(props) => (props.alignRight ? '#fff' : '#009ddc')};
    height: 4px;
    bottom: 0;
    margin: ${(props) => props.alignCenter && '0 auto'};
    margin-top: ${(props) => props.alignCenter && '-4px'};
  }

  @media screen and (max-width: 1068px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h1 h2 {
    padding: 0;
    margin: 0;
  }
`;

export const DiplomaWrapper = styled.h2`
  text-decoration: underline;
  &:hover {
    color: #0286b9;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.32em;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px 50px 0 14px;
  gap: 20px;
  height: 860px;

  @media screen and (max-width: 1030px) {
    height: 930px;
  }

  @media screen and (max-width: 950px) {
    height: 940px;
  }

  @media screen and (max-width: 950px) {
    height: 940px;
  }

  @media screen and (max-width: 850px) {
    height: 930px;
  }

  @media screen and (max-width: 780px) {
    height: 1400px;
    padding-top: 20px;

    ${Title} {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 568px) {
    height: 1450px;
  }

  @media screen and (max-width: 480px) {
    height: 1650px;
  }

  @media screen and (max-width: 420px) {
    height: 1780px;
    padding: 12px 12px 0 4px;
  }

  @media screen and (max-width: 380px) {
    height: 1890px;
  }
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  .css-upmlie-TitleWrapper {
    overflow: unset;
    text-align: center;
  }

  .css-mpnodf-TimelineTitleWrapper.right {
    justify-content: center;
  }

  .chrono-icons,
  img {
    max-width: 110% !important;
    max-height: 110% !important;
  }

  @media screen and (min-width: 780px) {
    flex: 1;
  }
`;

export const JobsWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: auto;
  place-content: center;
  grid-template-areas:
    'head'
    'body';

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-rows: unset;
    column-gap: 2rem;
  }
`;

export const JobInfo = styled.div`
  h3 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    color: hsl(210, 22%, 49%);
    background: hsl(212, 33%, 89%);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    margin: 0;
  }

  @media screen and (max-width: 1100px) {
    grid-area: body;
  }
`;

export const JobTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    justify-content: center;
  }

  @media screen and (max-width: 1100px) {
    grid-area: head;
  }
`;

export const JobContainer = styled.div`
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.2rem;
    margin: 0.3rem;
    padding: 0.25rem 0;
    transition: all 0.3s linear;
    cursor: pointer;
    line-height: 1;

    &:hover {
      color: #009ddc;
      box-shadow: 0 2px #009ddc;
    }

    @media screen and (max-width: 1100px) {
      margin: 0 14px;
      padding: 0;
    }
  }

  .active-btn {
    color: #009ddc;
    box-shadow: 0 2px #009ddc;
  }

  .job-date {
    letter-spacing: 0.2rem;
  }

  .job-icon {
    color: #009ddc;
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;

    p {
      color: hsl(209, 34%, 30%);
    }
  }

  @media screen and (min-width: 1100px) {
    .job-btn {
      margin-bottom: 1rem;
      padding-right: 1rem;
      &:hover {
        box-shadow: 2px 0 #009ddc;
      }
    }
    .active-btn {
      box-shadow: 2px 0 #009ddc;
    }
  }
`;

export const DownloadWrapper = styled.a`
  position: absolute;
  right: 50px;
  margin-top: 26px;
  height: 50px;
  border: 3px solid #0082c3;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #0082c3;
  overflow: hidden;
  cursor: pointer;

  svg {
    margin-right: 6px;
    padding-top: 6px;
    margin-bottom: -2px;
  }

  .face-primary,
  .face-secondary {
    padding: 0 10px;
    line-height: 50px;
    transition: margin 0.4s;
  }

  .face-primary {
    background-color: #0082c3;
    color: #fff;
  }

  @media (hover: hover) {
    &:hover .face-primary {
      margin-top: -50px;
    }
  }

  @media screen and (max-width: 420px) {
    right: 14px;
    margin-top: 0px;
  }
`;
