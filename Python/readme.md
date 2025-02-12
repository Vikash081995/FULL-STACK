# Begin learning python

## Data Types in Python

Data types define the kind of data a variable can hold in Python. Python is dynamically typed, meaning you don’t need to declare variable types explicitly.

Here are the main built-in data types in Python:

• Numeric Types: int, float, complex
• Sequence Types: list, tuple, range
• Text Type: str
• Set Types: set, frozenset
• Mapping Type: dict
• Boolean Type: bool
• Binary Types: bytes, bytearray, memoryview
• None Type: NoneType

### Under-the-Hood Explanation

- Python assigns types dynamically, meaning a variable’s type is determined when it gets a value. The type() function helps check a variable’s type.
  Python uses an internal memory management system to optimize space for frequently used data types.

  1.Numeric Type

```python
# Integer
x = 10
print(type(x))  # <class 'int'>

# Float
y = 3.14
print(type(y))  # <class 'float'>

# Complex Number
z = 2 + 3j
print(type(z))  # <class 'complex'>
```

2.String Type

```python
text = "Hello, Python!"
print(type(text))  # <class 'str'>
```

3.Sequence Types

```python
# List (Mutable)
my_list = [1, 2, 3, "Python"]
print(type(my_list))  # <class 'list'>

# Tuple (Immutable)
my_tuple = (10, 20, "AI")
print(type(my_tuple))  # <class 'tuple'>

# Range
r = range(5)
print(type(r))  # <class 'range'>
```

4.Set Types

```python
# Set (Mutable)
my_set = {1, 2, 3, "Python"}
print(type(my_set))  # <class 'set'>

# Frozen Set (Immutable)
f_set = frozenset([1, 2, 3, 4])
print(type(f_set))  # <class 'frozenset'>
```

5.Mapping Type

```python
# Dictionary (Key-Value Pair)
my_dict = {"name": "Alice", "age": 25}
print(type(my_dict))  # <class 'dict'>
```

6.Boolean Type

```python
is_python_fun = True
print(type(is_python_fun))  # <class 'bool'>
```

7.Binary Types

```python
# Bytes
b = b"Hello"
print(type(b))  # <class 'bytes'>

# Bytearray
ba = bytearray(5)
print(type(ba))  # <class 'bytearray'>

# Memoryview
mv = memoryview(b"Hello")
print(type(mv))  # <class 'memoryview'>
```

8.None Type

```python
nothing = None
print(type(nothing))  # <class 'NoneType'>
```
