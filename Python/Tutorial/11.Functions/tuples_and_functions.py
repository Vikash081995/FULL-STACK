stock_prices =[("APPL", 200), ("GOOG", 400), ("MSFT", 100)]

for item in stock_prices:
    print(item)
    
# ('APPL', 200)
# ('GOOG', 400)
# ('MSFT', 100)

for tickers,prices in stock_prices:
    print(tickers)
    
# APPL
# GOOG
# MSFT

Work_hours =[("abby,100"),("bob,300"),("cindy,400")]

def employee_check(work_hours):
    current_max=0
    employee_of_month=""
    for employee,hours in work_hours:
        if hours > current_max:
            current_max=hours
            employee_of_month=employee
    return (employee_of_month, current_max)

print(employee_check(Work_hours))