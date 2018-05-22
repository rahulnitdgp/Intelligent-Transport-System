import math
def distance(lat1,long1,lat2,long2):
    r=6371
    dLat=math.radians(lat2-lat1)
    dLon=math.radians(long2-long1)
    a=math.sin(dLat/2)*math.sin(dLat/2)+math.cos(math.radians(lat1))*math.cos(math.radians(lat2))*math.sin(dLon/2)*math.sin(dLon/2)
    c=2*math.atan2(math.sqrt(a),math.sqrt(1-a))
    d=r*c
    return d
