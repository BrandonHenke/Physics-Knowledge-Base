---
title: "Pictures of Quantum Mechanics"
---

There are two "pictures" of time dependant quantum mechanics.
Those are the Heisenberg picture and the Schrödinger picture.
These two pictures are discussed in detail, here.


## Schrödinger Picture
<div style="display:none">$\nextSection$</div>

Arguably, the more intuitive picture of quantum mechanics is the Schrödinger picture.
A quantum system will evolve over time, just as any classical system will.
If the system has a quantum state given by $\ket{\psi}$, then the state at some future time, $t$, is given by
\begin{equation}
	\ket{\psi(t)} = \hat{U}(t)\ket{\psi},
\end{equation}
where $\hat{U}$ is the time evolution operator.

In the Schrödinger picture, the approach considers the quantum states to be evolving in time.


## Heisenberg Picture
<div style="display:none">$\nextSection$</div>

In contrast to the Schrödinger picture, the objects that change over time are the operators themselves, rather than the quantum states.
At first this may seem somewhat odd, but with a change in perspective, it may be considered the more intuitive of the two pictures.

### Classical Rotations

Let's start with a classical setup.
Consider a classical body, which rotates in space with a given angular velocity $\Omega$.
If one wants to consider a small piece of this object, $\dd{V}$, the position of this piece at $t = 0$ is given by $r_0 \in \mathcal{G}_3$.
In order to track this piece over time, one can rotate the vector $r$:
\begin{equation}
	r(t) = R(t) r_0 R(t)^{-1},
\end{equation}
where $R = e^{-\Omega t/2}$ is a rotor.
This approach is no different than the approach in the Heisenberg picture.
