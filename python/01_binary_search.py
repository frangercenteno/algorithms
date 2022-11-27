def search_binary(list, elem):
  low = 0
  high = len(list) - 1
  mid = 0

  while low <= high:

    mid=(low+high) // 2

    if list[mid] == elem:
      return mid
    
    if list[mid] > elem:
      high = mid - 1
    
    else:
      low = mid + 1

  return -1;

my_list=[1, 3, 5, 7, 9]

print(search_binary(my_list, 3))
print(search_binary(my_list, -1))