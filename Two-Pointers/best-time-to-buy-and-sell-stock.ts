// function maxProfit(prices: number[]): number {
//   let maxProfit: number = 0
//   for (let i: number = 0; i < prices.length; i++) {
//     for (let j: number = i + 1; j < prices.length; j++) {
//       let diff: number = prices[j] - prices[i]
//       maxProfit = Math.max(maxProfit, diff)
//     }
//   }
//   return maxProfit
// } // this solution get time limit :)

function maxProfit(prices: number[]): number {
    let [max, l, r] = [0, 0, 1]
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            max = Math.max(profit, max)
            r++
        } else {
            l = r // because now r is the lowest price and less than l, so we do l=r and then shift r :)
            r++
        }
    }
    return max
}
