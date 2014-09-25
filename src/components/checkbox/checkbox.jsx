/** @jsx React.DOM */

'use strict';

require('./checkbox.scss');
var React = require('react');
var Global =  require('global/global');
var ReactPropTypes = React.PropTypes;

/**
 * @const
 * @type {string}
 */
var ID_PREFIX = '\\x0';

var generateUniqueId = Global.getUIDGenerator(ID_PREFIX);

/**
 * @name Checkbox
 * @constructor
 * @extends {ReactComponent}
   <example name="Checkbox">
     <file name="index.html">
       <div>
         <span id='checkbox'></span>
         <span id='checkbox-selected'></span>
       </div>
     </file>

     <file name="index.js" webpack="true">
       var React = require('react');
       var Checkbox = require('./checkbox.jsx');

       React.renderComponent(Checkbox(), document.getElementById('checkbox'));

       React.renderComponent(Checkbox({
           checked: true
         }), document.getElementById('checkbox-selected'));
     </file>
   </example>
 */
var Checkbox = React.createClass({
  propTypes: {
    name: ReactPropTypes.string,

    /**
     * Add custom class for checkbox
     */
    className: ReactPropTypes.string,

    /**
     * Add id for component. If user does not pass id
     * we generate unique id for correct work checkbox
     */
    id: ReactPropTypes.string
  },

  getInitialState: function () {
    return {
      id: generateUniqueId()
    };
  },

  /**
   * Return native input node
   * @return {HTMLElement}
   */
  getInputDOMNode: function () {
    return this.refs.input.getDOMNode();
  },

  /**
   * Return native label node which is responsible for the look of checkbox
   * @return {HTMLElement}
   */
  getLabelDOMNode: function () {
    return this.refs.label.getDOMNode();
  },

  render: function () {
    /* jshint ignore:start */
    var id = this.props.id || this.state.id;

    return (
      <label className="ring-form__label">
        {this.transferPropsTo(<input ref="input" className="ring-checkbox" type="checkbox" id={id} />)}
        <label ref="label" className="ring-checkbox__label" htmlFor={id} />
      </label>
      );
    /* jshint ignore:end */
  }
});

module.exports = Checkbox;
