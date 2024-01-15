use std::usize;

pub fn climb_stairs(n: i32) -> i32 {
    let mut sequence = vec![1, 1];

    for i in 0..n - 1 {
        sequence.push(sequence[i as usize] + sequence[i as usize + 1])
    }

    sequence.pop().unwrap()
}

#[cfg(test)]
mod tests {
    use crate::climbing::climb_stairs;

    #[test]
    fn case_1() {
        assert_eq!(climb_stairs(2), 2);
    }
    #[test]

    fn case_2() {
        assert_eq!(climb_stairs(3), 3);
    }

    #[test]
    fn case_3() {
        assert_eq!(climb_stairs(4), 5);
    }

    #[test]
    fn case_4() {
        assert_eq!(climb_stairs(5), 8);
    }
    #[test]
    fn case_5() {
        assert_eq!(climb_stairs(6), 13);
    }
}
