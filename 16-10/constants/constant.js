const STATUS_SELLER = {
  notVerify: 1,
  active: 2,
  ban: 3,
};
const PERSON = {
  seller: "seller",
  customer: "customer",
};

const COLOR = {
  GREEN: {
    code: "GREEN",
    name: "xanh lá cây",
  },
  VIOLET:{
    code: "VIOLET",
    name: "tím",
  },
  BLUE: {
    code: "BLUE",
    name: "xanh da trời",
  },
  BLACK: {
    code: "BLACK",
    name: "đen",
  },
  YELLOW: {
    code: "YELLOW",
    name: "vàng",
  },
  DEFAULT: {
    code: "DEFAULT",
    name: "mặc định",
  },
};

const SIZE = {
  M: {
    code: "M",
    name: "L",
  },
  L: {
    code: "L",
    name: "L",
  },
  DEFAULT: {
    code: "DEFAULT",
    name: "mặc định",
  },
  S: {
    code: "S",
    name: "S",
  },
  29: {
    code: "29",
    name: "29",
  },
};
const CONST_APP = {
  STATUS_SELLER,
  PERSON,
  COLOR,
  SIZE,
};

module.exports = CONST_APP;
