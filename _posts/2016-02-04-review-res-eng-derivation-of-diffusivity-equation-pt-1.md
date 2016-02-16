---
layout: post
title: "Reservoir Engineering: Derivation of The Diffusivity Equation (part 1)"
date: 2016-02-04 14:02:00 +0700
comments: true
categories: reservoir-engineering
disqus_identifier: 5012a7ae-cb0d-11e5-8a5a-080027047769
---

[Diffusivity equation for fluid flow in porous media](diffusivity-eq) is essentially a product of the notion of [Conservation of Mass](continuity-eq) that's been derived thoroughly with [Darcy's law](darcy-eq) being further applied somewhere along the derivation. I present a brief review on the derivation in this post.

Since the flow of fluid in a *porous medium* (i.e. a *reservoir*) mostly follow a radial flow, we will put our mathematical abstraction using a [cylindrical coordinate system](cylindrical-coord) $$ (r, \theta, z) $$. However, it is possible as well for the flow to happen in $$ z $$ direction.

We would like to observe the mass in a fixed point in **`space`**, say at $$ r=r_a $$, $$ \theta=\theta_a$$, and $$ z=z_a $$ or at $$ (r_a, \theta_a, z_a) $$. Consider the following image (taken from *Wikipedia*),

![Cylindrical coordinate surfaces][img-cylindrical-coord]

It is clear that a point in a cylindrical space is the intersection of the three colored surfaces.

Now, consider its [control volume](control-volume) whose volume is $$ V_b = r_a \Delta{r_a} \Delta{\theta_a} \Delta{z_a} $$. This control volume contains the point $$ (r_a, \theta_a, z_a) $$ (i.e. $$ r_{a} $$ lies between $$ r_{a} - \frac{\Delta{r_a}}{2} $$ and $$ r_{a} + \frac{\Delta{r_a}}{2} $$, and the same also applies to both $$ \theta_a $$ and $$ z_a $$).

**`mass`** residing at that fixed point $$ a $$ in **`space`** ***changes with respect to*** **`time`**.

$$ \frac{\Delta{m_{cv}}}{\Delta{t}} = \frac{\Delta{m_{(r_a, \theta_a, z_a)}}}{\Delta{t}} $$

What causes that change? Notice that **`mass`** ***is forever conserved***, unless there is a stream of **`mass`** entering or leaving that control volume. So let's say, there is a stream of **`mass`**entering and another stream leaving point $$ a $$ in $$ r $$, $$ \theta $$, and $$ z $$ direction.

$$ \frac{\Delta{m_{cv}}}{\Delta{t}} = \dot{m}_{in} - \dot{m}_{out} $$

Let us first consider the $$ \dot{m}_{in} - \dot{m}_{out} $$ that happens only *with respect to* $$ r $$. Recall that $$ \dot{m} = \rho u A $$. So in $$ r $$ direction,

$$ (\rho u A)_{in} $$ enters the control volume at $$ r_a - \frac{\Delta{r_a}}{2} $$ <br />
while $$ (\rho u A)_{out} $$ leaves the control volume at $$ r_a + \frac{\Delta{r_a}}{2} $$

Therefore,

$$ (\rho u A)_{in} = (\rho u)_{r_a - \frac{\Delta{r_a}}{2}} \times  A_{r_a - \frac{\Delta{r_a}}{2}} $$

$$ (\rho u A)_{in} = (\rho u)_{r_a - \frac{\Delta{r_a}}{2}} \times  (r_a - \frac{\Delta{r_a}}{2}) \Delta{\theta} \Delta{z} $$

Recall that backward, forward, and centered difference at one point must all agree with one another so as to satisfy the existence of the derivative  at that point.

$$ \lim_{h\to0}\frac{f(x-h)-f(x)}{-h} = \lim_{h\to0}\frac{f(x)-f(x+h)}{-h} = \lim_{h\to0}\frac{f(x-h)-f(x+h)}{-2h} = \frac{df}{dx} $$

Thus, consider the following [backward-difference](finite-difference) of $$ (\rho u)_{r_a} $$ from $$ r_a - \frac{\Delta{r_a}}{2} $$ to $$ r_a $$

$$ \frac{(\rho u)_{r_a - \frac{\Delta{r_a}}{2}} - (\rho u)_{r_a}}{(r_a - \frac{\Delta{r_a}}{2}) - (r_a)} = \frac{\partial{(\rho u)}_{r_a}}{\partial{r_a}} $$

$$ -2\frac{(\rho u)_{r_a - \frac{\Delta{r_a}}{2}} - (\rho u)_{r_a}}{\Delta{r_a}} = \frac{\partial{(\rho u)}_{r_a}}{\partial{r_a}} $$

Similarly, we can derive the [forward-difference](finite-difference) expression in a similar manner. We can rearrange both forward and backward difference which invole $$ (\rho u)_{r_a} $$ into,

$$ (\rho u)_{r_a - \frac{\Delta{r_a}}{2}} = (\rho u)_{r_a} - \frac{\partial(\rho u)_{r_a}}{\partial r_a} \frac{\Delta{r}}{2}$$

$$ (\rho u)_{r_a + \frac{\Delta{r_a}}{2}} = (\rho u)_{r_a} + \frac{\partial(\rho u)_{r_a}}{\partial r_a} \frac{\Delta{r}}{2} $$

The $$ (\rho u A)_{in} - (\rho u A)_{out} $$ expression then translates into,

$$ (\rho u A)_{in} - (\rho u A)_{out} $$

$$ \left( -(\rho u)_{r_a} \Delta{r_a} - r \Delta{r_a} \frac{\partial(\rho u)_{r_a}}{\partial r_a} \right) \Delta{\theta_a} \Delta{z_a} $$

Now, we evalute the left-hand expression of the conservation of mass equation earlier,

$$ \frac{\Delta{m_{cv}}}{\Delta{t}} = \frac{\Delta{ \left( \rho\phi V_b \right)_{cv} }}{\Delta{t}} $$

Substitute $$ V_b = r_a \Delta{r_a} \Delta{\theta_a} \Delta{z_a} $$ into the equation,

$$ \frac{\Delta{ \left( \rho\phi r_a \Delta{r_a} \Delta{\theta_a} \Delta{z_a} \right)_{cv} }}{\Delta{t}} = \left( -(\rho u)_{r_a} \Delta{r_a} - r \Delta{r_a} \frac{\partial(\rho u)_{r_a}}{\partial r_a} \right) \Delta{\theta_a} \Delta{z_a} $$

$$ \frac{\Delta{ \left( \rho\phi r_a \right)_{cv} }}{\Delta{t}} = \left( -(\rho u)_{r_a} - r \frac{\partial(\rho u)_{r_a}}{\partial r_a} \right)  $$

$$ \frac{\Delta{ \left( \rho\phi \right)_{cv} }}{\Delta{t}} = \frac{-1}{r_a}\left( (\rho u)_{r_a} \frac{\partial r}{\partial r} + r \frac{\partial(\rho u)_{r_a}}{\partial r_a} \right)  $$

$$ \frac{\Delta{ \left( \rho\phi \right)_{cv} }}{\Delta{t}} = \frac{-1}{r_a}\left( \frac{\partial}{\partial r_a}(r_a \rho u_{r_a}) \right)  $$

Since we've been looking at point $$ a $$, we can further deduce that this form applies to any point in **`space`**. Also, as $$ \Delta{t} \to 0 $$, we observe the derivative of $$ \left(\rho\phi\right) $$. The conservation of mass equation then becomes the continuity equation,

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}(r \rho u_{r}) $$

Note that, this continuity equation only accounts for flow happening only in $$ r $$ direction (i.e. we've been assuming that no flow happens in $$ \theta $$ and $$ z $$ direction).





{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[diffusivity-eq]: http://petrowiki.org/Reservoir_inflow_performance
[continuity-eq]: https://en.wikipedia.org/wiki/Continuity_equation#Fluid_dynamics
[darcy-eq]: https://en.wikipedia.org/wiki/Darcy%27s_law#Darcy.27s_Law_in_Petroleum_Engineering
[cylindrical-coord]: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
[control-volume]: https://en.wikipedia.org/wiki/Control_volume
[finite-difference]: https://en.wikipedia.org/wiki/Finite_difference


[img-cylindrical-coord]: {{ site.url }}/assets/Cylindrical_coordinate_surfaces.gif
