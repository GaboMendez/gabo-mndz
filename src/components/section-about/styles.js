import styled from 'styled-components';

export const Title = styled.h1`
  color: #000;
  font-size: 2.4rem;
  margin-bottom: 24px;
  align-self: ${(props) => (props.alignRight ? 'flex-end' : ' flex-start')};
  position: relative;
  width: fit-content;

  ::before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    background-color: ${(props) => (props.alignRight ? '#009ddc' : '#fff')};
    height: 4px;
    bottom: 0;
  }

  ::after {
    display: block;
    position: absolute;
    content: '';
    width: ${(props) => (props.alignRight ? '40%' : ' 60%')};
    background-color: ${(props) => (props.alignRight ? '#fff' : '#009ddc')};
    height: 4px;
    bottom: 0;
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

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 20px;
  gap: 20px;
  height: 860px;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (min-width: 780px) {
    flex: 1;
    padding: 40px 20px;
  }
`;

export const JobContainer = styled.div`
  .jobs-center {
    /* width: 80vw;
    margin: 0 auto;
    max-width: 1170px; */
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.2rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
  }
  .job-btn:hover {
    color: #009ddc;
    box-shadow: 0 2px #009ddc;
  }
  .active-btn {
    color: #009ddc;
    box-shadow: 0 2px #009ddc;
  }
  .job-info {
    /* min-height: 420px; */
  }
  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: hsl(210, 22%, 49%);
    background: hsl(212, 33%, 89%);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
  }
  .job-date {
    letter-spacing: 0.2rem;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: hsl(209, 34%, 30%);
  }
  .job-icon {
    color: #009ddc;
  }

  @media screen and (min-width: 992px) {
    .jobs-center {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
      justify-content: center;
    }
    .job-btn {
      margin-bottom: 1rem;
      padding-right: 1.5rem;
    }
    .active-btn {
      box-shadow: 2px 0 #009ddc;
    }
    .job-btn:hover {
      box-shadow: 2px 0 #009ddc;
    }
  }
`;
