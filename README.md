# Learning Deno

<img src="https://deno.land/logo.svg" alt="Deno logo" width="450"/>

- [x] What is it?

  According to the website: _A secure runtime for JavaScript and TypeScript_.

  > Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
  >  - Secure by default. No file, network, or environment access, unless explicitly enabled.
  >  - Supports TypeScript out of the box.
  >  - Ships only a single executable file.
  >  - Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
  >  - Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std
  >  - Scripts can be bundled into a single javascript file.
  >  - It doesn't have a package management.
  >  - Remote code is fetched and cached on first execution, and never updated until the code is run with the --reload flag. (So, this will still work on an airplane.)
  >  - Modules/files loaded from remote URLs are intended to be immutable and cacheable.
  >  - Created by the same author of Node.js (Ryan Dahl).

So if you're familiar with Node.js, Deno is very similar. Some will say it's the new Node.js.

- [x] Installation

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
$ deno completions bash > ~/.deno/deno.bash
```

Remember to edit your $HOME/.bashrc to add the Deno installation directory as the install script will say at the end. 

Also, load the deno.bash with:
```bash
$ vim ~/.bashrc
(or similar file)

[...]
# Configuring deno installation dir
export DENO_INSTALL="/home/your-username/.deno"
export PATH="$PATH:$DENO_INSTALL/bin"
# Loading deno bash completion
if [ -f $DENO_INSTALL/deno.bash ]
then
  . $DENO_INSTALL/deno.bash
fi
[...]
``` 

Reload with `source ~/.bashrc` or close and open a new terminal window.

- [x] Hello Deno!

Download this repo and run in a terminal:

```bash
$ deno run hello-deno/main.ts
```

- [x] Google search

Download this repo and run in a terminal:

```bash
$ deno run --allow-net google-search/main.ts deno
```

- [x] Arnold Schwarzenegger Quotes

Download this repo and run in a terminal:

```bash
$ deno run --unstable --allow-read quotes/main.ts
```

- [x] Simple chat application

Download this repo and run in a terminal:

```bash
$ cd chat
$ deno run --unstable --allow-net --allow-env --allow-read main.ts
```
Open more than one private/incognito window to test it.

- [ ] Using a file watcher
  - have a look at denon

- [ ] Create a sample web application
  - [ ] Pokemon API
    - [ ] Setup
    - [ ] CREATE a pokemon
    - [ ] GET a pokemon
    - [ ] LIST pokemons
    - [ ] UPDATE a pokemon
    - [ ] DELETE a pokemon