import { Platform } from '../hooks/useGames';

interface Props {
	platforms: Platform[];
}
import {
	FaAndroid,
	FaXbox,
	FaApple,
	FaPlaystation,
	FaWindows,
	FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		android: FaAndroid,
		playstation: FaPlaystation,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		nintendo: SiNintendo,
		pc: FaWindows,
		xbox: FaXbox,
	};

	return (
		<div className='flex justify-between space-x-2'>
			{platforms.map((platform) => {
				const IconMap = iconMap[platform.slug];
				if (!IconMap) return null;
				return <IconMap key={platform.id} />;
			})}
		</div>
	);
};

export default PlatformIconList;
