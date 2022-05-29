import { Action } from './../actions/index'
import { ActionType } from './../action-types/index'

interface RepoState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false, 
  error: null,
  data: []
}

const repoReducer = (state: RepoState = initialState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default repoReducer
