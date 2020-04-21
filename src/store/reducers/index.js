// comnina todos os reducers, adicionando na store
import { combineReducers } from 'redux'

import busca from './busca'
import reproduz from './reproduzVideo'

const rootReducer = combineReducers({
    busca,
    reproduz
})

export default rootReducer;