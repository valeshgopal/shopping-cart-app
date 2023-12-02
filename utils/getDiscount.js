export const getDiscount = (price, discountPercentage) => {
    const discount = (discountPercentage * price) / 100
    return discount.toFixed(2)
}