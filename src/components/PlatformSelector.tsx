import { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	selectedPlatform: (Platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;
	return (
		<div className=' px-2 mb-6   rounded-md grid grid-cols-8 '>
			{data?.map((platform) => (
				<button
					className='h-14 w-26 px-2 bg-slate-200 focus:bg-yellow-300 focus:font-semibold mx-2 mb-2 rounded-md'
					key={platform.id}
					onClick={() => selectedPlatform(platform)}
				>
					{platform.name}
				</button>
			))}
		</div>
	);
};

export default PlatformSelector;
