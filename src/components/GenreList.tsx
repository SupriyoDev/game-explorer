import useGenres from '../hooks/useGenres';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, error } = useGenres();

	return (
		<div>
			{error && <p>{error}</p>}
			<ul>
				{data?.map((genre) => (
					<li key={genre.id} className='flex mb-4 '>
						<img
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.name}
							className='h-10 w-10 rounded-lg mr-2'
						/>
						<button
							onClick={() => onSelectGenre(genre)}
							className='hover:underline underline-offset-2 text-white text-base  font-normal focus:text-yellow-300 focus:font-semibold'
						>
							{genre.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
