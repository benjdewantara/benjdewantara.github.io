---
layout: post
title: "Reservoir Engineering: Derivation of The Diffusivity Equation (part 2)"
date: 2016-02-16 19:21:00 +0700
comments: true
categories: reservoir-engineering
disqus_identifier: ecca6802-d4a7-11e5-8088-ab2e2482fade
---

We have derived the general form of continuity equation for fluid flow in porous media in the [previous post](previous-post).

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}(r \rho u_{r}) $$

Consider Darcy's Law,

$$ u_s = -\frac{k}{\mu} \left( \frac{\partial P}{\partial s} - \rho g \frac{\partial z}{\partial s} \right) $$

Keep in mind that Darcy's Law only applies to laminar (or Darcy) flow.

Translating that form in $$ r $$ direction gives,

$$ u_r = \frac{k}{\mu} \left( \frac{\partial P}{\partial r} \right) $$

Introduce Darcy's equation into continuity equation,

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}\left( r \rho \frac{k}{\mu} \frac{\partial P}{\partial r} \right) $$

Now, from this point on, we're gonna introduce more assumptions in order to further derive this equation. Notice the right-hand side of the equation, we have variables $$ \rho $$, $$ k $$, $$ \mu $$ that are obviously $$ f(P) $$ (a function of pressure). Pressure itself is $$ f(r) $$ (a function of space, which in this case only happens in $$ r $$).

We need to assume that the porous medium (i.e. the rock) has constant permeability and fluid's viscosity stays constant.

{% comment %}
 (yes, [rock can be compressible](compaction-drive-res)!).
{% endcomment %}


$$ \frac{\mu}{k} \frac{\partial(\rho\phi)}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r} \left( r \rho \frac{\partial P}{\partial r} \right) $$

Evaluate the left-hand side,

$$
\begin{align}
\frac{\partial (\rho\phi)}{\partial t} &= \frac{\partial (\rho\phi)}{\partial P} \frac{\partial P}{\partial t} \\
&= \left( \rho \frac{\partial (\rho)}{\partial P} + \phi \frac{\partial (\phi)}{\partial P} \right) \frac{\partial P}{\partial t}

\end{align}
$$








{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[previous-post]: {% post_url 2016-02-04-review-res-eng-derivation-of-diffusivity-equation-pt-1 %}

[compaction-drive-res]: https://petrowiki.org/Compaction_drive_reservoirs

[img-cylindrical-coord]: {{ site.url }}/assets/Cylindrical_coordinate_surfaces.gif
