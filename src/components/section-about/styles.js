import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
