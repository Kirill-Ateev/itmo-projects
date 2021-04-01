import numpy as np
import scipy.spatial.distance as ds

#Поиск косинусного расстояния между векторами
vector_1 = np.array([1,1,1,1,0,0])
vector_2 = np.array([0,1,0,0,1,1])

dis = ds.cosine(vector_1, vector_2)
print(dis)