const skillModifier = (base: number, proficiency: number): number => {
    return Math.floor((base - 10) / 2) + proficiency;
};

export { skillModifier };
