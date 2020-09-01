import { ErrorBoundary } from 'errorBoundary';
import { Header } from 'Organisms/Header';
import { ErrorPage } from 'pages/Error';
import React, { FC, ReactNode } from 'react';
import { useState as useMenuState } from 'store/mobileMenuStore/hooks';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: ${props => (props.mobileMenuOpen ? 'fixed' : 'unset')};
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  flex: 1 0 auto;
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

  return (
    <LayoutStyled className={className} mobileMenuOpen={menuState}>
      <ErrorBoundary error={<ErrorPage />}>
        <Header />
        <Content>{children}</Content>
      </ErrorBoundary>
    </LayoutStyled>
  );
};
