import distance
import config
from datetime import datetime
import csv
def StopTime(path):
    stopTime={}
    with open('X:\\DISARM\\Trails\\BusStopCSV\\azone.csv') as csvfile:
        ukhra=csv.reader(csvfile,delimiter=',')

        with open(path) as testFile:
            testData=csv.reader(testFile,delimiter=',')

            for stop in ukhra:
                if stop[0]=='stop_number':
                    continue
                startTime=''
                endTime=''
                lastLat=''
                lastLong=''
                lat=''
                long=''
                flag=0
                count=0
                for test in testData:
                    if test[0]=='latitude':
                        continue
                    if startTime=='' and distance.distance(float(stop[1]),float(stop[2]),float(test[0]),float(test[1]))<config.vertexError and flag==0:
                        flag=1
                        startTime=test[2]
                        lastLat=test[0]
                        lastLong=test[1]
                    elif distance.distance(float(stop[1]),float(stop[2]),float(test[0]),float(test[1]))<config.vertexError and flag==1:
                        lat=test[0]
                        long=test[1]
                        if lat==lastLat and long==lastLong:
                            count=count+1
                        lastLat=lat
                        lastLong=long
                        
                    elif endTime=='' and distance.distance(float(stop[1]),float(stop[2]),float(test[0]),float(test[1]))>config.vertexError and flag==1:
                        flag=0
                        endTime=test[2]
                        #print(stop[0])
                        stopTime[stop[0]]=(datetime.strptime(endTime,'%H:%M:%S')-datetime.strptime(startTime,'%H:%M:%S')).seconds
                        #print(stopTime[stop[0]])
                        print(count)
                        startTime=''
                        endTime=''
                        break
    print()
    for i in range(1,46):
        print(stopTime[str(i)])
    return stopTime
if __name__=='__main__':
    address='X:\\DISARM\\Trails\\Azone\\up\\Normal\\up_20.csv'
    waitTime=StopTime(address)
    '''for i in range(1,46):
        print(waitTime[str(i)])'''



