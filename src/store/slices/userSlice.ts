import { createSlice } from "@reduxjs/toolkit"

interface UserStore {
  email?: string
  token?: string
  id?: string
}

const initialState: UserStore = {
  email: undefined,
  token: undefined,
  id: undefined,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.uuid
    },
    // Как типизировать аэкшены в redux-toolkit
    // Как запретить использование any в typescript
    removeUser(state) {
      state.email = undefined
      state.token = undefined
      state.id = undefined
    },
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
