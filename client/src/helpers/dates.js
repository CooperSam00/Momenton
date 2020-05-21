import dayjs from 'dayjs'

export const formatShortDate = (date) => {
    return dayjs(date).format('ddd D MMM - H:m A')
}

export const formatLongDate = (date) => {
    return dayjs(date).format('dddd, MMMM D, YYYY h:mm A')
}