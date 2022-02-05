![logo](https://github.com/prohetamine/radio-launcher/blob/main/media/logo.png)

##### README is available in the following languages: [Russian](https://github.com/prohetamine/radio-launcher/blob/main/README/russian.md) | [English](https://github.com/prohetamine/radio-launcher/blob/main/README.md)


# radio-launcher

> radio-launcher - radio-station client.

### Why ?
I decided that I wanted to be a radio host, but I had no particular desire to understand the existing software and I created my own software, maybe someday it will become a standard, I tried to achieve a better result.

### Get started

Clone the github repository and install nodejs.

```sh
$ git clone git@github.com:prohetamine/radio-launcher.git
$ cd radio-launcher
$ npm install -g yarn
$ yarn
```

### Examples and description

To launch the launcher, use the command.

```sh
$ yarn start
```

The launcher is firmly connected with [radio-station](https://github.com/prohetamine/radio-station) and cannot work without it, log in using the data provided by the [radio-station](https://github.com/prohetamine/radio-station).

![auth](https://github.com/prohetamine/radio-launcher/blob/main/media/0.png)

The login details can be changed, read the [radio-station](https://github.com/prohetamine/radio-station) documentation.

![auth](https://github.com/prohetamine/radio-launcher/blob/main/media/1.png)

This is the main and only menu, but so far there are no tracks and the broadcast will not begin.

![menu](https://github.com/prohetamine/radio-launcher/blob/main/media/2.png)

We are on the air, dragging tracks from the "Tracks" and "Favorites" sections to the air forming a queue order.

![menu](https://github.com/prohetamine/radio-launcher/blob/main/media/3.png)

You can change the appearance [YouTube](https://youtu.be/VpjbWQkOE6Y).

Run in development mode, all API methods can also be found in [radio-station](https://github.com/prohetamine/radio-station) documentation.

```sh
$ yarn dev
```

Building a project is only necessary if you have exited developer mode.

```sh
$ yarn build
```

### Contacts

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamines)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.
