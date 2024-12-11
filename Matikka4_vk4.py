import numpy as np
import matplotlib.pyplot as plt
import sympy as sp


# ___ t. 1.4 a

x = np.linspace(-5,5,100)
y = (x**3-1)/(x-1)

def axelit(a, b):
    ax = plt.subplot()
    ax.spines['left'].set_position(('data', 0))
    ax.spines['bottom'].set_position(('data', 0))
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    ax.set_aspect('equal')
    ax.set_ylim(a, b)


axelit(-2, 8)
plt.plot(x, y, color='blue')
plt.show()

x = sp.Symbol('x')
f = (x**3-1)/(x-1)
g = sp.simplify(f)
print(g)


# _____ t. 1.4 b

x = np.linspace(-5,5,100)
y = x-4

axelit(-8, 4)
plt.plot(x, y, color='purple')
plt.show()


# ____ t. 1.4 c

x = sp.Symbol('x')
f = (3 - np.square(9-x))/x
g = sp.simplify(f)
lim = sp.limit(g, x, 0)
print(f"t. 1.4 c): funktio sievennettynä:\n {g}")
print(f"RAja-arvo funktion tulos:\n{lim}")

x = np.linspace(-30,30,100)
y = (3 - np.square(9-x))/x

axelit(-30,30)
plt.plot(x, y, color='blue')
plt.show()

