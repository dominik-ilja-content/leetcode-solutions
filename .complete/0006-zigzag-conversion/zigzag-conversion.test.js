const convert = require("./zigzag-conversion");

describe("tests for leecode 6 - zigzag conversion", () => {
  it("should return passed string if rows are equal to or less than one", () => {
    const word = "greet";
    expect(convert(word, -100)).toBe(word);
    expect(convert(word, 0)).toBe(word);
    expect(convert(word, 1)).toBe(word);
  });
  it("should work with rows of two", () => {
    expect(convert("greet", 2)).toBe("getre");
  });
  it("should work with rows of three or more", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");

    const word =
      "mmmteuzrfltjlvswjfxwxgwxmkmlomyuxiiowkbgviepawhbxqigpmlygpbnqufekqmdhkgcmeeikvyvuwqopkdoeyotrvcdpnmlobjofmximtrjfumlkqfqkzmfaekjhntegkqmvctkmcvucorglifwlghwuflxnyrktgioiaeiipdwoxxdiyjiwaeyzjymprfjoxcdgvvqykbodbyvqeqxdegrogdbiulzdjmnqmovhhccjkywzvxrryybpxhohlrwqetndugeeyendvxoucwouptouxgesmqnmxrjytsrzefzsyhymdbfvqkxskwjexopskcxgcxkozxrtqozugjzarrrfhnnqonisabxmucxshfhnysczjpuewndgflsduwgweoqiynubmulrlyjyeeudeqvkkjhxpsrxvbuebapiqzneowiltsckyiexnkscbpmbxlolkalycbujvczedgiashgmhbwtmlrveifdxfognhmadvvcgqgjbnwqteixsqffssymlneynconalancrssystzcuizgupjcfblaftwquelfbysubxhdmcfngbbdsyfwcygghuznlhrmplcbhyeevpvqgeyrsjshdzmkzxcbqewdttqjqkxgwjwfxmxvzxcdgojqrfnydpnwgvfptftdgrgjshbptxbkedqxqpvydwfbkudqoadxjtbxekwmyfdlqxflohgqcwyulebygjbyxbrjhnlrswpcswzvhmouyqmwvyyxvdcjngfkhbjngbvdhpsvpsbgrgxlldjuytggyoxacqknlhbfsdwudmeaouvoudddmrvuldomotszscotxhqelzssqmnkvgxruhlpidwlnogevatbwwrggfhvwuomxlwlurlnfuasuscqlbaxjbpkuhkilyppmomppvsedfvjxcphsdlwobhfliuutsycccgnjyduoqjximxuwfoeuymundzmpdfpwnfrytxncpmjrlktrjcvjj";
    const expected =
      "mxwlmomkcricdopeshsjmnbjepeijnzubpsqjgveysyhgdoqgxaphozrmfwokmyceytitejuoykdyxdxemvbxynemyypkgzxuwdumkhnobmzdefgbletcqebdmljhjkoqdrpyxkwurwyxdptgumdmsmoemlbxpvbfuqdmjlmjxibpggeerxrahvrntxjogqgqhyhedgqsmocuabcegnukxzwcbcgvdqnmysuwlgsrcsdqxgrtgqdbwcllpvvvsyywelosnnvowljmsoldjnpmktwgiggpkiovmjfncgxgxijvernhyoevxnzdxxzraxufylvpqisxvirxgwynyitfnyhbrztgdffjxwtmqencwdbvuodautzklaulqboewiyxudpteswxvibhkdcffmtmlliowfvqomcrhgxumfbegorssplirqsilkljalfcqscszfbfflhymtwcntsqfjygbhsmcgpjxsovslvwtwucpmdlujimfcruvxuiqndvkdouzekifowarqvgjcrluooxefjcqrihjsqlerptnousmovtsosgaycwnyekdjxyphdbxfhyjwqjnsdafurzegdbvrskpfdunmypnjzlmyexqmyppjmkgtfuidepyyddjxrdutrzvwxtfnfzdoydxasxlbhtgvefnrulsmczegzwwzdfbekddogrzynjblcbvmsqxiwhluupvstgxuwxcrjkmpbuqvonblqkcwwapymkbbzkvwncpjrqkkrhohcuejuvbcekcgwndifacpbudyueqxefvpvpkualljbvugbglqhodchrpwfnshyjhscuentvftmoahfkuqmokfqvlheizybdilyzqtwuysksoxnqnswwyebekiaymbhaxqlnjfbhghvvcqxxngtbdoqfbxhofhrxkludoxulrgfaklxpycwofyjllwewlqmgijouweotxznygeuylhmsacxgpbmwxqxymkgndthguiccfrj";

    console.log(convert(word, 10));
    expect(convert(word, 10)).toBe(expected);
  });
});
