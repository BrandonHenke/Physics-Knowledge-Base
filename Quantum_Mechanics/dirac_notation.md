# Dirac Notation

The state of a quantum system is an element of a vector space, ${\mathcal{V}}$, and is denoted with a what is called a "ket" vector, $\left|\psi\right\rangle$.
A vector in the [dual space](../Math_Concepts/dual_space.md), $\mathcal{V}^*$, is a called a "bra", $\left\langle\psi\right|$.
The inner product of a "ket" with a "bra" is a "bracket", $\left\langle\phi \mid \psi\right\rangle$.

**Discrete Example:**  
The spin state of an electron is a two state system, meaning, when a measurement of the electron's angular momentum is taken, it can only be one of two values.
The state can then be written as
$$
\left|\psi\right\rangle = \alpha \left|+\right\rangle + \beta\left|-\right\rangle,
$$
in the $\hat{z}$ basis.

**Continuous Example:**  
The position of a particle is an infinite dimensional [Hilbert Space](../Math_Concepts/hilbert_space.md):
$$
\left|\psi\right\rangle = \int dx \left|x\right\rangle\left\langle x \mid \psi \right\rangle.
$$
The coefficients $\left\langle x \mid \psi \right\rangle$ are what are known as the [wave function](wave_function.md).