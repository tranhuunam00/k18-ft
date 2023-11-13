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
  BLUE: {
    code: "BLUE",
    name: "xanh da trời",
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
};
const CONST_APP = {
  STATUS_SELLER,
  PERSON,
  COLOR,
  SIZE
};

module.exports = CONST_APP;
