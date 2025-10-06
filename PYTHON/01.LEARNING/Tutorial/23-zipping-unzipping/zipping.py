f= open("test.txt","w")
f.write("this is a test")
f.close()

import zipfile

comp_file = zipfile.ZipFile("comp_file.zip","w")
comp_file.write("test.txt",compress_type=zipfile.ZIP_DEFLATED)
comp_file.close()