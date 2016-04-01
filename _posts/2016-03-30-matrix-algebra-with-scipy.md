---
layout: post
title: "Matrix Algebra with SciPy"
date: 2016-3-30 22:26:00 +0700
comments: true
permalink: 2016-03-30-matrix-algebra-with-scipy
disqus_identifier: bb920886-f68b-11e5-915b-080027d1c431
---

One of my worries if I wanted to implement [finite-difference method](finite-difference-method) to solve a [coefficient matrix](coefficient-matrix) using Python is having to reinvent the wheel by reimplementing some numerical methods (like [Gaussian elimination](gaussian-elimination)). That is time-consuming. I was so newbie in programming that I forgot Python is a widely-used programming language with many open-source libraries, meaning that someone out there should have already created a library for scientific purposes.

Here come [SciPy](scipy) and [NumPy](numpy),

{% highlight python %}
import numpy as np
import scipy
{% endhighlight %}

NumPy is a package providing N-dimensional array object for scientific computing purposes. Why NumPy? Because conventional Python list can be time-consuming when dealing with many matrices with large dimensions.

SciPy is a package providing many numerical methods and computational algorithms. SciPy is also designed to work hand-in-hand with NumPy.

The following is an example of a system of linear equations whose coefficients are $$x$$, $$y$$, and $$z$$.

Consider a system of *newbie* linear equations (I have set $$x=1$$, $$y=2$$, and $$z=3$$ here),

$$
\begin{align}
6x + 9y + 4z &= 36\\
10x + 2y + 2z &= 20\\
4x + 4y + 10z &= 42
\end{align}
$$

Transform them into a matrix,

$$
\left(\begin{matrix}
6 &9 &4\\
10 &2 &2\\
4 &4 &10
\end{matrix}\right)
\left(\begin{matrix}
x\\
y\\
z
\end{matrix}\right)
=
\left(\begin{matrix}
36\\
20\\
42
\end{matrix}\right)
$$

Of course $$x$$, $$y$$, and $$z$$ can easily be solved using pencil and paper. But here's a way to find the solution using SciPy.

{% highlight python %}
In [1]: import numpy as np
   ...: from scipy import linalg
   ...: 
   ...: coeffMatrix = [[6, 9, 4],
   ...:                [10, 2, 2],
   ...:                [4, 4, 10]]
   ...: 
   ...: coeffMatrix = np.array(coeffMatrix)
   ...: 
   ...: results = [36, 20, 42]
   ...: results = np.array(results)
   ...: 
   ...: variables = linalg.solve(coeffMatrix, results)

In [2]: print(variables)
[ 1.  2.  3.]
{% endhighlight %}


Now this, is why Python is awesome.









{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[finite-difference-method]: https://en.wikipedia.org/wiki/Finite_difference_method

[coefficient-matrix]: https://en.wikipedia.org/wiki/Coefficient_matrix

[gaussian-elimination]: https://en.wikipedia.org/wiki/Gaussian_elimination

[scipy]: www.scipy.org/

[numpy]: www.numpy.org/
