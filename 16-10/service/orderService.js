const { default: mongoose } = require("mongoose");
const ProductSizeColor = require("../models/productSizeColor.model");
const orderRepo = require("../repositories/order.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");
const ProductRepo = require("../repositories/product.repo");
const ProductColorImgRepo = require("../repositories/productColorImg.repo");
const HelperApp = require("../util/helper");
const CONST_APP = require("../constants/constant");
const OrderRepo = require("../repositories/order.repo");
const OrderProductRepo = require("../repositories/orderProduct.repo");

const createOrder = async (data, customer) => {
  const {
    name,
    email,
    phoneNumber,
    tinhId,
    huyenId,
    address,
    note,
    typePayment,
    orderProduct,
  } = data;

  // 1. verify data  - 1 tài liệu khi đi làm  - 2 model cũ đã viết sẵn
  if (
    !name ||
    !email ||
    !phoneNumber ||
    !tinhId ||
    !huyenId ||
    !address ||
    !note ||
    !typePayment
  ) {
    return {
      error: true,
      code: 400,
      message: "Không đủ điều kiện",
    };
  }
  // 2. gặp bất cứ id - code là phải lấy lại từ db
  // check email|phoneNumber - regex
  // check tinhId, huyenId  - checksau
  if (!CONST_APP.TypePaymentEnum[typePayment]) {
    return {
      error: true,
      code: 400,
      message: "Type payment không đúng",
    };
  }
  const ids = orderProduct.map((p, index) => p.productSizeColorId);
  console.log("orderProduct", orderProduct);

  const allProductsSizeColor2 = await ProductSizeColorRepo.getAllByCondition({
    _id: { $in: ids },
  });
  // 2 phần tử giống nhau  :    [2,4] :2 [2,2]: 1
  // 1,2,3,4,5,6,7,8
  // [1,2] : [1,2]
  // [3,3,3] :[3]
  // [10,1,2]: [1,2]

  if (allProductsSizeColor2.length != ids.length) {
    return {
      error: true,
      code: 400,
      message: "Truyền sai productid hoặc truyền giống nhau",
    };
  }

  // khi nào dùng promise.all
  // dùng cho các hàm bất đồng bộ mất thời gian
  // các hàm này chả liên quan đến nhau

  //9:54 giá 1290 k     anh nhập thông tin hết 5 phút : 9:59 (1290k)
  // 9:56 giá shop 1500k
  // 2.giá thực tế phải tính tiền là bao nhiêu ?
  //  giá phải bằng giá trong database : 1500k
  // 3. nhưng khách hàng mong muoosn thành toán với giá 1290000k
  // bắt buộc phải truyền price
  // 4. check giá hiện tại có bằng giá truyền lên hay không?
  if (
    orderProduct.some((p) => {
      const dbProduct = allProductsSizeColor2.find(
        (db) => db._id.toString() == p.productSizeColorId
      );
      return dbProduct.price != p.price;
    })
  ) {
    return {
      error: true,
      code: 400,
      message: "Truyền sai giá",
    };
  }

  const newOrder = await OrderRepo.createOrder({
    name,
    email,
    phoneNumber,
    tinhId,
    huyenId,
    address,
    note,
    typePayment,
    totalPrice: orderProduct.reduce((prev, curr) => {
      prev = +curr.price * +curr.amount + prev;
      return prev;
    }, 0),
  });
  await Promise.all(
    orderProduct.map((p) =>
      OrderProductRepo.createOrderProduct({
        productSizeColorId: p.productSizeColorId,
        price: p.price,
        amount: p.amount,
        orderId: newOrder._id,
      })
    )
  );
  return {
    data: true,
  };
};
const _checkProductSizeColorId = async (ProductSizeColorId) => {
  const data = await ProductSizeColorRepo.getProductSizeColorById(
    ProductSizeColorId
  );
  return !!data;
};
const orderService = {
  createOrder,
};
module.exports = orderService;
