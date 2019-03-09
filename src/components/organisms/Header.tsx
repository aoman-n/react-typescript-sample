import * as React from 'react';
import styled from 'styled-components';

// type HeaderProps = Partial<{
//   search: boolean;
// }>;

interface HeaderProps {
  search?: boolean;
  children?: never;
}

const Header: React.FC<HeaderProps> = ({ search }) => {
  return (
    <div>
      <Logo>あおのひ</Logo>
      {search && <p>ここにsearchが入ります</p>}
    </div>
  );
};

const Logo = styled.p`
  color: blue;
`;

export default Header;
