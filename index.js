const multiplier = {
  2: 100,
  3: 1000,
  4: 10000,
  5: 1000000,
  6: 10000000,
  7: 100000000,
  8: 1000000000,
  9: 10000000000,
};

function dec2hex(dec) {
  return dec.toString(16).padStart(2, '0');
}

// generateId :: Integer -> String
function generateId(len) {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);

  return Array.from(arr, dec2hex).join('');
}

function useRandomizer(length) {
  const string = Math.random().toString(20).substring(2, length + 2);

  const number = Math.floor(Math.random() * multiplier[length]);

  const secureToken = generateId(length);

  return {
    string, number, secureToken,
  };
}

export default useRandomizer;
