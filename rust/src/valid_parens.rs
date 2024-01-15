fn is_valid(s: String) -> bool {
    let mut stack = vec![];

    if s.len() == 1 {
        return false;
    }

    for c in s.chars() {
        if c == '{' || c == '(' || c == '[' {
            stack.push(c)
        }

        if c == '}' && stack.pop() != Some('{') {
            return false;
        }

        if c == ')' && stack.pop() != Some('(') {
            return false;
        }

        if c == ']' && stack.pop() != Some('[') {
            return false;
        }
    }

    if !stack.is_empty() {
        return false;
    };
    true
}

#[cfg(test)]
mod tests {
    use crate::valid_parens::is_valid;

    #[test]
    fn case_1() {
        assert!(is_valid("()".to_string()));
    }

    #[test]
    fn case_2() {
        assert!(is_valid("()[]{}".to_string()));
    }

    #[test]
    fn case_3() {
        assert!(!is_valid("(]".to_string()));
    }

    #[test]
    fn case_4() {
        assert!(!is_valid("((".to_string()))
    }
}
