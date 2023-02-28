import ReactDom from 'react-dom';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { setChonkyDefaults } from 'chonky';
import {
  ChonkyActions,
  ChonkyFileActionData,
  FileArray,
  FileBrowserProps,
  FileData,
  FileHelper,
  FullFileBrowser,
} from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

const MyFileBrowser = () => {
  const files = [
    { id: 'lht', name: 'Projects', isDir: true },
    {
      id: 'mcd',
      name: 'chonky-sphere-v2.png',
      thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
    },
  ];
  const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];
  const fileActions = useMemo(
    () => [ChonkyActions.CreateFolder, ChonkyActions.DeleteFiles],
    []
  );
  return (
    <div style={{ height: 300 }}>
      <FullFileBrowser
        files={files}
        folderChain={folderChain}
        fileActions={fileActions}
      />
    </div>
  );
};

ReactDom.render(<MyFileBrowser />, document.getElementById('root'));
