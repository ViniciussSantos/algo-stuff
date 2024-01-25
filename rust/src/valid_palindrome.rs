fn is_palindrome(s: String) -> bool {
    let clean_string = s.replace(|c: char| !c.is_alphanumeric(), "").to_lowercase();

    if clean_string.is_empty() {
        return true;
    }

    let reversed_clean_string = clean_string.chars().rev().collect::<String>();

    if clean_string == reversed_clean_string {
        return true;
    }

    false
}

#[cfg(test)]
mod tests {
    use crate::valid_palindrome::is_palindrome;

    #[test]
    fn case_1() {
        assert!(is_palindrome("A man, a plan, a canal: Panama".to_string()));
    }

    #[test]
    fn case_2() {
        assert!(!is_palindrome("race a car".to_string()));
    }

    #[test]
    fn case_3() {
        assert!(is_palindrome(" ".to_string()));
    }
}
