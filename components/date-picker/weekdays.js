import React from 'react';
import classNames from 'classnames';
import getDay from 'date-fns/getDay';
import format from 'date-fns/format';
import setDay from 'date-fns/setDay';
import startOfDay from 'date-fns/startOfDay';

import PropTypes from 'prop-types';

import {weekdays} from './consts';
import styles from './date-picker.css';

export default function Weekdays(props) {
  const days = Object.keys(weekdays).
    map(key => startOfDay(setDay(new Date(), weekdays[key])));

  const {locale} = props;

  return (
    <div className={styles.weekdays}>
      {days.map(day => (
        <span
          className={classNames(
            styles.weekday,
            {
              [styles.weekend]: [weekdays.SA, weekdays.SU].includes(getDay(day))
            }
          )}
          key={+day}
        >
          {format(day, 'EEEEEE', {locale})}
        </span>
      ))}
    </div>
  );
}

Weekdays.propTypes = {
  locale: PropTypes.string
};
