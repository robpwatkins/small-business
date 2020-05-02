import { connect } from 'react-redux';
import Add from '../components/Add';
import { addBusiness } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);