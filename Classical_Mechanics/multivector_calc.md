# Multivector Calculus

**Stoke's Theorem**  
Let $\mathcal{V}$ be a closed interval.
$$
	\int_{\partial\mathcal{V}} f = \int_{\mathcal{V}} df.
$$
In one dimension, let $\mathcal{V} = [a,b]$.
Then $\partial\mathcal{V} = \{a,b\}$,
and
$$\begin{align*}
	\int_{\partial\mathcal{V}} f = f(b)-f(a),\\
	\therefore \int_{\mathcal{V}} f(x)dx = f(b)-f(a).
\end{align*}$$
Let $a = x$ and $b = x+Δx$.
Then
$$
\lim_{Δx \rightarrow 0} \frac{1}{Δx}\int_{\mathcal{V}} f(x)dx = \lim_{Δx \rightarrow 0} \frac{f(x+Δx)-f(x)}{Δx}.
$$
Thus, define
$$
\frac{df}{dx} \equiv \lim_{Δx \rightarrow 0} \frac{1}{Δx}\int_{\mathcal{V}} f(x)dx.
$$
A bit more generally,
$$
	\nabla f \equiv \lim_{|\mathcal{V}| \rightarrow 0} \frac{1}{|\mathcal{V}|} \int_{\partial\mathcal{V}} f.
$$

