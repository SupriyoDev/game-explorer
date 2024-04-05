import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const Gamecard = ({ game }: Props) => {
	return (
		<div className='  bg-slate-400 pb-4 rounded-lg overflow-hidden'>
			<img
				src={getCroppedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<div className='text-center font-semibold mt-2 px-2 text-xl text-slate-600'>
				{game.name}
			</div>
			<div className='flex justify-between px-2 text-slate-700 pt-4 text-xl'>
				<PlatformIconList
					platforms={game.parent_platforms.map(
						({ platform }) => platform
					)}
				/>
				<div className='h-8 w-10 rounded-md text-green-600 font-semibold bg-green-200 flex justify-center items-center'>
					{game.metacritic}
				</div>
			</div>
		</div>
	);
};

export default Gamecard;
