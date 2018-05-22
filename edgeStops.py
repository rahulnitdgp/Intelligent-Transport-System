import csv
import config
from datetime import datetime
import distance

def stopBtStation(path):
    startbusStop=[]
    endBusStop=[]
    flag=0
    startLat=''
    startLong=''
    x=0
    #with open('/media/naman/New Volume/DISARM/Trails/BusStopCSV/azone.csv') as csvfile:
    with open('X:\\DISARM\\Trails\\BusStopCSV\\azone.csv') as csvfile:
        ukhra =csv.reader(csvfile,delimiter=',')


        with open(path) as testFile:
            testData=csv.reader(testFile,delimiter=',')

            for stop in ukhra:
                if stop[0]=='stop_number':
                    continue
                for test in testData:
                    if test[0]=='latitude' or test[0]=='Latitude':
                        continue
                    if x==0:
                        x=x+1
                        startLat=test[0]
                        startLong=test[1]
                    '''if distance.distance(float(test[0]),float(test[1]),23.5644366667,87.2822583333)<0.015:
                        startLat=test[0]
                        startLong=test[1]'''
                    if test[0]=='latitude' or test[0]=='Latitude':
                        continue
                    if distance.distance(float(stop[1]),float(stop[2]),float(test[0]),float(test[1]))<config.vertexError and flag==0:
                        flag=1
                        startbusStop.append([test[0],test[1]])
                    if distance.distance(float(stop[1]),float(stop[2]),float(test[0]),float(test[1]))>config.vertexError and flag==1:
                        flag=0
                        endBusStop.append([test[0],test[1]])
                        break
    return startbusStop,endBusStop,startLat,startLong

def NumberofStop(path,startStops,endStops,startLat,startLong):
    with open(path) as testFile:
        test = csv.reader(testFile,delimiter=',')
        flag=0
        lastLat='0'
        lastLong='0'
        count=2
        xStartLat='0'
        xStartLong='0'
        x=0
        flag1=0
        flag2=0
        arr=[]
        edge={}
        for row in test:
            if row[0]=='latitude' or row[0]=='Latitude':
                continue
            if row[0]==startLat and row[1]==startLong:
                flag=1
                lastLat=row[0]
                lastLong=row[1]
                continue           
            if flag==0:
                continue
            if startStops.count([row[0],row[1]])==1:
                if count>=2:
                    arr.append(count)
                edge[x,x+1]=arr.copy()
                print(x,' ',x+1,' ',arr)
                x=x+1
                #print(arr)
                arr.clear()
                count=1
                flag2=1
                flag1=0
                continue
            if flag2==1 and endStops.count([row[0],row[1]])==1:
                flag2=0
                flag1=0
                lastLat=row[0]
                lastLong=row[1]
                continue
            elif flag2==1:
                continue
            if lastLat==row[0] and lastLong==row[1] and flag1==0:
                count=count+1
                flag1=1
                xStartLat=row[0]
                xStartLong=row[1]
                lastLat=row[0]
                lastLong=row[1]
                continue
            elif lastLat==row[0] and lastLong==row[1] and flag1==1:
                count=count+1
                lastLat=row[0]
                lastLong=row[1]
                continue
            if xStartLat=='0':
                lastLat=row[0]
                lastLong=row[1]
                continue
            if (lastLat!=row[0] or lastLong!=row[1]) and distance.distance(float(row[0]),float(row[1]),float(xStartLat),float(xStartLong))>config.edgeError:
                if count>=2:
                    arr.append(count)
                flag1=0
                count=1
            lastLat=row[0]
            lastLong=row[1]
        return edge
n={}                

startbusStop,endbusStop,startLat,startLong=stopBtStation('X:\\DISARM\\Trails\\Azone\\up\\Normal\\up_20.csv')
n=NumberofStop('X:\\DISARM\\Trails\\Azone\\up\\Normal\\up_20.csv',startbusStop,endbusStop,startLat,startLong)
#ukhra-35
#azone-44
for i in range(1,44):
    print(len(n[i,i+1]))
for i in range(1,44):
    print(n[i,i+1])
