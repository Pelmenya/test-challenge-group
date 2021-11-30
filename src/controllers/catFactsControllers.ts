import { catFactsAPI } from '../api/catFactsApi';

export const getFact = async (id: number) => catFactsAPI.getRandomFacts(id)
    .then((res) => [res.json()])
    .catch((err) => {
        console.log(err);
    });

export const getRandomFacts = async (amount: number) => catFactsAPI.getRandomFacts(amount)
    .then((res) => res.json())
    .catch((err) => {
        console.log(err);
    });
