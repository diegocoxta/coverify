import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Image = styled.img`
  cursor: grabbing;
`;

export default function DraggableImage({ source, width }) {
  return (
    <Draggable allowAnyClick={true} axis="y" handle=".handle" defaultPosition={{ x: 0, y: 0 }} grid={[1, 1]} scale={1}>
      <Image className="handle" width={width} src={source} />
    </Draggable>
  );
}
