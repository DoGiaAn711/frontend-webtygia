import axios from 'axios';

export const fetchUpdateScoreAndView = async (
	// email,
	itemId,
	category,
	detailModel
) => {
	try {
		const { data } = await axios.post(
			`${process.env.PRODUCT}/update-score-coins`,
			{
				email: localStorage.getItem('email'),
				itemId,
				category,
				detailModel,
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
