---
layout: post
title: "Finite-Difference Form of Diffusivity Equation"
date: 2016-5-11 23:19:00 +0700
comments: true
permalink: 2016-05-11-finite-difference-form-of-diffusivity-equation
disqus_identifier: 43f11798-1794-11e6-a325-080027d1c431
---

Begin with mass conservation,

$$ \frac{d(m_{cv})}{dt} = \dot{m}_{in} - \dot{m}_{out} + \dot{m}_{sc} $$

Evaluate right-hand side, for simplicity just consider mass rate in $$x$$ direction, with term $$ \dot{m} $$ being $$ \rho uA $$

$$\begin{align}

\dot{m}_{in} &= \rho u_{x-\frac{\Delta x}{2}} A_{x-\frac{\Delta x}{2}} \\
\dot{m}_{out} &= \rho u_{x+\frac{\Delta x}{2}} A_{x+\frac{\Delta x}{2}} \\ \\
\dot{m}_{in} - \dot{m}_{out} + \dot{m}_{sc} &= \rho u_{x-\frac{\Delta x}{2}} A_{x-\frac{\Delta x}{2}} - \rho u_{x+\frac{\Delta x}{2}} A_{x+\frac{\Delta x}{2}} + \dot{m}_{sc}

\end{align}$$

Using the derivative definition as follows,

$$ \frac{\partial(\rho u_x A_x)}{\partial x} = \frac{(\rho u_{x-\frac{\Delta x}{2}} A_{x-\frac{\Delta x}{2}}) - (\rho u_{x+\frac{\Delta x}{2}} A_{x+\frac{\Delta x}{2}})}{(x-\frac{\Delta x}{2}) - (x+\frac{\Delta x}{2})} $$

Thus, the right-hand side of the equation becomes,

$$ \dot{m}_{in} - \dot{m}_{out} + \dot{m}_{sc} = -\Delta{x}\frac{\partial(\rho u_x A_x)}{\partial{x}} + \dot{m}_{sc} $$

Evaluate left-hand side, noticing that $$ m_{cv} = \phi\rho V_b $$ with term $$ V_b $$ being $$\Delta{x}\Delta{y}\Delta{z}$$,

$$ \frac{d(m_{cv})}{dt} = \frac{d(\phi\rho V_b)}{dt} $$

Coming back to the earlier mass conservation equation,

$$\begin{align}
\frac{d(m_{cv})}{dt} &= \dot{m}_{in} - \dot{m}_{out} + \dot{m}_{sc} \\
\frac{d(\phi\rho V_b)}{dt} &= -\Delta{x}\frac{\partial(\rho u_x A_x)}{\partial{x}} + \dot{m}_{sc}
\end{align}$$

Since $$ V_{b} $$ and $$ A_{x} $$ are constant,

$$\begin{align}

V_b \frac{d(\phi\rho)}{dt} &= -\Delta{x}A_x\frac{\partial(\rho u_x)}{\partial{x}} + \dot{m}_{sc} \\
\frac{d(\phi\rho)}{dt} &= \frac{-\Delta{x}A_x}{V_b}\frac{\partial(\rho u_x)}{\partial{x}} + \frac{\dot{m}_{sc}}{V_b} \\
\frac{d(\phi\rho)}{dP} \frac{\partial{P}}{\partial{t}} &= \frac{-\Delta{x}A_x}{V_b}\frac{\partial(\rho u_x)}{\partial{x}} + \frac{\dot{m}_{sc}}{V_b} \\
\phi\rho C_{T} \frac{\partial{P}}{\partial{t}} &= \frac{-\Delta{x}A_x}{V_b}\frac{\partial(\rho u_x)}{\partial{x}} + \frac{\dot{m}_{sc}}{V_b} \\

\end{align}$$


Evaluating the $$ \frac{\partial(\rho u_x)}{\partial{x}} $$ term on the right-hand side,

$$\begin{align}

\frac{\partial(\rho u_x)}{\partial{x}} &= \frac{\partial}{\partial{x}}\left( \rho \left( \frac{-k_x}{\mu_l}\frac{\partial{P}}{\partial{x}} \right) \right) \\
 &= \frac{-1}{\Delta{x}} \left[ \left( \rho \frac{k_x}{\mu_l}\frac{\partial{P}}{\partial{x}} \right)_{x+\frac{\Delta{x}}{2}} - \left( \rho \frac{k_x}{\mu_l}\frac{\partial{P}}{\partial{x}} \right)_{x-\frac{\Delta{x}}{2}} \right]

\end{align}$$

Plugging this $$ \frac{\partial(\rho u_x)}{\partial{x}} $$ term into the equation,

$$\begin{align}

\phi\rho C_{T} \frac{\partial{P}}{\partial{t}} &= \frac{A_x}{V_b} \left[ \left( \rho \frac{k_x}{\mu_l}\frac{\partial{P}}{\partial{x}} \right)_{x+\frac{\Delta{x}}{2}} - \left( \rho \frac{k_x}{\mu_l}\frac{\partial{P}}{\partial{x}} \right)_{x-\frac{\Delta{x}}{2}} \right] + \frac{\dot{m}_{sc}}{V_b} \\

&= \left[ \left(\frac{\rho A_x k_x}{V_b \mu_l} \frac{\partial P}{\partial x} \right)_{x+\frac{\Delta{x}}{2}} - \left( \frac{\rho A_x k_x}{V_b \mu_l} \frac{\partial P}{\partial x} \right)_{x-\frac{\Delta{x}}{2}} \right] + \frac{\dot{m}_{sc}}{V_b} \\

\end{align}$$

<br>
We translate the $$\frac{\partial P}{\partial x}$$ term into $$\frac{\Delta P}{\Delta x}$$ using finite-difference method,

$$\begin{align}

\phi\rho C_{T} \frac{\partial{P}}{\partial{t}} &= \left[ \left( \frac{\rho A_x k_x}{V_b \mu_l} \right)_{x+\frac{\Delta{x}}{2}} \left( \frac{\partial P}{\partial x} \right)_{x+\frac{\Delta{x}}{2}} - \left( \frac{\rho A_x k_x}{V_b \mu_l} \right)_{x-\frac{\Delta{x}}{2}} \left( \frac{\partial P}{\partial x} \right)_{x-\frac{\Delta{x}}{2}} \right] + \frac{\dot{m}_{sc}}{V_b} \\

&= \left[ \left( \frac{\rho A_x k_x}{V_b \mu_l} \right)_{x+\frac{\Delta{x}}{2}} \left( \frac{P_{x+\Delta x} - P_x}{\Delta x} \right) - \left( \frac{\rho A_x k_x}{V_b \mu_l} \right)_{x-\frac{\Delta{x}}{2}} \left( \frac{P_x - P_{x-\Delta x}}{\Delta x} \right) \right] + \frac{\dot{m}_{sc}}{V_b} \\

&= \left[ \left( \frac{\rho A_x k_x}{\Delta x V_b \mu_l} \right)_{x+\frac{\Delta{x}}{2}} \left( P_{x+\Delta x} - P_x \right) - \left( \frac{\rho A_x k_x}{\Delta x V_b \mu_l} \right)_{x-\frac{\Delta{x}}{2}} \left( P_x - P_{x-\Delta x} \right) \right] + \frac{\dot{m}_{sc}}{V_b} \\

\end{align}$$


<br><br>
We can group the $$ \frac{\rho A_x k_x}{\Delta x V_b \mu_l} $$ term and define them as transmissibility ($$T_x$$),

$$\begin{align}

\phi\rho C_{T} \frac{\partial{P}}{\partial{t}} &= \left[ T_{x+\frac{\Delta{x}}{2}} \left( P_{x+\Delta x} - P_x \right) - T_{x-\frac{\Delta{x}}{2}} \left( P_x - P_{x-\Delta x} \right) \right] + \frac{\dot{m}_{sc}}{V_b} \\

&= \left[ T_{x+\frac{\Delta{x}}{2}} P_{x+\Delta x} - \left( \right) + T_{x-\Delta x} \right] + \frac{\dot{m}_{sc}}{V_b} \\

\end{align}$$























{% comment %} This is where you put all the link/image/media/file pointers {% endcomment %}

[part-one-post]: {% post_url 2016-02-04-review-res-eng-derivation-of-diffusivity-equation-pt-1 %}

[part-two-post]: {% post_url 2016-02-16-review-res-eng-derivation-of-diffusivity-equation-pt-2 %}

[previous-post]: {% post_url 2016-02-04-review-res-eng-derivation-of-diffusivity-equation-pt-1 %}
