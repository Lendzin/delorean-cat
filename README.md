## Delorean cat-app coding-test

[Instructions found in this PDF](https://github.com/Lendzin/delorean-cat/blob/master/instructions-3-pages.pdf)

- Some cats in the image-folder provided are not saved as .jpg, however the catdata.json refers only to .jpg pictures.

- Instead of loading these files as .png which they are saved as, I decided to handle it as if it is an image unknown to me (as it would be through an API) and load a default image upon error.

## Hosted at: https://lendzin.se/delorean/
* this version does however use the nginx-server as source for the static resource "catdata.json".
