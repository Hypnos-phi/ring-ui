import React from 'react';

import classNames from 'classnames';

import chevronDownIcon from '@jetbrains/icons/chevron-10px';

import PropTypes from 'prop-types';

import {Directions} from '../popup/popup.consts';
import PopupMenu, {ListProps} from '../popup-menu/popup-menu';

import Dropdown from '../dropdown/dropdown';

import Link from '../link/link';
import Icon from '../icon/icon';

import styles from './tabs.css';
import getTabTitles from './collapsible-tab';
import {CustomItem} from './custom-item';


export const AnchorLink = ({
  hasActiveChildren,
  moreClassName,
  moreActiveClassName,
  ...restProps
}) => {
  const classnames = classNames(
    styles.title,
    hasActiveChildren && styles.selected,
    hasActiveChildren && moreActiveClassName,
    moreClassName
  );
  return (
    <Link
      title={'More'}
      innerClassName={classnames}
      className={classnames}
      {...restProps}
    >
      {'More'}
      <Icon
        glyph={chevronDownIcon}
        className={styles.chevron}
      /></Link>
  );
};

AnchorLink.propTypes = {
  hasActiveChildren: PropTypes.bool,
  moreClassName: PropTypes.string,
  moreActiveClassName: PropTypes.string
};

const morePopupDirections = [
  Directions.BOTTOM_CENTER,
  Directions.BOTTOM_LEFT,
  Directions.BOTTOM_RIGHT
];
export const MoreButton = React.memo(({
  items,
  selected,
  onSelect,
  moreClassName,
  moreActiveClassName,
  morePopupClassName,
  morePopupItemClassName,
  morePopupBeforeEnd
}) => {
  const onSelectHandler = React.useCallback(listItem => {
    if (listItem.disabled === true || listItem.custom === true) {
      return;
    }

    const cb = onSelect(listItem.key);
    cb();
  }, [onSelect]);

  const hasActiveChild = React.useMemo(() =>
    items.some(item => item.props.alwaysHidden && item.props.id === selected),
  [items, selected]
  );

  const data = React.useMemo(() => {
    const popupItems = getTabTitles({
      items,
      selected,
      collapsed: true
    }).map(tab => {
      const disabled = tab.props.disabled === true;
      const custom = tab.props.child.type === CustomItem;

      return ({
        template: tab,
        key: tab.key,
        rgItemType: ListProps.Type.CUSTOM,
        className: morePopupItemClassName,
        disabled,
        custom
      });
    });

    if (morePopupBeforeEnd) {
      popupItems.push({
        template: morePopupBeforeEnd,
        key: 'before-end-content',
        className: styles.morePopupBeforeEnd,
        rgItemType: ListProps.Type.CUSTOM
      });
    }

    return popupItems;
  }, [items, morePopupBeforeEnd, morePopupItemClassName, selected]);

  const popupAnchor = React.useMemo(() => (
    <AnchorLink
      moreClassName={moreClassName}
      moreActiveClassName={moreActiveClassName}
      hasActiveChildren={hasActiveChild}
    />
  ), [hasActiveChild, moreActiveClassName, moreClassName]);

  const popup = React.useMemo(() => (
    <PopupMenu
      directions={morePopupDirections}
      className={morePopupClassName}
      onSelect={onSelectHandler}
      data={data}
    />
  ), [data, morePopupClassName, onSelectHandler]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={classNames(styles.title, moreClassName, hasActiveChild && moreActiveClassName)}>
      <Dropdown
        hoverMode
        anchor={popupAnchor}
      >
        {popup}
      </Dropdown>
    </div>
  );
});

MoreButton.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  toMeasure: PropTypes.bool,
  moreClassName: PropTypes.string,
  moreActiveClassName: PropTypes.string,
  morePopupClassName: PropTypes.string,
  morePopupItemClassName: PropTypes.string,
  morePopupBeforeEnd: PropTypes.element
};

MoreButton.displayName = 'MoreButton';

export const FakeMoreButton = React.memo(({
  moreClassName,
  moreActiveClassName,
  hasActiveChildren
}) => (
  <div className={classNames(styles.moreButton, styles.title)}>
    <AnchorLink
      moreClassName={moreClassName}
      moreActiveClassName={moreActiveClassName}
      hasActiveChildren={hasActiveChildren}
      tabIndex={-1}
      disabled
    />
  </div>
));
FakeMoreButton.propTypes = {
  moreClassName: PropTypes.string,
  moreActiveClassName: PropTypes.string,
  hasActiveChildren: PropTypes.bool
};
FakeMoreButton.displayName = 'FakeMoreButton';
