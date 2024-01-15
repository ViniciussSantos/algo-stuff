fn max_profit(prices: Vec<i32>) -> i32 {
    let mut left = 0;
    let mut right = 1;
    let mut max_price = 0;

    while right < prices.len() {
        if prices[right] < prices[left] {
            left = right;
        }

        if prices[right] - prices[left] > max_price {
            max_price = prices[right] - prices[left];
        }
        right += 1;
    }

    max_price
}

#[cfg(test)]
mod tests {
    use crate::buy_stock::max_profit;

    #[test]
    fn case_1() {
        assert_eq!(max_profit([7, 1, 5, 3, 6, 4].to_vec()), 5);
    }

    #[test]
    fn case_2() {
        assert_eq!(max_profit([7, 6, 4, 3, 1].to_vec()), 0)
    }
    #[test]
    fn case_3() {
        assert_eq!(max_profit([2, 4, 1].to_vec()), 2)
    }
}
