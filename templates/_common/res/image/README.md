# Note

Support image file name end with '@2x', '@3x' to defined the image's scale. Default image scale is 1.

Support nine patch image with scale, file name end with '@2x.9.png', '@3x.9.png'

Use in js code: R.image.xxx

All images in this dir will base64 into R/gen/image.ts file, and pack into js file when build. 

Don't put large images here, don't forget to compress the image.
