---
title: Classical Field Theory
---


## Introduction
<div style="display:none">$\nextSection$</div>

Without a field theory, objects react to events instantaniously, which is not what we observe at large scales.
That is, the universe, as seen on a large scale, is local.
Field theories have locality built into them, so events only affect the areas in the immediate vacinity, and this affect propogates outword through the field.


## Lagrangian Mechanics
<div style="display:none">$\nextSection$</div>


In Lagrangian Mechanics, there is a quantity called action ($S$), which, under the calculus of variations, is stationary.
That is
\begin{align}
	S = \int_\Gamma L(t,x,) \dd{x},
\end{align}
where $L$ is the Lagrangian.


## Fields
<div style="display:none">$\nextSection$</div>


For some field, $\phi$, the action is given by the volume integral over a spacetime region:
\begin{equation}
	A = \int_{\mathcal{V}} \mathcal L \left(\phi,\nabla \phi, x, t\right) d^4x,
\end{equation}
where $\mathcal L$ is the Lagrangian density.
Since this replaces the role of the Lagrangian as the item of great import, it tends to be referred to simply as the Lagrangian.

The [Principle of Stationary Action](action.html#principle-of-stationary-action)[](action.md#principle-of-stationary-action) is still important, here.
For $n$ fields, using the principle of stationary action, one arrives at the Euler-Lagrange equations:
\begin{equation}
	\pdv{\mathcal L}{\phi_k} - \partial^\mu \pdv{\mathcal L}{\phi_k}\frac{\partial\mathcal L}{\partial (\partial_\mu \phi_k)} = 0, \quad \text{for}\; k\in\{0,1,2,\dots,n\}
\end{equation}