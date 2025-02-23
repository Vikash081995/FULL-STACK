#Dictonaries

band ={
    "vocals":"plant",
    "guitar":"page",
}

band2 = dict(vocals="plant",guitar="page")

print(band)
print(band2)
#{'vocals': 'plant', 'guitar': 'page'}
#{'vocals': 'plant', 'guitar': 'page'}
print(type(band)) #<class 'dict'>
print(type(band2)) #<class 'dict'>

#Accessing items
print(band['vocals']) #plant 
print(band.get('vocals')) #plant

#list all keys 
print(band.keys()) #dict_keys(['vocals', 'guitar'])

#list all values 
print(band.values()) #dict_values(['plant', 'page'])

#list of key/value pairs as tuples
print(band.items()) #dict_items([('vocals', 'plant'), ('guitar', 'page')])

# verify a key exists
print('guitar' in band) #True
print('bass' in band) #False

#change values 
band['vocals']= 'coverdale'
band.update({'bass':"JPJ"})
print(band)
#{'vocals': 'coverdale', 'guitar': 'page', 'bass': 'JPJ'}

#Remove items 
print(band.pop('bass')) #JPJ
print(band)

band['drums']= "Bonham"
print(band)
print(band.popitem()) #('drums', 'Bonham')  
print(band)