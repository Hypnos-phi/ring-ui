import React, {PureComponent} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import dataTests from '../global/data-tests';

import styles from './button-set.css';

/**
 * @name Button Set
 */
export default class ButtonSet extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    'data-test': PropTypes.string
  };

  render() {
    const {className, 'data-test': dataTest, children, ...restProps} = this.props;
    const classes = classNames(styles.buttonSet, className);
    return (
      <div
        {...restProps}
        data-test={dataTests('ring-button-set', dataTest)}
        className={classes}
      >
        {children}
      </div>
    );
  }
}
