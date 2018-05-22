import velocity
import waitTime

wait={}
wait[0]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_1.csv')
wait[1]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_4.csv')
wait[2]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_8.csv')
wait[3]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_16.csv')
wait[4]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_18.csv')
wait[5]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_22.csv')
wait[6]=waitTime.StopTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_25.csv')

distance={}
busStop={}
x={}
y={}
busStop[0],distance[0]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_1.csv',x,y)
busStop[1],distance[1]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_4.csv',x,y)
busStop[2],distance[2]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_8.csv',x,y)
busStop[3],distance[3]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_16.csv',x,y)
busStop[4],distance[4]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_18.csv',x,y)
busStop[5],distance[5]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_22.csv',x,y)
busStop[6],distance[6]=velocity.busTime('/media/naman/New Volume/DISARM/Trails/EarlyMorningCSV/up_25.csv',x,y)
wait[0][0,1]=0
wait[1][0,1]=0
wait[2][0,1]=0
wait[3][0,1]=0
wait[4][0,1]=0
wait[5][0,1]=0
wait[6][0,1]=0
for k in range(0,7):
    for i in range(1,36):
        for j in range(i+1,36):
            wait[k][i,j]=busStop[k][str(j)][0]+wait[k][i-1,i]+wait[k][str(j)]
for i in range(1,36):
    for j in range(i+1,36):
        print(wait[0][i,j])
