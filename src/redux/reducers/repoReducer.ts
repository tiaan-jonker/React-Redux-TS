interface RepoState {
  loading: boolean
  error: string | null
  data: string[]
}

interface SearchRepoAction {
  type: ActionType.SEARCH_REPO
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS
  payload: string[]
}

interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_ERROR
  payload: string
}

type Action = SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction

enum ActionType {
  SEARCH_REPO = 'SEARCH_REPO',
  SEARCH_REPO_SUCCESS = 'SEARCH_REPO_SUCCESS',
  SEARCH_REPO_ERROR = 'SEARCH_REPO_ERROR',
}

const reducer = (state: RepoState, action: Action): RepoState => {
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

export default reducer
