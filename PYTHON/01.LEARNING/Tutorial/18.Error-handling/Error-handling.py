try:
    result = 10 + "10"
except:
    print("Hey it looks like you have an error")
else:
    print("Add went well")
    print(result)


# ==============================
try:
    f = open("test.txt", "w")
    f.write("Write a test line")
except TypeError:
    print("this is a type error")
except OSError:
    print("this is an OS error")
finally:
    print("I always run")


# ===============================
def ask_for_int():
    try:
        result = int(input("Please enter a number:"))
    except:
        print("Whoop! That is not a number")
    finally:
        print("End of try/except/finally")


ask_for_int()

# ===============================

try:
    for i in ["a", "b", "c"]:
        print(i**2)
except:
    print("Something went wrong")
finally:
    print("The 'try except' is finished")

# ===============================
try:
    x = 5
    y = 0
    z = x / y
except:
    print("Something went wrong")
finally:
    print("The 'try except' is finished")


# ==============================
def ask():
    while True:
        try:
            n = int(input("enter a number"))
        except:
            print("please enter a number")
            continue
        else:
            break


ask()
