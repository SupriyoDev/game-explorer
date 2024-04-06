import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	id: number;
	slug: string;
	name: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	metacritic: number;
	parent_platforms: { platform: Platform }[];
}

const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null,
	search: string | null
) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: selectedGenre?.id,
				platforms: selectedPlatform?.id,
				search: search,
			},
		},

		[selectedGenre?.id, selectedPlatform?.id, search]
	);

export default useGames;
