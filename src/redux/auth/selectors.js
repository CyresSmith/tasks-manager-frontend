export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.isError;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.token;
