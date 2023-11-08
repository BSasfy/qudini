const { createHash } = require('crypto');

export default function computeHash(email) {
  // Trim the leading and trailing whitespaces
  // Transform to all lowercase characters
  // Compute the MD5 hash
  return createHash('md5')
    .update((typeof email === 'string') ? email.trim().toLowerCase() : '')
    .digest('hex');
}