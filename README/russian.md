![logo](https://github.com/prohetamine/radio-launcher/blob/main/media/logo.png)

##### README доступен на языках: [Русский](https://github.com/prohetamine/radio-launcher/blob/main/README/russian.md) | [Английский](https://github.com/prohetamine/radio-launcher/blob/main/README.md)


# radio-launcher

> radio-launcher - radio-station клиент.

### Почему ?
Я решил что хочу быть радио-ведущим, но разбираться в существующем ПО у меня не было особого желания и я создал свое ПО, может быть когда-то оно станет стандартом, я пытался достичь лучшего результата.

### С чего начать

Клонируйте этот репозиторий и установите nodejs

```sh
$ git clone git@github.com:prohetamine/radio-launcher.git
$ cd radio-launcher
$ npm install -g yarn
$ yarn
```

### Примеры и описание

Чтобы запустить лаунчер, используйте команду

```sh
$ yarn start
```

Лаунчер прочно связан с [radio-station](https://github.com/prohetamine/radio-station) и не можете работать без нее, войдите в систему, используя данные, предоставленные [radio-station](https://github.com/prohetamine/radio-station)

![auth](https://github.com/prohetamine/radio-launcher/blob/main/media/0.png)

Данные для входа в систему могут быть изменены, читай документацию [radio-station](https://github.com/prohetamine/radio-station)

![auth](https://github.com/prohetamine/radio-launcher/blob/main/media/1.png)

Это главное и единственное меню, но пока треков нет эфир не начнется

![menu](https://github.com/prohetamine/radio-launcher/blob/main/media/2.png)

Мы находимся в эфире, перетаскивая треки из разделов "Треки" и "Закладки" в раздел "Эфир", можно формировать порядок очереди.

![menu](https://github.com/prohetamine/radio-launcher/blob/main/media/3.png)

Изменение внешнего вида и прочие настройки [YouTube](https://youtu.be/VpjbWQkOE6Y)

Запуск в режиме разработки, все методы API также можно найти в [radio-station](https://github.com/prohetamine/radio-station) документация

```sh
$ yarn dev
```

Сборка проекта необходимо только в том случае, если вы вышли из режима разработчика

```sh
$ yarn build
```

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamines)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.
