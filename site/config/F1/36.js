UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "36",
  "logo": "36.gif",
  "receiptName": "",
  "sName": "Сотовая связь МОТИВ",
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
                  "header": "Введите Ваш номер телефона или счета",
                  "footer": "Номер содержит от 7 до 10 цифр.</br> Например: (901)1231212",
                  "mask": "<!^\\d+${7,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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
}