---
layout: post
title: "Reservoir Engineering: Derivation of The Diffusivity Equation (part 2)"
date: 2016-02-16 19:21:00 +0700
comments: true
permalink: 2016-02-16-review-res-eng-derivation-of-diffusivity-equation-pt-2
disqus_identifier: ecca6802-d4a7-11e5-8088-ab2e2482fade
---

We have derived the general form of continuity equation for fluid flow in porous media in the [previous post][previous-post].

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}(r \rho u_{r}) $$

Consider Darcy's Law,

$$ u_s = -\frac{k}{\mu} \left( \frac{\partial P}{\partial s} - \rho g \frac{\partial z}{\partial s} \right) $$

Keep in mind that Darcy's Law only applies to laminar (or Darcy) flow.

Translating that form in $$ r $$ direction gives,

$$ u_r = \frac{k}{\mu} \left( \frac{\partial P}{\partial r} \right) $$

Introduce Darcy's equation into continuity equation,

$$ \frac{\partial{ \left( \rho\phi \right) }}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r}\left( r \rho \frac{k}{\mu} \frac{\partial P}{\partial r} \right) $$

This form is by far the most general form of diffusivity equation before we introduce further assumptions into our derivation. Until now, we have made the following assumptions:
* Flow only happens in $$ r $$ direction
* Laminar (or Darcy) flow

From this point on, we're gonna introduce more assumptions in order to further derive this equation. Notice on the right-hand side of the equation, we have variables $$ \rho $$, $$ k $$, $$ \mu $$ that are obviously $$ f(P) $$ (a function of pressure). Pressure itself is $$ f(r) $$ (a function of space, which again in this case only happens in $$ r $$). The 



# Flow of single-phase liquid (small, constant compressibility)

We need to assume that the porous medium (i.e. the rock) has constant permeability and fluid's viscosity stays constant.

$$ \frac{\mu}{k} \frac{\partial(\rho\phi)}{\partial{t}} = \frac{-1}{r} \frac{\partial}{\partial r} \left( r \rho \frac{\partial P}{\partial r} \right) $$

Evaluate the left-hand side,

$$
\begin{align}

\frac{\partial (\rho\phi)}{\partial t} &= \frac{\partial (\rho\phi)}{\partial P} \frac{\partial P}{\partial t} \\
&= \left( \rho \frac{\partial (\phi)}{\partial P} + \phi \frac{\partial (\rho)}{\partial P} \right) \frac{\partial P}{\partial t}

\end{align}
$$

Recall the definition of compressibility of both fluid and rock (yes, [rock can be compressible][compaction-drive-res]!),

$$
\begin{align}

c_f &= \frac{1}{\rho} \frac{d\rho}{dP} &
c_r &= \frac{1}{\phi} \frac{d\phi}{dP}\\
\rho c_f &= \frac{d\rho}{dP} &
\phi c_r &= \frac{d\phi}{dP}

\end{align}
$$

Substituting the compressibility expression into the left-hand,

$$
\begin{align}

\frac{\partial (\rho\phi)}{\partial t} &= \left( \rho \phi c_r + \phi \rho c_f \right) \frac{\partial P}{\partial t} \\
&= \rho\phi (c_r + c_f) \frac{\partial P}{\partial t} \\
&= \rho\phi c_T \frac{\partial P}{\partial t}

\end{align}
$$

where $$ c_T $$ denotes the total compressibility ($$ c_T = (c_r + c_f) $$).

Substituting this left-hand expression back into the derivation,

$$ \frac{\mu\rho\phi c_T}{k} \frac{\partial P}{\partial t} = \frac{-1}{r} \frac{\partial}{\partial r} \left( r \rho \frac{\partial P}{\partial r} \right) $$

Evaluate the right-hand side,

$$
\begin{align}

\frac{\mu\rho\phi c_T}{k} \frac{\partial P}{\partial t} &= \frac{-1}{r} \left[ \frac{\partial r}{\partial r} \rho \frac{\partial P}{\partial r} + r \frac{\partial \rho}{\partial P} \left( \frac{\partial P}{\partial r} \right)^{2} + r\rho \frac{\partial^2 P}{\partial r^2} \right] \\

&= \frac{-1}{r} \left[ \frac{\partial r}{\partial r} \rho \frac{\partial P}{\partial r} + r c_f \rho \left( \frac{\partial P}{\partial r} \right)^{2} + r\rho \frac{\partial^2 P}{\partial r^2} \right] \\

&= \frac{-\rho}{r} \left[ \frac{\partial r}{\partial r} \frac{\partial P}{\partial r} + r c_f  \left( \frac{\partial P}{\partial r} \right)^{2} + r \frac{\partial^2 P}{\partial r^2} \right] \\

\end{align}
$$

We also assume that fluid has small, constant compressibility. Furthermore, pressure-gradient-squared times compressibility, $$ c_f \left( \frac{\partial P}{\partial r} \right)^{2} $$, can be neglected.

$$
\begin{align}

\frac{\mu\phi c_T}{k} \frac{\partial P}{\partial t} &= \frac{-1}{r} \left[ \frac{\partial r}{\partial r} \frac{\partial P}{\partial r} + r \frac{\partial^2 P}{\partial r^2} \right] \\

\frac{\mu\phi c_T}{k} \frac{\partial P}{\partial t} &= \frac{-1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial P}{\partial r} \right) \\


\end{align}
$$

# Flow of gas





{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[previous-post]: {% post_url 2016-02-04-review-res-eng-derivation-of-diffusivity-equation-pt-1 %}

[compaction-drive-res]: https://petrowiki.org/Compaction_drive_reservoirs

[img-cylindrical-coord]: {{ site.url }}/assets/Cylindrical_coordinate_surfaces.gif
