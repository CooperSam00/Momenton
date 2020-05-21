import { formatShortDate, formatLongDate } from './dates'

describe('Date Formatting', () => {
    test('Short Date Formatting', () => {
        expect(formatShortDate('2019-09-21T23:39:12+00:00')).toEqual('Sun 22 Sep - 9:39 AM')
        expect(formatShortDate('2199-01-23T11:22:12+00:00')).toEqual('Wed 23 Jan - 22:22 PM')
        expect(formatShortDate('1022-11-13T02:51:12+00:00')).toEqual('Wed 13 Nov - 12:31 PM')
        expect(formatShortDate('')).toEqual('Invalid Date')
        expect(formatShortDate('dwadwad')).toEqual('Invalid Date')
    })
    test('Long Date Formatting', () => {
        expect(formatLongDate('2019-09-21T23:39:12+00:00')).toEqual('Sunday, September 22, 2019 9:39 AM')
        expect(formatLongDate('2199-01-23T11:22:12+00:00')).toEqual('Wednesday, January 23, 2199 10:22 PM')
        expect(formatLongDate('1022-11-13T02:51:12+00:00')).toEqual('Wednesday, November 13, 1022 12:31 PM')
        expect(formatLongDate('')).toEqual('Invalid Date')
        expect(formatLongDate('dwadwad')).toEqual('Invalid Date')
    })
})
