import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Image = styled.img`
  cursor: grabbing;
`;

interface DraggableImageProps {
  source?: string;
  width: number;
}

export default function DraggableImage({ source, width }: DraggableImageProps): React.ReactElement {
  return (
    <Draggable allowAnyClick={true} axis="y" handle=".handle" defaultPosition={{ x: 0, y: 0 }} grid={[1, 1]} scale={1}>
      <Image className="handle" width={width} src={source} />
    </Draggable>
  );
}
