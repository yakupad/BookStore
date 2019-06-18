import { getRequester } from './requester'

export const getBooksByBarcode = (barcodeNumber) => {
  return getRequester('getBooksByBarcode', barcodeNumber)
}

export const getBooksByAuthor = (authorName) => {
  return getRequester('getBookByAuthor', authorName)
}
