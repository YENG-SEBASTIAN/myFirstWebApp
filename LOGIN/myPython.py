'''items = ['cake', 'cookie', 'bread']
total_item = items + ['biscuit', 'tart']
print(total_item)
print(len(total_item))


a = [2,3,6,5,4,8,7,8,1,0,10,15,42,13,17,95,89,98,]
a.sort()
print(a)

dict1 = {'color': 'pink', 'shape': 'square'}
dict2 = {'color': 'yellow', 'num': 98}
dict1.update(dict2)
print(dict1)
print("hello world")
print(dict2)'''

dic = {1:"kwame", 2:"kofi"}
a = dic.get(3,"yvonne")
print(a)
print(dic.get(2))
b = dic.pop(2)
print(dic.get(2))

dicl = {"a": "car", "b":"ball", "c":"cat", "d":"dogs"}
a = dicl.keys()
print(a)

b = dicl.values()
print(b)

c = dicl.items()
print(c)


import calender
yy = int(input("Enter a year: "))
mm = int (input("Enter a month: "))

#display the calender
print(calender.month(yy, mm))