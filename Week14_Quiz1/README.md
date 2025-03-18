## Week 14 Quiz - Debugging, Git, & GitHub

You have just joined your favorite company and have been tasked with printing new data to a webpage. However, the existing files/directories are all jumbled up, and the code seems to have errors. Fix the bugs and sile structure. 

1. Debug the broken code so that it's working
2. Correct the file architecture using command line
3. node_modules are committed, remove them from repo on GitHub
4. Correct the server file’s directory by moving it to the appropriate directory
5. Update README with
    - screenshot of the app's webpage, 
    - document errors you encountered and how you fixed them, 
    - detail the git commands you used to remove the node_modules, and
        - I do not see that in our `client/.gitignore` it has `node_modules` in it. So we can go directly into the .gitnore file and add node_modules to it or we can go into our command line and use the following: 
        ```
        echo "node_modules/" >> .gitignore
        ```
        This will add node_modules to .gitignore so we ignore this and not commit it, we should be able to use this to let Git know to no longer pay attention to node_modules.

                
        - In this case we are cloning thsi project, so node_modules was not committed. But if it was committed, we could run this following line in our command line on top of doing the previous step.
        `git rm -r --cached node_modules` 

        then you want to add, commit, push `.gitignore`. After that you should no longer be committing node_modules.

    - detail the git commands you used to correct the file structure