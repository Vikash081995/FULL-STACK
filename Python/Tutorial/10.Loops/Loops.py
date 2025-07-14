# value = 1
# while value <=10:
#     print(value)
#     if value == 5:
#         break
#     value += 1

value = 1
while value <= 10:
    value += 1
    if value % 2 == 0:
        continue
    print(value)
else:
    print("value is now equal to", value)

# ==============================================
names = ["John", "Paul", "George", "Ringo"]
for name in names:
    print(name)

# output:
# John
# Paul
# George
# Ringo
# ==============================================
for x in "hello":
    print(x)
# h
# e
# l
# l
# o
# ==============================================
for name in names:
    if name == "John":
        print(name)
    else:
        print("Not John")
# John
# Not John
# Not John
# Not John
# ===============================================
for i in range(10):
    print(i)
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# ===============================================
for i in range(1, 11):
    print(i)
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# ===============================================
for i in range(1, 11, 2):
    print(i)
# 1
# 3
# 5
# 7
# 9
# =============================================
