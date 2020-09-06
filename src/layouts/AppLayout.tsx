import { ErrorBoundary } from 'errorBoundary';
import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';
import { ErrorPage } from 'pages/Error';
import React, { FC, ReactNode } from 'react';
import {
  useDispatch as useMenuDispatch,
  useState as useMenuState,
} from 'store/mobileMenuStore/hooks';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: unset;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  flex: 1 0 auto;
  position: relative;
`;

interface ShadowProps {
  isOpen?: boolean;
}

const Shadow = styled.div<ShadowProps>`
  background: rgba(0, 0, 0, 0.5);
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: 100%;
  transition: all 0.3s;
  z-index: 5;
`;

interface LayoutProps {
  mobileMenuOpen?: boolean;
}

interface AppLayoutProps extends LayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = ({ children, className }) => {
  const menuState = useMenuState();
  const menuDispatch = useMenuDispatch();
  return (
    <LayoutStyled className={className} mobileMenuOpen={menuState}>
      <ErrorBoundary error={<ErrorPage />}>
        <Header />
        <Content>
          {children}
          <Shadow
            onClick={() => menuDispatch({ type: 'Menu/Set', payload: false })}
            isOpen={menuState}
          />
        </Content>
        <Footer />
      </ErrorBoundary>
    </LayoutStyled>
  );
};
