/**
 * Returns icon by its code
 * */
export const getIcon = icon => {
    switch (icon.slice(0, -1)) {
        case '01':
            return 'â'
        case '02':
            return 'đ¤ī¸'
        case '03':
            return 'â'
        case '04':
            return 'â'
        case '09':
            return 'đ§ī¸'
        case '10':
            return 'đĻī¸'
        case '11':
            return 'đŠī¸'
        case '13':
            return 'â'
        case '50':
            return 'đĢī¸'
    }
}