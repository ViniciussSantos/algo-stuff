package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func InvertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	return &TreeNode{
		Val:   root.Val,
		Left:  InvertTree(root.Right),
		Right: InvertTree(root.Left),
	}
}
