class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        lenNeedle = len(needle)
        lenHaystack = len(haystack)
        if lenHaystack < lenNeedle:
            return -1

        for k in range(lenHaystack):
            if lenHaystack - k < lenNeedle:
                return -1
            if haystack[k] == needle[0]:
                for i in range(lenNeedle):
                    if needle[i] != haystack[k+i]:
                        break
                    if i+1 == lenNeedle:
                        return k

        return -1


# Test cases
if __name__ == "__main__":
    tests = [
        ("sadbutsad", "sad", 0),
        ("leetcode", "leeto", -1),
        ("hello", "ll", 2),
        ("aaaaa", "bba", -1),
        ("mississippi", "issip", 4),
        ("mississippi", "issipi", -1),
        ("a", "a", 0),
    ]

    solution = Solution()
    for haystack, needle, expected in tests:
        result = solution.strStr(haystack, needle)
        print(f"haystack={haystack!r}, needle={needle!r} -> {result} | expected {expected}")
        assert result == expected

    print("All tests passed.")
