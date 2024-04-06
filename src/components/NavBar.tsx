import logo from '../assets/gamingg.jpg';
import SearchBox from './SearchBox';
interface Props {
	onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<div className=' flex justify-between items-center'>
			<div className='flex justify-between items-center md:space-x-20 space-x-4'>
				<img src={logo} alt='Logo' className='h-12 w-12 rounded-full' />
				<SearchBox onSearchText={onSearch} />
			</div>
			<div className='bg-slate-600 text-lg lg:block hidden active:bg-yellow-400 active:text-slate-600 font-semibold text-white hover:text-yellow-400 px-3 py-2 rounded-md'>
				@ProCoder
			</div>
		</div>
	);
};

export default NavBar;
