import { useRef } from 'react';

interface Props {
	onSearchText: (search: string) => void;
}

const SearchBox = ({ onSearchText }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<div>
			<form
				className='flex items-center'
				onSubmit={(e) => {
					e.preventDefault();
					if (ref.current) onSearchText(ref.current.value);
				}}
			>
				<div className='flex justify-start '>
					<input
						ref={ref}
						type='text'
						placeholder='search here....'
						className='sm:w-[360px] md:w-[500px] w-[200px] h-10 px-4 rounded-md focus:outline-none focus:ring focus:ring-slate-500 text-lg'
					/>
					<button
						type='submit'
						className='bg-slate-600 font-semibold focus:ring focus:outline-none focus:ring-yellow-400 text-white ml-2 w-20 h-10 hover:text-yellow-400 hover:bg-slate-800 rounded-md text-lg text-pretty'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBox;
