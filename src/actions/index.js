import C from '../constants';
import { skinTones, hairColors } from '../assets/data';

const randomised = ({
	fraction: Math.floor(Math.random() * 2) + 1,
	skinTone: skinTones[Math.floor(Math.random() * 9)][1],
	hairStyle: Math.floor(Math.random() * 6) + 1,
	hairColor: hairColors[Math.floor(Math.random() * 5)][1],
});

export const randomise = () => ({ type: C.RANDOM_HERO, payload: randomised });
export const setFraction = fraction => ({ type: C.SET_FRACTION, payload: fraction });
export const setSkinTone = skinTone => ({ type: C.SET_SKINTONE, payload: skinTone });
export const setHairColor = hairColor => ({ type: C.SET_HAIRCOLOR, payload: hairColor });
