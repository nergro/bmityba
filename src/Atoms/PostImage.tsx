import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Image = styled.img`
  transition: all 0.5s ease-in-out 0s;
  display: block;
  width: 100%;
  height: auto;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  &:hover {
    ${Image} {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }
`;

interface Props {
  className?: string;
  imageUrl: string;
}

export const PostImage: FC<Props> = ({ className, imageUrl }) => {
  return (
    <ImageBox className={className}>
      <Image src={imageUrl} />
    </ImageBox>
  );
};
