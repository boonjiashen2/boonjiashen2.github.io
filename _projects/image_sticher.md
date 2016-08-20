---
title: "CUDA-accelerated feature matching for image stitching"
pdf: https://s3.amazonaws.com/jiashen.me/CUDA-accelerated_feature_matching_for_image_stitching.pdf
date: "Dec 21, 2015"
github: https://github.com/boonjiashen/stitching_with_cuda
type: "CS759 High Performance Computing course project"
---
Image stitching is an algorithmic pipeline that takes as input an unordered set of images and combines a subset of the input into one continuous canvas. It has applications in a wide variety of fields, including mobile phones, agriculture, military surveillance and medical imaging. For large problem sizes, the compute time of the pipeline is dominated by a step known as “feature matching”. How to bring this time down is still an area of active research. In this paper, we speed up feature matching by implementing it on a CUDA-enabled GPU. We present performance results and discuss future plans.