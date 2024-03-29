---
title: Vector and Tensor Operators
---

## Vector Operators
<div style="display:none">$\nextSection$</div>

Consider operators such as $\hat{\vec{x}}, \hat{\vec{p}}, \hat{\vec{L}}, \hat{\vec{S}},$ etc. which are vectors in 3-dim space.
Classically, under otations
\begin{equation}
	\vec{v} \rightarrow \vec{v}' = \text{R}(\vec{v}),
\end{equation}
where $\vec{v},\vec{v}' \in \mathcal{V}$, and $\text{R}:\mathcal{V}\rightarrow\mathcal{V}$ is a rotation.

In Quantum Mechanics, the operator $\hat{\vec{v}}$ doesn't transform under rotations, but the expectation value does:
\begin{equation}
	\left\langle \hat{\vec{v}}\right\rangle \rightarrow \left\langle \hat{\vec{v}}\right\rangle' = \text{R}\left(\left\langle \hat{\vec{v}}\right\rangle\right).
\end{equation}

All vector operators have the commutation relation
\begin{equation}
	\left[\hat{J}_k,\hat{v}_i\right]= i\hbar \epsilon_{kij} \hat{v}_j,
\end{equation}
where $\hat{\vec{J}}$ is the angular momentum operator.

Define spherical components of a vector operator:
\begin{align}
	\hat{v}_{\pm} &= \mp \frac{\hat{v}_1 \pm i\hat{v}_2}{\sqrt{2}},\\
	\hat{v}_0&= \hat{v}_3.
\end{align}
The commutation relations with $\hat{J}_3$ become
\begin{align}
	\left[\hat{J}_3,\hat{v}_\pm\right] &= \pm \hbar \hat{v}_\pm,\\
	\left[\hat{J}_3,\hat{v}_0\right] &= 0.
\end{align}

## Wigner-Ekheart Theorem
<div style="display:none">$\nextSection$</div>
