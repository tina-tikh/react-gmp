import { styled } from '../../theme';

const LinkButton = styled.button`
  float: right;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  background: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default LinkButton;
