import React from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';

import Button from './Button';

const CustomButton = styled(Button)`
  background: #21c549;
  margin: 20px 0;
  color: #fff;
  border: 0px;
  transition: transform 0.2s;

  :hover {
    background: #21c549;
    transform: scale(1.05);
  }
`;

export default function DownloadBUtton(props) {
  function download() {
    domtoimage.toBlob(props.content, { quality: 1, scale: 3 }).then((dataUrl) => {
      FileSaver.saveAs(dataUrl, 'cover.png');
    });
  }

  return <CustomButton onClick={download}>Download Image</CustomButton>;
}
