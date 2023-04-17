/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const secret = [first];

  for (let i = 0; i < encoded.length; i++) {
    secret.push(secret[i] ^ encoded[i]);
  }

  return secret;
};

module.exports = decode;
