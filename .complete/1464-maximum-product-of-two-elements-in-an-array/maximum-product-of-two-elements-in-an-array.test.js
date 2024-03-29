const maxProduct = require("./maximum-product-of-two-elements-in-an-array");

describe("tests for leecode 1464 - maximum product of two elements in an array", () => {
  it("should return 0 for an array of [1, 1]", () => {
    let nums = [1, 1];
    let expected = 0;
    let result = maxProduct(nums);
    expect(result).toBe(expected);
  });
  it("should return 12 when two largest numbers are 4 & 5", () => {
    let nums = [3, 4, 5, 2];
    let expected = 12;
    let result = maxProduct(nums);
    expect(result).toBe(expected);
  });
  it("should return 36 when two largest numbers are 10 & 5", () => {
    let nums = [10, 2, 5, 2];
    let expected = 36;
    let result = maxProduct(nums);
    expect(result).toBe(expected);
  });
  it("should return 998,001 when two largest numbers are 1000 & 1000", () => {
    let nums = [
      414, 60, 900, 459, 126, 192, 801, 512, 465, 372, 864, 802, 369, 10, 940,
      579, 33, 119, 892, 765, 363, 630, 365, 593, 471, 167, 129, 391, 626, 908,
      54, 18, 220, 195, 758, 131, 992, 387, 102, 880, 535, 110, 471, 521, 7,
      589, 721, 739, 392, 811, 462, 24, 512, 944, 227, 703, 348, 631, 133, 490,
      192, 857, 804, 395, 255, 918, 199, 731, 749, 23, 973, 684, 368, 907, 581,
      316, 314, 357, 928, 933, 338, 588, 537, 798, 499, 544, 376, 239, 126, 13,
      991, 479, 341, 619, 716, 763, 139, 333, 77, 161, 83, 172, 927, 970, 850,
      960, 157, 748, 286, 231, 886, 952, 191, 231, 749, 413, 763, 561, 898, 710,
      852, 929, 555, 979, 586, 860, 19, 269, 98, 157, 201, 690, 62, 19, 781,
      689, 541, 74, 945, 416, 880, 142, 863, 500, 64, 52, 693, 666, 778, 181,
      81, 561, 704, 438, 999, 624, 511, 762, 786, 443, 641, 493, 777, 730, 754,
      961, 701, 616, 219, 375, 690, 713, 965, 684, 847, 607, 635, 404, 98, 885,
      578, 882, 125, 84, 203, 395, 256, 496, 325, 960, 974, 576, 140, 538, 746,
      765, 118, 619, 512, 952, 267, 369, 94, 602, 67, 775, 186, 826, 861, 2, 40,
      969, 703, 301, 597, 327, 787, 52, 249, 692, 162, 377, 944, 811, 454, 723,
      352, 361, 708, 272, 870, 695, 433, 830, 979, 692, 958, 252, 319, 215, 415,
      906, 308, 498, 507, 924, 972, 187, 814, 919, 719, 698, 691, 174, 862, 366,
      986, 532, 296, 866, 953, 443, 824, 249, 395, 400, 822, 201, 293, 488, 909,
      443, 378, 670, 436, 702, 540, 641, 472, 487, 1000, 105, 725, 40, 342, 232,
      523, 8, 910, 505, 621, 843, 945, 79, 431, 802, 118, 929, 574, 190, 807,
      32, 581, 594, 779, 946, 966, 727, 442, 421, 109, 804, 821, 563, 797, 320,
      861, 761, 439, 432, 742, 551, 727, 987, 621, 101, 776, 414, 401, 18, 237,
      801, 915, 440, 515, 339, 985, 436, 455, 430, 356, 782, 667, 619, 603, 523,
      434, 512, 514, 804, 455, 545, 122, 560, 543, 705, 714, 929, 983, 972, 294,
      594, 117, 671, 285, 400, 849, 679, 835, 795, 722, 282, 831, 996, 580, 620,
      592, 670, 650, 968, 462, 258, 873, 342, 287, 878, 140, 266, 714, 921, 674,
      211, 184, 93, 258, 988, 649, 270, 865, 993, 546, 623, 580, 391, 329, 253,
      817, 386, 827, 947, 397, 832, 288, 586, 269, 621, 930, 773, 334, 607, 114,
      850, 345, 296, 984, 756, 998, 818, 78, 681, 413, 108, 481, 702, 952, 966,
      15, 944, 680, 39, 40, 773, 14, 176, 209, 786, 590, 735, 131, 510, 561,
      616, 95, 689, 409, 493, 380, 323, 466, 605, 478, 745, 854, 271, 158, 758,
      661, 983, 158, 354, 411, 605, 490, 553, 514, 857, 377, 333, 879, 669, 168,
      983, 286, 383, 1000, 32, 585, 308, 531, 394, 534, 299, 462, 87, 864, 532,
      787, 676, 483, 53,
    ];
    let expected = 998001;
    let result = maxProduct(nums);
    expect(result).toBe(expected);
  });
});
