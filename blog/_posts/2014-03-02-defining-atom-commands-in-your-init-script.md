---
title: "Defining Atom Commands in Your Init Script"
layout: post
tags:
- atom
---

I'm thrilled that [Atom](https://atom.io/)—the newly-announced text editor from GitHub—is now out in the wild for more people to enjoy. It's been my editor of choice for the past seven months. Atom is a delight to use. And for the first time, I'm using an editor that I find enjoyable to *extend*. There's a ton to say about Atom, but for the moment, let's talk about a quick way to start experimenting with extending the default Atom experience.

The majority of your Atom customizations will come in the form of [packages](https://atom.io/packages). Packages provide an excellent means for defining commands and other customizations. [1] But sometimes I want to quickly define a new command without [creating a full-blown package](https://atom.io/docs/latest/creating-a-package). Cue [`~/atom/init.coffee`](https://atom.io/docs/v0.64.0/customizing-atom#initcoffee).

## Defining your first command

As a simple (and admittedly contrived) example, let's define a command that logs a message to the console. For starters, add the following code to your `~/atom/init.coffee` script:

{% highlight coffeescript %}
atom.workspaceView.command 'dot-atom:demo', ->
  console.log "Hello from dot-atom:demo"
{% endhighlight %}

Atom evaluates `init.coffee` each time you open a new window. To test out this new command, you can open a new window, or you can reload the current window via the "Window: Reload" command in the [Command Palette](https://atom.io/docs/v0.64.0/#the-command-palette).

Now, use the Command Palette to locate and execute the new command by name (i.e., "Dot Atom: Demo"), as shown in the gif below. Each time you run the command, you'll see the message logged to the console.

Defining and using a new command is just that simple.

If you'd like to trigger the command via a keyboard shortcut, you can define a keymap for the command in [`~/.atom/keymap.cson`](https://atom.io/docs/v0.64.0/customizing-atom#customizing-key-bindings).

[<img src="http://jasonrudolph.com/resources/201403-define-atom-commands-in-your-init-script.gif" alt="Demo of an Atom command in init.coffee" title="Demo of an Atom command in init.coffee"  width="100%" />](http://jasonrudolph.com/resources/201403-define-atom-commands-in-your-init-script.gif "Demo of an Atom command in init.coffee")

## Going further

Because `init.coffee` provides full access to Atom's API, it's fertile ground for implementing genuinely useful commands. For example, Lincoln Stoll uses his `init.coffee` to define a [command for generating ctags](https://github.com/lstoll/.atom/blob/706382de5266d78839328642a8d439236bab9128/init.coffee#L16-L32). In my `init.coffee`, I define a [command that provides alternative behavior for deleting to the end of the line](https://github.com/jasonrudolph/dotfiles/blob/6ef4b19b396838b536738a469e020641cc6dcef2/atom/init.coffee#L19-L24), and I'm experimenting with [a few other commands](https://github.com/jasonrudolph/dotfiles/blob/6ef4b19b396838b536738a469e020641cc6dcef2/atom/init.coffee#L26-L83) as well. [2]

Whether you need a sandbox for experimenting with new commands before publishing them in
a package, or you just want to define a few small commands without the overhead of an entire package, `init.coffee` is the place to go.

## Notes

[1] I've enjoyed writing a [handful](https://atom.io/packages/open-on-github) [of](https://atom.io/packages/sort-lines) [packages](https://atom.io/packages/toggle-quotes) over the past few months. Now that Atom is in public beta, the package ecosystem is quickly [heating up](https://atom.io/packages/list).

[2] As people begin to share their Atom [dotfiles on GitHub](http://dotfiles.github.io/), it's going to be a blast to discover novel customizations that allow developers to get even more from Atom.
