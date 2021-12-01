import { RouterState } from 'connected-react-router';
import { State } from '.';
import { initialState as catFactsState } from './catFactsState';

export const getInitialState = (
    pathname = '/',
): State => ({
    catFactsState,
    router: {
        location: {
            pathname,
            search: '',
            hash: '',
            key: '',
        },
        action: 'POP',
    } as RouterState,
});
