def display(row1,row2,row3):
    print(row1)
    print(row2)
    print(row3)
    
example_rows =[1,2,3]

row1=["","",""]
row2=["","",""]
row3=["","",""]

display(example_rows,example_rows,example_rows)
display(row1,row2,row3)

row2[1]="X"
display(row1,row2,row3)