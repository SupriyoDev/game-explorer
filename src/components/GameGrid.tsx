import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import Gamecard from './Gamecard';

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { data, error } = useGames(selectedGenre, selectedPlatform);

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4'>
			{error && <p>{error}</p>}
			{data?.map((game) => (
				<Gamecard game={game} key={game.id} />
			))}
		</div>
	);
};

export default GameGrid;
