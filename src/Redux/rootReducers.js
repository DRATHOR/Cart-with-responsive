import {commonReducer} from './common/commonReducer'


export const rootReducers = () => {
  return (
    {
        commonReducer:commonReducer,
    }
  )
}
