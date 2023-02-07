# weatherYandexAPI
Погодный виджет<br>
<br>
Используемый стэк: HTML, CSS(Scss), JS.<br>
<br>
<br>
Описание:<br>
V1:<br>
Приложение представляет собой погодный веб виджет, определяющий местоположение пользователя и отображает текущую погоду в его населенном пункте и прогноз погоды на 7 дней. Информация о погоде получается из Яндекс.Погода API (https://yandex.ru/dev/weather/)<br>
Реализована функция поиска по населенным пунктам. После ввода в строку поиска названия населенного пункта, пользователю будут отображены актуальные данные погоды. Для получения гео данных о населенном пункте используется Nominatim API (https://nominatim.org/release-docs/develop/api/Overview/)<br>
Фон, иконки - анимированы и изменяются в зависимости от получаемых погодных условий Яндекс.Погоды<br>

V2:<br>
Изменения: <br> 
Приложение переписано на другое API из-за политики Яндекса ( Нельзя выкладывать на сервера без покупки лицензии ) <br>
Для получения информации о погоде используется Open-Meteo (https://open-meteo.com/) <br>
Добавлен вывод списка населенного пункта при поиске<br>
Добавлены все погодные отображения фона <br> 
Добавлен прелоадер, на случай долгого отклика сервера.<br>
<br>
Прелоадер <br>
![telegram-cloud-photo-size-2-5238210155529750323-y](https://user-images.githubusercontent.com/48648751/206934570-afbfa0bb-50b8-4be3-844a-1ef2b2f7bd43.jpg)
<br><br>
Страница после загрузки (Местоположение определяется при включенной геопозиции в браузере)<br><br>
![image](https://user-images.githubusercontent.com/48648751/206934657-ef1b790a-3e57-4549-852a-aa4b9c32cc63.png)
<br><br>
Результат работы поиска<br><br>
![image](https://user-images.githubusercontent.com/48648751/206934714-9f225b80-c0ab-46f0-853e-6678440a902e.png)<br>
![image](https://user-images.githubusercontent.com/48648751/206934727-03c1c009-4cb8-4aad-9010-2be628c0fc3a.png)

