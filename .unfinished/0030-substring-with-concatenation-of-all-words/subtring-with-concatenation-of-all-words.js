function generatePermutations(words) {
  const output = [];

  function generate(permutation, words) {
    if (words.length === 0) {
      output.push(permutation);
    }

    for (let i = 0; i < words.length; i++) {
      generate(permutation + words[i], [
        ...words.slice(0, i),
        ...words.slice(i + 1),
      ]);
    }
  }
  generate("", words);

  return output;
}

function removeDuplicates(arr) {
  const map = new Map();
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!map.has(value)) {
      map.set(value, true);
      output.push(value);
    }
  }

  return output;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map = new Map();
  const permutations = removeDuplicates(generatePermutations(words));

  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    const lastIdx = s.length - permutation.length;

    for (let j = 0; j <= lastIdx; ) {
      const index = s.indexOf(permutation, j);

      if (index !== -1) {
        j = index + 1;
        if (map.has(permutation)) {
          map.get(permutation).push(index);
        } else {
          map.set(permutation, [index]);
        }
      } else {
        break;
      }
    }
  }

  const output = [];
  map.forEach((arr) => arr.forEach((i) => output.push(i)));

  return output;
};

let s =
  "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel";
let words = [
  "dhvf",
  "sind",
  "ffsl",
  "yekr",
  "zwzq",
  "kpeo",
  "cila",
  "tfty",
  "modg",
  "ztjg",
  "ybty",
  "heqg",
  "cpwo",
  "gdcj",
  "lnle",
  "sefg",
  "vimw",
  "bxcb",
];
let result = findSubstring(s, words);
console.log(result);

module.exports = findSubstring;
