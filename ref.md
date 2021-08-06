https://khalilstemmler.com/blogs/typescript/node-starter-project/
https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

knowledge:
prettier tslint tslint-config-prettier // for linting & formating like typescript, last one is for skip conflicts from prettier & tslint

questions:
babel => added for latest features using of es7 with browser support (max browser support es5)
“files”: [build/**/*”] => means whitelisting files, used because only build files will publish in npm package, 
                        others files will not, privacy issue
                        .can also use .npmignore for this like .gitignore
                        for better understanding: https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish
jest ts-jest @types/jest: ts jest also needed for ts support
types&main: in package.json, it tells typescript & code-editors where to find type definition for typescript & tells npm from where module will be exported

remember:
echo "node_modules" >> .gitignore
echo "tsconfig.json" >> .gitignore
echo "tslint.json" >> .gitignore
echo ".prettierrc" >> .gitignore