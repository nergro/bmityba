import { ErrorBoundary } from 'errorBoundary';
import { ErrorPage } from 'pages/Error';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <LayoutStyled className={className}>
      <ErrorBoundary error={<ErrorPage />}>
        <Content>{children}</Content>
      </ErrorBoundary>
    </LayoutStyled>
  );
};
