'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
	'aria-activedescendant': _propTypes2.default.string,
	'aria-autocomplete': _propTypes2.default.string,
	/**
  * An HTML ID that is shared with ARIA-supported devices with the
  * `aria-controls` attribute in order to relate the input with
  * another region of the page. An example would be a select box
  * that shows or hides a panel.
  */
	'aria-controls': _propTypes2.default.string,
	'aria-describedby': _propTypes2.default.string,
	'aria-expanded': _propTypes2.default.bool,
	'aria-haspopup': _propTypes2.default.bool,
	'aria-labelledby': _propTypes2.default.string,
	/**
  * An HTML ID that is shared with ARIA-supported devices with the
  * `aria-controls` attribute in order to relate the input with
  * another region of the page. An example would be a search field
  * that shows search results.
  */
	'aria-owns': _propTypes2.default.string,
	'aria-required': _propTypes2.default.bool,
	/**
  * Class names to be added to the `input` element.
  */
	className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	/**
  * Class names to be added to the outer container of the input.
  */
	containerClassName: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	/**
  * Disables the input and prevents editing the contents.
  */
	disabled: _propTypes2.default.bool,
	/**
  * Left aligned icon, must be instace of `design-system-react/components/icon/input-icon`
  */
	iconLeft: _propTypes2.default.node,
	/**
  * Right aligned icon, must be instace of `design-system-react/components/icon/input-icon`
  */
	iconRight: _propTypes2.default.node,
	/**
  * Every input must have a unique ID in order to support keyboard navigation and ARIA support.
  */
	id: _propTypes2.default.string.isRequired,
	/**
  * This callback exposes the input reference / DOM node to parent components. `<Parent inputRef={(inputComponent) => this.input = inputComponent} />
  */
	inputRef: _propTypes2.default.func,
	/**
  * This label appears above the input.
  */
	label: _propTypes2.default.string,
	onBlur: _propTypes2.default.func,
	/**
  * This callback fires when the input changes. The synthetic React event will be the first parameter to the callback. You will probably want to reference `event.target.value` in your callback. No custom data object is provided.
  */
	onChange: _propTypes2.default.func,
	/**
  * This event fires when the input is clicked.
  */
	onClick: _propTypes2.default.func,
	onFocus: _propTypes2.default.func,
	onInput: _propTypes2.default.func,
	onInvalid: _propTypes2.default.func,
	onKeyDown: _propTypes2.default.func,
	onKeyPress: _propTypes2.default.func,
	onKeyUp: _propTypes2.default.func,
	onSelect: _propTypes2.default.func,
	onSubmit: _propTypes2.default.func,
	/**
  * Text that will appear in an empty input.
  */
	placeholder: _propTypes2.default.string,
	minLength: _propTypes2.default.string,
	maxLength: _propTypes2.default.string,
	/**
  * Name of the submitted form parameter.
  */
	name: _propTypes2.default.string,
	/**
  * Specifies `readOnly` for `input` node. For the read-only input UX pattern, see `variant` prop.
  */
	readOnly: _propTypes2.default.bool,
	/**
  * Highlights the input as a required field (does not perform any validation).
  */
	required: _propTypes2.default.bool,
	/**
  * `role` to be added to `input` node
  */
	role: _propTypes2.default.string,
	/**
  * Style object to be added to `input` node
  */
	style: _propTypes2.default.object,
	/**
  * Specifies `tabIndex` for `input` node
  */
	tabIndex: _propTypes2.default.string,
	/**
  * The `<Input>` element includes support for all HTML5 types.
  */
	type: _propTypes2.default.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),
	/**
  * The input is a controlled component, and will always display this value.
  */
	value: _propTypes2.default.string,
	/**
  * UX pattern variants. `inputReadOnly` is for the read-only input UX pattern.
  */
	variant: _propTypes2.default.oneOf(['base', 'inputReadOnly'])
}; /* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// ### React


var defaultProps = {
	type: 'text',
	variant: 'base'
};

/*
 * This component was created to allow the DIV wrapped input to be used within other components such as combobox. This components API is not public.
 */
var InnerInput = function InnerInput(props) {
	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)(props.containerClassName, {
				'slds-input-has-icon': props.iconLeft || props.iconRight,
				'slds-input-has-icon--left': props.iconLeft && !props.iconRight,
				'slds-input-has-icon--right': !props.iconLeft && props.iconRight,
				'slds-input-has-icon--left-right': props.iconLeft && props.iconRight,
				'slds-has-divider--bottom': props.variant === 'inputReadOnly' && !props.inlineEditTrigger
			})
		},
		props.iconLeft ? props.iconLeft : null,
		props.variant !== 'inputReadOnly' && _react2.default.createElement('input', {
			'aria-activedescendant': props['aria-activedescendant'],
			'aria-autocomplete': props['aria-autocomplete'],
			'aria-controls': props['aria-controls'],
			'aria-labelledby': props['aria-labelledby'],
			'aria-describedby': props['aria-describedby'],
			'aria-expanded': props['aria-expanded'],
			'aria-owns': props['aria-owns'],
			'aria-required': props['aria-required'],
			className: (0, _classnames2.default)('slds-input', props.className),
			disabled: props.disabled,
			id: props.id,
			minLength: props.minLength,
			maxLength: props.maxLength,
			name: props.name,
			onBlur: props.onBlur,
			onChange: props.onChange,
			onClick: props.onClick,
			onFocus: props.onFocus,
			onInput: props.onInput,
			onInvalid: props.onInvalid,
			onKeyDown: props.onKeyDown,
			onKeyPress: props.onKeyPress,
			onKeyUp: props.onKeyUp,
			onSelect: props.onSelect,
			onSubmit: props.onSubmit,
			placeholder: props.placeholder,
			ref: props.inputRef,
			role: props.role,
			required: props.required,
			style: props.style,
			tabIndex: props.tabIndex,
			type: props.type,
			value: props.value
		}),
		props.iconRight ? props.iconRight : null,
		props.variant === 'inputReadOnly' && _react2.default.createElement(
			'span',
			{ className: 'slds-form-element__static', onClick: props.onClick },
			props.value,
			props.inlineEditTrigger
		)
	);
};

InnerInput.displayName = 'SLDSInnerInput';
InnerInput.propTypes = propTypes;
InnerInput.defaultProps = defaultProps;

exports.default = InnerInput;