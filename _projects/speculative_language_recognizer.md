---
title: "Distributed Representation of Sentences for Speculative Language Recognition in Biomedical Articles"
pdf: https://s3.amazonaws.com/jiashen.me/Distributed_Representation_of_Sentences_for_Speculative_Language_Recognition_in_Biomedical_Articles.pdf
date: "Dec 18, 2014"
authors:
  - Jia-Shen Boon
  - Rasiga Gowrisankar
  - Akshay Sood
github: https://github.com/boonjiashen/speculative-language-recognizer
---
We explore the automatic identification of speculative language in biomedical articles using distributed representation of sentences and deep learning methods. Such an identification has potential applications in information retrieval, multi-document summarization and knowledge discovery. We explore two methods that learn distributed representations of sentences, Paragraph Vector model and Recursive Neural Tensor Network, and compare them against three baseline algorithms, Support Vector Machines, Naive Bayes and pattern matching. We show that the RNTN (\\(F1 = 0.885\\)) marginally outperforms the best baseline algorithm, linear bigram SVM (\\(F1 = 0.881\\)), while the paragraph vector approach performs poorly (\\(F1 = 0.368\\)) even after training with a large unlabeled dataset. We discuss reasons for these differences in performance and give suggestions for future work.