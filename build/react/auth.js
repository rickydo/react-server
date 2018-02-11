'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'overlay' },
        _react2.default.createElement(
          'div',
          { className: 'box' },
          _react2.default.createElement(
            'h2',
            null,
            this.props.title
          ),
          this.props.children
        ),
        _react2.default.createElement(
          'footer',
          null,
          'By signing up, you agree to our',
          _react2.default.createElement(
            'a',
            { href: '/terms' },
            'Terms of Service'
          ),
          ' and',
          _react2.default.createElement(
            'a',
            { href: '/privacy' },
            'Privacy Policy'
          ),
          '.'
        )
      );
    }
    // expect to get a child

  }]);

  return Layout;
}(_react2.default.Component);

;

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this2 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this2.state = {
      remember: true
    };
    return _this2;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: '/u/login', method: 'post', acceptCharset: 'utf-8' },
        _react2.default.createElement(Email, null),
        _react2.default.createElement(Pssword, null),
        _react2.default.createElement(
          'label',
          { htmlFor: 'remember-me' },
          _react2.default.createElement('input', { type: 'checkbox', name: 'remember_me', value: '1',
            id: 'remember-me', defaultChecked: true }),
          'Remember Me'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            { href: 'register.html', className: 'inlink' },
            'Register'
          ),
          ' |',
          _react2.default.createElement(
            'a',
            { href: '#request-reset-password', className: 'inlink' },
            ' Reset Password'
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Login'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

;

var Email = function (_React$Component3) {
  _inherits(Email, _React$Component3);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).apply(this, arguments));
  }

  _createClass(Email, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      return _react2.default.createElement('input', (_React$createElement = { type: 'email', name: 'email', 'data-info': 'An active email account is needed to gain access.',
        placeholder: 'Your email', pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
        required: true, title: 'You need to have a working email to gain access.' }, _defineProperty(_React$createElement, 'required', 'required'), _defineProperty(_React$createElement, 'id', 'email'), _React$createElement));
    }
  }]);

  return Email;
}(_react2.default.Component);

;

var Pssword = function (_React$Component4) {
  _inherits(Pssword, _React$Component4);

  function Pssword() {
    _classCallCheck(this, Pssword);

    return _possibleConstructorReturn(this, (Pssword.__proto__ || Object.getPrototypeOf(Pssword)).apply(this, arguments));
  }

  _createClass(Pssword, [{
    key: 'render',

    // no constructor or state is needed on the server

    value: function render() {
      var ch = [_react2.default.createElement('input', { type: 'password', name: 'password1', required: 'required', placeholder: 'Password',
        key: 'password', onChange: this.onChange })];
      if (this.props.twice) {
        ch[1] = [_react2.default.createElement('input', { type: 'password', name: 'password2', required: 'required', placeholder: 'Repeat Password',
          key: 'password2', onChange: this.onChange })];
      }
      if (this.props.msg) {
        ch.push(_react2.default.createElement(
          'div',
          { className: 'error-message' },
          this.props.msg
        ));
      }

      return _react2.default.createElement(
        'div',
        null,
        ch
      );
    }
  }]);

  return Pssword;
}(_react2.default.Component);

;

var Register = function (_React$Component5) {
  _inherits(Register, _React$Component5);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  _createClass(Register, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { method: 'post', acceptCharset: 'utf-8', action: '/u/register' },
        _react2.default.createElement(Email, null),
        _react2.default.createElement(Pssword, { twice: '1', msg: this.props.msg }),
        _react2.default.createElement('span', { className: 'col-p100 info' }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit'
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

;

// the below code could be moved to server.js file for idiomacy
module.exports = {
  register: function register(msg) {
    return _server2.default.renderToString(_react2.default.createElement(Register, { msg: msg }));
  }
};