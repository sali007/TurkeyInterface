UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "1000011",
  "id": "300009",
  "logo": "438.gif",
  "receiptName": "",
  "sName": "Билайн</br> Таджикистан",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш номер",
                  "footer": "Внимание! Номер вводится в формате: 917xxxxxx, 919xxxxxx, 915xxxxxx. Пример: 918849705",
                  "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
                  "type": "keyboard"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};