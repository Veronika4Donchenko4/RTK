import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useMemo } from "react" 
import { actions } from '../store/favorite/favorite.slice'
import * as userActions from '../store/user/user.actions'

const rootActions = {
    ...actions,
    ...userActions,
}

export const useActions = () => { 
    const dispatch = useDispatch()

    return useMemo(() =>
    bindActionCreators(rootActions,dispatch), 
  [dispatch])
}