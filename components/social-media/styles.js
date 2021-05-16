import styled from 'styled-components';

export const SocialContainer = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
    
  &:hover {
    color: #009ddc;
    transition: 0.2s ease-in-out;
  }
`;
