import React from 'react';
import PropTypes from 'prop-types';

import DropdownMenu from '../../components/dropdown-menu/dropdown-menu';

import branches from '../branches.json';

import styles from './header-styles.css';

function currentPath() {
  const chunks = window.location.pathname.split(/\//g);
  return chunks[chunks.length - 1];
}

const HOST = 'https://jetbrains.github.io/ring-ui';

const rgItemType = DropdownMenu.ListProps.Type.LINK;

const branchesArr = Object.keys(branches).map(version => ({
  version,
  path: branches[version],
  // /^0\.1\.\d+$/
  versionRE: new RegExp(`^${version.replace(/\./g, '\\.').replace(/\*/g, '\\d+')}$`)
}));

const Version = ({version}) => (
  <DropdownMenu
    anchor={version}
    className={styles.version}
    data={branchesArr.map(branch => {
      const active = branch.versionRE.test(version);
      return {
        rgItemType,
        active,
        href: `${HOST}/${branch.path}/${currentPath()}`,
        label: active ? version : branch.version
      };
    })}
    menuProps={{
      top: -16, left: -16
    }}
  />
);

Version.propTypes = {
  version: PropTypes.string
};

export default Version;
