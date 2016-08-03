# My blog

## Getting started with local development

1. Run the following in your terminal

  ```
  >> git clone <repo-url>
  >> cd <repo-directory>
  >> bundle install # install gem dependencies
  >> bundle exec guard # builds your static pages and runs a server on localhost
  ```
  
2. Install a [livereload extension](http://livereload.com/extensions/) on a browser of your choice. This extension refreshes a page on your browser whenever the page is modified.
3. Go to `localhost:4000` on your browser. You should see the main page.
4. (Optional) Now if you edit and save say, one of the posts, Guard should automatically rebuild the corresponding page and reload the corresponding tab on the browser. Make sure the extension is both enabled and turned on (these two are different things).
