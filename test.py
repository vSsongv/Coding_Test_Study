# list = [1,2,3,3,2,1,4,3]
# answer = []
#
# def gcd(m,n):
#     if m < n:
#         m, n = n, m
#     if m % n == 0:
#         return n
#     else:
#         return gcd(n, m%n)
#
# print(gcd(30,15))

# nums = [0,1,2,3,4,5]
# target = 3
#
# def lower_bound(nums, target):
#     left, right = 0, len(nums)
#
#     while left < right:  # left와 right가 만나는 지점이 target값 이상이 처음 나오는 위치
#         mid = int((right + left) / 2)
#
#         if nums[mid] < target:
#             left = mid + 1
#         else:
#             right = mid
#
#     return right
#
# print(lower_bound(nums,target))

# test = []
# def makeCase(n):
#     for i in range(n):
#     print(n)
#     if n == 1:
#         return test.append(1)
#     else:
#         test.append(n)
#         return test.append(makeCase(n-1))
# makeCase(5)
# print(test)