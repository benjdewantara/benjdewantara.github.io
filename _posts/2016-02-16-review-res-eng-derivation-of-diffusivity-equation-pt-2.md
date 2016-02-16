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

$$ u_s = -\frac{k}{\mu} \left( \frac{\partial P}{\partial s} - \rho g \frac{dz}{ds} \right) $$

Translating that form in $$ r $$ direction gives,

$$ u_r = \frac{k}{\mu} \left( \frac{\partial P}{\partial r} \right) $$

Introduce Darcy's equation into continuity equation,

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}\left( r \rho \frac{k}{\mu} \frac{\partial P}{\partial r} \right) $$






{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[previous-post]: {% post_url 2016-02-04-review-res-eng-derivation-of-diffusivity-equation-pt-1 %}
[diffusivity-eq]: http://petrowiki.org/Reservoir_inflow_performance
[continuity-eq]: https://en.wikipedia.org/wiki/Continuity_equation#Fluid_dynamics
[darcy-eq]: https://en.wikipedia.org/wiki/Darcy%27s_law#Darcy.27s_Law_in_Petroleum_Engineering
[cylindrical-coord]: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
[control-volume]: https://en.wikipedia.org/wiki/Control_volume
[finite-difference]: https://en.wikipedia.org/wiki/Finite_difference


[img-cylindrical-coord]: {{ site.url }}/assets/Cylindrical_coordinate_surfaces.gif
