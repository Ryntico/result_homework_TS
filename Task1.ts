type MonthCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Discount = number

function isDiscount(discount: number): discount is Discount {
  return discount >= 0 && discount <= 100
}

type TotalPriceArgument = {
  price: number,
  discount: Discount,
  isInstallment: boolean,
  months: MonthCount
}

const totalPrice =
  ({
     price,
     discount,
     isInstallment,
     months,
   }: TotalPriceArgument): number | never => {
    if (!isDiscount(discount)) throw new Error('Такая скидка недопустима')
    if (!isInstallment) return price - (price * discount / 100)
    return (price - (price * discount / 100)) / months
  }

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
})


console.log(price) // 6250