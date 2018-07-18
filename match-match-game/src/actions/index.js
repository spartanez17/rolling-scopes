
export const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
export const SET_DIFFICULTY = 'SET_DIFFICULTY'


export const Difficulties = {
    EASY: 'EASY',
    NORMAL: 'NORMAL',
    HARD: 'HARD',
}

export function setProfileInfo(profile) {
    return { type: SET_PROFILE_INFO, profile }
}

export function setDifficulty(difficulty) {
    return { type: SET_DIFFICULTY, difficulty }
}
