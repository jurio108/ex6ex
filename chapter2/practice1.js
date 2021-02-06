//curring function
const orderSet = burger => beverage => side => yn => count => {
    console.log("세트: " + burger + ", " + beverage + ", " + side + ", 케첩(" + beverage + "), 조각치킨(" + count + "개)");
};

let order = orderSet("치즈버거")("콜라");
order("프렌치후라이")("y")("2");

