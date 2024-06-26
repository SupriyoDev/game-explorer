import logo from '../assets/placeholder.png';

const getCroppedImageUrl = (url: string) => {
	if (!url) return logo;
	const target = 'media/';

	let index = url.indexOf(target) + target.length;

	return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
