import { connect } from 'react-redux'
import { setDifficulty, loadModal, restart } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    difficulty: state.difficulty,
    guessed: state.gameProgress.guessed,
    time: state.time,
  }
}

const mapDispatchToProps = dispatch => ({
  difficultyListener: difficulty => dispatch(setDifficulty(difficulty)),
  loadModal: modalType => dispatch(loadModal(modalType)),
  restart: () => dispatch(restart()),
})


const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;