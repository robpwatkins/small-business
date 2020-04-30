import { connect } from 'react-redux';
import Login from '../components/Login';

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn())
  }
}

export default connect(null, mapDispatchToProps)(Login);