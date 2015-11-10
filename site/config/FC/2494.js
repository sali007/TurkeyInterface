UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100001",
  "id": "2494",
  "logo": "2494.gif",
  "receiptName": "",
  "sName": "Ukash",
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
                  "header": "Для отправки СМС с кодом ваучера введите номер сотового телефона.",
                  "footer": "Внимание! Отправка СМС возможна только на номера операторов стандарта GSM.",
                  "mask": "<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
                  "strip": "False",
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