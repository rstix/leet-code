from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        return self.compareLR(root.left, root.right)

    def compareLR(self,left: Optional[TreeNode],right: Optional[TreeNode])-> bool:
        if left is None and right is None:
            return True
        if not left or not right:
            return False
        if left.val != right.val:
            return False
        
        return self.compareLR(left.left, right.right) and self.compareLR(left.right,right.left)


# ---------- Test Case ----------
# True
p = TreeNode(
    2,
    TreeNode(
        3,
        TreeNode(4),
        TreeNode(5)
    ),
    TreeNode(
        3,
        TreeNode(5),
        TreeNode(4)
    )
)

# False
# p = TreeNode(5,
#     TreeNode(3,
#         TreeNode(1),
#         None),
#     TreeNode(3))

# False
# p = TreeNode(
#     2,
#     TreeNode(
#         3,
#         TreeNode(4),
#         TreeNode(5)
#     ),
#     TreeNode(
#         3,
#         None,
#         TreeNode(4)
#     )
# )

solution = Solution()
print(solution.isSymmetric(p))
