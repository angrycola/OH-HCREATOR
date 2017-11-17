import C from '../constants';
import { fractions, heroClasses, skinTones, hairColors, hairStyles, facialHairStyle } from '../assets/data';


const randomised = () => ({
	fraction: fractions[Math.floor(Math.random() * 2)][1],
	heroClass: heroClasses[Math.floor(Math.random() * 3)][1],
	skinTone: skinTones[Math.floor(Math.random() * 9)][2],
	hairColor: hairColors[Math.floor(Math.random() * 5)][2],
	hairStyle: hairStyles[Math.floor(Math.random() * 7)][2],
	facialHair: facialHairStyle[Math.floor(Math.random() * 9)][2],
	name: null
});

export const randomise = () => ({ type: C.RANDOM_HERO, payload: randomised() });
export const setFraction = fraction => ({ type: C.SET_FRACTION, payload: fraction });
export const setHeroClass = heroClass => ({ type: C.SET_HEROCLASS, payload: heroClass });
export const setSkinTone = skinTone => ({ type: C.SET_SKINTONE, payload: skinTone });
export const setHairColor = hairColor => ({ type: C.SET_HAIRCOLOR, payload: hairColor });
export const setHairStyle = hairStyle => ({ type: C.SET_HAIRSTYLE, payload: hairStyle });
export const setFacialHairsStyle = hairStyle => ({ type: C.SET_FACEHAIR, payload: hairStyle });
export const setCharName = name => ({ type: C.SET_CHARNAME, payload: name });

export const showAddNameForm = () => ({ type: C.SHOW_FINAL_FORM });
export const hideAddNameForm = () => ({ type: C.HIDE_FINAL_FORM });
