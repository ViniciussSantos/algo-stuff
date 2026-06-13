{
  description = "Polyglot LeetCode solutions (Go, Rust, TypeScript, Python)";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f:
        nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            just

            # Go
            go
            gopls

            # Rust
            cargo
            rustc
            clippy
            rustfmt
            rust-analyzer

            # TypeScript / Node
            nodejs_22
            pnpm

            # Python
            (python312.withPackages (ps: with ps; [ pytest ]))
            ruff
          ];
        };
      });
    };
}
