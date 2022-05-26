import axios from 'axios'
import { Action } from '../actions/index'
import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      )

      const names = data.objects.map((result: any) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      })
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: 'Could not fetch data',
      })
    }
  }
}
