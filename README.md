# algo-stuff

LeetCode solutions in Go, Rust, TypeScript, and Python.

## Toolchains

Everything is pinned in `flake.nix`:

```sh
nix develop 
```

## Tasks

All tasks run through just from the repo root:

```sh
just                 # list recipes
just test            # run every language's tests
just test-py         # run one language (test-rust | test-go | test-ts | test-py)
```

## Adding a solution

Scaffolds the solution file + a test stub (and registers the Rust module in
`lib.rs` automatically):

```sh
just new py two_sum          # python/two_sum.py + python/test_two_sum.py
just new rust two_sum        # rust/src/two_sum.rs (+ mod line in lib.rs)
just new go two_sum          # golang/src/two_sum.go + ..._test.go
just new ts twoSum           # typescript/src/twoSum.ts + twoSum.spec.ts
```
