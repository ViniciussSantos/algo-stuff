//trusty selection sort
pub fn sort_colors(nums: &mut Vec<i32>) {
    if nums.is_empty() {
        return;
    }
    for i in 0..nums.len() - 1 {
        let mut min = i;

        for j in (i + 1)..nums.len() {
            if nums[j] < nums[min] {
                min = j
            }
        }
        nums.swap(min, i)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sort_colors_basic() {
        let mut nums = vec![3, 1, 2];
        sort_colors(&mut nums);
        assert_eq!(nums, vec![1, 2, 3]);
    }

    #[test]
    fn test_sort_colors_already_sorted() {
        let mut nums = vec![1, 2, 3, 4, 5];
        sort_colors(&mut nums);
        assert_eq!(nums, vec![1, 2, 3, 4, 5]);
    }

    #[test]
    fn test_sort_colors_reverse_sorted() {
        let mut nums = vec![5, 4, 3, 2, 1];
        sort_colors(&mut nums);
        assert_eq!(nums, vec![1, 2, 3, 4, 5]);
    }

    #[test]
    fn test_sort_colors_with_duplicates() {
        let mut nums = vec![2, 1, 2, 3, 1, 4, 1];
        sort_colors(&mut nums);
        assert_eq!(nums, vec![1, 1, 1, 2, 2, 3, 4]);
    }

    #[test]
    fn test_sort_colors_empty_input() {
        let mut nums = vec![];
        sort_colors(&mut nums);
        assert_eq!(nums, vec![]);
    }

    #[test]
    fn test_sort_colors_large_input() {
        let mut nums = (1..=10000).rev().collect::<Vec<_>>();
        sort_colors(&mut nums);
        assert_eq!(nums, (1..=10000).collect::<Vec<_>>());
    }
}
