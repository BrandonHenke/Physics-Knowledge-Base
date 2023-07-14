---
title: "Multivector Calculus"
---

## Stoke's Theorem
<div style="display:none">$\nextSection$</div>
Let $\mathcal{V}$ be a closed interval.

\begin{equation}
	\int_{\partial\mathcal{V}} f = \int_{\mathcal{V}} \dd{f}.
\end{equation}

In one dimension, let $\mathcal{V} = [a,b]$.
Then $\partial\mathcal{V} = \{a,b\}$, and

\begin{align*}
	\int_{\partial\mathcal{V}} f = f(b)-f(a),\\
	\therefore \int_{\mathcal{V}} f(x)\dd{x} = f(b)-f(a).
\end{align*}

Let $a = x$ and $b = x+Δx$.
Then

\begin{equation}
	\lim_{Δx \rightarrow 0} \frac{1}{Δx}\int_{\mathcal{V}} f(x)\dd{x} = \lim_{Δx \rightarrow 0} \frac{f(x+Δx)-f(x)}{Δx}.
\end{equation}

Thus, define

\begin{equation}
	\dv{f}{x} \equiv \lim_{Δx \rightarrow 0} \frac{1}{Δx}\int_{\mathcal{V}} f(x) \dd{x}.
\end{equation}

A bit more generally,

\begin{equation}
	\nabla f \equiv \lim_{|\mathcal{V}| \rightarrow 0} \frac{1}{|\mathcal{V}|} \int_{\partial\mathcal{V}} f.
\end{equation}