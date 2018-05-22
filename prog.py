import csv
import math
b = [[0 for i in range(0,30)] for j in range(0,100)]
c = [[0 for i in range(0,30)] for j in range(0,100)]
sd = [0 for i in range(0,30)]
def travelTime(address):
	count = 0
	a = []
	with open(address) as file:
		reader = csv.reader(file)
		for row in reader:
			count = count + 1
			if(count >=8):
				a.append(float(row[5]))
	return a	
b[0] = travelTime('C:\Users\user\Documents\DISARM\BusyHours\up_12.csv')
b[1] = travelTime('C:\Users\user\Documents\DISARM\BusyHours\up_13.csv')
b[2] = travelTime('C:\Users\user\Documents\DISARM\BusyHours\up_14.csv')
b[3] = travelTime('C:\Users\user\Documents\DISARM\BusyHours\up_15.csv')
for i in range(0,4):
	c[i][0] = b[i][0]
	for j  in range(1,30):
		c[i][j] = c[i][j-1] + b[i][j] 
for j in range(0,30):
	c[4][j] = (c[0][j] + c[1][j] + c[2][j] + c[3][j])/4
print(c[0])
print(c[1])
print(c[2])
print(c[3])
print(c[4])
for i in range(0,30):
	sd[i] = math.sqrt(((pow((c[0][i]-c[4][i]),2) + pow((c[1][i]-c[4][i]),2) + pow((c[2][i]-c[4][i]),2) + pow((c[3][i]-c[4][i]),2))/4))
for i in sd:
	print(i)



