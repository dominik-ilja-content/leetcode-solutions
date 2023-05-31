const convert = require("./zigzag-conversion");

describe("tests for leecode 6 - zigzag conversion", () => {
  describe("should return correct result for different inputs", () => {
    it("should return passed string if rows are equal to one", () => {
      let word = "greet";
      let rows = 1;
      let expected = "greet";
      let result = convert(word, rows);
      expect(result).toBe(expected);
    });
    it("should work with rows of two", () => {
      let word = "greet";
      let rows = 2;
      let expected = "getre";
      let result = convert(word, rows);
      expect(result).toBe(expected);
    });
    it("should work with rows of three or more", () => {
      let word = "PAYPALISHIRING";
      let rows = 3;
      let expected = "PAHNAPLSIIGYIR";
      let result = convert(word, rows);
      expect(result).toBe(expected);

      word = "PAYPALISHIRING";
      rows = 4;
      expected = "PINALSIGYAHRPI";
      result = convert(word, rows);
      expect(result).toBe(expected);

      word =
        "mmmteuzrfltjlvswjfxwxgwxmkmlomyuxiiowkbgviepawhbxqigpmlygpbnqufekqmdhkgcmeeikvyvuwqopkdoeyotrvcdpnmlobjofmximtrjfumlkqfqkzmfaekjhntegkqmvctkmcvucorglifwlghwuflxnyrktgioiaeiipdwoxxdiyjiwaeyzjymprfjoxcdgvvqykbodbyvqeqxdegrogdbiulzdjmnqmovhhccjkywzvxrryybpxhohlrwqetndugeeyendvxoucwouptouxgesmqnmxrjytsrzefzsyhymdbfvqkxskwjexopskcxgcxkozxrtqozugjzarrrfhnnqonisabxmucxshfhnysczjpuewndgflsduwgweoqiynubmulrlyjyeeudeqvkkjhxpsrxvbuebapiqzneowiltsckyiexnkscbpmbxlolkalycbujvczedgiashgmhbwtmlrveifdxfognhmadvvcgqgjbnwqteixsqffssymlneynconalancrssystzcuizgupjcfblaftwquelfbysubxhdmcfngbbdsyfwcygghuznlhrmplcbhyeevpvqgeyrsjshdzmkzxcbqewdttqjqkxgwjwfxmxvzxcdgojqrfnydpnwgvfptftdgrgjshbptxbkedqxqpvydwfbkudqoadxjtbxekwmyfdlqxflohgqcwyulebygjbyxbrjhnlrswpcswzvhmouyqmwvyyxvdcjngfkhbjngbvdhpsvpsbgrgxlldjuytggyoxacqknlhbfsdwudmeaouvoudddmrvuldomotszscotxhqelzssqmnkvgxruhlpidwlnogevatbwwrggfhvwuomxlwlurlnfuasuscqlbaxjbpkuhkilyppmomppvsedfvjxcphsdlwobhfliuutsycccgnjyduoqjximxuwfoeuymundzmpdfpwnfrytxncpmjrlktrjcvjj";
      rows = 10;
      expected =
        "mxwlmomkcricdopeshsjmnbjepeijnzubpsqjgveysyhgdoqgxaphozrmfwokmyceytitejuoykdyxdxemvbxynemyypkgzxuwdumkhnobmzdefgbletcqebdmljhjkoqdrpyxkwurwyxdptgumdmsmoemlbxpvbfuqdmjlmjxibpggeerxrahvrntxjogqgqhyhedgqsmocuabcegnukxzwcbcgvdqnmysuwlgsrcsdqxgrtgqdbwcllpvvvsyywelosnnvowljmsoldjnpmktwgiggpkiovmjfncgxgxijvernhyoevxnzdxxzraxufylvpqisxvirxgwynyitfnyhbrztgdffjxwtmqencwdbvuodautzklaulqboewiyxudpteswxvibhkdcffmtmlliowfvqomcrhgxumfbegorssplirqsilkljalfcqscszfbfflhymtwcntsqfjygbhsmcgpjxsovslvwtwucpmdlujimfcruvxuiqndvkdouzekifowarqvgjcrluooxefjcqrihjsqlerptnousmovtsosgaycwnyekdjxyphdbxfhyjwqjnsdafurzegdbvrskpfdunmypnjzlmyexqmyppjmkgtfuidepyyddjxrdutrzvwxtfnfzdoydxasxlbhtgvefnrulsmczegzwwzdfbekddogrzynjblcbvmsqxiwhluupvstgxuwxcrjkmpbuqvonblqkcwwapymkbbzkvwncpjrqkkrhohcuejuvbcekcgwndifacpbudyueqxefvpvpkualljbvugbglqhodchrpwfnshyjhscuentvftmoahfkuqmokfqvlheizybdilyzqtwuysksoxnqnswwyebekiaymbhaxqlnjfbhghvvcqxxngtbdoqfbxhofhrxkludoxulrgfaklxpycwofyjllwewlqmgijouweotxznygeuylhmsacxgpbmwxqxymkgndthguiccfrj";
      result = convert(word, rows);
      expect(result).toBe(expected);
    });
  });
});
