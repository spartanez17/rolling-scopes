import { combineReducers } from 'redux'
import profile from '../reducers/profile'
import difficulty from '../reducers/difficulty'

const reducer = combineReducers({
  profile,
  difficulty
})

export default reducer;
