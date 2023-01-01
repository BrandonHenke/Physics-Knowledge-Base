# Classical Field Theory

Without a field theory, objects react to events instantaniously, which is not the case.

Field theories have locality built into them, so events only affect the areas in the immediate vacinity, and this affect propogates outword through the field.
For some field, $\phi$, the action is given by the volume integral over a spacetime region:
$$
	A = \int_\mathcal{V} \mathcal L \left(\phi,\nabla \phi, x, t\right) d^4x,
$$
where $\mathcal L$ is the Lagrangian density.
Since this replaces the role of the Lagrangian as the item of great import, it tends to be referred to simply as the Lagrangian.

The [Principle of Stationary Action](action.md#principle-of-stationary-action) is still important, here.
For $n$ fields, using the principle of stationary action, one arrives at the Euler-Lagrange equations:
$$
	\frac{\partial\mathcal L}{\partial \phi_k} - \partial^\mu\frac{\partial\mathcal L}{\partial (\partial_\mu \phi_k)} = 0, \quad \text{for}\; k\in\{0,1,2,\dots,n\}
$$


## See Also
1. [Lagrangian Mechanics](lagrangian_mechanics.md)