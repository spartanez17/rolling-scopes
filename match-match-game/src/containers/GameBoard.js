import { connect } from 'react-redux'
import { setDifficulty } from '../actions'
import GameBoard from '../components/GameBoard'
import { Difficulties } from '../actions'

const mapStateToProps = state => ({
  firstName: state.firstName,
  difficulty: (function(){
    switch (state.difficulty) {
      case Difficulties.EASY:
        return 1
      case Difficulties.NORMAL:
        return 2
      case Difficulties.HARD:
        return 3
      default:
        return state
    }
  })(),
})

const mapDispatchToProps = dispatch => ({
  difficultyListener: difficulty => dispatch(setDifficulty(difficulty))
})


const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;