dic= {"k1":1, "k2":2, "k3":3, "k4":4, "k5":5}

for item in dic:
    print(item)  # prints keys
    # k1
    # k2
    # k3
    # k4
    # k5
    
for item in dic.values():
    print(item)  # prints values
    # 1
    # 2
    # 3
    # 4
    # 5
    
for item in dic.items():
    print(item)  # prints key-value pairs
    # ('k1', 1)
    # ('k2', 2)
    # ('k3', 3)
    # ('k4', 4)
    # ('k5', 5)
for key, value in dic.items():
    print(f"Key: {key}, Value: {value}")
    # Key: k1, Value: 1
    # Key: k2, Value: 2
    # Key: k3, Value: 3
    # Key: k4, Value: 4
    # Key: k5, Value: 5