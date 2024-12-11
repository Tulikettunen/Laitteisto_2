"""
Tehtävät
Kaksi ekaa on oikeastaan viime viikon tehtäväpaketista...
Kpl 5.3, teht. 8 s. 96: Piirrä funktion kuvaaja.
Samoin tehtävässä 9
Kpl 5.4 s 100: Tehtävästä 1 taitanee riittää kuvaajat kohdista a ja b
Ja lopuksi tehtävän 4 lentorataa kuvaava paraabeli.
"""


# ______ Kpl 5.3, teht. 8

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-1, 1, 10)
y = 0*x+4
x2 = np.linspace(1, 3, 10)
y2 = -2*x2+6


ax = plt.subplot()

ax.spines['left'].set_position(('data', 0))
ax.spines['bottom'].set_position(('data', 0))
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')

ax.set_aspect('equal')
ax.set_ylim([-1, 5])


plt.plot(x, y, color='blue')
plt.plot(x2, y2, color='blue')
plt.show()


# _____________ tehtävä 9

x3 = np.linspace(-5, 0, 100)
y3 = (3/5)*x3+3
x4 = np.linspace(0, 4, 100)
y4 = 0*x4+3
x5 = np.linspace(4, 8, 100)
y5 = -(3/4)*x5+6
x6 = np.linspace(8, 10, 100)
y6 = (1/2)*x6-4

ax2 = plt.subplot()

ax2.spines['left'].set_position(('data', 0))
ax2.spines['bottom'].set_position(('data', 0))
ax2.spines['right'].set_color('none')
ax2.spines['top'].set_color('none')

ax2.set_aspect('equal')
ax2.set_ylim([-1, 3])

plt.plot(x3, y3, color='blue')
plt.plot(x4, y4, color='blue')
plt.plot(x5, y5, color='blue')
plt.plot(x6, y6, color='blue')
plt.show()


# ____________ Kpl 5.4 s 100: Tehtävä 1

x7 = np.linspace(-5, 7, 100)
y7 = (x7**2)-4*x7+3
x8 = np.linspace(-5, 5, 100)
y8 = (-1.5)*x8**2-3*x8+7

ax3 = plt.subplot()

ax3.spines['left'].set_position(('data', 0))
ax3.spines['bottom'].set_position(('data', 0))
ax3.spines['right'].set_color('none')
ax3.spines['top'].set_color('none')

ax3.set_aspect('equal')
ax3.set_ylim([-3, 10])

plt.plot(x7, y7, color='blue')
plt.plot(x8, y8, color='red')
plt.show()


# ________ tehtävän 4 lentorataa kuvaava paraabeli

x9 = np.linspace(0, 90, 100)
y9 = (-0.0063)*x9**2+0.55*x9

ax4 = plt.subplot()
ax4.spines['left'].set_position(('data', 0))
ax4.spines['bottom'].set_position(('data', 0))
ax4.spines['right'].set_color('none')
ax4.spines['top'].set_color('none')
ax4.set_aspect('equal')
ax4.set_ylim([-1, 18])

plt.plot(x9, y9, color='green')
plt.show()


#________ Harjoitustehtävät kpl 8.3, t.1

x10 = np.linspace(-5, 5, 100)
y10 = x10**2
x11 = np.linspace(-5, 5, 100)
y11 = x11**3
x12 = np.linspace(-5, 5, 100)
y12 = x12**4

ax5 = plt.subplot()
ax5.spines['left'].set_position(('data', 0))
ax5.spines['bottom'].set_position(('data', 0))
ax5.spines['right'].set_color('none')
ax5.spines['top'].set_color('none')
ax5.set_aspect('equal')
ax5.set_ylim([-5, 5])

plt.plot(x10, y10, color='blue')
plt.plot(x11, y11, color='green')
plt.plot(x12, y12, color='red')
plt.show()


# _______ Harjoitustehtävät kpl 8.3, t.2

x13 = np.linspace(-5, 5, 100)
y13 = x13**(-2)
x14 = np.linspace(-5, 5, 100)
y14 = x14**(-3)
x15 = np.linspace(-5, 5, 100)
y15 = x15**(-4)

ax6 = plt.subplot()
ax6.spines['left'].set_position(('data', 0))
ax6.spines['bottom'].set_position(('data', 0))
ax6.spines['right'].set_color('none')
ax6.spines['top'].set_color('none')
ax6.set_aspect('equal')
ax6.set_ylim([-5, 5])

plt.plot(x13, y13, color='yellow')
plt.plot(x14, y14, color='green')
plt.plot(x15, y15, color='red')
plt.show()


# ________ Harjoitustehtävät kpl 8.3, t.3

x16 = np.linspace(-5, 5, 100)
y16 = x16**(2+(1/2))
x17 = np.linspace(-5, 5, 100)
y17 = x17**(2/5)
x18 = np.linspace(-5, 5, 100)
y18 = 1*x18

ax7 = plt.subplot()
ax7.spines['left'].set_position(('data', 0))
ax7.spines['bottom'].set_position(('data', 0))
ax7.spines['right'].set_color('none')
ax7.spines['top'].set_color('none')
ax7.set_aspect('equal')
ax7.set_ylim([-5, 5])

plt.plot(x16, y16, color='blue')
plt.plot(x17, y17, color='yellow')
plt.plot(x18, y18, color='red')  
plt.show()

# Ei myöskään oikein suostu piirtämään float tyyppisiä potensseja, valittaa invalidista potenssista,
# mutta piirtää jotain x-akselin positiiviselle puolelle..
