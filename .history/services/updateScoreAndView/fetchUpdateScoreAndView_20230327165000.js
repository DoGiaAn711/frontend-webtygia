import axios from 'axios';

export const fetchUpdateScoreAndView = async (
	// email,
	itemId,
	category,
	detailModel
) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_PRODUCT_URL}/update-score-coins`,
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
