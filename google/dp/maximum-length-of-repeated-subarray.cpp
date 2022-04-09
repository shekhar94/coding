// Recursive Approach: TLE
class Solution {
  int ans = 0;
  public:
    int lcs(vector < int > & s1, vector < int > & s2, int i, int j) {
      if (i < 0 || j < 0) return 0;

      int p1 = 0;
      if (s1[i] == s2[j]) {
        p1 = 1 + lcs(s1, s2, i - 1, j - 1);
        ans = max(ans, p1);
      }
      lcs(s1, s2, i - 1, j);
      lcs(s1, s2, i, j - 1);
      return p1;
    }
  public:
    int findLength(vector < int > & nums1, vector < int > & nums2) {
      int t = lcs(nums1, nums2, nums1.size() - 1, nums2.size() - 1);
      return ans;
    }
};


// Memoized Recursion: Run time issues
class Solution {
  int ans = 0;
  public:
    int lcsMemo(vector < int > & s1, vector < int > & s2, int i, int j,  vector < vector < int >> & dp) {
      if (i - 1 < 0 || j - 1 < 0) return 0;
      if (dp[i][j] != -1) return dp[i][j];

      int p1 = 0;
      if (s1[i - 1] == s2[j - 1]) {
        p1 = 1 + lcsMemo(s1, s2, i - 1, j - 1, dp);
        ans = max(ans, p1);
      }
      lcsMemo(s1, s2, i - 1, j, dp);
      lcsMemo(s1, s2, i, j - 1, dp);
      return dp[i][j] = p1;
    }
  public:
    int findLength(vector < int > & nums1, vector < int > & nums2) {
        int m = nums1.size(), n = nums2.size();
        vector < vector < int >> dp(n + 1, vector < int > (m + 1, -1));
      lcsMemo(nums1, nums2, m, n, dp);
      return ans;
    }
};