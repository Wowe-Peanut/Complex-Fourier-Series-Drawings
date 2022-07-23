from xml.dom import minidom
import cmath
import math
import random

file_name = input("SVG File Name: ")

#Parse the svg
doc = minidom.parse(r"C:\Users\Ryan O'Mullan\Desktop\{0}.svg".format(file_name))  
path_strings = [path.getAttribute('d') for path
                in doc.getElementsByTagName('path')]
doc.unlink()

print(path_strings)
print("\n\n")


curves = []
path = path_strings[0].split()
x = None
y = None
for i in range(len(path)):
    v = path[i]
    
    if v.lower() == 'm' or v.lower() == 'l':
        j = i+1
        while(True):    
            point = [float(d) for d in path[j].split(",")]
            if not (x and y):
                x = point[0]
                y = point[1]
                j += 1
                if j == len(path) or path[j].isalpha():
                    break
                continue
        
            if v.islower():
                point[0] += x
                point[1] += y
                
            curves.append([[x,y],point,point])
            x = point[0]
            y = point[1]
            j += 1
            if j == len(path) or path[j].isalpha():
                break
            
            
    elif v.lower() == 'c':
        j = i+1
        while(True):    
            point1 = [float(d) for d in path[j].split(",")]
            point2 = [float(d) for d in path[j+1].split(",")]
            point3 = [float(d) for d in path[j+2].split(",")]
            
            if v.islower():
                point1[0] += x
                point1[1] += y
                point2[0] += x
                point2[1] += y
                point3[0] += x
                point3[1] += y
                
            curves.append([[x,y],point1,point2,point3])
            x = point3[0]
            y = point3[1]
            j += 3
            
            if j == len(path) or path[j].isalpha():
                break


    elif v.lower() == 'h':
        h = float(path[i+1])
        if v.islower():
            h += x
        curves.append([[x,y],[h,y],[h,y]])
        x = h
            
    elif v.lower() == 'v':
        vert = float(path[i+1])
        if v.islower():
            vert += y
        curves.append([[x,y],[x,vert],[x,vert]])
        y = vert
        
    elif v.lower() == 'z':
        if abs(x-curves[0][0][0]) > 0.01:
            curves.append([[x,y],curves[0][0],curves[0][0]])
        break
    elif v.isalpha():
        raise ValueError("Unexpected SVG Path Command: " + v)
    

    



def bezier(t, curve_index):
    n = len(curves[curve_index])-1
    x = sum([(math.comb(n,i))*((1-t)**(n-i))*(t**i)*(curves[curve_index][i][0]) for i in range(n+1)])
    y = sum([(math.comb(n,i))*((1-t)**(n-i))*(t**i)*(curves[curve_index][i][1]) for i in range(n+1)])
    return x+(y*1j)

ints = int(input("Iterations: "))
iterations = ints
delta_t = 0.001
period = len(curves)
def f(t):
    return bezier(t%1,math.floor(t))
    
#Perform the complex integrals
c = [0 for i in range(2*iterations+1)]
for n in range(-iterations, iterations+1):
    t = 0.0
    while(t <= 1):
        c[n+iterations] += f(t*period) * (math.e**(-1j*n*2*math.pi*t)) * delta_t
        t += delta_t

#List of frequency, real and imaginary starting positions
vals = [[z-iterations, c[z].real, c[z].imag] for z in range(len(c))]

#Orders everything by size
vals = sorted(vals,reverse=True,key=lambda x : math.sqrt(x[1]**2 + x[2]**2))

#Puts the non-moving vector first
zero_i = [v for v in range(len(vals)) if vals[v][0]==0][0]
vals = [vals[zero_i]] + vals[:zero_i] + vals[zero_i+1:]


#Writes non-zero vectors to a file
print("\n")
for v in range(len(vals)):
    vals[v][1] = 0 if abs(vals[v][1]) < 0.00001 else vals[v][1]
    vals[v][2] = 0 if abs(vals[v][2]) < 0.00001 else vals[v][2]
    if not (vals[v][1] == 0 and vals[v][2] == 0):
        print(str(vals[v])+",")


