export const BASE_URL = 'https://cat-fact.herokuapp.com';

export const CAT_FACTS_ROUTES = {
    GET_FACTS: '/facts',
    GET_RANDOM_FACTS: '/facts/random?amount=',
} as const;

export type CatFactsRoute = typeof CAT_FACTS_ROUTES[keyof typeof CAT_FACTS_ROUTES];
