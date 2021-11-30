import type { State } from '../../reducers';

export const getCatFactsState = (state: State) => state.catFactsState;

export const getCatFactsLoaderState = (state: State) => getCatFactsState(state).isLoading;

export const getNumberCatFactsState = (state: State) => getCatFactsState(state).numberCatFacts;

export const getCatFacts = (state: State) => getCatFactsState(state).catFacts;

/* export const getUserNickname = (state: State) => {
    const userProfile = getUserProfile(state);
    if (!('firstName' in userProfile) && !('displayName' in userProfile)) {
        return null;
    }
    return userProfile.displayName || userProfile.firstName;
};

export const getUserAvatar = (state: State) => {
    const userProfile = getUserProfile(state);
    if (!('avatar' in userProfile)) {
        return null;
    }
    return userProfile.avatar;
};
 */
