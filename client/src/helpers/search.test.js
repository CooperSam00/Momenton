import { validateSearchInput, createSearchRequestParam } from './search'

describe('Employee Search Functions', () => {
    test('Validate Employee Search', () => {
        expect(validateSearchInput('100000')).toEqual(true)
        expect(validateSearchInput('222')).toEqual(true)
        expect(validateSearchInput('2')).toEqual(true)
        expect(validateSearchInput('dwadwadwa')).toEqual(false)
        expect(validateSearchInput('dw21dwada21a')).toEqual(false)
        expect(validateSearchInput('dw241a')).toEqual(false)
        expect(validateSearchInput('')).toEqual(true)
        expect(validateSearchInput('dwadwadwa@')).toEqual(false)
        expect(validateSearchInput('!@')).toEqual(false)
        expect(validateSearchInput('!22')).toEqual(false)
        expect(validateSearchInput('!')).toEqual(false)
        expect(validateSearchInput('#')).toEqual(false)
        expect(validateSearchInput('?')).toEqual(false)
    })
    test('Create Search Request Paramater', () => {
        expect(createSearchRequestParam('10000')).toEqual('10000')
        expect(createSearchRequestParam('10000 20000')).toEqual('10000,20000')
        expect(createSearchRequestParam('10000,20000')).toEqual('10000,20000')
        expect(createSearchRequestParam('10000,20000 30000')).toEqual('10000,20000,30000')
        expect(createSearchRequestParam('10000,20000,30000')).toEqual('10000,20000,30000')
        expect(createSearchRequestParam('10000 20000,30000')).toEqual('10000,20000,30000')
    })
})
