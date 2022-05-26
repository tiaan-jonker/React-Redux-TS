import { ActionType } from './../action-types/index'

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

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction
