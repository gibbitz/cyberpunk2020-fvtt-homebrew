# Cyberpunk 2020 Homebrew (System for FoundryVTT)

## WIP
> Right now this document is more of a target state than a current one.

A Homebrew adapted system for FoundryVTT of R. Talsorian Games' classic [Cyberpunk 2020](https://talsorianstore.com/products/cyberpunk-2020) TTRPG.

## Cyberpunk 2020
Cyberpunk 2020 is a table top roleplaying game system developed by [R Talisorian Games](https://rtalsoriangames.com/cyberpunk) and released in 1990 that evolved from the Cyberpunk RPG released in 1988 based on the sci-fi genre popularized by authors like William Gibson, Bruce Sterling and Walter Jon Williams and films like _Blade Runner_ and _The Terminator_. Cyberpunk 2020 featured improved combat rules and updated and expanded equipment and skills. The rule system focuses on Comparisons of randomized character based values (_rolls_) against  difficulty levels or other character's rolls in order to determine the acomplishments of players. Compared to other systems this combination of attributes, skill and chance combined with the adversarial direction of combat aligned with my worldview better than percentage based rule systems (_Top Secret SI_) or D20 systems (_Dungeons & Dragons_, Palladiums games) and made the game popular in this space.

## Sipping the Homebrew...
Having started playing Cyberpunk(2013) in 1989, my players and I felt like this game hit a homerun with it's opposed rolls and simple dice on top of its well developed setting. We continued to play under  2020 rules with some rules appended from 2013 in the 90s and eventually moved away from gaming. The release of Cyberpunk2077 drew us back to the game and with the release of Cyberpunk Red we adapted our rules and went back to this mostly 2020 ruleset. 

In general I'm a bit of a simulationist when it comes to rules. I like the rules to work more like physics than a board game and I feel that Cyberpunk Red goes a little too far toward a board game. I understand that this is the direction that TTRPGs have gone in the past 30 years. I see a lot of new players who picked up this game in 2019/2020 complaining about crunch in the the game system. As a defender of the system, I feel obligated to make it easier to play without overly gamifying it. Having a VTT do all the calculations for you is the perfect way to do this.

More notes on non-RAW rules can be found [here](HOMEBREW.md) and will be updated as they are included in the system. 
## Getting Started

### Downloading
If you have no interest in developing on this platform, the system itself can be found in this repository at `bin/cyberpunk2020-homebrew`. Bundles are available for download on [the releases page](https://github.com/gibbitz/cyberpunk2020-fvtt-homebrew/releases).

### Installing
See releases to download the system folder zip. Alternatively, if you are a self starter/developer you can build the application following the directions below

> A note about the commands in this guide: All the example scripts here are for *nix platforms (Linux/macOS). Using [Windows Subsystem For Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) or a bash emulator, these commands can work on Windows as well. Mileage may vary. 

### Development
This project builds source files from `/src` into the `bin/cyberpunk2020-homebrew` folder using nodejs. This directory is gitignored here to disuade uptakers from editing these files because running `npm run build` *will delete them*

if you are not using nodejs on your system, I recomend using [NVM](https://github.com/nvm-sh/nvm) to install it. This project was developed using node v18. Follow the instructions to use NVM to install it.

Once node is installed you will want to navigate to the project root folder and install dependencies for the build system with:
```bash
npm i
```
#### Watching files
Once these are installed you can run the project locally in watch mode where node will look for changes in your HTML, SCSS and JS and bundle them into the `bin/cyberpunk2020-homebrew` folder.

To see immediate results in your local development, I would recommend symbolic linking this folder in your Foundry vtt `/Data/systems/` folder as `cyberpunk2020-homebrew`. Without this step you will need to manually copy the system folder into your Foundry installation every time you build (a total hassle).
```bash
ln -s bin/cyberpunk2020-homebrew [PATH_TO_FOUNDRY]/Data/systems/cyberpunk2020-homebrew
```
where `[PATH_TO_FOUNDRY]` is the local path to your foundry installation.

Once this is set up you should be able to run
```bash
npm run watch
```
and you should see the changes you make in your vtt. This may require refresh, but I'll look into a hot-reload option if not.

#### How to Build
To bundle the system for release (or just to build it without watch) run:
```bash
npm run build
```


## Contributing
Please feel free to fork this repository or [the excellent source for this repository](https://github.com/OctarineSourcerer/cyberpunk2020). 
PRs are welcome, but be aware that this repository is a reflection of my personal homebrewing that involves a combination of cherry picked rules from Cyberpunk 2013, 2020 2e and Red. PRs may not be accepted if they interfere with my approach, but you are free to raise them if you think they will help or fix a fundamental problem. 
Issues are always welcome. I often will accept warts in my own software that could confuse or irritate others -- full disclosure: I'm not the best QA.

## Credit and Attribution
All rights to Cyberpunk 2013/2020/Red lie with R. Talsorian games. Under their [homebrew content policy](https://rtalsoriangames.com/homebrew-content-policy/), any compendium produced with this will likely only be the statistical summaries of items, equivalent to the rows in the weapon table, without R. Talsorian's descriptive text.

Additional content included via [datafortress2020](http://datafortress2020.com/) maintained by Deric Bernier.

This repository was started with a fork from [OctarineSourcerer's cyberpunk2020 repository](https://github.com/OctarineSourcerer/cyberpunk2020). As ths is the first Foundry module the legwork done upstream was indespensable.
