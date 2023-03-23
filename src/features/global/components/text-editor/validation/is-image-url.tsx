import isURL from 'validator/lib/isURL'
import imageExtensions from '../data/image-extensions.json'

export function isImageUrl(url: string) {
  if (!url) return false
  if (!isURL(url)) return false
  const ext = new URL(url).pathname.split('.').pop()
  return imageExtensions.includes(ext ?? '')
}
