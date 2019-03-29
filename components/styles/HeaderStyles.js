import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.gray};
  height: 100vh;
  @media (max-width: 1000px) {
    height: inherit;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Banner = styled.div`
  background: ${props => props.theme.gray};
  border: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 3.5rem;
  text-align: center;
  font-size: 3rem;
  margin: 25px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 1000px) {
    justify-self: flex-start;
    align-self: center;
    width: 100%;
    max-width: 280px;
  }
`;

export { StyledHeader, Banner };
