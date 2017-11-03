import C from '../constants';

const randomised = ({
	fraction: Math.floor(Math.random() * 2),
	hairStyle: Math.floor(Math.random() * 6),
	skinColor: Math.floor(Math.random() * 10)
});

export const randomise = () => ({ type: C.RANDOM_HERO, payload: randomised });
