import ReactDom from 'react-dom';
import { FullFileBrowser } from 'chonky';

import { setChonkyDefaults } from 'chonky';
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
  return (
    <div style={{ height: 300 }}>
      <FullFileBrowser files={files} folderChain={folderChain} />
    </div>
  );
};

const Greeting = () => {
  return <h4>this is john</h4>;
};

ReactDom.render(<MyFileBrowser />, document.getElementById('root'));
