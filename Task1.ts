// type BuildRange<End extends number, Acc extends number[] = []> =
//   Acc['length'] extends End
//     ? [...Acc, End][number]
//     : BuildRange<End, [...Acc, Acc['length']]>

// type Percent<T extends number = 1> =
//   T extends 100 ? 100
//     : T extends number
//       ? T extends 0 ? never : // Exclude 0
//         T extends 101 ? never : // Exclude > 100
//           T
//       : Percent<T extends number ? T + 1 : 1>;


type BuildRange<End extends number, Acc extends number[] = []> =
  Acc['length'] extends End
    ? [...Acc, End][number]
    : BuildRange<End, [...Acc, Acc['length']]>

// type MonthCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type MonthCount = Exclude<BuildRange<12>, BuildRange<0>>

// с генератором типа нет необходимости в защитнике
// function isDiscount(discount: number): discount is Discount {
//   return discount >= 0 && discount <= 100
// }
type Discount = BuildRange<100>


type TotalPriceArgument = {
  price: number,
  discount?: Discount,
  isInstallment: boolean,
  months?: MonthCount
}

const totalPrice =
  ({
     price,
     discount,
     isInstallment,
     months,
     // }: TotalPriceArgument): number | never => {
   }: TotalPriceArgument): number => {
    // if (!isDiscount(discount)) throw new Error('Такая скидка недопустима')
    if (isInstallment && months && discount) return (price - (price * discount / 100)) / months
    return price
  }

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
})


console.log(price) // 6250