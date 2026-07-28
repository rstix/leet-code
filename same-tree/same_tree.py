# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # base case: if both nodes are None, they are the same
        if p is None and q is None:
            return True
        # if one of the nodes is None (missing), they are not the same
        if not p or not q:
            return False
        # if the values of the current nodes are different, they are not the same
        if p.val != q.val:
            return False
        
        return self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)


# ---------- Test Case FALSE ----------

p = TreeNode(5,
    TreeNode(3,
        TreeNode(1),
        None),
    TreeNode(7))

q = TreeNode(5,
    TreeNode(3,
        TreeNode(1),
        TreeNode(4)),
    TreeNode(7))

solution = Solution()
print(solution.isSameTree(p, q))

# ---------- Test Case TRUE ----------

# Tree 1:
#     1
#    / \
#   2   3
p = TreeNode(
    1,
    TreeNode(2),
    TreeNode(3)
)

# Tree 2:
#     1
#    / \
#   2   3
q = TreeNode(
    1,
    TreeNode(2),
    TreeNode(3)
)

solution = Solution()
print(solution.isSameTree(p, q))