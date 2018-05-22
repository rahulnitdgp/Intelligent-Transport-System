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
    with open('/media/naman/New Volume/DISARM/Trails/BusStopCSV/ukhra.csv') as csvfile:
        ukhra =csv.reader(csvfile,delimiter=',')


        with open(path) as testFile:
            testData=csv.reader(testFile,delimiter=',')

            for stop in ukhra:
                if stop[0]=='stop_number':
                    continue
                for test in testData:
                    if test[0]=='Latitude':
                        continue
                    if distance.distance(float(test[0]),float(test[1]),23.5644366667,87.2822583333)<0.015:
                        startLat=test[0]
                        startLong=test[1]
                    if test[0]=='Latitude':
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
            if row[0]=='Latitude':
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
                #print(x,' ',x+1,' ',arr)
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

startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_1.csv')
n[0]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_1.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_4.csv')
n[1]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_4.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_8.csv')
n[2]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_8.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_16.csv')
n[3]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_16.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_18.csv')
n[4]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_18.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_22.csv')
n[5]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_22.csv',startbusStop,endbusStop,startLat,startLong)
startbusStop,endbusStop,startLat,startLong=stopBtStation('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_25.csv')
n[6]=NumberofStop('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_25.csv',startbusStop,endbusStop,startLat,startLong)
for i in range(0,36):
    for j in range(i+2,36):
        for k in range(0,7):
            n[k][i,j]=list(set(n[k][i,j-1]+n[k][j-1,j]))
               #print(n[k][i,j])
z=34
for j in range(z+1,36):
    print('( T1,',len(n[0][z,j]),',',n[0][z,j],')',end="")
    print('( T2,',len(n[1][z,j]),',',n[1][z,j],')',end="")
    print('( T3,',len(n[2][z,j]),',',n[2][z,j],')',end="")
    print('( T4,',len(n[3][z,j]),',',n[3][z,j],')',end="")
    print('( T5,',len(n[4][z,j]),',',n[4][z,j],')',end="")
    print('( T6,',len(n[5][z,j]),',',n[5][z,j],')',end="")
    print('( T7,',len(n[6][z,j]),',',n[6][z,j],')',end="")
    print()        
