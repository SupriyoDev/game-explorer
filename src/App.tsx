import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	search: string | null;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<div className='grid grid-cols-8 bg-slate-800'>
			<div className='col-span-8 bg-slate-400 py-2 px-4 mb-5'>
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, search: searchText })
					}
				/>
			</div>
			<div className=' hidden lg:block lg:col-span-1 p-2 '>
				<GenreList
					onSelectGenre={(genre) =>
						setGameQuery({ ...gameQuery, genre })
					}
				/>{' '}
			</div>
			<div className=' col-span-8 lg:col-span-7 px-4 lg:px-8'>
				<div className='hidden xl:block'>
					<PlatformSelector
						selectedPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
				</div>
				<GameGrid
					selectedGenre={gameQuery.genre}
					selectedPlatform={gameQuery.platform}
					search={gameQuery.search}
				/>
			</div>
		</div>
	);
};

export default App;
