import {createSelector} from "reselect";
 const GetUsersage = (state)=>{
    return state.usersPage.users
}
export const getUsersSelector = createSelector(GetUsersage,(users)=>{
    return users.filter(u=>true)
})
export const SetTotalCount = (state)=>{
    return state.usersPage.TotalCount
}
export const SetPageSize = (state)=>{
    return state.usersPage.PageSize
}
export const SetcurrentPage = (state)=>{
    return state.usersPage.currentPage
}
export const Setisfetching = (state)=>{
    return state.usersPage.isfetching
}
export const Setisfetchingprogress = (state)=>{
    return state.usersPage.isfetchingprogress
}