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