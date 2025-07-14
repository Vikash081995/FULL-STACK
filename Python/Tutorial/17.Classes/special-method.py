class Book():
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __len__(self):
        return self.pages
        
b = Book("Python Rocks!", "Jose Portilla", 159)
print(b) 
# <__main__.Book object at 0x7f6b8c3c7f50>
str(b)
# Python Rocks! by Jose Portilla
len(b)
# 159