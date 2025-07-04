text = "The agent's phone number is 408-555-1234. call Soon !"

import re 

pattern = "phone"
re.search(pattern,text)

pattern = 'NOT in Text'
match=re.search(pattern,text)

match.span()

match.start()

match.end()