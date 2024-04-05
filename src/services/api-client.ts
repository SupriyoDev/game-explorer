import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '55a4f9cfed8e4823a97b08c323a1d785',
	},
});
