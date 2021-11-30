import { BASE_URL, CAT_FACTS_ROUTES } from './constants/apiRoutes';

class CatFactsAPI {
    getRandomFacts(amount: number) {
        return fetch(`${BASE_URL}${CAT_FACTS_ROUTES.GET_RANDOM_FACTS}${amount}`);
    }

    getFact(id: number) {
        return fetch(`${BASE_URL}${CAT_FACTS_ROUTES.GET_FACTS}/:${id}`);
    }
}

export const catFactsAPI = new CatFactsAPI();
