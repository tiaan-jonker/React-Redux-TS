interface RepoState {
  loading: boolean
  error: string | null
  data: string[]
}

const reducer = (state: RepoState, action: any) => {
  switch (action.type) {
    case 'SEARCH_REPO':
      return { loading: true, error: null, data: [] }
    case 'SEARCH_REPO_SUCCESS':
      return { loading: false, error: null, data: action.payload }
    case 'SEARCH_REPO_ERROR':
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
