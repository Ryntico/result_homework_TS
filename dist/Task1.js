"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDiscount(discount) {
    return discount >= 0 && discount <= 100;
}
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    if (!isDiscount(discount))
        throw new Error('Такая скидка недопустима');
    if (!isInstallment)
        return price - (price * discount / 100);
    return (price - (price * discount / 100)) / months;
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
