motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
print(motorcycles)
# ['honda', 'yamaha', 'suzuki', 'ducati']
motorcycles[0] = 'ducati'
print(motorcycles)  
# ['ducati', 'yamaha', 'suzuki', 'ducati']
motorcycles.append('ducati')
print(motorcycles)
# ['ducati', 'yamaha', 'suzuki', 'ducati', 'ducati']
motorcycles.insert(0, 'honda')
print(motorcycles)
# ['honda', 'ducati', 'yamaha', 'suzuki', 'ducati', 'ducati']

motors=[]
motors.append('honda')
motors.append('yamaha')
motors.append('suzuki')
motors.append('ducati')
print(motors)
# ['honda', 'yamaha', 'suzuki', 'ducati']
last_used =motors.pop()
print(motors)
# ['honda', 'yamaha', 'suzuki']
print(f"The last motorcycle I owned was a {last_used.title()}.")
# The last motorcycle I owned was a Ducati.