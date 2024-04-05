import { useRef } from 'react';

const SearchBox = () => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<div>
			<form
				className='flex items-center'
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					ref={ref}
					type='text'
					placeholder='search here....'
					className='lg:w-[600px] w-[220px] h-10 px-4 rounded-md focus:outline-none focus:ring focus:ring-slate-500 text-lg'
				/>
			</form>
		</div>
	);
};

export default SearchBox;
