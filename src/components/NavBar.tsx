import logo from '../assets/gamingg.jpg';
import SearchBox from './SearchBox';

const NavBar = () => {
	return (
		<div className=' flex justify-between items-center'>
			<div className='flex justify-between items-center space-x-20'>
				<img src={logo} alt='Logo' className='h-12 w-12 rounded-full' />
				<SearchBox />
			</div>
			<div className='bg-slate-600 text-lg lg:block hidden active:bg-yellow-400 active:text-slate-600 font-semibold text-white hover:text-yellow-400 px-3 py-2 rounded-md'>
				@ProCoder
			</div>
		</div>
	);
};

export default NavBar;
