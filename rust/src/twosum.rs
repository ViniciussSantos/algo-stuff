use std::{collections::hash_map, convert::TryInto};

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: hash_map::HashMap<i32, i32> = hash_map::HashMap::new();
    for i in 0..nums.len() {
        let diff = target - nums[i];

        if map.contains_key(&diff) {
            return vec![map[&diff], i.try_into().unwrap()];
        }

        map.insert(nums[i], i.try_into().unwrap());
    }
    vec![-1, -1]
}

#[cfg(test)]
mod tests {
    use crate::twosum::two_sum;

    #[test]
    fn case_1() {
        assert_eq!(two_sum(vec![2, 7, 11, 15], 9), [0, 1]);
    }

    #[test]
    fn case_2() {
        assert_eq!(two_sum(vec![3, 2, 4], 6), [1, 2]);
    }

    #[test]
    fn case_3() {
        assert_eq!(two_sum(vec![3, 3], 6), [0, 1]);
    }
}
