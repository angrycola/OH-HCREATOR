import C from '../constants';
import { skinTones } from '../assets/data';

const randomised = ({
	fraction: Math.floor(Math.random() * 2) + 1,
	hairStyle: Math.floor(Math.random() * 6) + 1,
	skinTone: skinTones[Math.floor(Math.random() * 10)][1]
});

export const randomise = () => ({ type: C.RANDOM_HERO, payload: randomised });
export const setFraction = fraction => ({ type: C.SET_FRACTION, payload: fraction });
export const setHairStyle = hairStyle => ({ type: C.SET_HAIRSTYLE, payload: hairStyle });
export const setSkinTone = skinTone => ({ type: C.SET_SKINTONE, payload: skinTone });
