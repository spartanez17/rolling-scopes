import { combineReducers } from 'redux'
import profile from './profile'
import difficulty from './difficulty'
import gameProgress from './card'
import modal from './modal'
import time from './timer'

const reducer = combineReducers({
  profile,
  difficulty,
  gameProgress,
  modal,
  time,
})

export default reducer;
