import distance
import csv
with open('/media/naman/New Volume/DISARM/GPSLOG00.csv') as log:
    logData=csv.reader(log,delimiter=',')
    for row in logData:
        if row[0]=='Time':
            continue
        if distance.distance(float(row[2].replace('N',''))/100,float(row[3].replace('E',''))/100,23.564378,87.283299)<26.5:
            print('Hi')
