import csv
import distance
from datetime import datetime
def busTime(address,busStop,distanceBetweenStops):
    x=0
    with open('/media/naman/New Volume/DISARM/Trails/BusStopCSV/ukhra.csv') as csvfile:
        ukhra = csv.reader(csvfile,delimiter=',')

        with open(address) as trail:
            trails = csv.reader(trail,delimiter=',')
            start='0.0'
            end='0.0'
            startStop=[]
            endStop=[]
            for row in ukhra:
                if row[0]=='stop_number':
                    continue
                for data in trails:
                    if data[0]=='Latitude':
                        continue
                    if distance.distance(float(row[1]),float(row[2]),float(data[0]),float(data[1]))<0.025 :
                        if start=='0.0':
                            start=data[2]
                            startStop=[row[1],row[2]]
                        elif end=='0.0':
                            end=data[2]
                            endStop=[row[1],row[2]]
                        if end!='0.0':
                            tdelta=datetime.strptime(end,'%H:%M:%S') - datetime.strptime(start,'%H:%M:%S')
                            start=end
                            distanceBetweenStops[x,x+1]=distance.distance(float(startStop[0]),float(startStop[1]),float(endStop[0]),float(endStop[1]))
                            x=x+1
                            startStop=endStop
                            end='0.0'
                            if busStop.get(row[0])==None:
                                busStop[row[0]]=[]
                                busStop[row[0]].append(tdelta.seconds)
                                break
                            else:
                                busStop[row[0]].append(tdelta.seconds)
                                break
                                    
    return busStop,distanceBetweenStops




busStopTime={}
distanceBetweenBusStops={}
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_1.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_4.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_8.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_16.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_22.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_18.csv',busStopTime,distanceBetweenBusStops)
busStopTime,distanceBetweenBusStops=busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_25.csv',busStopTime,distanceBetweenBusStops)
avgBusStopTime={}

for i in range(2,36):
    x=0
    for j in range(0,7):
        x=x+busStopTime[str(i)][j]
    x=x/7
    avgBusStopTime[i-1,i]=x

for i in range(2,36):
    print(i-1,'-',i,'-->',avgBusStopTime[i-1,i],'  Distance : ',distanceBetweenBusStops[i-1,i],'  Velocity : ',distanceBetweenBusStops[i-1,i]/(avgBusStopTime[i-1,i]*0.000277778))
        
