$ npx create-nuxt-app nuxt2
> Generating Nuxt.js project in /home/sky0621/work/src/vue/github.com/sky0621/study-ts-vue-nuxt/nuxt2
? Project name nuxt2
? Project description My funkadelic Nuxt.js project
? Use a custom server framework none
? Choose features to install Linter / Formatter, Prettier, Axios
? Use a custom UI framework vuetify
? Use a custom test framework jest
? Choose rendering mode Universal
? Author name sky0621
? Choose a package manager yarn
Initialized empty Git repository in /home/sky0621/work/src/vue/github.com/sky0621/study-ts-vue-nuxt/nuxt2/.git/
yarn install v1.19.1
info No lockfile found.
[1/4] Resolving packages...
warning nuxt > @nuxt/webpack > postcss-preset-env > postcss-color-functional-notation > postcss-values-parser > flatten@1.0.2: I wrote this module a very long time ago; you should use something else.
warning jest > jest-cli > prompts > kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
warning jest > jest-cli > jest-environment-jsdom > jsdom > left-pad@1.3.0: use String.prototype.padStart()
[2/4] Fetching packages...
info fsevents@2.1.1: The platform "linux" is incompatible with this module.
info "fsevents@2.1.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.9: The platform "linux" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > vuetify@1.5.18" has unmet peer dependency "vue@^2.5.18".
warning " > vuetify-loader@1.3.0" has unmet peer dependency "vue-template-compiler@^2.5.0".
warning " > vuetify-loader@1.3.0" has unmet peer dependency "webpack@^4.0.0".
warning " > eslint-config-standard@14.1.0" has incorrect peer dependency "eslint@>=6.2.2".
warning " > eslint-loader@2.2.1" has unmet peer dependency "webpack@>=2.0.0 <5.0.0".
warning " > @vue/test-utils@1.0.0-beta.29" has unmet peer dependency "vue@2.x".
warning " > @vue/test-utils@1.0.0-beta.29" has unmet peer dependency "vue-template-compiler@^2.x".
warning " > babel-core@7.0.0-bridge.0" has unmet peer dependency "@babel/core@^7.0.0-0".
warning " > vue-jest@3.0.5" has unmet peer dependency "vue@^2.x".
warning " > vue-jest@3.0.5" has unmet peer dependency "vue-template-compiler@^2.x".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 32.06s.
yarn run v1.19.1
warning From Yarn 1.0 onwards, scripts don't require "--" for options to be forwarded. In a future version, any explicit "--" will be forwarded as-is to the scripts.
$ eslint --ext .js,.vue --ignore-path .gitignore . --fix
Done in 2.44s.

        To get started:

        cd nuxt2
         yarn run dev

  To build & start for production:

        cd nuxt2
         yarn run build
         yarn start

  To test:

        cd nuxt2
         yarn run test

