---
title: "Lower PAC bound on Upper Confidence Bound-based Q-learning with examples"
pdf: lower_PAC_bound_on_UCB-based_Q-learning_with_examples.pdf
date: "May 13, 2016"
authors:
  - Jia-Shen Boon
  - Xiaomin Zhang
type: "CS761 Advanced Machine Learning course project"
---
Recently, there has been significant progress in understanding reinforcement learning in Markov decision processes (MDP). We focus on improving Q-learning and analyze its sample complexity. We investigate the performance of tabular Q-learning, Approximate Q-learning and UCB-based Q-learning. We also derive a lower PAC bound \\( \Omega(\frac{\vert\mathcal{S}\vert^2\vert\mathcal{A}\vert}{\epsilon^2}\ln \frac{\vert\mathcal{A}\vert}{\delta}) \\) of UCB-based Q-learning. Two tasks, CartPole and Pac-Man, are each solved using these three methods. Some results and discussion are presented at last. UCB-based learning does better in exploration but lose its advantage in exploitation, compared to its alternatives.