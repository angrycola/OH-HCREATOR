import C from '../constants';
import { fractions, skinTones, hairColors, hairStyles, facialHairStyle } from '../assets/data';


const randomised = ({
	fraction: fractions[Math.floor(Math.random() * 2)][1],
	skinTone: skinTones[Math.floor(Math.random() * 9)][1],
	hairColor: hairColors[Math.floor(Math.random() * 5)][1],
	hairStyle: hairStyles[Math.floor(Math.random() * 7)][1],
	facialHair: facialHairStyle[Math.floor(Math.random() * 10)][1]
});

export const randomise = () => ({ type: C.RANDOM_HERO, payload: randomised });
export const setFraction = fraction => ({ type: C.SET_FRACTION, payload: fraction });
export const setSkinTone = skinTone => ({ type: C.SET_SKINTONE, payload: skinTone });
export const setHairColor = hairColor => ({ type: C.SET_HAIRCOLOR, payload: hairColor });
export const setHairStyle = hairStyle => ({ type: C.SET_HAIRSTYLE, payload: hairStyle });
export const setFacialHairsStyle = hairStyle => ({ type: C.SET_FACEHAIR, payload: hairStyle });
