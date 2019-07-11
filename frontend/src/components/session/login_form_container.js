import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import AuthForm from './auth_form';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: "sign in",
    errors: state.errors,
    closeComponent: ownProps.closeComponent,
    switchComponent: ownProps.switchComponent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formCallback: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);