import { catsImages } from '../catsImages';

export function getRandomCatImage() {
    const index = Math.floor(Math.random() * (catsImages.length - 1));
    return catsImages[index];
}
