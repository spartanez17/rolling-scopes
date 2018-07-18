import { connect } from 'react-redux';
import { setProfileInfo, setDifficulty } from '../actions'
import Form from '../components/Form';

const mapStateToProps = state => ({
  firstName: state.firstName,
  secondName: state.secondName,
  email: state.email,
  difficulty: state.difficulty, 
})

const mapDispatchToProps = dispatch => ({
  profileListener: profile => dispatch(setProfileInfo(profile)),
  difficultyListener: difficulty => dispatch(setDifficulty(difficulty))
})

// const mapDispatchToProps = {
//   profileListener,
//   difficultyListener
// }

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps  
)(Form);

export default FormContainer;