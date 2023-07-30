export const setName = state => state.auth.user.name;

export const avatarURL = state => state.auth.user.avatarURL;

export const getTheme = state => state.auth.user.theme;

export const getActiveBoard = state => state.auth.user.activeBoard;

export const setToken = state => state.auth.token;

export const isLoggedIn = state => state.auth.isLoggedIn;

export const isRefreshing = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;
