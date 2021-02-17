# My blog

## Getting started with local development

1. Run the following in your terminal

  ```
  >> git clone <repo-url>
  >> cd <repo-directory>
  >> # https://github.com/bundler/bundler/issues/4065 "cp Operation not permited"
  >> sudo gem install bundler -n /usr/local/bin # install gem dependencies
  >> bundle install
  >> bundle exec guard # builds your static pages and runs a server on localhost
  ```
  
2. Install a [livereload extension](http://livereload.com/extensions/) on a browser of your choice. This extension refreshes a page on your browser whenever the page is modified.
3. Go to `localhost:4000` on your browser. You should see the main page.
4. (Optional) Now if you edit and save say, one of the posts, Guard should automatically rebuild the corresponding page and reload the corresponding tab on the browser. Make sure the extension is both enabled and turned on (these two are different things).

## On deployment

Turns out that after you push to Github Pages, the changes will not be reflected on your browser instantly. I guess Github takes some time to build the files. After you push, give it 15 minutes or so for the changes to be seen.

## On Ubuntu

You'll probably want to install some additional package to get the bundle install to work

 ```
 sudo apt-get install -y ruby-bundler ruby-dev ruby make gcc build-essential patch ruby-dev zlib1g-dev liblzma-dev
 ```

## Domain configuration

* To configure `example.com` to redirect to `blog.example.com`, follow [this AWS support post](https://aws.amazon.com/premiumsupport/knowledge-center/redirect-domain-route-53/). Basically you create an S3 bucket of the same name as your bucket, and check "Redirect requests for an object", redirecting to `blog.example.com`.
* To configure `blog.example.com` as an alias to the Github Pages site, follow [this GitHub post](https://docs.github.com/en/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain). Basically create a CNAME record that points to the Github Pages URL, and enable HTTPS.
