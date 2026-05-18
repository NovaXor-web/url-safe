/**
 * NovaXor — url-safe
 * Convert any string to URL-safe slug
 * @license MIT
 */

function urlSafe(input, options = {}) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const separator = options.separator || '-';
  const lowercase = options.lowercase !== false;
  const trim = options.trim !== false;

  let slug = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-zA-Z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, separator)       // spaces to separator
    .replace(new RegExp(`${separator}+`, 'g'), separator); // no double separator

  if (lowercase) {
    slug = slug.toLowerCase();
  }

  if (trim) {
    slug = slug.replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
  }

  return slug;
}

module.exports = { urlSafe };
