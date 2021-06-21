---
layout: post
title: Use Sublime Text as Git editor
---

I recently bought a new MacBook. One of first things you'll want to do when setting up a new machine is configuring git to your liking. While I used to be a [heavy vim user](https://github.com/boonjiashen/.vim), a year or so ago I switched to Sublime Text (ST) for writing messages. I thought I'd document the steps for this configuration as I take them myself.

I tested the instructions below on MacOS 11.4, Big Sur.

# Configuration steps

1. **Install ST**, following the [ST documentation](https://www.sublimetext.com/download). In my case, it was downloading a zip file, unzipping the file and dragging the ST application into my Applications folder.
1. **Verify that you can launch ST** by double-clicking the ST icon in the Applications folder. ST should open in the new window. Close this window.
1. **Configure ST to be accessible from the terminal**, following [ST documentation](https://www.sublimetext.com/docs/command_line.html). In my case, it was running:
    ```bash
    echo 'export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"' >> ~/.zprofile
    ```
1. **Verify that you can launch ST from the terminal**. Open a new terminal and run `subl --new-window`. ST should open in a new window.
1. **Set ST as your git editor**, running
   ```bash
   git config --global core.editor "subl -n -w"
   ```

# Testing configuration

1. Open a new terminal.
1. Run the following:
   ```bash
   git init repo-1
   cd repo-1
   touch file-1
   git add file-1
   git commit
   ```
1. After the last command above, verify that ST launches in a new window.
1. Complete the commit, by writing "Add file-1", saving (⌘+S), and closing the window (⌘+W).
1. Verify that ST closes, and the terminal shows something like:
   ```bash
   [master (root-commit) 2ca0638] Add file-1
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 file-1
   ```
