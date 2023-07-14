# Symmetries: Parity and Time-Reversal
###### Date: 09/01/2023

## Continuous Symmetries (Section 4.1)

  * **EX:** Hamiltonian is invariant under rotations:
    * $\left[\hat{H},\hat{\vec{J}}\right] = 0.$
    * Degeneracies: $E_{nl}$ for $-l \leq m \leq l$.
  * For the hydrogen atom there are extra degeneracies: $E_n$ for $l<n$ and $-l \leq m \leq l$.
    * "Runge-Lenz" vector:
$$
\begin{align*}
	\hat{\vec{M}} &= \frac{1}{2m_e} \left( \hat{\vec{p}}\times\hat{\vec{L}}-\hat{\vec{L}}\times\hat{\vec{p}} \right) - \frac{z q_e^2}{r}\hat{\vec{x}},\\
	&\left[\hat{H}, \hat{\vec{J}}\right] = 0,\\
	&\left[\hat{\vec{M}}, \hat{\vec{J}}\right] = 0.
\end{align*}
$$

## Discrete Symmetries (Section 4.2)
### Parity
$$
\text{Parity:}\qquad |\psi\rangle \rightarrow |\psi'\rangle = \hat{\Pi} |\psi\rangle,
$$
requiring
$$\begin{align*}
\langle\psi'|\hat{\vec{x}}|\psi'\rangle &= \langle\psi|\hat{\Pi}^\dagger \hat{\vec{x}} \hat{\Pi} |\psi\rangle,\\
&= -\langle\psi|\hat{\vec{x}}|\psi\rangle.\\
\therefore
\hat{\Pi}^\dagger \hat{\vec{x}} \hat{\Pi} &= -\hat{\vec{x}}.
\end{align*}$$

The parity operator is Hermitian and unitary ($\hat{\Pi}^\dagger\hat{\Pi} = 1$).
Hence
$$
\hat{\Pi}^\dagger \hat{\vec{x}} \hat{\Pi} = -\hat{\vec{x}} \rightarrow \{\hat{\Pi},\hat{\vec{x}}\} = 0.
$$

On the position eigenstates:
$$
	\hat{\Pi}|\vec{x}\rangle = |-\vec{x}\rangle.
$$

### Momenum Operator Under Parity
What is $\hat{\Pi}^\dagger \hat{\vec{p}} \hat{\Pi}$?

Expect $\hat{\Pi}^\dagger \hat{\vec{p}} \hat{\Pi} = -\hat{\vec{p}}$.
**Rigorous proof in lecture notes.**

### Angular Momentum Under Parity
Angular momentum is a pseudovector, so intuition states $\hat{\Pi}^\dagger \hat{\vec{L}} \hat{\Pi} = \hat{\vec{L}}$.
This intuition is correct.
**Rigorous proof in lecture notes.**

###### Date: 11/01/2023
### Wave Functions Under Parity
$$
\text{Parity:}\qquad |\psi\rangle \rightarrow |\psi\rangle_\Pi = \hat{\Pi} |\psi\rangle.
$$
Hence
$$
\psi(\vec{x}) \rightarrow \psi_\Pi(\vec{x}) = \psi(-\vec{x}).
$$
Only eigenvalues of $\pm 1$ are allowed, so the wave function is either even parity or odd parity:
$$
\psi(-\vec{x}) = \left\{
	\begin{array}{rl}
		\psi(\vec{x}), & \text{even parity}\\
		-\psi(\vec{x}), & \text{odd parity}
	\end{array}
\right.
$$

In spherical coordinates,
$$\begin{align*}
	r &\rightarrow r\\
	\phi &\rightarrow \phi+\pi\\
	\theta &\rightarrow \pi-\theta
\end{align*}$$
Thus, the radial part of the spherical wave function has no effect:
$$
	Y_{lm}(\phi+\pi,\pi-\theta) = (-1)^l Y_{lm}(\phi,\theta).
$$
Hence if $l$ is even, the wave functions are even parity.
If $l$ is odd, the wave functions are odd parity.

**Theorem**  
Let $\hat{H}|\psi_n\rangle = E_n|\psi_n\rangle$.
If $[\hat{H},\hat{\Pi}] = 0$ and $E_n$ is non-degenerate, then $|\psi_n\rangle$ is a parity eigenstate.  
**Proof**  
Proof is in the lecture notes.

Note, energy eigenstates of the Hamiltonian can still be parity eigenstates, even if te energy levels are degenerate.
The issue is when one takes a linear combination of two states with the same energy but different parities.
The linear combination is still an energy eigenstate, but it's nolonger a parity eigenstate:
$$\begin{align*}
|\psi\rangle &= c_1|nl_1m_1\rangle + c_2|nl_2m_2\rangle\\
\hat{H}|\psi\rangle&= n(c_1|nl_1m_1\rangle + c_2|nl_2m_2\rangle)\\
\hat{\Pi}|\psi\rangle &= c_1(-1)^{l_1}|nl_1m_1\rangle + c_2(-1)^{l_2}|nl_2m_2\rangle
\end{align*}$$

### Parity Selction Rules
### Parity Violation in Weak Interactions
* Nuclear Strong interactions and EM interactions are invariant under parity symmetry.
* Until the 1950's, it was assumed that fundamental interactions must be invariant under parity symmetry.
* In 1956, Yang and Lee suggested that weak interactions might violate parity.

## Time Reversal (Section 4.4)

Time reversal corresponds to the transformation $t \rightarrow -t$:
$$
	|\tilde{\psi}(t)\rangle = \hat{\Theta}|\psi(-t)\rangle
$$
The time reversal operator is anti-unitary:
$$\begin{align}
	|\tilde{\alpha}\rangle &= \hat{\Theta}|\alpha\rangle,\nonumber\\
	|\tilde{\beta}\rangle &= \hat{\Theta}|\beta\rangle,\nonumber\\
	\left\langle \tilde{\beta}\mid \tilde{\alpha}\right\rangle &= \left\langle {\beta}\mid {\alpha}\right\rangle^* = \left\langle {\alpha}\mid {\beta}\right\rangle,\\
	\hat{\Theta} \left(c_1|\alpha\rangle + c_2|\beta\rangle\right) &= c_1^*\hat{\Theta}|\alpha\rangle + c_2^* \hat{\Theta}|\beta\rangle.
\end{align}$$

This is the same effect that a unitary operator has when operating with the complex conjugation operator, $K$.
Since the complex conjugation operator doesn't commute with scalars, neither does an anti-unitary operator