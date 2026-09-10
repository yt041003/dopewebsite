// Product foundation only: no pair URLs, indexing, percentages or inferred success scores.
export type PersonalityCode=`${'E'|'I'}${'S'|'N'}${'T'|'F'}${'J'|'P'}`;
export type CompatibilityInput={first:PersonalityCode;second:PersonalityCode};
export type CompatibilityReflection={pairKey:string;dimensions:{pair:string;samePreference:boolean}[];indexable:false};
export function comparePreferences(input:CompatibilityInput):CompatibilityReflection {
 if(!/^[EI][SN][TF][JP]$/.test(input.first)||!/^[EI][SN][TF][JP]$/.test(input.second))throw new Error('Choose two complete personality codes');
 return {pairKey:[input.first,input.second].sort().join('-').toLowerCase(),dimensions:['E / I','S / N','T / F','J / P'].map((pair,i)=>({pair,samePreference:input.first[i]===input.second[i]})),indexable:false};
}
