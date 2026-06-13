# Show available recipes
default:
    @just --list

# --- Test ---

# Run every language's test suite
test: test-rust test-go test-ts test-py

# Rust (cargo)
test-rust:
    cd rust && cargo test

# Go
test-go:
    cd golang && go test ./...

# TypeScript (vitest, single run)
test-ts:
    cd typescript && pnpm exec vitest run

# Python (pytest)
test-py:
    cd python && pytest -q

# --- Scaffold a new solution + test stub ---

# Dispatcher: `just new py two_sum`  (lang = rust | go | ts | py)
new lang name:
    @just new-{{lang}} {{name}}

# Rust: snake_case name, e.g. `just new-rust longest_substring`
new-rust name:
    #!/usr/bin/env bash
    set -euo pipefail
    src="rust/src/{{name}}.rs"
    if [[ -e "$src" ]]; then echo "$src already exists" >&2; exit 1; fi
    cat > "$src" <<'EOF'
    fn {{name}}() {
        todo!()
    }

    #[cfg(test)]
    mod tests {
        use crate::{{name}}::*;

        #[test]
        fn case_1() {
            // assert_eq!({{name}}(...), ...);
        }
    }
    EOF
    grep -qxF "mod {{name}};" rust/src/lib.rs || echo "mod {{name}};" >> rust/src/lib.rs
    echo "Created $src and registered the module in rust/src/lib.rs"

# Go: snake_case name, e.g. `just new-go two_sum`
new-go name:
    #!/usr/bin/env bash
    set -euo pipefail
    src="golang/src/{{name}}.go"
    test="golang/src/{{name}}_test.go"
    if [[ -e "$src" || -e "$test" ]]; then echo "file already exists" >&2; exit 1; fi
    camel="$(echo "{{name}}" | sed -E 's/(^|_)([a-z])/\U\2/g')"
    cat > "$src" <<EOF
    package main

    func ${camel}() {
    }
    EOF
    cat > "$test" <<EOF
    package main

    import "testing"

    func Test${camel}(t *testing.T) {
    }
    EOF
    echo "Created $src and $test"

# TypeScript: camelCase name, e.g. `just new-ts twoSum`
new-ts name:
    #!/usr/bin/env bash
    set -euo pipefail
    src="typescript/src/{{name}}.ts"
    spec="typescript/src/{{name}}.spec.ts"
    if [[ -e "$src" || -e "$spec" ]]; then echo "file already exists" >&2; exit 1; fi
    cat > "$src" <<'EOF'
    export function {{name}}() {
    }
    EOF
    cat > "$spec" <<'EOF'
    import { describe, expect, it } from "vitest";
    import { {{name}} } from "./{{name}}";

    describe("{{name}}", () => {
      it("case 1", () => {
        // expect({{name}}(...)).toEqual(...);
      });
    });
    EOF
    echo "Created $src and $spec"

# Python: snake_case name, e.g. `just new-py two_sum`
new-py name:
    #!/usr/bin/env bash
    set -euo pipefail
    src="python/{{name}}.py"
    test="python/test_{{name}}.py"
    if [[ -e "$src" || -e "$test" ]]; then echo "file already exists" >&2; exit 1; fi
    cat > "$src" <<'EOF'
    def {{name}}():
        raise NotImplementedError
    EOF
    cat > "$test" <<'EOF'
    from {{name}} import {{name}}


    def test_case_1():
        # assert {{name}}(...) == ...
        ...
    EOF
    echo "Created $src and $test"
