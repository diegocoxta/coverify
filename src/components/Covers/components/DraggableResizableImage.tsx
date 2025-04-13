import React, { useState } from 'react';
import styled from '@emotion/styled';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface DraggableResizableImageProps {
  source?: string;
  initialWidth: number;
}

const Image = styled.img`
  cursor: grabbing;
  object-fit: contain;
  width: 100%;
`;

export default function DraggableResizableImage({
  source,
  initialWidth,
}: DraggableResizableImageProps): React.ReactElement {
  const [width, setWidth] = useState(initialWidth);
  const nodeRef = React.useRef(null) as unknown;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      allowAnyClick={true}
      cancel={'.react-resizable-handle'}
      defaultPosition={{ x: 0, y: 0 }}
      grid={[1, 1]}
      handle=".handle"
      scale={1}
    >
      <div ref={nodeRef as React.RefObject<HTMLDivElement>}>
        <ResizableBox
          axis={'x'}
          className={'box hover-handles'}
          draggableOpts={{ grid: [1, 1] }}
          onResize={(_, data) => {
            const newWidth = data.size.width;
            const resizePercentage = (Math.abs(newWidth - width) / width) * 100;
            const tolerancePercentage = 10;

            // workaround to handle potential glitches during image resizing,
            // where sudden and drastic width changes occur unexpectedly
            if (resizePercentage <= tolerancePercentage) {
              // if the percentage change is acceptable, apply the new width
              setWidth(newWidth);
            } else {
              // otherwise, make a fine-grained adjustment, matching the defined 1-by-1 grid unitary size
              setWidth(newWidth > width ? width + 1 : width - 1);
            }
          }}
          resizeHandles={['ne']}
          transformScale={1}
          width={width}
        >
          <Image className="handle" src={source} />
        </ResizableBox>
      </div>
    </Draggable>
  );
}
