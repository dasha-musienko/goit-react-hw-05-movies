import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import {
  PageWrapper,
  NavWrapper,
  LinksWrapper,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <PageWrapper>
      <NavWrapper>
        <LinksWrapper>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </LinksWrapper>
      </NavWrapper>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </PageWrapper>
  );
};

export default Layout;
