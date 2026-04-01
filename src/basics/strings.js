/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  if (
    typeof needle !== 'string' ||
    typeof haystack !== 'string' ||
    typeof newWord !== 'string' ||
    (haystack === '' && newWord === '')
  ) {
    throw new Error()
  }

  const regex = new RegExp(needle, 'gi')
  return haystack.replace(regex, (match) => {
    const chars = newWord.slice(0, needle.length).split('')

    const transformed = chars.map((char, index) => {
      const referenceChar = match[index] || match[match.length - 1]

      return referenceChar === referenceChar.toUpperCase()
        ? char.toUpperCase()
        : char.toLowerCase()
    })

    return transformed.join('')
  })
}
